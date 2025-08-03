# Mysira - Modern Next.js UI Template

A comprehensive, production-ready Next.js template with ShadCN/UI, Tailwind CSS, and Radix UI components. Built following modern flat UI design principles with optimal developer experience.

![Mysira UI Template](./public/logo.png)

## ✨ Features

- **🚀 Next.js 15** - Latest features with App Router and Turbopack
- **🎨 Modern Flat UI** - Following comprehensive design system
- **🧩 ShadCN/UI Components** - Pre-built, accessible components
- **🎯 Radix UI Primitives** - Headless UI components
- **🎭 Tailwind CSS v4** - Latest version with custom theme
- **📱 Responsive Design** - Mobile-first approach
- **🔧 TypeScript** - Full type safety
- **📏 ESLint + Prettier** - Code formatting and linting
- **🌍 Multi-Environment** - Dev, staging, production configs
- **🔒 Environment Variables** - Secure configuration management

## 🎨 Design System

Our design system follows modern flat UI principles:

### Color Palette

- **Base Background**: `#FFFFFF`
- **Surface**: `#F9F9F9` / `#F4F4F4`
- **Text**: `#1A1A1A` (Primary), `#666666` (Secondary), `#A0A0A0` (Disabled)
- **Borders**: `#E5E5E5`
- **Accent**: Customizable brand color

### Typography

- **Font**: Inter (Google Fonts)
- **Scale**: 2.5rem (Title) → 0.875rem (Caption)
- **Weights**: 400 (Regular) → 700 (Bold)

### Spacing

- **System**: 4pt scale (4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 64px)
- **Grid**: 12-column desktop, 4-column mobile
- **Max Width**: 1140px

## 🚀 Quick Start

1. **Clone and Install**

   ```bash
   git clone <your-repo>
   cd mysira
   bun install
   ```

2. **Environment Setup**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

3. **Development**

   ```bash
   bun dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

| Script             | Description                             |
| ------------------ | --------------------------------------- |
| `bun dev`          | Start development server with Turbopack |
| `bun build`        | Build production application            |
| `bun start`        | Start production server                 |
| `bun lint`         | Run ESLint                              |
| `bun lint:fix`     | Fix ESLint issues                       |
| `bun format`       | Format code with Prettier               |
| `bun format:check` | Check code formatting                   |
| `bun type-check`   | Run TypeScript type checking            |

## 📁 Project Structure

```
mysira/
├── .github/workflows/     # CI/CD workflows
├── docs/                  # Documentation
│   └── DESIGN.md         # Design system guide
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page (component showcase)
│   │   └── globals.css   # Global styles & design tokens
│   ├── components/       # Reusable components
│   │   └── ui/          # UI component library
│   └── lib/             # Utilities
│       └── utils.ts     # Utility functions
├── .env.*               # Environment configurations
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## 🧩 Component Library

### Core Components

- **Button** - Primary, Secondary, Ghost, Icon variants
- **Input** - Text, Email, Password, Number fields
- **Card** - Content containers with Header, Content, Footer
- **Badge** - Labels and status indicators
- **Avatar** - User profile pictures with fallbacks

### Usage Example

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui"

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  )
}
```

## 🌍 Multi-Environment Setup

### Environment Files

- `.env.local` - Development
- `.env.staging` - Staging environment
- `.env.production` - Production environment
- `.env.example` - Template file

### Key Variables

```bash
NEXT_PUBLIC_APP_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 🎯 Development Workflow

1. **Code Standards**
   - ESLint for code quality
   - Prettier for formatting
   - TypeScript for type safety

2. **Component Development**
   - Co-located files (component + styles + tests)
   - Export from `components/ui/index.ts`
   - Follow design system tokens

3. **Styling Approach**
   - Tailwind utility classes
   - CSS custom properties for theming
   - Component variants with `class-variance-authority`

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically on push

### Other Platforms

The template works with any Node.js hosting platform:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and type checking
5. Create a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Radix UI](https://radix-ui.com/) - Headless UI components
- [ShadCN/UI](https://ui.shadcn.com/) - Component library
- [Lucide](https://lucide.dev/) - Icon library

---
