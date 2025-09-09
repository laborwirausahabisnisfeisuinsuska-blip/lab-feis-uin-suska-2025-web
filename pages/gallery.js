import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Gallery(){ return (
  <div className='min-h-screen'>
    <Navbar />
    <main className='container mx-auto py-16'>
      <h2 className='text-2xl font-bold text-purple-800'>Galeri Kegiatan</h2>
      <p className='mt-2 text-gray-600'>Dokumentasi kegiatan mahasiswa akan segera hadir di sini.</p>
      <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {Array.from({length:8}).map((_,i)=>(<div key={i} className='aspect-square bg-purple-100 rounded-lg flex items-center justify-center text-gray-500'>Foto Kegiatan</div>))}
      </div>
    </main>
    <Footer />
  </div>
)}
