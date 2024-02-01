'use strict'

import Header from '../components/header/index'
import MainPage from '@/components/MainPage'

export default function Home() {
  return (
    <main className='bg-1'>
      <Header page={"home-page"}/>
      <MainPage/>
    </main>
  )
}
