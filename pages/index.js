import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div className={styles.container}>
          <Head>
              <title>Create Next App</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <div className={styles.landing}>
              <div className={styles.banner}>
                  <div className={styles.title}>
                      <img src="https://cdn.discordapp.com/attachments/666142372580556800/1066660758668197928/image.png"></img>
                      <h1>NEUROFUSION</h1>
                  </div>
                  <p>Making your brain & behavior data accessible to you</p>
              </div>
              <div className={styles.block}>
                  <div className={styles.body}>
                      <h1 className={styles.bodyTitle}>
                          You focus on the fun part - exploring
                      </h1>
                      <p>We provide:</p>
                      <ul>
                          <li>
                              A playground of experiments for collecting brain
                              data
                          </li>
                          <li>
                              Instant & interactive plots of recorded data:
                              <ul>
                                  <li>health</li>
                                  <li>eeg power</li>
                                  <li>self sample results</li>
                              </ul>
                          </li>
                          <li>Run datasets against available models</li>
                      </ul>
                  </div>
                  <img src="https://cdn.discordapp.com/attachments/666142372580556800/1066662400557862922/image.png"></img>
              </div>
              <div className={styles.block}>
                  <img src="https://cdn.discordapp.com/attachments/666142372580556800/1066663120422064161/image.png"></img>
                  <div className={styles.body}>
                      <h1 className={styles.bodyTitle}>
                          We enable community science
                      </h1>
                      <ul>
                          <li>
                              Taking brain (EEG) & behavior research out of the
                              lab
                          </li>
                          <li>"Run trials on yourself"</li>
                          <li>
                              Design studies (a set of experiments) and workflow
                          </li>
                          <li>Member opt-in and participate using hassle-free data collection & validation tools</li>
                          <li>Members maintain ownership of their data and consent to usage</li>
                          <li>Publish results incrementally as data updates</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  );
}
