import { BackgroundImage, Container, ScrollArea } from '@mantine/core'
import React from 'react'
import Footers from './Footer'
import Log from './Log'

const Fondo = () => {
  return (
    <BackgroundImage
      src="https://raw.githubusercontent.com/Aylin08/cecyte/main/public/img/fondoc.jpg"
      style={{
        position: 'absolute',

      }}
    >
      <ScrollArea style={{ height: '100%' }} type="never">
        <Container>
          <Log></Log>
        </Container>
        <Footers />
      </ScrollArea>
    </BackgroundImage>
  )
}

export default Fondo