# kretor.Io - Professional Tech Solutions Website

![kretor.Io](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=flat-square&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript)

A modern, responsive, and professional website for **kretor.Io** - a technology solutions company providing AI/ML, Web Development, Android Development, and Cloud Database services.

## 🎯 Key Features

- ✅ **Home Page:** Eye-catching hero section with service overview
- ✅ **About Section:** Company mission, vision, values, and team culture
- ✅ **Services:** Detailed service descriptions with technology stack
- ✅ **Portfolio:** Showcase of completed projects with case studies
- ✅ **Blog:** Articles and resources for tech insights
- ✅ **Pricing:** Transparent pricing for different service tiers
- ✅ **Team:** Meet the talented team behind kretor.Io
- ✅ **Contact:** Contact form with location and business hours
- ✅ **Responsive Design:** Works perfectly on desktop, tablet, and mobile
- ✅ **Fast Performance:** Optimized with Next.js for lightning-fast load times
- ✅ **SEO Optimized:** Metadata and structure for search engines
- ✅ **Modern Styling:** Beautiful UI with Tailwind CSS

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework for production |
| **React 18** | UI library |
| **Tailwind CSS** | Utility-first CSS framework |
| **Lucide React** | Beautiful icon library |
| **JavaScript** | Programming language |

## 📋 Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### 3. Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
agency/
├── app/
│   ├── components/
│   │   ├── Header.jsx              # Sticky navigation header
│   │   ├── Footer.jsx              # Footer with links and contact
│   │   └── ServiceCard.jsx         # Reusable service card component
│   ├── about/page.jsx              # About page
│   ├── services/page.jsx           # Services page
│   ├── portfolio/page.jsx          # Portfolio page
│   ├── blog/page.jsx               # Blog page
│   ├── pricing/page.jsx            # Pricing page
│   ├── team/page.jsx               # Team page
│   ├── contact/page.jsx            # Contact page
│   ├── layout.jsx                  # Root layout with header/footer
│   └── globals.css                 # Global styles
├── public/                          # Static assets (images, fonts)
├── package.json                     # Dependencies
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── next.config.js                  # Next.js configuration
├── .gitignore                      # Git ignore rules
└── .env.example                    # Environment variables template
```

## 📄 Pages & Components

### 🏠 Home Page (`/`)
- Hero section with company motto
- Service highlights with icons
- Why choose us section
- Call-to-action buttons

### 📖 About Page (`/about`)
- Company story and history
- Key statistics (projects, team size, years)
- Mission and vision statements
- Core values

### 💼 Services Page (`/services`)
- AI/ML Solutions
- Web Development
- Android Development
- Cloud Database Solutions
- System Optimization
- Business Intelligence
- Technology stack display

### 🎨 Portfolio Page (`/portfolio`)
- Showcase of 6 major projects
- Case studies with results
- Technologies used
- Quick links to full case studies

### 📝 Blog Page (`/blog`)
- Featured blog post section
- Recent articles grid
- Article cards with metadata
- Newsletter subscription

### 💰 Pricing Page (`/pricing`)
- 3 pricing tiers (Starter, Professional, Enterprise)
- Hourly services breakdown
- FAQ section
- Custom quote CTA

### 👥 Team Page (`/team`)
- Team member cards with photos
- Role and bio information
- Social media links
- Team culture highlights

### 📧 Contact Page (`/contact`)
- Contact information (email, phone, address)
- Contact form with validation
- Success/error messages
- Location map placeholder

## 🎨 Customization

### Update Company Information

1. **Contact Details**
   - Edit `app/components/Footer.jsx`
   - Update email, phone, and address

2. **Services & Descriptions**
   - Modify `app/services/page.jsx`

3. **Team Members**
   - Update `app/team/page.jsx` with actual team

4. **Portfolio Projects**
   - Edit `app/portfolio/page.jsx` with your projects

5. **Pricing Tiers**
   - Customize `app/pricing/page.jsx`

### Styling

- **Global styles:** `app/globals.css`
- **Colors:** `tailwind.config.js`
- **Responsive:** Uses Tailwind's responsive prefixes (sm:, md:, lg:)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

- **Netlify:** Connect GitHub repo and auto-deploy
- **AWS Amplify:** Build and deploy with AWS infrastructure
- **DigitalOcean:** Deploy with App Platform
- **Docker:** Use containerization for any platform

## 📚 Additional Documentation

- **[INSTALL.md](./INSTALL.md)** - Detailed installation and customization guide
- **[GUIDE.md](./GUIDE.md)** - Quick reference guide
- **[API.md](./API.md)** - Complete API documentation
- **[BACKEND_SETUP.md](./BACKEND_SETUP.md)** - Backend configuration and setup

## 🔌 Backend API

The project includes a complete backend with REST APIs for:

### Available Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get submissions
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/services` - Get all services
- `GET /api/portfolio` - Get portfolio projects
- `GET /api/blog` - Get blog posts
- `GET /api/team` - Get team members

### Database Integration Ready
- PostgreSQL, MongoDB, MySQL support
- Mock data for quick start
- Easily connect to real database

### Email Service Support
- Gmail SMTP
- SendGrid
- Mailgun
- AWS SES

**See [API.md](./API.md) for complete documentation and [BACKEND_SETUP.md](./BACKEND_SETUP.md) for setup instructions.**

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🔐 Environment Variables

Create a `.env.local` file (copy from `.env.example`):

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
CONTACT_EMAIL=info@shivratech.com
GOOGLE_MAPS_API_KEY=your_key_here
```

## 📞 Support & Contact

For questions or support:
- 📧 Email: info@shivratech.com
- 📞 Phone: +1 (555) 123-4567

## 📄 License

**Proprietary** - kretor.Io © 2024. All rights reserved.

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

---

**Made with ❤️ by kretor.Io**

*Last Updated: April 2026*
