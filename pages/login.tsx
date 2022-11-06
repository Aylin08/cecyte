import React from 'react'
import Log from '../components/Log'
import Layout from '../components/Layout'
import { BackgroundImage } from '@mantine/core'

const Login = () => {
    return (
        <Layout tituloPestaña='Inicio'>
            <BackgroundImage
             src="https://raw.githubusercontent.com/Aylin08/cecyte/main/public/img/fondoc.jpg">         
                  <Log />
            </BackgroundImage>
        </Layout>

    )
}

export default Login