import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { Database } from '@/types/supabase';

/**
 * Creates a Supabase client for Server Components and Server Actions
 *
 * Usage in Server Components:
 * ```tsx
 * import { createClient } from '@/lib/supabase/server'
 *
 * export default async function MyServerComponent() {
 *   const supabase = await createClient()
 *   const { data, error } = await supabase.from('users').select('*')
 *   // ... rest of component
 * }
 * ```
 *
 * Usage in Server Actions:
 * ```tsx
 * import { createClient } from '@/lib/supabase/server'
 *
 * export async function createUser(formData: FormData) {
 *   const supabase = await createClient()
 *   const { data, error } = await supabase.from('users').insert({...})
 *   // ... handle response
 * }
 * ```
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}
