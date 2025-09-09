import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function About(){ return (
  <div className='min-h-screen'>
    <Navbar />
    <main className='container mx-auto py-16'>
      <h2 className='text-2xl font-bold text-purple-800'>Tentang Kami</h2>
      <p className='mt-4 text-gray-600'>Pendidikan bisnis memiliki peran penting dalam mempersiapkan mahasiswa menjadi wirausahawan yang kreatif dan inovatif. Laboratorium ini dirancang sebagai wadah pembelajaran holistik yang mengintegrasikan nilai-nilai Islam dengan pengembangan ekonomi dan teknologi modern.</p>
      <p className='mt-3 text-gray-600'>Pendirian laboratorium ini dikuatkan dengan SK Rektor Uin Suska Riau No. 769 Tahun 2025 dan sejalan dengan visi fakultas untuk menghasilkan lulusan berkualitas di kawasan Asia pada 2025.</p>
    </main>
    <Footer />
  </div>
)}
