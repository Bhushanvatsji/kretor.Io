# Backend Setup & Configuration Guide

## Quick Start

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Environment Variables
```bash
cp .env.example .env.local
```

Then update `.env.local` with your configuration values.

### Step 3: Run Development Server
```bash
npm run dev
```

The API will be available at `http://localhost:3000/api`

---

## API Routes Structure

```
app/
├── api/
│   ├── contact/         # Contact form submissions
│   ├── newsletter/      # Newsletter subscriptions
│   ├── services/        # Services data
│   ├── portfolio/       # Portfolio projects
│   ├── blog/            # Blog posts
│   └── team/            # Team members
lib/
├── apiUtils.js          # Utility functions
├── database.js          # Database configuration
└── emailService.js      # Email sending helpers
```

---

## Configuration Sections

### 1. Database Setup

#### Option A: PostgreSQL (Recommended)

**Installation:**
```bash
# macOS (using Homebrew)
brew install postgresql

# Ubuntu
sudo apt-get install postgresql postgresql-contrib

# Windows
# Download from: https://www.postgresql.org/download/windows/
```

**Create Database:**
```bash
# Login to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE shivra_tech;

# Create user
CREATE USER shivra_user WITH PASSWORD 'secure_password';

# Grant privileges
GRANT ALL PRIVILEGES ON DATABASE shivra_tech TO shivra_user;

# Exit
\q
```

**Environment Variables:**
```env
DB_PROVIDER=postgresql
DATABASE_URL=postgresql://shivra_user:secure_password@localhost:5432/shivra_tech
DB_HOST=localhost
DB_PORT=5432
DB_USER=shivra_user
DB_PASSWORD=secure_password
DB_NAME=shivra_tech
```

#### Option B: MongoDB (NoSQL)

**Installation:**
```bash
# macOS
brew install mongodb-community

# Start service
brew services start mongodb-community

# Ubuntu
sudo apt-get install -y mongodb

# Windows
# Download from: https://www.mongodb.com/try/download/community
```

**Create Database:**
```javascript
// Using MongoDB Compass or mongosh
use shivra_tech

// Create collections
db.createCollection('contacts')
db.createCollection('newsletter_subscribers')
db.createCollection('projects')
db.createCollection('blog_posts')
```

**Environment Variables:**
```env
DB_PROVIDER=mongodb
DATABASE_URL=mongodb://localhost:27017/shivra_tech
```

#### Option C: Supabase (Managed PostgreSQL)

1. Visit [supabase.com](https://supabase.com)
2. Create a new project
3. Copy the connection string
4. Set environment variable:
```env
DATABASE_URL=postgresql://user:password@host:5432/database
```

#### Option D: Firebase (NoSQL)

1. Create project at [firebase.google.com](https://firebase.google.com)
2. Set up Firestore Database
3. Initialize in your code (see models implementation)

---

### 2. Email Configuration

#### Option A: Gmail SMTP

**Setup:**
1. Enable 2-Factor Authentication on your Google Account
2. Generate App Password:
   - Visit [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer"
   - Copy the generated password

**Environment Variables:**
```env
EMAIL_PROVIDER=smtp
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=the-generated-app-password
SMTP_FROM=noreply@shivratech.com
CONTACT_EMAIL=info@shivratech.com
```

**Test Connection:**
```javascript
// Create a test file: test-email.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const result = await transporter.verify();
console.log(result ? 'Email configured correctly' : 'Email configuration error');
```

#### Option B: SendGrid

**Setup:**
1. Create account at [sendgrid.com](https://sendgrid.com)
2. Create API Key in Settings
3. Verify sender email

**Environment Variables:**
```env
EMAIL_PROVIDER=sendgrid
SENDGRID_API_KEY=sg_your_api_key_here
SMTP_FROM=noreply@shivratech.com
```

**Install Package:**
```bash
npm install @sendgrid/mail
```

#### Option C: Mailgun

**Setup:**
1. Create account at [mailgun.com](https://mailgun.com)
2. Add domain
3. Get API key

**Environment Variables:**
```env
EMAIL_PROVIDER=mailgun
MAILGUN_API_KEY=your_api_key
MAILGUN_DOMAIN=sandbox.mailgun.org
```

#### Option D: AWS SES

**Setup:**
1. Create AWS account
2. Verify email in SES console
3. Create IAM user with SES permissions
4. Get access keys

**Environment Variables:**
```env
EMAIL_PROVIDER=aws-ses
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_REGION=us-east-1
SMTP_FROM=noreply@shivratech.com
```

---

### 3. Implementing Email Sending

Update `lib/emailService.js`:

```javascript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendContactEmail(contactData) {
  const { name, email, subject, message } = contactData;

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.CONTACT_EMAIL,
    subject: `New Contact Form: ${subject}`,
    html: `
      <h2>New Contact Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong>${message}</p>
    `,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result.messageId);
    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
}
```

---

### 4. Database Models Implementation

Update `lib/database.js` to implement actual database operations:

**PostgreSQL Example:**
```javascript
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const models = {
  Contact: {
    async create(data) {
      const result = await pool.query(
        'INSERT INTO contacts (name, email, phone, company, subject, message) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [data.name, data.email, data.phone, data.company, data.subject, data.message]
      );
      return result.rows[0];
    },
    async findAll() {
      const result = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
      return result.rows;
    },
  },
  // ...other models
};
```

**MongoDB Example:**
```javascript
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URL);

export const models = {
  Contact: {
    async create(data) {
      const db = client.db('shivra_tech');
      const result = await db.collection('contacts').insertOne({
        ...data,
        createdAt: new Date(),
      });
      return result;
    },
    async findAll() {
      const db = client.db('shivra_tech');
      return await db.collection('contacts').find({}).toArray();
    },
  },
  // ...other models
};
```

---

### 5. Testing APIs

#### Using cURL

**Submit Contact Form:**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Test",
    "message": "Test message"
  }'
```

**Get Services:**
```bash
curl http://localhost:3000/api/services
```

#### Using Postman

1. Download [Postman](https://www.postman.com)
2. Create new requests with:
   - URL: `http://localhost:3000/api/contact`
   - Method: `POST`
   - Body (JSON):
   ```json
   {
     "name": "John Doe",
     "email": "john@example.com",
     "subject": "Inquiry",
     "message": "Message here"
   }
   ```

---

### 6. Security Configuration

#### API Key Authentication

Add to `lib/apiUtils.js`:
```javascript
export function validateApiKey(request) {
  const apiKey = request.headers.get('x-api-key');
  return apiKey === process.env.API_KEY;
}
```

Use in API routes:
```javascript
export async function POST(request) {
  if (!validateApiKey(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  // Handle request...
}
```

#### CORS Configuration

Create `middleware.js`:
```javascript
import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  
  return response;
}

export const config = {
  matcher: '/api/:path*',
};
```

#### Environment Variable Validation

```javascript
// Validate required environment variables on startup
function validateEnvironment() {
  const required = [
    'DATABASE_URL',
    'SMTP_HOST',
    'CONTACT_EMAIL',
  ];

  const missing = required.filter(env => !process.env[env]);
  
  if (missing.length > 0) {
    throw new Error(`Missing environment variables: ${missing.join(', ')}`);
  }
}

// Call on app startup
if (typeof window === 'undefined') {
  validateEnvironment();
}
```

---

### 7. Performance Optimization

#### Caching

```javascript
// Cache API responses
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  const data = await fetchData();
  return NextResponse.json(data);
}
```

#### Pagination

```javascript
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 10;
  const offset = (page - 1) * limit;

  const data = await query(`SELECT * FROM items LIMIT $1 OFFSET $2`, [limit, offset]);
  return NextResponse.json(data);
}
```

---

## Troubleshooting

### Email Not Sending

1. Check SMTP credentials
2. Verify sender email is authorized
3. Check firewall/network settings
4. Review email logs in console

### Database Connection Error

1. Verify DATABASE_URL is correct
2. Check database server is running
3. Verify network connectivity
4. Check user permissions

### API Returns 500 Error

1. Check server logs
2. Verify environment variables
3. Check request data format
4. Test with Postman

---

## Deployment Checklist

- [ ] Secure all environment variables
- [ ] Configure database backups
- [ ] Set up email service
- [ ] Enable CORS if needed
- [ ] Implement rate limiting
- [ ] Add monitoring/logging
- [ ] Test all APIs
- [ ] Document deployment steps
- [ ] Set up CI/CD pipeline
- [ ] Configure auto-scaling if needed

---

## Production Deployment

### Vercel Deployment

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Self-Hosted (Ubuntu)

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone <repo-url>
cd agency

# Install dependencies
npm install

# Build
npm run build

# Start with PM2 (process manager)
npm install -g pm2
pm2 start npm --name "shivra-tech" -- start
pm2 save
```

---

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Nodemailer Documentation](https://nodemailer.com)
- [SendGrid Documentation](https://sendgrid.com/docs)

---

*Last Updated: March 2024*
