import Head from 'next/head'
import Image from 'next/image'
import main from '../public/main.png'

function unBalanced() {
  return (
    <div className="App">
      <div className='heading'>
      <br />
      ㅤ
      <a
          className="App-link2"
          href="https://friendbase.tech"
          target="_self"
          rel=""
        >
          Back to Friendbase.
      </a>
      ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ<b>info@friendbase.tech </b>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ&copy; Fib inc. 2022
      <br />
      ㅤ
      </div>
      <Head>
        <title>UnBalanced.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="App-header">
      <Image src={main} className="Main" alt="logo" width="250" height="250"/>
        <p>
          See <b>UnBalanced</b> in action.
        </p>
        <a
          className="App-link"
          href="https://drive.google.com/uc?export=download&id=1RuCdcp1G0CDkj7lbVsXhYXHTrlUQz1fb"
          target=""
          rel=""
        >
          Download for Windows
        </a>
      </header>
    </div>
  )
}

export default unBalanced