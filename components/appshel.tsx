import React from 'react'
import Link from 'next/link';
import { AiOutlineHome, AiOutlineMore } from 'react-icons/ai'
import { useState } from 'react';
import { AppShell, useMantineTheme, Navbar, Stack, Button, Footer, Header, Text, MediaQuery, Burger } from '@mantine/core';

import Images from './Image';
import { FaEdit } from 'react-icons/fa';
import { BiPlus } from 'react-icons/bi';



const AppShel = ({ children, tituloPagina }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: '#FFFFFF',
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          style={{
            paddingTop: 30
          }}
          p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 250 }} sx={(theme) => ({ backgroundColor: '#A4E5A4' })}>

          <Stack sx={(theme) => ({ backgroundColor: '#A4E5A4' })}>

            <Button sx={(theme) => ({ backgroundColor: '#758E75', '&:hover': { backgroundColor: theme.fn.darken('#A1C298', 0.05), }, })} size="md" compact leftIcon={<BiPlus/>}><Link href='capturar'>Capturar</Link></Button>
            <Button sx={(theme) => ({ backgroundColor: '#758E75', '&:hover': { backgroundColor: theme.fn.darken('#A1C298', 0.05), }, })} size="md" compact leftIcon={<FaEdit />}><Link href='modificar'>Editar</Link></Button>

          </Stack>
        </Navbar>
      }
      footer={
        <Footer height={40} p="sm" sx={(theme) => ({ backgroundColor: '#A4E5A4' })}>
          <Text color={'black'}>Copy Right</Text>
        </Footer>
      }
      header={
        <Header height={60} p="md" sx={(theme) => ({ backgroundColor: '#A4E5A4' })} >
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
      <Text align="center" color='#A1C298' size="xl" transform="uppercase">{tituloPagina}</Text>
      {children}
    </AppShell>
  )
}

export default AppShel



