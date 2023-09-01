import Image from 'next/image'
import { Heading, Main } from 'grommet'

import styles from './page.module.css'

const Home = () => {
  return (
    <Main className={styles.main}>
      <Heading>Hello World!</Heading>
    </Main>
  )
}

export default Home