# Web Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases personal projects, skills, and contact information in a clean, professional interface.

## ?? Features

- **Modern Stack**: Built with React 19, TypeScript, and Vite for fast development and optimal performance
- **Responsive Design**: Styled with Tailwind CSS v4 for a beautiful, mobile-first experience
- **Multi-Page Navigation**: Uses React Router for seamless page transitions
- **Component Architecture**: Well-organized, reusable components for maintainability
- **Type Safety**: Full TypeScript support for robust code quality
- **Icon Support**: Material Design Icons integration via @mdi/react

## ?? Project Structure

```
src/
??? components/        # Reusable UI components
?   ??? Header.tsx    # Navigation header
?   ??? Footer.tsx    # Site footer
?   ??? Layout.tsx    # Page layout wrapper
?   ??? ProjectCard.tsx  # Project display card
??? pages/            # Route pages
?   ??? HomePage.tsx
?   ??? AboutPage.tsx
?   ??? ProjectsPage.tsx
?   ??? ContactPage.tsx
??? data/             # Static data
?   ??? ProjectsData.ts
??? models/           # TypeScript interfaces
?   ??? Project.ts
??? assets/           # Images and static files
```

## ??? Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **Material Design Icons** - Icon library
- **ESLint** - Code linting

## ?? Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Xiappi/web-portfolio.git
cd web-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## ?? Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## ??? Building for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist/` directory.

## ?? License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ?? Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## ?? Contact

For any inquiries, please visit the contact page on the live site.
