import React from 'react'
import Log from '../components/Log'
import Layout from '../components/Layout'
import { BackgroundImage, Box, Center } from '@mantine/core'

const Login = () => {
    return (


        <Box xs={{ maxWidth: 700 }} mx="auto">
            <Layout tituloPestaña='Iniciar sesión'>
                <BackgroundImage
                    src="https://raw.githubusercontent.com/Aylin08/cecyte/main/public/img/fondoc.jpg"
                    radius="sm"
                >
                    <Center p="md">
                        <Log />
                    </Center>

                </BackgroundImage>
            </Layout>
        </Box>




    )
}

export default Login