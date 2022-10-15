import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import Messages from '../../components/Messages';
import { UserInputs } from '../../components/UserInputs';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const {roomId} = router.query;
  return (
    <div className={styles.container}>
      <Head>
        <title>Room {roomId}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Messages roomId={roomId}/>
      <UserInputs roomId={roomId}/>

      </div>
)
}

export default Home
