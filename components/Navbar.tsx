import React from 'react'
import { useState } from 'react';
import { Navbar, useMantineTheme } from '@mantine/core';
import StackButton from './stackButton';
const NavBar = () => {
    const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <Navbar
    style={{
      paddingTop: 30
    }}
    p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 250 }} sx={(theme) => ({ backgroundColor: '#A4E5A4' })}>

    <StackButton/>
  </Navbar>
  )
}

export default NavBar