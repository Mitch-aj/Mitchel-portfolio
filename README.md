# Mitchel Ajumosinbia | Developer Portfolio

A responsive React + Vite portfolio with Go serverless API endpoints, configured for Vercel.

## Stack
- React + Vite
- Go serverless functions (`/api/health` and `/api/contact`)
- Plain CSS and Lucide icons

## Run locally

```bash
npm install
npm run dev
```

The React app runs locally. Vercel's Go functions are deployed by Vercel; to test the API locally, install the Vercel CLI and run:

```bash
npm i -g vercel
vercel dev
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Vercel should detect the Vite build settings. Build command: `npm run build`; output directory: `dist`.
4. Deploy.

The Go functions in `api/` are deployed as Vercel Functions. They are serverless functions, not a permanently running Go server.

## Configure the contact form
The form sends email through SMTP. Add these environment variables in Vercel Project Settings → Environment Variables:

- `SMTP_HOST` — SMTP server hostname
- `SMTP_PORT` — usually `587`
- `SMTP_USERNAME` — SMTP login
- `SMTP_PASSWORD` — SMTP password or app password
- `SMTP_FROM` — sender address authorised by your SMTP provider
- `CONTACT_TO` — email address where you want to receive messages

Redeploy after adding environment variables. Until configured, the API safely returns an error instead of pretending the message was sent.

## Personalise before publishing
Search the project for:
- `hello@yourdomain.com` and replace it with your real public contact email.
- `https://github.com/` and `https://linkedin.com/` and replace with your profile URLs.
- The three sample project entries in `src/App.jsx` and replace them with real projects, repository links and accurate descriptions.
- Update the skills list to reflect tools you can confidently discuss.

## API
- `GET /api/health` — basic health check
- `POST /api/contact` — validates contact form input and emails it via SMTP
