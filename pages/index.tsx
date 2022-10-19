import type { NextPage } from 'next';
import { Container } from '../public/components/Container'
import { Button } from '../public/components/Button'
import Head from 'next/head';
import Image from 'next/image';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>That´s My Ideia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>

       <h1>Hello World!</h1>
       <Button>Ola mundo</Button>
       <Button size={"large"}>Ola mundo</Button>
       <Button size={"small"}>Ola mundo</Button>
       <hr />
       <Button color={"solid"} size={"small"}>Ola mundo</Button>
       <Button color={"outline"} size= {"large"}>Ola mundo</Button>
       <hr />
       <Button color={"solid"}>Ola mundo</Button>
       <Button color={"outline"}>Ola mundo</Button>
      </Container>


    </div>
  );
};

export default Home;
