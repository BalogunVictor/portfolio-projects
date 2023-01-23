import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Greet } from '../components/Greet'
import { Person } from '@/components/Person'
import { PersonList } from '@/components/PersonList'
import { Status } from '@/components/Status'
import { Heading } from '@/components/Heading'
import { Oscar } from '@/components/Oscar'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Container } from '@/components/Container'
import { ThemeContextProvider } from '@/components/context/ThemeContext'
import { Box } from '@/components/context/Box'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    },
  ]

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       <Greet  name= 'Vishwas' isLoggedIn = {false} />
       <Person name={personName} />
       <PersonList names={nameList} />
       <Status status='loading' />
       <Heading> placeholder text </Heading>
       <Oscar>
        <Heading> Oscar goes to leonardo Discpario! </Heading>
       </Oscar>
       <Button
       handleClick={(event, id) => {
        console.log('Button clicked', event, id)
       }}
       />
       <Input value='' handleChange={(event) => console.log (event)} />
       <Container styles={{border: '1px solid black', padding: '1rem' }} />
       <ThemeContextProvider>
        <Box />
       </ThemeContextProvider>
      </main>
    </>
  )
}
