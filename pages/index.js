import Head from 'next/head'
import Header from '../components/Header'
import Results from './../components/Results';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Parking Sync</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Results/>
    </div>
  )
}

