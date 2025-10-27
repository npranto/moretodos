import Link from 'next/link';
import { Button } from '@/components/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';
import { ClientInput } from '@/components/Input.client';

export default function Home() {
  return (
    <div className='min-h-screen bg-zinc-50 dark:bg-black p-8'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8'>
          MoreTodos
        </h1>

        <div className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Navigation</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-2'>
              <Link href='/todos'>
                <Button className='w-full'>Todos</Button>
              </Link>
              <Link href='/projects'>
                <Button className='w-full'>Projects</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Component Examples</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <ClientInput />
              <div className='flex gap-2'>
                <Button variant='primary'>Primary</Button>
                <Button variant='outline'>Outline</Button>
                <Button variant='secondary'>Secondary</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
