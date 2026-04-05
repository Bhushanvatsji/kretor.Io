# Backend API Documentation

## Overview

Shivra Tech backend provides RESTful APIs for managing website content, handling form submissions, and managing data. Built with Next.js API Routes, featuring mock data for quick start and database integration ready.

## API Base URL

```
http://localhost:3000/api
```

## Authentication

Currently, APIs are public. For production, implement JWT or API key authentication.

---

## Endpoints

### Contact Management

#### Submit Contact Form
- **Route:** `POST /api/contact`
- **Description:** Submit a contact form inquiry
- **Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 123-4567",
  "company": "Acme Corp",
  "subject": "Project Inquiry",
  "message": "I'm interested in your AI/ML solutions"
}
```
- **Response (Success - 201):**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon.",
  "id": 1234567890
}
```
- **Response (Error - 400):**
```json
{
  "error": "Missing required fields"
}
```

#### Get Contact Submissions
- **Route:** `GET /api/contact`
- **Description:** Retrieve all contact submissions (admin only)
- **Response:**
```json
{
  "success": true,
  "count": 10,
  "contacts": [...]
}
```

---

### Newsletter Management

#### Subscribe to Newsletter
- **Route:** `POST /api/newsletter`
- **Description:** Subscribe an email to the newsletter
- **Request Body:**
```json
{
  "email": "user@example.com"
}
```
- **Response (Success - 201):**
```json
{
  "success": true,
  "message": "Thank you for subscribing to our newsletter!",
  "id": 1234567890
}
```
- **Response (Error - 409):**
```json
{
  "error": "Already subscribed to newsletter"
}
```

#### Get Subscriber Count
- **Route:** `GET /api/newsletter`
- **Description:** Get total newsletter subscribers count
- **Response:**
```json
{
  "success": true,
  "count": 150
}
```

---

### Services Management

#### Get All Services
- **Route:** `GET /api/services`
- **Description:** Retrieve all available services
- **Response:**
```json
{
  "success": true,
  "count": 4,
  "data": [
    {
      "id": 1,
      "icon": "Brain",
      "title": "AI/ML Solutions",
      "description": "Intelligent systems powered by machine learning...",
      "features": ["Machine Learning", "NLP", "Computer Vision"]
    }
  ]
}
```

#### Get Service by ID
- **Route:** `GET /api/services?id=1`
- **Description:** Retrieve a specific service
- **Query Parameters:**
  - `id` (number) - Service ID
- **Response:**
```json
{
  "success": true,
  "data": { ... }
}
```

---

### Portfolio Management

#### Get All Portfolio Projects
- **Route:** `GET /api/portfolio`
- **Description:** Retrieve all portfolio projects
- **Response:**
```json
{
  "success": true,
  "count": 6,
  "data": [...]
}
```

#### Get Project by ID
- **Route:** `GET /api/portfolio?id=1`
- **Query Parameters:**
  - `id` (number) - Project ID
- **Response:**
```json
{
  "success": true,
  "data": { ... }
}
```

#### Filter Projects by Category
- **Route:** `GET /api/portfolio?category=Web%20Development`
- **Query Parameters:**
  - `category` (string) - Project category
- **Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [...]
}
```

---

### Blog Management

#### Get All Blog Posts
- **Route:** `GET /api/blog`
- **Description:** Retrieve all blog posts
- **Query Parameters:**
  - `limit` (number) - Limit number of posts
  - `featured` (boolean) - Get only featured posts
  - `category` (string) - Filter by category
- **Response:**
```json
{
  "success": true,
  "count": 6,
  "data": [...]
}
```

#### Get Blog Post by ID
- **Route:** `GET /api/blog?id=1`
- **Query Parameters:**
  - `id` (number) - Blog post ID

#### Get Blog Post by Slug
- **Route:** `GET /api/blog?slug=future-ai-enterprise`
- **Query Parameters:**
  - `slug` (string) - Blog post slug

#### Get Featured Blog Posts
- **Route:** `GET /api/blog?featured=true&limit=3`
- **Description:** Get featured posts for homepage

---

### Team Management

#### Get All Team Members
- **Route:** `GET /api/team`
- **Description:** Retrieve all team members
- **Response:**
```json
{
  "success": true,
  "count": 8,
  "data": [
    {
      "id": 1,
      "name": "Raj Kumar",
      "role": "Founder & CEO",
      "bio": "Visionary leader with 15+ years...",
      "email": "raj@shivratech.com",
      "avatar": "[url]",
      "socials": {
        "linkedin": "#",
        "twitter": "#"
      }
    }
  ]
}
```

#### Get Team Member by ID
- **Route:** `GET /api/team?id=1`
- **Query Parameters:**
  - `id` (number) - Team member ID

#### Filter Team by Role
- **Route:** `GET /api/team?role=Engineer`
- **Query Parameters:**
  - `role` (string) - Role keyword to search

---

## Utility Functions

### API Utilities (`lib/apiUtils.js`)

```javascript
import {
  validateEmail,
  validatePhone,
  formatDate,
  sanitizeInput,
  apiResponse,
  checkRateLimit,
  getClientIp,
  validateRequiredFields,
} from '@/lib/apiUtils';
```

**Examples:**

```javascript
// Validate email
const isValid = validateEmail('user@example.com');

// Check rate limiting
const allowed = checkRateLimit(clientIp, 5, 60000); // 5 requests per minute

// Validate required fields
const missing = validateRequiredFields(data, ['name', 'email']);
if (missing.length > 0) {
  // Handle missing fields
}
```

### Email Service (`lib/emailService.js`)

```javascript
import {
  sendContactEmail,
  sendConfirmationEmail,
  sendNewsletterWelcome,
  sendVerificationEmail,
} from '@/lib/emailService';
```

**Examples:**

```javascript
// Send contact email to admin
await sendContactEmail(contactData);

// Send confirmation to user
await sendConfirmationEmail('user@example.com');

// Send newsletter welcome
await sendNewsletterWelcome('user@example.com');
```

### Database Helpers (`lib/database.js`)

```javascript
import {
  initializeDatabase,
  query,
  models,
} from '@/lib/database';
```

---

## Error Handling

All API endpoints return standardized error responses:

```json
{
  "error": "Error message describing what went wrong"
}
```

### HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Missing or invalid parameters |
| 404 | Not Found - Resource not found |
| 409 | Conflict - Resource already exists |
| 500 | Internal Server Error - Server error |

---

## Rate Limiting

To prevent abuse, implement rate limiting:

```javascript
import { checkRateLimit, getClientIp } from '@/lib/apiUtils';

export async function POST(request) {
  const clientIp = getClientIp(request);
  
  if (!checkRateLimit(clientIp, 5, 60000)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }
  
  // Handle request...
}
```

---

## Database Integration

### Setup Instructions

1. **Choose a Database Provider:**
   - PostgreSQL (recommended)
   - MySQL
   - MongoDB
   - Supabase

2. **Set Environment Variables:**
```env
DB_PROVIDER=postgresql
DATABASE_URL=postgresql://user:password@localhost:5432/shivra_tech
```

3. **Implement Models:**

Models are defined in `lib/database.js`. Implement database operations:

```javascript
export const models = {
  Contact: {
    async create(data) {
      // Insert contact into database
    },
    async findAll() {
      // Retrieve all contacts
    },
  },
  // ...other models
};
```

### Database Schema

#### Contacts Table
```sql
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(255),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Newsletter Subscribers Table
```sql
CREATE TABLE newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'active'
);
```

---

## Email Configuration

### SMTP Setup (Gmail Example)

1. Generate App Password: [Google Account Security](https://myaccount.google.com/apppasswords)
2. Set Environment Variables:
```env
EMAIL_PROVIDER=smtp
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@shivratech.com
```

3. Implement Email Sending in `lib/emailService.js`

### SendGrid Alternative

```env
EMAIL_PROVIDER=sendgrid
SENDGRID_API_KEY=your-sendgrid-api-key
```

---

## Client-Side Usage

### Using APIs in Components

```javascript
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      console.log('Contact submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      console.error('Error:', data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields... */}
    </form>
  );
}
```

### Fetching Data in Components

```javascript
'use client';

import { useState, useEffect } from 'react';

export default function ServicesList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services');
        const data = await response.json();
        if (data.success) {
          setServices(data.data);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      {services.map(service => (
        <div key={service.id}>{service.title}</div>
      ))}
    </div>
  );
}
```

---

## Deployment Notes

1. **Environment Variables:** Set all `.env.local` variables in your hosting platform
2. **Database:** Use managed services (AWS RDS, Heroku Postgres, Supabase)
3. **Email Service:** Configure proper email provider (SendGrid, Mailgun, AWS SES)
4. **Security:** Add authentication. Implement CORS if needed
5. **Monitoring:** Set up logging and error tracking (Sentry, DataDog)
6. **Rate Limiting:** Implement proper rate limiting for production
7. **API Documentation:** Keep this documentation updated

---

## Future Enhancements

- [ ] Add JWT authentication
- [ ] Implement database integration
- [ ] Add email sending functionality
- [ ] Create admin dashboard
- [ ] Add order/project management system
- [ ] Implement payment processing (Stripe)
- [ ] Add user accounts
- [ ] Create CMS integration
- [ ] Add API rate limiting middleware
- [ ] Implement caching strategy

---

## Support

For issues or questions about the API, contact the development team at development@shivratech.com

---

*Last Updated: March 2024*
