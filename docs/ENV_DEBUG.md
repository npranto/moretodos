# Environment Variables Debug

This project includes a secure development-only debugging system for environment variables.

## Debug API Endpoint

**URL:** `/api/debug/env`  
**Method:** `GET`  
**Security:** Development environment only

### Security Features

1. **Environment Check**: Only works when `NODE_ENV=development`
2. **Localhost Restriction**: Only accessible from localhost/127.0.0.1
3. **Debug Token**: Optional additional security with `DEBUG_TOKEN` header
4. **Non-sensitive Data**: Only shows safe environment variables

### Usage

#### Via API
```bash
# Basic call (localhost only)
curl http://localhost:3000/api/debug/env

# With debug token (if configured)
curl -H "x-debug-token: your-token" http://localhost:3000/api/debug/env
```

#### Via Debug Page
Visit `http://localhost:3000/debug` in your browser for a user-friendly interface.

### Response Format

```json
{
  "success": true,
  "environment": "development",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "variables": {
    "NODE_ENV": "development",
    "NEXT_PUBLIC_APP_URL": "http://localhost:3000",
    "PORT": "3000"
  },
  "missingVariables": ["DEBUG_TOKEN", "SMTP_HOST"],
  "note": "This endpoint only shows non-sensitive environment variables"
}
```

### Configuration

Add to your `.env.local`:
```bash
# Optional: Additional security token
DEBUG_TOKEN=your-secure-debug-token-here
```

### Production Safety

- ❌ **Never accessible in production** - Returns 404 in production
- ❌ **No sensitive data exposed** - Only shows safe variables
- ❌ **Localhost only** - Cannot be accessed remotely
- ✅ **Development only** - Perfect for debugging and testing

