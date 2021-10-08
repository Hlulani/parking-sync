import Head from 'next/head'
import Header from '../components/Header'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Parking Sync</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Preparing a parking lot app</h1>
      <Header />
    </div>
  )
}
