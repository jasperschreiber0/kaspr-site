# Kaspr Growth Pack — Client Onboarding Guide
### ReActivate + ReviewRunner | Setup to Live in 30 Minutes

---

## Before You Start

You'll need 5 minutes with your client before their agents go live. This guide is written for you (Jasper) to run the onboarding call and fill in the details as you go.

Have this doc open. Work top to bottom.

---

## Step 1 — Client Details (5 min)

Collect and record the following:

| Field | Client Answer |
|---|---|
| Business name | |
| Owner first name | |
| Owner mobile (for Discord alerts) | |
| Owner email | |
| Google Business Profile review link | |
| Facebook Business page link (optional) | |
| Message tone | Casual / Professional |
| Any current opt-out list? | Yes / No — if yes, get the list |

**How to get the Google review link:**
Go to Google Maps → search the business → click Share → Copy Link. Shorten it at kaspr.com.au/r/[slug] before putting it in the agent config.

---

## Step 2 — Customer List for ReActivate (5 min)

Ask the client to export their customer list. Acceptable formats: CSV, Excel, Google Sheets.

Required columns (exact names don't matter, just confirm the data exists):
- Customer first name
- Mobile number (Australian format: 04xxxxxxxx)
- Email (optional but useful)
- Date of last transaction or booking
- Last service or product purchased

**If they don't have a list:** Ask them to export from their booking system, CRM, or accounting software (Fresha, Timely, Square, Xero, etc.). Most can export to CSV. If they're stuck, offer to walk them through it.

Clean the list before uploading:
- Remove anyone who has already asked not to be contacted
- Remove anyone transacted within the last 90 days (not lapsed yet)
- Check mobile numbers are in 04xx format (not international)

Upload to: Supabase → `reactivate_customers` table → client_id = [client slug]

---

## Step 3 — ReviewRunner Trigger Setup (5 min)

ReviewRunner needs to know when an appointment is finished. Pick the trigger method that matches how the client runs their business:

**Option A — Manual batch (simplest)**
Client sends a WhatsApp message to the Kaspr number at end of each day with client name + mobile.
Format: `REVIEW Sarah Mitchell 0412345678 lashes`
Agent parses, queues satisfaction check, sends within 2 hours.

**Option B — Payment webhook**
If client uses Square or Xero, set up a Zapier/Make webhook:
Trigger: Payment taken / invoice marked paid → POST to `https://kaspr-reviewrunner.railway.app/trigger`
Payload: `{ customer_name, mobile, service_type, client_id }`

**Option C — Booking system webhook**
If the client's booking system (Fresha, Timely, Square Appointments) can fire a Zapier/Make trigger when an appointment is completed, point it at the same `/trigger` endpoint with the same payload as Option B.

Record chosen method: _______________

---

## Step 4 — Configure Agent Environment Variables (5 min)

Add the following to the Railway service env vars for both agents.

**ReActivate (kaspr-reactivate service):**

| Variable | Value |
|---|---|
| CLIENT_ID | [client slug e.g. lunanails] |
| CLIENT_NAME | [business name] |
| MESSAGE_TONE | casual OR professional |
| TWILIO_FROM | +61400000000 (Kaspr Twilio number) |
| SUPABASE_URL | [existing project URL] |
| SUPABASE_SERVICE_KEY | [existing service key] |
| DISCORD_WEBHOOK | [#kaspr channel webhook] |
| SEND_WINDOW_START | 08:00 |
| SEND_WINDOW_END | 20:00 |
| TIMEZONE | Australia/Sydney |

**ReviewRunner (kaspr-reviewrunner service):**

| Variable | Value |
|---|---|
| CLIENT_ID | [client slug] |
| CLIENT_NAME | [business name] |
| GOOGLE_REVIEW_LINK | kaspr.com.au/r/[slug] |
| MESSAGE_TONE | casual OR professional |
| TWILIO_FROM | +61400000000 |
| SUPABASE_URL | [existing project URL] |
| SUPABASE_SERVICE_KEY | [existing service key] |
| DISCORD_WEBHOOK | [#kaspr channel webhook] |
| SEND_WINDOW_START | 08:00 |
| SEND_WINDOW_END | 20:00 |
| TIMEZONE | Australia/Sydney |

Deploy both services after saving env vars. Confirm green in Railway dashboard.

---

## Step 5 — Test Before Going Live (10 min)

Run both agents against a test record before pointing at real customers.

**ReActivate test:**
1. Insert one test row into `reactivate_customers` with your own mobile number
2. Set `last_transaction_date` to 100 days ago
3. Trigger manually: POST to `https://kaspr-reactivate.railway.app/run-test?client_id=[slug]`
4. You should receive Touch 1 SMS within 2 minutes
5. Confirm Discord log fires in #kaspr
6. Reply STOP — confirm suppression record is written

**ReviewRunner test:**
1. POST to `https://kaspr-reviewrunner.railway.app/trigger` with your own mobile
2. You should receive satisfaction check SMS within 2 minutes
3. Reply "yes" — confirm Google review link SMS arrives
4. Run again, reply "not great" — confirm owner Discord alert fires, no review link sent
5. Confirm suppression after second run (no duplicate)

Both tests passing = green light to upload real customer list.

---

## Step 6 — Upload Customer List and Go Live

**ReActivate:**
1. Final clean of CSV (no duplicates, no recent customers, no existing opt-outs)
2. Upload to Supabase `reactivate_customers` table via CSV import or agent admin tool
3. Set `sequence_status = pending` for all rows
4. Trigger first batch: POST to `/run-batch?client_id=[slug]&limit=50`
   - Start with 50 per day max for the first week to warm up
5. Confirm Discord embed shows batch queued

**ReviewRunner:**
- If using manual trigger (Option A): brief client on the WhatsApp format, confirm they've saved the Kaspr number
- If using webhook (Option B): confirm test trigger fires correctly from their system
- No batch needed — ReviewRunner fires per appointment event

---

## Step 7 — Client Handover (5 min)

Tell the client three things:

1. **What to expect from ReActivate:** "Over the next two weeks, lapsed customers will receive up to 3 short messages. If any of them reply, you'll get an alert on Discord / your phone and we'll hand it straight to you. You don't need to do anything."

2. **What to expect from ReviewRunner:** "After each appointment, your client gets a quick check-in. Happy customers get prompted to leave a Google review. Unhappy ones come straight to you before anything goes public."

3. **How to pause or stop:** "If you ever want to pause a sequence or remove a customer, message us. We can suppress anyone within minutes."

Send them the one-page client summary PDF (separate doc) after the call.

---

## Ongoing

**Weekly:** Check Discord #kaspr for sequence summaries. ReviewRunner sends an auto-report every Monday 8am.

**Monthly:** Pull ReActivate results from Supabase — replies, bookings recovered, opt-outs. Include in client report.

**Renewal trigger:** If ReActivate recovers more than $2,000 in revenue in the first 30 days, that's your Growth Pack renewal conversation.

---

## Quick Reference — Common Issues

| Problem | Fix |
|---|---|
| SMS not sending | Check Twilio trial limits — trial accounts cap at verified numbers only. Upgrade if needed. |
| Customer received message twice | Check for duplicate rows in `reactivate_customers`. Add unique constraint on mobile + client_id. |
| Discord alert not firing | Check webhook URL in env vars. Test with a curl POST. |
| Google review link broken | Re-generate short link at kaspr.com.au/r/[slug]. Check Cloudflare redirect rule. |
| Client wants to pause | Set `sequence_status = paused` for all their rows in Supabase. Both agents skip paused records. |
| Opt-out not working | Confirm STOP keyword handler is live in Twilio webhook. Check `suppressed_contacts` table. |

---

*Kaspr Growth Pack — ReActivate + ReviewRunner*
*NorthWorld | kaspr.com.au*
