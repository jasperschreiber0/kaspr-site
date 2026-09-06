import { createClient } from '@supabase/supabase-js';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function record(form: FormData) {
  'use server';
  // Next server actions enforce same-origin requests; dashboard middleware
  // requires the operator password for both GET and POST.
  const action = String(form.get('action') || '');
  const client = String(form.get('client') || '');
  const opportunity = String(form.get('opportunity') || '');
  const booking = String(form.get('booking') || '').trim();
  const rawValue = String(form.get('value') || '').trim();
  const value = Number(rawValue);
  if (!['appointment_booked', 'appointment_completed', 'revenue_attributed'].includes(action)
      || !client || !opportunity || !booking || !rawValue || !Number.isFinite(value) || value < 0) {
    throw new Error('Complete every field with a valid appointment reference and amount.');
  }
  const db = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  const { error } = await db.rpc('kaspr_booking_transition', {
    p_opportunity: opportunity, p_client: client, p_action: action, p_booking: booking, p_value: value,
  });
  if (error) throw new Error('Update rejected. Check the client, booking reference and current appointment status.');
  revalidatePath('/dashboard');
  revalidatePath('/dashboard/booking');
}

export default async function BookingPage() {
  const db = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  const { data, error } = await db.from('revenue_opportunities')
    .select('id,client_id,status,booking_id,estimated_value,completed_value,recovered_value')
    .in('status', ['contacted','responded','booked','completed'])
    .order('detected_at', {ascending:false}).limit(50);
  return <main className="min-h-screen bg-cream p-8">
    <div className="max-w-3xl mx-auto">
      <Link href="/dashboard">← Dashboard</Link>
      <h1 className="font-serif text-3xl mt-6 mb-4">Confirm appointments</h1>
      <p className="mb-6">Record appointments confirmed in the salon’s booking system. Mark completion only after attendance and the final value are verified. These controls do not create appointments or send messages.</p>
      {error ? <p role="alert">Appointment records unavailable. Check the database connection and migrations.</p>
        : !data?.length ? <p>No appointments awaiting confirmation.</p>
        : data.map(o => <section key={o.id} className="bg-white border rounded p-5 mb-4">
          <p className="font-semibold">{o.status} · {o.id}</p>
          <p className="text-sm mb-3">Client: {o.client_id}</p>
          {o.recovered_value !== null ? <p>Attributed: AUD {o.recovered_value}</p>
            : <form action={record} className="grid gap-3">
              <input type="hidden" name="client" value={o.client_id || ''}/>
              <input type="hidden" name="opportunity" value={o.id}/>
              <input type="hidden" name="action" value={o.status === 'completed' ? 'revenue_attributed' : o.status === 'booked' ? 'appointment_completed' : 'appointment_booked'}/>
              <label>Booking reference<input className="block border p-2 w-full" name="booking" required defaultValue={o.booking_id || ''} readOnly={['booked','completed'].includes(o.status)}/></label>
              <label>Verified value (AUD)<input className="block border p-2 w-full" name="value" type="number" step="0.01" min="0" required defaultValue={o.completed_value ?? o.estimated_value ?? ''}/></label>
              <button className="bg-espresso text-white rounded p-3" type="submit">{o.status === 'completed' ? 'Attribute completed revenue' : o.status === 'booked' ? 'Confirm attendance and final value' : 'Confirm external booking'}</button>
            </form>}
        </section>)}
    </div>
  </main>;
}
