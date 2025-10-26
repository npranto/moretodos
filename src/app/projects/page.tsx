import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className='container mx-auto py-8 px-4'>
      <div className='max-w-2xl mx-auto text-center'>
        <h1 className='text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4'>
          Projects
        </h1>
        <p className='text-zinc-600 dark:text-zinc-400 mb-8'>
          This is a simple example page for projects.
        </p>
        <Link
          href='/'
          className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300'
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
