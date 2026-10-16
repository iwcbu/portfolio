# Portfolio V2

A minimal multipage React + TypeScript portfolio inspired by cinematic video hero layouts.

## Run

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Add your hero video

1. Put a short, compressed, licensed video at `public/videos/surf.mp4`.
2. Put a matching still image at `public/images/surf-poster.jpg`.
3. The homepage uses a CSS atmospheric background until video is available.
4. Video respects reduced motion preference and has a visible pause button once loaded.

## Before publishing

- Check every project statement and add correct repository or live site links.
- Replace the placeholder gradient art with actual screenshots and other licensed media.
- Add a current resume to `public/resume.pdf`, then add its link in `Contact.tsx`.
- Test keyboard navigation, mobile layout, and reduced motion preference.

## Deploy to Vercel

Push this project to GitHub, import the repository in Vercel, and use Vite defaults (`npm run build`, output `dist`). `vercel.json` supports direct project page URLs.
