import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import logo from '../public/assets/logo.png'
export default function Home(){ return (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="container mx-auto py-20">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-800">Laboratorium Kewirausahaan & Inkubator Bisnis<br/>FEIS UIN Suska Riau</h1>
          <p className="mt-4 text-gray-600">Wadah pembelajaran holistik untuk melahirkan wirausahawan kreatif, inovatif, dan berakhlak.</p>
          <div className="mt-6 flex gap-3">
            <a href="/about" className="px-4 py-2 bg-purple-600 text-white rounded-lg">Tentang Kami</a>
            <a href="/contact" className="px-4 py-2 border rounded-lg">Hubungi Kami</a>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-md bg-purple-50 p-6 flex items-center justify-center">
          <Image src={logo} alt="logo" width={320} height={320} className="object-contain"/>
        </div>
      </div>
    </main>
    <Footer />
  </div>
)}
