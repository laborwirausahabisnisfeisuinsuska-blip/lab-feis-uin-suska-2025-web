import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { DiscussionEmbed } from 'disqus-react'
export default function Ulasan(){ 
  const disqusShortname = 'your-disqus-shortname'
  const disqusConfig = { url: 'https://your-site.vercel.app/ulasan', identifier: 'ulasan-page', title: 'Ulasan Pengunjung' }
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main className='container mx-auto py-16'>
        <h2 className='text-2xl font-bold text-purple-800'>Ulasan Pengunjung</h2>
        <div className='mt-6 bg-white p-4 rounded-lg border'><DiscussionEmbed shortname={disqusShortname} config={disqusConfig} /></div>
      </main>
      <Footer />
    </div>
  )
}
