# MySQL Connection Guide

## 1. Install MySQL

### Windows
- Download from: https://dev.mysql.com/downloads/mysql/
- Or use: `choco install mysql`

### Mac
```bash
brew install mysql
```

### Linux (Ubuntu/Debian)
```bash
sudo apt-get install mysql-server
```

## 2. Start MySQL Service

### Windows
```powershell
# Start MySQL service
net start MySQL80

# Or if using different version, check Services app
```

### Mac/Linux
```bash
# Start MySQL
mysql.server start
# or
sudo service mysql start
```

## 3. Create Database and Tables

Open MySQL terminal:
```bash
mysql -u root -p
```

Then run the SQL commands from `database.sql`:
```bash
mysql -u root -p < database.sql
```

Or copy-paste from database.sql in MySQL client:
```sql
CREATE DATABASE IF NOT EXISTS eventhub;
USE eventhub;

CREATE TABLE IF NOT EXISTS contact_submissions (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

## 4. Configure Environment Variables

Update `.env` file in the backend folder:

```env
# MySQL Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=eventhub
```

Replace `your_password` with your MySQL root password.

## 5. Run Backend

```bash
npm run dev
```

The server will automatically test the MySQL connection on startup.

## 6. Test Connection

Send a POST request to test:

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

## Verify Data in MySQL

```bash
mysql -u root -p
USE eventhub;
SELECT * FROM contact_submissions;
```

## Troubleshooting

### Connection Refused
- Check if MySQL is running: `mysql -u root -p`
- Verify host, port, user, password in .env

### Database Not Found
- Run `database.sql` to create tables

### Access Denied
- Reset MySQL password or update credentials in .env

### Port Already in Use
- Change PORT in .env to another port (3001, 3002, etc.)
