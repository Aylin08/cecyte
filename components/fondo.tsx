import { BackgroundImage, Container, ScrollArea } from '@mantine/core'
import { sizes } from '@mantine/core/lib/ActionIcon/ActionIcon.styles'
import React from 'react'
import Footers from './Footer'
import Log from './Log'

const Fondo = () => {
  return (
    <BackgroundImage
      src="https://raw.githubusercontent.com/Aylin08/cecyte/main/public/img/fondoc.jpg"
      style={{
        maxWidth: '100%',
        height: '100%',

      }}
    >
      <ScrollArea style={{ height: '100%' }} type="never">
        <Container>
          <Log></Log>
        </Container>
      </ScrollArea>





    </BackgroundImage>
  )
}

export default Fondo