import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/assets/logo.png'
export default function Navbar(){ return (
  <header className="bg-white/60 sticky top-0 backdrop-blur border-b z-40">
    <div className="container flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <Image src={logo} alt="logo" width={56} height={56} className="rounded-md" />
        <div className="text-sm font-semibold text-purple-800">Laboratorium Kewirausahaan & Inkubator</div>
      </div>
      <nav className="hidden md:flex gap-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">Tentang</Link>
        <Link href="/gallery">Galeri</Link>
        <Link href="/ulasan">Ulasan</Link>
        <Link href="/contact">Kontak</Link>
      </nav>
    </div>
  </header>
)}
