import Head from 'next/head'
import Image from 'next/image'
import logo from '../pages/logo.png'

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>End of Life.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="App-header">
      <Image src={logo} className="App-logo" alt="logo" width="400" height="400"/>
        <p>
          <b>Friendbase</b> has Reached its <u>End of Life</u>. It will be continued by         <a
          className="App-link"
          href="https://friendbase.tech/unbalanced"
          target=""
          rel=""
        >
          UnBalanced
        </a>
        </p>
      </header>
    </div>
  )
}