import { BackgroundImage, Card, Container, Divider, ScrollArea, Space, Text } from '@mantine/core'
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
                <Text weight={700} align="center" fz="lg" style={{ fontFamily: 'Greycliff CF, sans-serif', color: 'white', paddingTop: '4%' }}>  Biblioteca CECyTE</Text>
                <Container size={700} px={0} >
                    <Card style={{
                        background: '#571719',
                        // height: 700,
                        width: 700,
                        color: 'white',
                        marginTop: 20
                    }}>
                        <Text size={19}><BiSearch />   Búsqueda de libros </Text>
                        <Divider color={"black"} size={2} />
                        <Space h="lg" />
                        <Card.Section style={{
                            background: '#D9D9D9',
                            
                            width: 630,
                            marginLeft: 20,
                            marginBottom: 4
                        }}>
                            <Buscar />
                        </Card.Section>

                    </Card>
                </Container >
            </ScrollArea>
        </BackgroundImage>
    )
}

export default BusquedaP