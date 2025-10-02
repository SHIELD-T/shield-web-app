---
description: Repository Information Overview
alwaysApply: true
---

# SHIELD Web App Information

## Summary
SHIELD Web App is a React-based website for the SHIELD organization, focused on empowering underserved youth through innovation and entrepreneurship programs. The application is built with modern web technologies and follows a component-based architecture.

## Structure
- **src/**: Main source code directory containing React components, pages, and assets
  - **components/**: Reusable UI components (TeamCard, SectionHeader, etc.)
  - **pages/**: Page components for different routes (Home, About, Programs, etc.)
  - **data/**: Data configuration files (teamData.ts, etc.)
  - **assets/**: Static assets used in the application
- **public/**: Public assets including images, logos, and static files
  - **assets/**: Organized asset directories (Founders, Logos, Partners, etc.)

## Language & Runtime
**Language**: TypeScript/JavaScript
**Version**: TypeScript 5.8.3, ES2022 target
**Build System**: Vite 7.1.2
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- React 19.1.1
- React DOM 19.1.1
- React Router DOM 7.8.2

**Development Dependencies**:
- TypeScript 5.8.3
- ESLint 9.33.0
- Vite 7.1.2
- @vitejs/plugin-react 5.0.0
- @types/react 19.1.10
- @types/react-dom 19.1.7

## Build & Installation
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Testing
**Framework**: Jest with React Testing Library
**Test Location**: src/components/__tests__/
**Naming Convention**: Component.test.tsx
**Run Command**:
```bash
# No explicit test command in package.json
# Tests likely run with Jest directly
```

## Application Structure
**Entry Point**: src/main.tsx
**Routing**: React Router DOM with BrowserRouter
**Main Pages**:
- Home (/)
- About (/about)
- Podcast (/podcast)
- Programs (/programs)
- Donate (/donate)
- Report (/report)

**Key Components**:
- Header/Footer: Main navigation and site footer
- TeamSection: Displays organization team members
- AboutSection: Information about the organization
- BlogSection: Blog content display