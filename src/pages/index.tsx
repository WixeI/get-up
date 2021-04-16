import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';

//Components
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengesCompleted } from '../components/ChallengesCompleted';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';


export default function Home() {
  return (
    <main className={styles.container}>

      <Head>
        <title>Next App 1</title>
      </Head>

      <CountdownProvider>
        <ExperienceBar />
        <section>
          <div className={styles.leftContainer}>
            <Profile />
            <ChallengesCompleted />
            <Countdown />
          </div>
          <div className={styles.rightContainer}>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>

    </main>  
  );
}
