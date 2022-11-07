import React from 'react'
import { useState } from 'react';

import {Header, MediaQuery, Burger, Image, useMantineTheme,} from '@mantine/core';
import Images from './Image';

const Headers = () => {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
  return (
    <Header height={60} p="md" sx={(theme) => ({ backgroundColor: '#A4E5A4' })} >
    <div style={{ display: 'flex', alignItems: 'center', height: '100%'}}>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size="sm"
          color={theme.colors.gray[6]}
          mr="xl"
        />
      </MediaQuery>
     <Images/>
      
    </div>
  </Header>
  )
}

export default Headers