# Portfolio Website - Chuc Kim Thien

A cutting-edge, interactive portfolio website featuring a 3D human avatar, custom animations, and stunning visual effects. Built with React, TypeScript, Three.js, Tailwind CSS, and GSAP.

## ✨ Features

### 🎭 Special Effects & Interactivity
- **3D Human Avatar**: Realistic 3D model based on your photo with Three.js
- **Custom Animated Cursor**: Interactive cursor with particle trails
- **Particle Background**: Animated connected particles creating depth
- **Mouse Tracking**: 3D avatar follows cursor movement
- **Smooth Animations**: GSAP-powered transitions and scroll effects

### 🎨 Enhanced Sections
- **Tech Skills with Logos**: 15+ technologies with official icons and progress bars
- **Animated Stats**: Counter animations showing experience and achievements
- **Full Professional Bio**: Comprehensive summary with highlights
- **Interactive Project Cards**: Expandable details with tech stacks
- **Modern Timeline**: Experience displayed in elegant timeline layout

### 🚀 Technical Excellence
- **React 18 + TypeScript**: Type-safe development
- **Three.js**: Real 3D graphics and rendering
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first styling
- **GSAP**: Professional animation library
- **Responsive Design**: Perfect on all devices

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Animation library
- **ScrollTrigger** - Scroll-based animations

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
portfolio/
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.tsx    # Navigation bar
│   │   ├── Hero.tsx      # Hero section with animations
│   │   ├── About.tsx     # About & expertise section
│   │   ├── Experience.tsx # Experience timeline
│   │   ├── Projects.tsx  # Projects showcase
│   │   ├── Education.tsx # Education section
│   │   └── Contact.tsx   # Contact & footer
│   ├── data/
│   │   └── portfolio.ts  # Portfolio data (easy to update)
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html           # HTML template
└── tailwind.config.js   # Tailwind configuration
```

## Customization

### Update Portfolio Data

Edit `src/data/portfolio.ts` to update:
- Personal information
- Skills and expertise
- Work experience
- Projects
- Education

### Modify Colors

Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: '#0066FF',    // Your primary color
  secondary: '#00D4FF',  // Your secondary color
  dark: '#0A0A0A',       // Background color
}
```

### Adjust Animations

Modify GSAP animations in each component file. Look for `useEffect` hooks with GSAP code.

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

## Performance Optimization

- Lazy loading for images
- Code splitting with React.lazy
- Optimized animations with GSAP
- Tailwind CSS purge for smaller bundle size
- Vite for fast builds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- **Email**: thienchuc.dev@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/thienchuc
- **Phone**: 0354727611

---

Built with ❤️ using React, TypeScript, Tailwind CSS & GSAP
