# Aluno - Next.js Education LMS Template

This is a Next.js conversion of the Aluno Angular Education LMS template. The application has been fully converted from Angular to Next.js with React components and TypeScript.

## Features

- 🎓 **Education LMS Platform** - Complete learning management system
- 📱 **Responsive Design** - Mobile-first, works on all devices
- ⚡ **Next.js 14** - Built with the latest Next.js App Router
- 🎨 **Modern UI** - Clean and professional design
- 🔐 **Authentication Pages** - Login and Registration
- 📚 **Course Management** - Browse, view, and enroll in courses
- 👨‍🏫 **Instructor Profiles** - Learn about course instructors
- 📝 **Blog System** - Articles and tutorials
- 📧 **Contact Form** - Get in touch functionality
- 🎯 **Student Dashboard** - Track learning progress

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ausaheb/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing and detail pages
│   ├── contact/            # Contact page
│   ├── courses/           # Courses listing and detail pages
│   ├── dashboard/         # Student dashboard
│   ├── instructors/       # Instructors page
│   ├── login/             # Login page
│   ├── register/          # Registration page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features section
│   ├── Courses.tsx        # Courses section
│   ├── CourseCard.tsx     # Course card component
│   ├── Testimonials.tsx   # Testimonials section
│   └── CTA.tsx            # Call-to-action section
├── public/                # Static assets
│   ├── favicon.ico       # Site favicon
│   └── media/            # Media files (fonts, images)
└── angular.envytheme.com/ # Original Angular files (reference)
```

## Pages

- **Home** (`/`) - Landing page with hero, features, courses, testimonials
- **About** (`/about`) - About us page
- **Courses** (`/courses`) - All courses listing
- **Course Detail** (`/courses/[id]`) - Individual course page
- **Instructors** (`/instructors`) - Instructor profiles
- **Blog** (`/blog`) - Blog posts listing
- **Blog Post** (`/blog/[id]`) - Individual blog post
- **Contact** (`/contact`) - Contact form
- **Login** (`/login`) - User login
- **Register** (`/register`) - User registration
- **Dashboard** (`/dashboard`) - Student dashboard

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: "#1C43FE",
  secondary: "#FE3F10",
  // ... other colors
}
```

### Fonts

The project uses Google Fonts (Manrope and Inter). Fonts are loaded in `app/layout.tsx` and configured in `tailwind.config.ts`.

## Building for Production

```bash
npm run build
npm start
```

## Notes

- The original Angular styles are preserved in `angular.envytheme.com/aluno/styles-PRYNRIV6.css` for reference
- Images are using placeholder URLs (`/api/placeholder/...`). Replace these with actual images
- Form submissions (login, register, contact) currently show alerts. Implement actual backend integration
- Course data is currently hardcoded. Connect to a database or API for dynamic content

## License

This is a converted template. Please check the original template's license for usage terms.

# Aarti
