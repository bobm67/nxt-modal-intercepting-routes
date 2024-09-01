import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Header() {
  return (
    <header className='py-4'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-6 w-full'>
          <li>
            <Link href='/' className='text-3xl font-bold mb-4 text-center'>Coffee Feed</Link>
            <hr />

          </li>
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  )
}
