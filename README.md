# فال حافظ - شب یلدا (Hafez Fortune Wheel - Yalda Night)

A beautiful, production-ready, mobile-first responsive website celebrating Yalda Night (Persian winter solstice festival) with an interactive Hafez fortune wheel.

## 🌙 Features

- **Mobile-First Responsive Design**: Optimized for mobile devices with touch-friendly interactions
- **Interactive Fortune Wheel**: Smooth spinning animation with 12 segments
- **Authentic Hafez Poems**: 20 authentic Hafez poems with interpretations in Persian
- **Beautiful Yalda Theme**: Traditional red and gold color scheme with Yalda decorations
- **PWA Support**: Can be installed as a Progressive Web App
- **Offline Functionality**: Service worker enables offline access
- **Smooth Animations**: CSS3 and Canvas animations for a premium feel
- **RTL Support**: Full Persian (Farsi) language support with right-to-left text
- **Haptic Feedback**: Vibration feedback on supported mobile devices
- **Accessibility**: Touch-friendly buttons and responsive design

## 🎨 Technologies

- Pure HTML5, CSS3, and JavaScript (No frameworks required)
- Canvas API for wheel rendering
- Service Worker for PWA functionality
- CSS Grid and Flexbox for responsive layout
- CSS Custom Properties for theming

## 🚀 Installation & Usage

### Option 1: Direct Use
Simply open `index.html` in any modern web browser.

### Option 2: Local Server
For full PWA functionality, serve the files using a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Option 3: Deploy to Production
Deploy to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

## 📱 Mobile Optimization

The website is specifically optimized for mobile devices:
- Responsive canvas sizing based on device pixel ratio
- Touch-friendly button sizes (minimum 48px)
- Optimized font sizes for readability
- Smooth scrolling and animations
- Haptic feedback on supported devices

## 🎯 How to Use

1. Visit the website on your mobile device or desktop
2. Click/tap the "بچرخان و فال بگیر" (Spin and Get Fortune) button
3. Watch the wheel spin with beautiful animations
4. Read your Hafez fortune and its interpretation
5. Click "فال دیگر" (Another Fortune) to try again

## 🌟 Yalda Night (شب یلدا)

Yalda Night is the longest night of the year, celebrated on the winter solstice in Persian culture. Families gather to eat watermelon and pomegranate, recite poetry (especially Hafez), and celebrate the victory of light over darkness.

## 📝 File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Styling and animations
├── script.js           # Fortune wheel logic and poems
├── sw.js              # Service worker for offline support
├── manifest.json       # PWA manifest
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## 🎨 Customization

### Adding More Poems
Edit the `hafezPoems` array in `script.js`:

```javascript
const hafezPoems = [
    {
        text: "Your poem text here",
        interpretation: "Your interpretation here"
    },
    // Add more poems...
];
```

### Changing Colors
Modify the CSS custom properties or the wheel colors in `script.js`:

```javascript
const wheelConfig = {
    colors: ['#DC143C', '#8B0000', ...], // Your colors
    // ...
};
```

## 🔧 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Optimized for mobile

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Credits

- Hafez poems from classical Persian literature
- Designed and developed for Yalda Night celebration

---

**شب یلدا مبارک!** (Happy Yalda Night!)
