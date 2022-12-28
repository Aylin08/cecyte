import React from 'react'
import { Card, Image, Flex, Button, Group, Container, ActionIcon } from '@mantine/core';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
const Opciones = () => {
    return (
        <Container
            style={{
                paddingTop: '10%',
                paddingBottom: '12%',

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
                            src="https://raw.githubusercontent.com/Aylin08/cecyte/main/public/img/search.png"
                            height={150}
                            width={"100%"}

                        />
                    </Card.Section>
                    <Button variant="light" color='dark' fullWidth mt="md" radius="md">

                        <Link href="/capturar">Buscar</Link>
                    </Button>
                </Card>

                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                            height={160}
                            alt="Norway"
                        />
                    </Card.Section>
                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">

                        <Link href="/capturar">Iniciar Sesión</Link>
                    </Button>
                </Card>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                            height={160}
                            alt="Norway"
                        />
                    </Card.Section>
                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">

                        <Link href="/capturar">Iniciar Sesión</Link>
                    </Button>
                </Card>

            </Flex>
        </Container>
    )
}
export default Opciones