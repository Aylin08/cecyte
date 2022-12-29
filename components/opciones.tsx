import React from 'react'
import { Card, Image, Flex, Button, Container } from '@mantine/core';
import Link from 'next/link';

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
                <Card shadow="sm" p="lg" radius="lg" withBorder>
                    <Card.Section>
                        <Image
                            src="https://raw.githubusercontent.com/Aylin08/cecyte/main/public/img/contrato.png"
                            height={150}
                            width={"100%"}

                        />
                    </Card.Section>
                    <Button variant="outline" color="gray" fullWidth mt="md" radius="md" >

                        <Link href="/capturar">Opciones</Link>
                    </Button>
                </Card>
                <Card shadow="sm" p="lg" radius="lg" withBorder>
                    <Card.Section>
                        <Image
                            src="https://raw.githubusercontent.com/Aylin08/cecyte/main/public/img/libro.png"
                            height={150}
                            width={"100%"}

                        />
                    </Card.Section>
                    <Button variant="outline" color="gray" fullWidth mt="md" radius="md" >

                        <Link href="/buscar">Buscar</Link>
                    </Button>
                </Card>


                <Card shadow="sm" p="lg" radius="lg" withBorder>
                    <Card.Section>
                        <Image
                            src="https://raw.githubusercontent.com/Aylin08/cecyte/main/public/img/cerrar.png"
                            height={160}
                            width={"100%"}

                        />
                    </Card.Section>
                    <Button variant="outline" color="gray" fullWidth mt="md" radius="md" >
                        <Link href="/">Salir</Link>
                    </Button>
                </Card>

            </Flex>
        </Container>
    )
}
export default Opciones