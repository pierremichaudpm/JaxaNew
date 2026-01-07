# JAXA Production - Next.js 14+ Portfolio

A bold, audacious portfolio website for JAXA Production converted from HTML/CSS to a modern React application using Next.js 14+ with TypeScript.

## 🎯 Project Overview

This project preserves EVERY design detail exactly from the original HTML/CSS website, including:
- Radical broken layouts and overlapping elements
- Diagonal clip-paths and skewed sections
- Vertical navigation menu (left side)
- Fullscreen video hero with color strips overlay
- Chaotic project cards with rotations and negative margins
- Bleeding color sections (Blue, Turquoise, Orange, Yellow)
- Mix-blend-mode effects

## 🚀 Tech Stack

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React 18** with modern hooks

## 📁 Project Structure

```
jaxa-next/
├── app/
│   ├── components/
│   │   ├── Nav.tsx          # Vertical navigation
│   │   ├── Hero.tsx         # Fullscreen video hero
│   │   ├── Projects.tsx     # Chaotic project grid
│   │   ├── Expertise.tsx    # Bleeding color sections
│   │   ├── CTA.tsx          # Diagonal CTA section
│   │   ├── Contact.tsx      # Split contact section
│   │   └── Footer.tsx       # Footer
│   ├── layout.tsx           # Root layout with Nav
│   ├── page.tsx             # Main page component
│   └── globals.css          # All original CSS preserved
├── public/
│   ├── videos/hero.mp4      # Hero background video
│   └── images/posters/      # Project poster images
├── package.json
├── tailwind.config.js       # Tailwind config with custom colors
├── next.config.js           # Next.js configuration
└── README.md
```

## 🎨 Design Preservation

### Critical Design Elements Preserved:
1. **Color Palette** (exact hex values):
   - JAXA Blue: `#0083C0`
   - Orange: `#FF6B35`
   - Turquoise: `#00D9C0`
   - Anthracite: `#2E2E3A`
   - Yellow: `#FFD23F`

2. **Typography**: Space Grotesk font (300 & 700 weights)

3. **Layout Chaos**:
   - Rotations on project cards (-2deg to 2deg)
   - Negative margins and overlaps
   - Clip-path polygons for diagonal sections
   - Color overlays with multiply blend modes
   - Skewed sections and vertical writing modes

4. **Animations**:
   - Floating shapes with custom keyframes
   - Hover effects on all interactive elements
   - Smooth transitions

## 🛠️ Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

## 🔧 Configuration

### Tailwind CSS
Custom colors and animations are defined in `tailwind.config.js`:
```javascript
colors: {
  'jaxa-blue': '#0083C0',
  'orange': '#FF6B35',
  'turquoise': '#00D9C0',
  'anthracite': '#2E2E3A',
  'yellow': '#FFD23F',
}
```

### Next.js
Image optimization is disabled to preserve exact design:
```javascript
images: {
  unoptimized: true,
}
```

## 📱 Responsive Design

The mobile breakpoint (`max-width: 1024px`) preserves:
- Horizontal navigation (instead of vertical)
- Single column project grid
- Removed rotations and overlaps on mobile
- Simplified layouts for touch devices

## 🎬 Media Assets

- **Video**: `/public/videos/hero.mp4` - Fullscreen background video
- **Images**: `/public/images/posters/` - Project poster images

## ⚡ Features

1. **Smooth Scroll Navigation**: Clicking nav links smoothly scrolls to sections
2. **Video Autoplay**: Hero video autoplays, loops, and is muted
3. **Hover States**: All cards have hover effects with scale and rotation
4. **Performance**: Optimized with Next.js static generation
5. **Type Safety**: Full TypeScript support

## 🚫 What Was NOT Changed

As per requirements, the following were preserved exactly:
- All CSS styles (no "cleaning up" or "optimizing")
- Rotations, overlaps, and chaotic layouts
- Clip-paths and blend modes
- Typography sizes and spacing
- Color values and positioning

## 📄 License

© 2026 JAXA Production. All rights reserved.

---

**Note**: This design is intentionally bold and unconventional. The conversion maintains pixel-perfect fidelity to the original audacious design.