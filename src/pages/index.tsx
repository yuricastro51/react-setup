import React from 'react';
import Head from 'next/head';

import VercelLogo from '../assets/vercel.svg';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>My Awesome React Setup</title>
      </Head>

      <main>
        <VercelLogo />
        <h1>Hello World Setup</h1>
      </main>
    </div>
  );
};

export default Home;
