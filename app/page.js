import Image from 'next/image'
import SearchBar from './components/SearchBar'
import Sidebar from './components/Sidebar'
import MainBlock from './components/MainBlock'

export default function Home() {
  return (
    <main className='w-full bg-white'>
      <SearchBar />
      <MainBlock />
    </main>
  )
}
