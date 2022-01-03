import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Dálcio Garcia</title>
      </Head>
      <h1>Hi!! I am Dálcio Garcia Development branch</h1>
      <p>Thanks for your visit, I will be ready soon</p>
    </Container>
  )
}

export default Home
