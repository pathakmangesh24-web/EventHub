# EventHub Backend API Documentation

## Base URL
```
http://localhost:3000
```

## Server Configuration
- **Host:** 0.0.0.0
- **Port:** 3000 (from .env)
- **Database:** MySQL (eventhub)

---

## API Endpoints

### 1. Health Check
Check if the server is running.

**Endpoint:** `GET /health`

**Response:**
```json
{
  "status": "ok"
}
```

**Status Code:** `200 OK`

---

### 2. Get Contact Form Schema
Retrieve form field definitions for frontend rendering.

**Endpoint:** `GET /api/contact/schema`

**Response:**
```json
{
  "fields": [
    {
      "name": "firstName",
      "label": "First Name",
      "type": "text",
      "required": true,
      "placeholder": "Enter your first name"
    },
    {
      "name": "lastName",
      "label": "Last Name",
      "type": "text",
      "required": true,
      "placeholder": "Enter your last name"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "required": true,
      "placeholder": "Enter your email"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "required": true,
      "placeholder": "Enter your message (minimum 10 characters)",
      "minLength": 10
    }
  ]
}
```

**Status Code:** `200 OK`

---

### 3. Submit Contact Form
Submit a contact form with validation.

**Endpoint:** `POST /api/contact`

**Content-Type:** `application/json`

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "message": "This is my message with more than 10 characters"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Form submitted successfully",
  "data": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "message": "This is my message with more than 10 characters"
  }
}
```

**Validation Error Response (400):**
```json
{
  "success": false,
  "message": "Validation failed",
  "error": "[{\"field\":\"firstName\",\"message\":\"First Name is required\"},{\"field\":\"email\",\"message\":\"Email format is invalid\"}]"
}
```

**Server Error Response (500):**
```json
{
  "success": false,
  "message": "Internal server error",
  "error": "Error message details"
}
```

---

## Validation Rules

| Field | Rule | Example |
|-------|------|---------|
| **firstName** | Required, non-empty | "John" |
| **lastName** | Required, non-empty | "Doe" |
| **email** | Required, valid format | "john@example.com" |
| **message** | Required, min 10 chars | "This is a valid message" |

---

## cURL Examples

### Test Health Check
```bash
curl http://localhost:3000/health
```

### Get Form Schema
```bash
curl http://localhost:3000/api/contact/schema
```

### Submit Contact Form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "message": "This is a test message with more than 10 characters"
  }'
```

---

## JavaScript/Fetch Examples

### Get Form Schema
```javascript
fetch('http://localhost:3000/api/contact/schema')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Submit Contact Form
```javascript
const formData = {
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  message: "This is a test message with more than 10 characters"
};

fetch('http://localhost:3000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

## Axios Examples

### Get Form Schema
```javascript
import axios from 'axios';

axios.get('http://localhost:3000/api/contact/schema')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

### Submit Contact Form
```javascript
import axios from 'axios';

const formData = {
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  message: "This is a test message with more than 10 characters"
};

axios.post('http://localhost:3000/api/contact', formData)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

---

## React Hook Example

```javascript
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      setResponse(data);
      
      if (data.success) {
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      }
    } catch (error) {
      setResponse({ success: false, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        required
      ></textarea>
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      {response && (
        <div>
          {response.success ? (
            <p>✓ {response.message}</p>
          ) : (
            <p>✗ {response.message}</p>
          )}
        </div>
      )}
    </form>
  );
}

export default ContactForm;
```

---

## Setup & Run

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Run Production
```bash
npm run start
```

---

## Environment Variables (.env)

```env
# Server
PORT=3000
HOST=0.0.0.0

# MySQL Database
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tinu1311
DB_NAME=eventhub
```

---

## Database Schema

**Table:** `contact_submissions`

```sql
CREATE TABLE contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  message LONGTEXT NOT NULL,
  status ENUM('new', 'read', 'responded') DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_created_at (created_at)
);
```

---

## Error Handling

| Status Code | Message | Cause |
|-------------|---------|-------|
| **200** | OK | Request successful |
| **400** | Validation failed | Invalid form data |
| **500** | Internal server error | Server error or DB connection issue |

---

## Database Queries

### View All Submissions
```sql
SELECT * FROM contact_submissions ORDER BY created_at DESC;
```

### View Submissions by Email
```sql
SELECT * FROM contact_submissions WHERE email = 'john@example.com';
```

### View New Submissions
```sql
SELECT * FROM contact_submissions WHERE status = 'new' ORDER BY created_at DESC;
```

---

## Support
For issues or questions, check [MYSQL_SETUP.md](MYSQL_SETUP.md) or [README.md](README.md)
