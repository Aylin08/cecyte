import { BackgroundImage, Card, Container, ScrollArea, Space, Text } from '@mantine/core'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import Buscar from './buscar'



const BusquedaP = () => {
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
                <Text weight={700} align="center" fz="lg" style={{ fontFamily: 'Greycliff CF, sans-serif', color: 'white', paddingTop: '4%' }}> <BiSearch />   Búsqueda de libros </Text>
                <Container >
                    <Space h="xl" />

                    <Buscar />

                </Container >
            </ScrollArea>
        </BackgroundImage>
    )
}

export default BusquedaP