# Vaali Foods Website

Premium React + Vite site for Vaali Foods — live at **https://foods.vaaliadvisory.com**

## Local development

```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)

### 1. Enable GitHub Actions deployment

In the repo **Settings → Pages**:

- **Build and deployment → Source:** `GitHub Actions` (not “Deploy from a branch” unless you use `npm run deploy` manually)
- **Custom domain:** `foods.vaaliadvisory.com`
- Enable **Enforce HTTPS** once the certificate is issued

### 2. DNS (at your domain registrar)

Add one record:

| Type  | Name  | Value                              |
|-------|-------|------------------------------------|
| CNAME | `foods` | `channabasavakorlahalli.github.io` |

Do **not** point `foods` to `vaaliadvisory.com` or an IP address. DNS can take up to 24–48 hours to propagate.

### 3. Publish

Push to `main`. The workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and deploys automatically.

Check **Actions** tab for a green “Deploy to GitHub Pages” run.

### Manual deploy (optional)

```bash
npm install
npm run deploy
```

Then set Pages source to branch `gh-pages` / root.

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| “Site not found” on github.io | Pages source must be **GitHub Actions**, or deploy `gh-pages` branch |
| Blank page / 404 on `/why-us` | Re-deploy; build copies `index.html` → `404.html` for SPA routing |
| Domain does not resolve | Verify CNAME `foods` → `channabasavakorlahalli.github.io` |
| HTTPS certificate pending | Wait up to 24h after DNS is correct; keep “Enforce HTTPS” on |
