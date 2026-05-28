# ✨ Mamta - Futuristic Portfolio Website

A beautiful, elegant, and interactive 3D portfolio website for Mamta—AI Enthusiast, Robotics Mentor, and Creative Technologist. Built with modern web technologies and a soft luxury, feminine futuristic aesthetic.

## 🎨 Design Philosophy

The portfolio embodies a **soft luxury futuristic feminine aesthetic** with:
- **Glassmorphism** design patterns
- **Soft pastel colors** (pink, lavender, cyan, beige)
- **3D immersive elements** and holographic effects
- **Smooth animations** and interactive transitions
- **Luxury premium aesthetic** throughout

## 🚀 Tech Stack

### Frontend Framework
- **React 18.2.0** - Component-based UI library
- **Vite 5.0.0** - Lightning-fast build tool

### Styling & Animations
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Framer Motion 10.16.0** - React animation library
- **GSAP 3.12.2** - Advanced animation timeline library

### 3D Graphics
- **Three.js r128** - 3D graphics library
- **React Three Fiber 8.15.0** - React renderer for Three.js
- **Drei 9.88.0** - Helper components for R3F

### Build Pipeline
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility
- **ESLint** - Code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx        # Fixed navbar with animated underlines
│   ├── Hero.jsx             # Main hero section with 3D elements
│   ├── HeroScene.jsx        # Three.js 3D scene component
│   ├── About.jsx            # About section with stats
│   ├── Skills.jsx           # Technical skills grid
│   ├── Projects.jsx         # Featured projects showcase
│   ├── Experience.jsx       # Timeline of experiences
│   ├── Contact.jsx          # Contact form
│   └── Footer.jsx           # Footer information
├── App.jsx                  # Main app component
├── main.jsx                 # React entry point
└── index.css               # Global styles and utilities

Configuration Files:
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind theme customization
├── postcss.config.js       # PostCSS plugins
├── package.json            # Dependencies and scripts
└── index.html              # HTML entry point
```

## 🎯 Key Features

### 1. **Navigation** 
- Fixed responsive navbar with gradient backdrop-blur
- Animated underlines on hover with Framer Motion
- Smooth scroll to sections

### 2. **Hero Section**
- Animated title with gradient text
- Holographic avatar with pulsing glow effect
- Floating emoji elements (butterfly, sparkle, flower, moon)
- CTA buttons for exploration

### 3. **3D Experience**
- Three.js canvas with rotating wireframe sphere
- Starfield background (1000 stars)
- Dynamic lighting with multiple point lights

### 4. **About Section**
- Profile card with glassmorphism design
- Stat counters (Projects, Possibilities, Innovation, Creator)
- Pulsing avatar animation

### 5. **Skills Grid**
- 9 skill cards with hover lift effects
- Icons, descriptions, and shimmer animations
- Responsive 3-column layout

### 6. **Projects Showcase**
- 6 featured projects with icons
- Tag system for technologies
- Hover lift animations with glassmorphism

### 7. **Experience Timeline**
- Alternating timeline layout
- Pulsing timeline dots with glow effects
- 5 key experience points

### 8. **Contact Form**
- Glassmorphic form inputs
- Email validation
- Smooth submit animation

### 9. **Interactive Effects**
- Floating particles throughout the page
- Mouse sparkle trail (✨)
- Animated background orbs
- Continuous floating animations

## 🎨 Color System

```css
Soft Pink:    #FFD6E7
Soft Lavender: #E5D9FF
Soft Cyan:    #DDF8FF
Soft Beige:   #FFF6F2
Text Grey:    #666666
```

## 🔤 Typography

- **Outfit** - Headings (font-weight: 700-800)
- **Poppins** - Body text and buttons (font-weight: 600)
- **Inter** - Alternative body text

## 🎬 Custom Animations

- `float` - 20s ease-in-out infinite floating motion
- `holoPulse` - 3s breathing box-shadow and scale effect
- `shimmer` - 3s sliding light effect
- `sparkleFloat` - 1s fade and slide up animation

## 📦 Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

5. **Run ESLint**
   ```bash
   npm run lint
   ```

## 🚀 Getting Started

1. Clone or download this repository
2. Navigate to the project directory
3. Run `npm install` to install all dependencies
4. Run `npm run dev` to start the development server
5. Open your browser and explore the portfolio!

## 🎯 Customization

### Update Content
- Edit component files in `src/components/` to add your content
- Modify text, descriptions, and project details

### Change Colors
- Update `tailwind.config.js` to modify the color palette
- Adjust gradient colors in component styles

### Add New Sections
- Create new component files in `src/components/`
- Import and add to `App.jsx`

### Modify Animations
- Edit animation configurations in Framer Motion variants
- Adjust GSAP timelines in `App.jsx` for global effects

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Content

The portfolio showcases:
- **About**: Mamta's background as an AI enthusiast and robotics mentor
- **Skills**: 9 key technical proficiencies
- **Projects**: 6 featured projects including AI systems, VR experiences, and IoT solutions
- **Experience**: 5 key milestones in the tech journey
- **Contact**: Interactive contact form

## 🎨 Performance Optimizations

- Lazy loading with Framer Motion's `whileInView`
- Optimized Three.js scene with efficient rendering
- CSS-in-JS with Tailwind for minimal bundle size
- Vite's fast development server with HMR

## 📄 License

Free to use and customize for personal or professional projects.

## ✨ Credits

Designed and developed with passion for a futuristic, elegant, and interactive portfolio experience.

---

**Made with 💖 for Mamta | 2024**
