# Portfolio — Alishba Rani

Personal developer portfolio built with **React** and **Framer Motion**, with a dark gradient theme, animated hero, and section-based navigation.

**Live site:** deploy this repo (for example GitHub Pages, Netlify, or Vercel) and set your production URL here.

**Repository:** [github.com/alishbarani1/portfolio](https://github.com/alishbarani1/portfolio)

## Features

- Responsive layout with scroll progress and fixed side navigation
- Animated hero (typing roles, circular profile, motion effects)
- Sections: About, Skills, Projects, Certifications, Contact
- Framer Motion for scroll and UI animations

## Tech stack

- React 18
- Framer Motion
- Create React App (`react-scripts`)
- CSS3 (custom properties, Grid, Flexbox)

## Project structure

```
src/
├── components/
│   ├── About.js
│   ├── BackToTop.js
│   ├── Certifications.js
│   ├── Contact.js
│   ├── Footer.js
│   ├── Header.js
│   ├── Hero.js
│   ├── Projects.js
│   ├── ScrollProgress.js
│   ├── SideNav.js
│   └── Skills.js
├── styles/
│   ├── App.css
│   ├── Global.css
│   └── … (per-component CSS)
├── App.js
└── index.js
public/
├── index.html
└── profile.png   ← hero image (replace with your photo)
```

## Getting started

```bash
git clone https://github.com/alishbarani1/portfolio.git
cd portfolio
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm start`    | Dev server (hot reload)  |
| `npm run build`| Production build → `build/` |
| `npm test`     | Test runner (interactive) |

## Customization

- **Name / hero copy:** `src/components/Hero.js`
- **About & stats:** `src/components/About.js`, `src/components/Skills.js`
- **Projects & certifications:** `src/components/Projects.js`, `src/components/Certifications.js`
- **Contact:** `src/components/Contact.js`
- **Theme colors:** `src/styles/Global.css` (`:root` variables)
- **Profile photo:** add or replace `public/profile.png` (referenced from `Hero.js`)

## Continuous integration

GitHub Actions runs `npm ci` and `npm run build` on pushes and pull requests to `main` (see `.github/workflows/ci.yml`).

## Pushing to GitHub (HTTPS)

From the project folder, with Git configured for your account:

```bash
git add .
git commit -m "Your message"
git push -u origin main
```

If prompted for credentials, use a [Personal Access Token](https://github.com/settings/tokens) (classic: enable **repo**) as the password, or sign in with **Git Credential Manager** / browser flow when offered.

## License

MIT — see [LICENSE](LICENSE).

## Author

Alishba Rani
