import React, {ReactNode} from 'react'
import Link from 'next/link';
import { AiOutlineHome, AiOutlineMore } from 'react-icons/ai'
import { useState } from 'react';
import { AppShell, useMantineTheme, Navbar, Stack, Button, Footer,
   Header, Text, MediaQuery, Burger, BackgroundImage } from '@mantine/core';
import Images from './Image';
import { FaBackspace, FaBackward, FaEdit } from 'react-icons/fa';
import { BiArrowBack, BiPlus } from 'react-icons/bi';
import Footers from './Footer';

import styles from '../styles/Home.module.css';


interface Props {
  children?: ReactNode,
  tituloPagina?:ReactNode
  // any props that come into the component
}



const AppShel = ({ children, tituloPagina }:Props) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <Stack>

    <BackgroundImage
          src="https://raw.githubusercontent.com/Aylin08/cecyte/main/public/img/fondologo.png"
          style={{
            position: 'absolute',

          }}
        >
    <AppShell
      
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
      
   
        <Navbar
          style={{
            paddingTop: 30,

            backgroundColor: '#DDCBA4'
            
          }}
          p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 250 }} 
         >

          
          <Stack sx={(theme) => ({ backgroundColor: '#DDCBA4' })}>
            
            
   
            <Button sx={(theme) => ({ backgroundColor: '#9B2242', '&:hover':
             { backgroundColor: theme.fn.darken('#A1C298', 0.05), }, })} size="md" compact leftIcon={<BiPlus />}><Link href='Captura'>Capturar</Link></Button>
            <Button sx={(theme) => ({ backgroundColor: '#9B2242', '&:hover': 
            { backgroundColor: theme.fn.darken('#A1C298', 0.05), }, })} size="md" compact leftIcon={<FaEdit />}><Link href='editar'>Editar</Link></Button>
            <Button sx={(theme) => ({ backgroundColor: '#9B2242', '&:hover': 
            { backgroundColor: theme.fn.darken('#A1C298', 0.05), }, })} size="md" compact leftIcon={<BiArrowBack />}><Link href='inicio'>Regresar</Link></Button>
          
         
            
          </Stack>
        </Navbar>
     

  
      }
      footer={
        <Footers />
      }
      header={<Header height={80} p="md" sx={(theme) => ({ backgroundColor: '#651C32' })} >
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>
          <Images />

        </div>
      </Header>
      }
    >
      {/* <Text align="center" color='#A1C298' size="xl" transform="uppercase" >{tituloPagina}</Text> */}
      <h2  className={styles.h1} >{tituloPagina}</h2>
      {children}
    </AppShell>

    </BackgroundImage>

    </Stack>
  )
}

export default AppShel



