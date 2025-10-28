import { createServerClient } from '@supabase/ssr';
import { NextRequest, NextResponse } from 'next/server';
import type { Database } from '@/types/supabase';

/**
 * Creates a Supabase client for Next.js middleware
 * Used for auth token refresh and route protection
 *
 * Usage in middleware.ts:
 * ```tsx
 * import { createClient } from '@/lib/supabase/middleware'
 *
 * export async function middleware(request: NextRequest) {
 *   const supabase = createClient(request)
 *
 *   // Refresh session if expired
 *   const { data: { session } } = await supabase.auth.getSession()
 *
 *   // Protect routes or redirect based on auth state
 *   if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
 *     return NextResponse.redirect(new URL('/login', request.url))
 *   }
 *
 *   return NextResponse.next()
 * }
 * ```
 */
export function createClient(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            });
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  return { supabase, response };
}
