import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Contact(){ return (
  <div className='min-h-screen'>
    <Navbar />
    <main className='container mx-auto py-16'>
      <h2 className='text-2xl font-bold text-purple-800'>Hubungi Kami</h2>
      <p className='mt-3 text-gray-600'>Panam, Jl. HR. Soebrantas No.Km. 15, RW.15, Simpang Baru, Kota Pekanbaru, Riau 28293</p>
      <p className='mt-1 text-gray-600'>Email: <a className='text-purple-700' href='mailto:laborwirausahadanbisnis@gmail.com'>laborwirausahadanbisnis@gmail.com</a></p>
      <p className='mt-1 text-gray-600'>Telp/WA: <a className='text-purple-700' href='https://wa.me/6281378363052'>+62 813-7836-3052</a></p>
      <div className='mt-6 rounded-lg overflow-hidden border'><iframe className='w-full h-64' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6761797376516!2d101.35583867496568!3d0.4819734994914086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ac0bb74e2c3f%3A0x8a0a74b6d77f68d5!2sUIN%20Sultan%20Syarif%20Kasim%20Riau!5e0!3m2!1sid!2sid!4v1693737612345!5m2!1sid!2sid' allowFullScreen loading='lazy'></iframe></div>
    </main>
    <Footer />
  </div>
)}
