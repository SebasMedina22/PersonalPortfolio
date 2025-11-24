## Sebastian Medina · Automation & Integration Developer Portfolio

Modern glassmorphism portfolio built with semantic HTML, TailwindCSS (CDN), and GSAP-enhanced micro-animations. The layout highlights Salesforce + Slack automation work with responsive sections and minimal JavaScript.

### Project Structure
- `index.html` – Main page with all sections and Tailwind classes
- `app.js` – GSAP-based reveal + tilt interactions
- `STYLEGUIDE.md` – Quick reference for colors, typography, components

### Local Preview
1. Open `index.html` directly in any modern browser, or
2. Serve locally (optional)  
   ```bash
   npx serve .
   ```

### Deploying to GitHub Pages
1. Initialize and push the repository:
   ```bash
   git init
   git checkout -b main
   git add .
   git commit -m "Add Sebastian Medina portfolio"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. In GitHub, go to **Settings → Pages**.
3. Under “Build and deployment,” select **Deploy from a branch**.
4. Choose branch `main` and folder `/ (root)`, then click **Save**.
5. Wait for the Pages build to finish; your site will be available at `https://<username>.github.io/<repository>/`.

### Custom Domain (optional)
- Create a `CNAME` file with your domain name.
- Map DNS `A` records to GitHub Pages IPs or use a `CNAME` record pointing to `<username>.github.io`.

### Updating Content
- Modify the relevant section inside `index.html`.
- Update animations or interactions in `app.js` (keep GSAP lightweight).
- Commit and push changes; GitHub Pages rebuilds automatically.

