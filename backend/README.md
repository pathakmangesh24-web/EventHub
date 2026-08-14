# Backend MVC Structure

This is an MVC-based backend for the EventHub application built with Fastify and TypeScript.

## Project Structure

```
src/
├── types/              # TypeScript interfaces and types
│   └── form.ts        # Contact form types
├── models/            # Data models and validation logic
│   └── ContactForm.ts # Contact form model
├── controllers/       # Business logic and request handling
│   └── ContactFormController.ts
├── routes/            # API route definitions
│   └── contactRoutes.ts
└── server.ts          # Main server entry point
```

## MVC Flow

### 1. **Models** (src/models/)
- Handles data structure and validation
- Contains business logic for form processing
- Example: `ContactFormModel` validates and sanitizes form data

### 2. **Controllers** (src/controllers/)
- Handles HTTP request/response logic
- Calls model methods for validation
- Returns formatted responses
- Example: `ContactFormController` processes form submissions

### 3. **Routes** (src/routes/)
- Defines API endpoints
- Maps HTTP methods to controller methods
- Example: `POST /api/contact` → `controller.submitForm()`

### 4. **Types** (src/types/)
- Defines TypeScript interfaces for type safety
- Example: `ContactFormData`, `ContactFormResponse`

## Contact Form Fields

- **First Name*** (required) - String
- **Last Name*** (required) - String
- **Email*** (required) - Valid email format
- **Message*** (required) - Minimum 10 characters

## API Endpoints

### Submit Contact Form
```
POST /api/contact

Request Body:
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "message": "This is my message"
}

Response (Success):
{
  "success": true,
  "message": "Form submitted successfully",
  "data": { ... }
}

Response (Validation Error):
{
  "success": false,
  "message": "Validation failed",
  "error": "[...]"
}
```

### Get Form Schema
```
GET /api/contact/schema

Returns form field definitions for frontend rendering
```

## Running the Application

### Development
```bash
npm run dev
```
Starts the server with hot-reload on file changes.

### Build
```bash
npm run build
```
Compiles TypeScript to JavaScript in `dist/` folder.

### Production
```bash
npm run start
```
Runs the compiled JavaScript server.

## Environment Variables

- `PORT` - Server port (default: 3000)
- `HOST` - Server host (default: 0.0.0.0)

## Validation Rules

1. **First Name**: Required, non-empty
2. **Last Name**: Required, non-empty
3. **Email**: Required, valid email format
4. **Message**: Required, minimum 10 characters

## Future Enhancements

- [ ] Database integration for storing submissions
- [ ] Email notification functionality
- [ ] Rate limiting
- [ ] CORS configuration
- [ ] Authentication
- [ ] Logging middleware
