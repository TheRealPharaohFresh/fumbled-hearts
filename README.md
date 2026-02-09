<div align="center">

# 💔 Fumbled Hearts

### *Where Stories Get a Second Chance*

[![CI/CD Pipeline](https://github.com/TheRealPharaohFresh/fumbled-hearts/actions/workflows/ci.yml/badge.svg)](https://github.com/TheRealPharaohFresh/fumbled-hearts/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646cff?logo=vite)](https://vitejs.dev/)
[![Tests](https://img.shields.io/badge/Tests-27%20passing-success)](src/test)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

![Fumbled Hearts Banner](src/assets/Fumbled%20hearts%20on%20a%20brick%20wall.png)

**A modern e-commerce platform redefining fashion for the digital generation**

[🌟 Live Demo](#) • [📖 Documentation](#features) • [🚀 Get Started](#-quick-start) • [🤝 Contributing](#-contributing)

</div>

---

## ✨ About Fumbled Hearts

Fumbled Hearts is more than just a fashion brand—it's a movement. We believe in challenging the status quo and pushing boundaries in the fashion industry. Our mission is to create a brand that resonates with the modern generation while embodying the spirit of entrepreneurship and embracing the limitless possibilities that the digital age offers.

### 🎯 Our Vision

- 💡 **Innovation First**: Cutting-edge design meets timeless style
- 🌍 **Global Reach**: Fashion without borders
- 🎨 **Creative Freedom**: Express yourself, your way
- ♻️ **Sustainability**: Fashion that cares about tomorrow

---

## 🚀 Features

### 🛍️ **E-Commerce Experience**
- **Multi-Color Product Selection**: Interactive color swatches for each product
- **Real-time Inventory**: Automatic out-of-stock detection and display
- **Dynamic Product Cards**: Smooth transitions and hover effects
- **Responsive Design**: Perfect on mobile, tablet, and desktop

### 👕 **Product Collections**
- **Hoodies** (Volume 1 & 2): Available in 10+ colors
- **T-Shirts**: Classic designs in 6 vibrant colors
- **Track Suits**: Women's collection in premium fabrics
- **Jackets**: Statement pieces for any occasion

### 🎨 **Available Colors**
```
Black • Pink • Hot Pink • Red • Red Heart • Blue • Sky Blue
Purple • Olive Green • Grey • Navy Blue • Orange • Burnt Orange
```

### 🧪 **Quality Assurance**
- **27 Comprehensive Tests**: Full test coverage across components
- **Automated CI/CD**: GitHub Actions pipeline
- **Type Safety**: 100% TypeScript implementation
- **Modern Testing**: Vitest + React Testing Library

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, TypeScript 5.9, Vite 7 |
| **Styling** | CSS3, Modern CSS Variables |
| **Testing** | Vitest, React Testing Library, jsdom |
| **Dev Tools** | ESLint, TypeScript ESLint, Vite HMR |
| **CI/CD** | GitHub Actions, Multi-version testing |
| **Assets** | PNG, JPG/JPEG support with custom declarations |

</div>

---

## 📦 Quick Start

### Prerequisites

- Node.js 18.x or 20.x
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/TheRealPharaohFresh/fumbled-hearts.git

# Navigate to the project
cd fumbled-hearts

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # 🚀 Start development server with HMR
npm run build        # 🏗️  Build production bundle
npm run preview      # 👀 Preview production build
npm run lint         # 🔍 Run ESLint checks
npm run test         # 🧪 Run test suite
npm run test:watch   # 👁️  Run tests in watch mode
npm run test:coverage # 📊 Generate coverage report
```

---

## 📁 Project Structure

```
fumbled-hearts/
├── 📂 .github/
│   └── 📂 workflows/
│       └── ci.yml           # CI/CD pipeline configuration
├── 📂 src/
│   ├── 📂 assets/           # Images and static files
│   │   ├── FumbledHeartsTops/
│   │   ├── FumbledHeartsTrackSuits/
│   │   └── Testemonials/
│   ├── 📂 components/       # React components
│   │   ├── Navbar.tsx
│   │   └── ProductCard.tsx
│   ├── 📂 pages/            # Page components
│   │   ├── HomePage.tsx
│   │   ├── ClothingStore.tsx
│   │   ├── Contact.tsx
│   │   └── Testimonials.tsx
│   ├── 📂 styles/           # CSS modules
│   ├── 📂 test/             # Test suites (27 tests)
│   ├── 📂 types/            # TypeScript declarations
│   └── App.tsx              # Root component
├── 📄 package.json
├── 📄 vite.config.ts
├── 📄 vitest.config.ts
└── 📄 tsconfig.json
```

---

## 🧪 Testing

Our application is fully tested with **27 passing tests** across 5 test suites:

| Test Suite | Tests | Coverage |
|------------|-------|----------|
| `App.test.tsx` | 5 | ✅ Component rendering & mounting |
| `ProductCard.test.tsx` | 6 | ✅ Color selection, cart functionality |
| `Navbar.test.tsx` | 5 | ✅ Navigation links & structure |
| `ClothingStore.test.tsx` | 6 | ✅ Product display & grid layout |
| `HomePage.test.tsx` | 5 | ✅ Hero section & content |

Run tests with:
```bash
npm run test              # Run once
npm run test:watch        # Watch mode
npm run test:coverage     # With coverage report
```

---

## 🚀 CI/CD Pipeline

Automated deployment pipeline powered by GitHub Actions:

### 🔄 Workflow Stages

1. **Test Stage**
   - Runs on Node.js 18.x and 20.x
   - Executes ESLint checks
   - Runs full test suite
   - Generates coverage reports

2. **Build Stage**
   - Compiles TypeScript
   - Bundles production assets
   - Uploads build artifacts

3. **Deploy Stage** *(main branch only)*
   - Automatic deployment to production
   - Ready for Vercel, Netlify, or AWS S3

---

## 🎨 Design Philosophy

### Color Palette
- **Primary**: Deep blues and elegant grays
- **Accent**: Vibrant pinks and bold reds
- **Neutral**: Clean whites and sophisticated blacks

### Typography
- Modern sans-serif fonts
- Responsive sizing with `clamp()`
- Optimal readability across devices

### UX Principles
- **Intuitive Navigation**: Easy browsing experience
- **Visual Feedback**: Hover states and transitions
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized images and lazy loading

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📈 Performance

- ⚡ **Vite HMR**: Instant development feedback
- 🎯 **Code Splitting**: Optimized bundle sizes
- 🖼️ **Image Optimization**: Efficient asset loading
- 📦 **Tree Shaking**: Minimal production bundle

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Code Standards
- Follow TypeScript best practices
- Write tests for new features
- Maintain code coverage above 80%
- Follow existing code style

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**The Real Pharaoh Fresh**
- GitHub: [@TheRealPharaohFresh](https://github.com/TheRealPharaohFresh)

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing-fast build tool
- All contributors and supporters

---

<div align="center">

### 💔 **Fumbled Hearts** - *Where stories get a second chance*

**[⭐ Star this repo](https://github.com/TheRealPharaohFresh/fumbled-hearts)** if you found it helpful!

Made with ❤️ and lots of ☕

</div>
