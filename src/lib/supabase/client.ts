import { createBrowserClient } from '@supabase/ssr';
import type { Database } from '@/types/supabase';

/**
 * Creates a Supabase client for Client Components
 *
 * Usage in Client Components:
 * ```tsx
 * 'use client'
 * import { createClient } from '@/lib/supabase/client'
 *
 * export default function MyClientComponent() {
 *   const supabase = createClient()
 *
 *   const handleClick = async () => {
 *     const { data, error } = await supabase.from('users').select('*')
 *     // ... handle response
 *   }
 *
 *   return <button onClick={handleClick}>Click me</button>
 * }
 * ```
 *
 * Usage with React hooks:
 * ```tsx
 * 'use client'
 * import { createClient } from '@/lib/supabase/client'
 * import { useEffect, useState } from 'react'
 *
 * export default function DataComponent() {
 *   const supabase = createClient()
 *   const [data, setData] = useState(null)
 *
 *   useEffect(() => {
 *     const fetchData = async () => {
 *       const { data, error } = await supabase.from('users').select('*')
 *       if (data) setData(data)
 *     }
 *     fetchData()
 *   }, [])
 *
 *   return <div>{...}</div>
 * }
 * ```
 */
export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
