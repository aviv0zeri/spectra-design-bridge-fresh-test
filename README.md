# Northstar

A small, standalone analytics dashboard UI built with React + Vite. Frontend only — no backend, no database, no auth, no external integrations.

This project exists as a clean baseline app for a separate reproducibility test (onboarding an ordinary external app into another workflow). It has no dependency on, or knowledge of, that workflow.

## Stack

- React 19
- Vite
- Plain CSS (no framework, no CSS-in-JS)

## Structure

```
src/
  components/       # Sidebar, Header, StatCard, AnalyticsCard, ActivityFeed, Icon
  data/             # Static mock data for the dashboard
  App.jsx           # Page layout composition
  main.jsx          # Entry point
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```
