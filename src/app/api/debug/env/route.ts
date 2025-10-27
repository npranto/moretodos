import { NextRequest, NextResponse } from 'next/server';

/**
 * Development-only API route for debugging environment variables
 * This route is restricted to development environment only for security
 */
export async function GET(request: NextRequest) {
  // Security check: Only allow in development
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json(
      { error: 'This endpoint is only available in development mode' },
      { status: 404 }
    );
  }

  // Additional security: Check for localhost or specific debug token
  const url = new URL(request.url);
  const debugToken = request.headers.get('x-debug-token');
  const isLocalhost =
    url.hostname === 'localhost' || url.hostname === '127.0.0.1';

  // Require either localhost access or debug token
  if (!isLocalhost && debugToken !== process.env.DEBUG_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 });
  }

  // Collect environment variables (excluding sensitive ones)
  const envVars = {
    // Core Next.js variables
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    PORT: process.env.PORT,

    // Development flags
    DEBUG: process.env.DEBUG,
    VERBOSE_LOGGING: process.env.VERBOSE_LOGGING,
    USE_MOCK_DATA: process.env.USE_MOCK_DATA,

    // Feature flags
    NEXT_PUBLIC_ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS,
    NEXT_PUBLIC_ENABLE_DEBUG_MODE: process.env.NEXT_PUBLIC_ENABLE_DEBUG_MODE,
    NEXT_PUBLIC_ENABLE_MAINTENANCE_MODE:
      process.env.NEXT_PUBLIC_ENABLE_MAINTENANCE_MODE,

    // Analytics (public only)
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    NEXT_PUBLIC_PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,

    // CORS and security
    NEXT_PUBLIC_CORS_ORIGIN: process.env.NEXT_PUBLIC_CORS_ORIGIN,

    // Cache and performance
    CACHE_TTL: process.env.CACHE_TTL,

    // API configuration
    RATE_LIMIT_MAX_REQUESTS: process.env.RATE_LIMIT_MAX_REQUESTS,
    RATE_LIMIT_WINDOW_MS: process.env.RATE_LIMIT_WINDOW_MS,

    // File upload limits
    MAX_FILE_SIZE: process.env.MAX_FILE_SIZE,
    ALLOWED_FILE_TYPES: process.env.ALLOWED_FILE_TYPES,
  };

  // Filter out undefined values for cleaner output
  const filteredEnvVars = Object.fromEntries(
    Object.entries(envVars).filter(([_, value]) => value !== undefined)
  );

  return NextResponse.json({
    success: true,
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
    variables: filteredEnvVars,
    // Show which variables are missing from .env.example
    missingVariables: Object.keys(envVars).filter(
      key => envVars[key as keyof typeof envVars] === undefined
    ),
    note: 'This endpoint only shows non-sensitive environment variables',
  });
}
