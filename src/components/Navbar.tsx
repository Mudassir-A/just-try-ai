import Link from 'next/link'
import Image from 'next/image'
import { Github } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-[#0A0A0B]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/11164/11164256.png"
              alt="Just Try Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-white">Just-Try™</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}