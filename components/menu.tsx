import { BackgroundImage, Center, ScrollArea, Text } from '@mantine/core'
import React from 'react'
import Footers from './Footer'
import Images from './Image'
import Opciones from './opciones'

const MenuOP
    = () => {
        return (
            <BackgroundImage
                src="https://raw.githubusercontent.com/Aylin08/cecyte/main/public/img/fondoc.jpg"
                style={{
                    maxWidth: '100%',
                    height: '100%',
                    position: 'absolute',

                }}
            >
                <ScrollArea style={{ height: '100%' }} type="never">
                    <Text weight={700} align="center" fz="lg" style={{ fontFamily: 'Greycliff CF, sans-serif', color: 'white', paddingTop: '4%' }}>  Hola amigo(a)</Text>
                    <Center><Images /> </Center>
                    <Opciones />
                    <Footers />
                </ScrollArea>
            </BackgroundImage>
        )
    }

export default MenuOP
