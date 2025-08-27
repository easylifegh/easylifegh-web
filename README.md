# EasyLife Ghana

EasyLife Ghana is an application designed to provide comprehensive support from university applications to settling into your new academic journey in West Africa's most welcoming destination. Built with Bun, TypeScript, and Tailwind CSS, it offers a fast, scalable, and developer-friendly experience.

## 🚀 Quick Start

1. **Clone and Install**

   ```bash
   git clone https://github.com/YounoussaBen/easylifegh.git
   cd easylifegh
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

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
