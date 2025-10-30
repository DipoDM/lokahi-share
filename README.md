# Lokahi Share

Public deep linking site for the Ohana app.

## Purpose

This lightweight Next.js site handles:
- iOS Universal Links verification (`.well-known/apple-app-site-association`)
- Android App Links verification (`.well-known/assetlinks.json`)
- Public event landing pages at `/event/:id`
- App download links for users without the app installed

## Features

- ✅ **No Authentication Required** - Public access for sharing
- ✅ **Universal/App Links** - Opens directly in the Ohana app if installed
- ✅ **Fallback Landing Page** - Shows download links if app not installed
- ✅ **Minimal & Fast** - Lightweight Next.js 16 with Tailwind CSS

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deployment

Deploy to Vercel via GitHub integration or CLI.

## Deep Link Format

Event links: `https://your-domain.com/event/{eventId}`

## Verification

After deployment, verify files are accessible:
- iOS: https://your-domain.com/.well-known/apple-app-site-association
- Android: https://your-domain.com/.well-known/assetlinks.json
