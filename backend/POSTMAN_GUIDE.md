# Postman API Collection

## Base URL
```
http://localhost:3000
```

---

## 1. Health Check

**Method:** `GET`

**URL:**
```
http://localhost:3000/health
```

**Headers:**
```
Content-Type: application/json
```

**Response:**
```json
{
  "status": "ok"
}
```

---

## 2. Get Contact Form Schema

**Method:** `GET`

**URL:**
```
http://localhost:3000/api/contact/schema
```

**Headers:**
```
Content-Type: application/json
```

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

---

## 3. Submit Contact Form

**Method:** `POST`

**URL:**
```
http://localhost:3000/api/contact
```

**Headers:**
```
Content-Type: application/json
```

**Request Body (JSON):**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "message": "This is a test message with more than 10 characters"
}
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Form submitted successfully",
  "data": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "message": "This is a test message with more than 10 characters"
  }
}
```

**Validation Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Validation failed",
  "error": "[{\"field\":\"firstName\",\"message\":\"First Name is required\"}]"
}
```

**Server Error Response (500):**
```json
{
  "success": false,
  "message": "Internal server error",
  "error": "error details here"
}
```

---

## Postman Collection Import

You can save this as `postman_collection.json` and import into Postman:

```json
{
  "info": {
    "name": "EventHub Contact Form API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Health Check",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "url": {
          "raw": "http://localhost:3000/health",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["health"]
        }
      }
    },
    {
      "name": "Get Contact Form Schema",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "url": {
          "raw": "http://localhost:3000/api/contact/schema",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["api", "contact", "schema"]
        }
      }
    },
    {
      "name": "Submit Contact Form",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"email\": \"john@example.com\",\n  \"message\": \"This is a test message with more than 10 characters\"\n}"
        },
        "url": {
          "raw": "http://localhost:3000/api/contact",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["api", "contact"]
        }
      }
    }
  ]
}
```

---

## Test Cases for Postman

### Test 1: Valid Form Submission
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "message": "This is a valid test message with more than 10 characters"
}
```
**Expected:** 200 OK, success: true

---

### Test 2: Missing First Name
```json
{
  "firstName": "",
  "lastName": "Doe",
  "email": "john@example.com",
  "message": "This is a test message"
}
```
**Expected:** 400 Bad Request, validation error for firstName

---

### Test 3: Invalid Email
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "invalid-email",
  "message": "This is a test message with more than 10 characters"
}
```
**Expected:** 400 Bad Request, validation error for email

---

### Test 4: Message Too Short
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "message": "Short"
}
```
**Expected:** 400 Bad Request, message must be at least 10 characters

---

### Test 5: All Fields Empty
```json
{
  "firstName": "",
  "lastName": "",
  "email": "",
  "message": ""
}
```
**Expected:** 400 Bad Request, multiple validation errors

---

## Variables for Postman

Create these variables in Postman:

```
{{base_url}} = http://localhost:3000
{{firstName}} = John
{{lastName}} = Doe
{{email}} = john@example.com
{{message}} = This is a test message with more than 10 characters
```

Then use in requests:
- `{{base_url}}/api/contact`
- `{{base_url}}/health`

---

## Database Check After Submission

After submitting via Postman, verify in MySQL:

```bash
mysql -u root -ptinu1311 -e "USE eventhub; SELECT * FROM contact_submissions;"
```

All submitted forms are automatically saved to the database! ✅
