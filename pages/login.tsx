import React from 'react'
import Log from '../components/Log'
import Layout from '../components/Layout'
import { BackgroundImage, Box, Center } from '@mantine/core'

const Login = () => {
    return (
        <Layout tituloPestaña='Iniciar sesión'>

            <Box
                sx={(theme) => ({
                    fontSize: theme.fontSizes.md,
                    '@media (max-width: 755px)': {
                        fontSize: theme.fontSizes.sm,
                    },
                })}>

                <BackgroundImage
                    src="https://raw.githubusercontent.com/Aylin08/cecyte/main/public/img/fondoc.jpg"
                    radius="sm"
                >
                    <Center p="md">
                        <Log />
                    </Center>

                </BackgroundImage>
            </Box>

        </Layout>








    )
}

export default Login