import React from 'react'
import { Card, Image, Flex, Button, Group, Container, ActionIcon, Center } from '@mantine/core';
import Link from 'next/link';
import { BiBook, BiLogOutCircle, BiSearch } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
const Opciones = () => {
    return (
        <Container
            style={{
                paddingTop: '10%',
                paddingBottom: '12.5%',

            }}

        >

            <Flex
                mih={'50%'}

                gap="xl"
                justify="center"
                align="center"
                direction="row"
            >
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                            src="https://raw.githubusercontent.com/Aylin08/cecyte/main/public/img/libro.png"
                            height={150}
                            width={"100%"}

                        />
                    </Card.Section>
                    <Button variant="filled" color="#571719" fullWidth mt="md" radius="md" style={{ backgroundColor: '#571719' }}>
                        <Link href="/buscar">Buscar</Link>
                    </Button>
                </Card>

                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                            src="https://raw.githubusercontent.com/Aylin08/cecyte/main/public/img/contrato.png"
                            height={150}
                            width={"100%"}

                        />
                    </Card.Section>
                    <Button variant="filled" color="#571719" fullWidth mt="md" radius="md" style={{ backgroundColor: '#571719' }}>

                        <Link href="/capturar">Opciones</Link>
                    </Button>
                </Card>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                            src="https://raw.githubusercontent.com/Aylin08/cecyte/main/public/img/cerrar.png"
                            height={160}
                            width={"100%"}

                        />
                    </Card.Section>
                    <Button variant="filled" color="#571719" fullWidth mt="md" radius="md" style={{ backgroundColor: '#571719' }}>

                        <Link href="/">Salir</Link>
                    </Button>
                </Card>

            </Flex>
        </Container>
    )
}
export default Opciones