# KVK Consulting Website

Premium single-page React + Tailwind website for KVK, an agricultural produce trader specializing in cowpea, blackgram, horsegram, and pulses.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## GitHub Pages Deployment

This project is configured for the custom domain:

```text
kvk.vaaliadvisory.com
```

### Deploy with `gh-pages`

```bash
npm install
npm run deploy
```

This builds the Vite app and publishes `dist` to the `gh-pages` branch.

### Deploy with GitHub Actions

The repository also includes `.github/workflows/deploy.yml`. In GitHub, set Pages source to **GitHub Actions**, then push to `main`.

### DNS

Point `kvk.vaaliadvisory.com` to GitHub Pages with a `CNAME` record:

```text
kvk CNAME <your-github-username>.github.io
```
