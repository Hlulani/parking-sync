import Head from "next/head";
import Header from "../components/Header";
import Results from "./../components/Results";

export default function Home() {
  const generateSpaceId = () => {
    const element = [];
    for (let index = 0; index < 51; index++) {
      element.push({
        barcode: generate(16),
        index,
      });
    }
    return element;
  };
  return (
    <div>
      <Head>
        <title>Parking Sync</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Results results={generateSpaceId()} />
    </div>
  );
}

function generate(n) {
  var add = 1,
    max = 12 - add;
  if (n > max) {
    return generate(max) + generate(n - max);
  }
  max = Math.pow(10, n + add);
  var min = max / 10;
  var number = Math.floor(Math.random() * (max - min + 1)) + min;
  return ("" + number).substring(add);
}
