# RecycLens Release Hub

A modern web application built with Next.js for hosting and distributing RecycLens Android APK releases.

## Features

- 📱 Display all available APK releases
- 📥 Direct download links
- 📅 Release dates and version tracking
- 📝 Changelog support
- 🎨 Responsive design
- ⚡ Fast performance with Next.js
- 🌐 Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
npm start
```

## Deployment on Vercel

This project is optimized for deployment on [Vercel](https://vercel.com/). 

### Steps:

1. Push the website folder to a GitHub repository
2. Import the repository into Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your release hub will be live!

**Or use the Vercel CLI:**

```bash
npm i -g vercel
vercel
```

## API Endpoints

### GET `/api/releases`

Returns available APK releases in JSON format:

```json
{
  "releases": [
    {
      "version": "1.0.0",
      "name": "RecycLens v1.0",
      "downloadUrl": "/downloads/recyc-lens-1.0.0.apk",
      "releaseDate": "2026-04-27",
      "fileSize": "45.2 MB",
      "changelog": "..."
    }
  ]
}
```

## Customization

- Update release information in `/app/api/releases/route.ts`
- Modify styling in components or `/app/page.tsx`
- Add APK files to a `/public/downloads/` directory
- Configure environment variables as needed

## License

© 2026 RecycLens. All rights reserved.
