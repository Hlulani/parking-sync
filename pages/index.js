import Head from 'next/head'
import Header from '../components/Header'
import Results from './../components/Results';

export default function Home() {

  const generateSpaceId = () => {
    const element = [];
    for (let index = 0; index < 50; index++) {
      element.push(index);
      
    }

    return element;
  }

  return (
    <div>
      <Head>
        <title>Parking Sync</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Results
      results={generateSpaceId()}
      />
    </div>
  )
}

