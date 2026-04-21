# Harish J | Terminal Portfolio

A premium, interactive, terminal-inspired personal portfolio built to invoke the aesthetic of a "serious builder" while maintaining high-end modern web standards. Built with Next.js, Tailwind CSS, and Framer Motion. 

This is not just a gimmick clone: it’s a fully responsive, animated, dark-mode-first Developer Command Center designed to impress.

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

## 🚀 Live Demo

*You can deploy this seamlessly using Vercel. Connect your repository to Vercel and it will auto-detect the Next.js setup.*

## ⚡ Features

- **Terminal Aesthetics**: Glassmorphic dark panels, neon green `#00ff88` accents, and monospace command structures.
- **Micro-interactions**: Typing effects (`history`, `cat`, `ls`), blinking cursors, and custom selection styling.
- **Expandable Project Windows**: View detailed stats and source code links dynamically as "sub-directories" under the `~/projects` terminal.
- **Global CRT Overlay**: A subtle, purely CSS matrix/scanline texture overlay applied passively over the viewport.
- **Responsive Design**: Designed to scale flawlessly from massive ultra-wide monitors down to standard mobile views.

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 18+)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Primitives), Lucide React (Icons)

## 📂 Project Structure

```bash
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css     # Theme configuration and CRT scanline effects
│   │   ├── layout.tsx      # Font (Geist/Mono) and metadata setup 
│   │   └── page.tsx        # Main compositional page assembling all sections
│   ├── components/
│   │   ├── sections/       # Core layout components
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Achievements.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/             # Reusable primitive UI
│   │       ├── command-line-prompt.tsx
│   │       └── terminal-window.tsx
```

## 💻 Running the App Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Harish1604/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **View locally**
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎨 Customization

To swap out the core theme color (currently neon green):
1. Navigate to `src/app/globals.css`.
2. Modify the `--primary` and `--ring` variables under `:root, .dark` to your desired HEX code.
3. Everything else (glows, text accents, and shadows) will adapt automatically.

## 🤝 Contact / Network

- **GitHub**: [@Harish1604](https://github.com/Harish1604)
- **LinkedIn**: [Harish J](https://linkedin.com/in/harish16042005)
- **Email**: [harish16042005@gmail.com](mailto:harish16042005@gmail.com)

---
*System initialization complete. 200 OK.*
