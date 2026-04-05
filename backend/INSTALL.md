# Shivra Tech - Website

A professional, modern website for Shivra Tech, a provider of AI/ML, Web Development, Android Development, and Cloud Database solutions.

## 🚀 Technology Stack

- **Framework:** Next.js 14
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Language:** JavaScript/JSX

## ✨ Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- 🔍 SEO optimized
- ⚡ Fast performance with Next.js
- 📧 Contact form with validation
- 🎯 Service showcase
- 💼 Portfolio/Case Studies
- 💰 Pricing page
- 👥 Team showcase
- 📝 Blog section
- 📱 Mobile-friendly navigation

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Update `.env.local` with your configuration values.

### 3. Run Development Server

```bash
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to see the site.

## 📁 Project Structure

```
agency/
├── app/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer component
│   │   └── ServiceCard.jsx     # Reusable service card
│   ├── about/
│   │   └── page.jsx            # About us page
│   ├── services/
│   │   └── page.jsx            # Services page
│   ├── portfolio/
│   │   └── page.jsx            # Portfolio/projects page
│   ├── blog/
│   │   └── page.jsx            # Blog page
│   ├── pricing/
│   │   └── page.jsx            # Pricing page
│   ├── team/
│   │   └── page.jsx            # Team page
│   ├── contact/
│   │   └── page.jsx            # Contact page
│   ├── layout.jsx              # Root layout
│   ├── page.jsx                # Home page
│   └── globals.css             # Global styles
├── public/                      # Static assets
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── tsconfig.json
```

## 🎨 Pages Overview

### Home (`/`)
Hero section with company overview, services highlight, and call-to-action buttons.

### About (`/about`)
Company mission, vision, history, values, and team culture.

### Services (`/services`)
Detailed information about AI/ML, Web Dev, Android, Cloud solutions, and technology stack.

### Portfolio (`/portfolio`)
Showcasing completed projects with descriptions, technologies used, and results.

### Blog (`/blog`)
Articles and resources about tech trends, best practices, and case studies.

### Pricing (`/pricing`)
Transparent pricing for project packages and hourly services with FAQ.

### Team (`/team`)
Meet the team members with their roles, bios, and social links.

### Contact (`/contact`)
Contact form, office information, and contact details.

## 🔧 Build & Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables
4. Deploy

```bash
# Or use Vercel CLI
vercel
```

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Azure
- Google Cloud

## 📝 Customization Guide

### Update Company Information

Edit the following files to customize company details:

1. **Company Name & Branding**
   - Update `Header.jsx` logo text
   - Update `Footer.jsx` company name and description
   - Update `metadata` in `layout.jsx`

2. **Contact Information**
   - Update email in `Footer.jsx` and `Contact.jsx`
   - Update phone numbers in contact information
   - Update address in team page

3. **Services**
   - Edit service descriptions in `services/page.jsx`
   - Update technology stack
   - Modify pricing in `pricing/page.jsx`

4. **Team Members**
   - Update team information in `team/page.jsx`
   - Add social media links

5. **Portfolio Projects**
   - Update projects in `portfolio/page.jsx`
   - Add project descriptions and results

6. **Blog Posts**
   - Update blog content in `blog/page.jsx`

### Styling

- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles use Tailwind classes

### Colors

Default color scheme can be modified in `tailwind.config.js`:
- Primary: Blue (#0f172a, #3b82f6)
- Secondary: Light Blue
- Accent: Dark Blue

## 📦 Dependencies

- **next:** ^14.0.0
- **react:** ^18.2.0
- **react-dom:** ^18.2.0
- **lucide-react:** ^0.263.1 (Icons)
- **tailwindcss:** ^3.3.0
- **postcss:** ^8.4.31

## 🚀 Performance Optimizations

- Image optimization with Next.js
- Code splitting and lazy loading
- Compression and minification
- CSS purging with Tailwind
- Static generation where possible

## 🔐 Security

- Environment variables for sensitive data
- Input validation in forms (can be enhanced)
- CSP headers recommended
- Regular dependency updates

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Proprietary - Shivra Tech © 2024. All rights reserved.

## 📞 Support

For questions or support, contact:
- Email: info@shivratech.com
- Phone: +1 (555) 123-4567

---

## 🤝 Contributing

Internal development only. External contributions are not accepted at this time.

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

---

**Last Updated:** March 2024
