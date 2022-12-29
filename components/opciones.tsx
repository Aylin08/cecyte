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

                        <Link href="/buscar">Buscar</Link>
                    </Button>
                </Card>

                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Center>
                            <ActionIcon>
                                <BiBook size={'800%'} color={'#571719'} />
                            </ActionIcon>
                        </Center>
                    </Card.Section>
                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">

                        <Link href="/capturar"> más opciones</Link>
                    </Button>
                </Card>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Center>
                            <ActionIcon>
                                <BiLogOutCircle size={'800%'} color={'#571719'} />
                            </ActionIcon>
                        </Center>
                    </Card.Section>
                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">

                        <Link href="/">Salir</Link>
                    </Button>
                </Card>

            </Flex>
        </Container>
    )
}
export default Opciones