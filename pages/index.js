import Head from 'next/head'
import Header from '../components/Header'
import Body from '../components/Body'

export default function Home() {
  return (
    <div className="flex bg-gray-50 flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header*/}
      <Header />
      {/*Home Body*/}
      <Body />
      {/*Home Footer*/}
    </div>
  )
}
