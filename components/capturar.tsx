import { Group, TextInput } from '@mantine/core'
import React from 'react'
import AppShel from './appshel'
import Layout from './Layout'

const Capturar = () => {
    return (
        <Layout tituloPestaña={'Capturar'}>
            <AppShel tituloPagina={'Captura'}>
                <Group>
                    <TextInput
                        label="Nombre"
                        withAsterisk
                    />
                    <TextInput
                        label="Editor"
                        withAsterisk
                    />
                    <TextInput
                        label="Editorial"
                        withAsterisk
                    />
                    <TextInput
                        label="Fecha"
                        withAsterisk
                    />
                    <TextInput
                        label="Paginas"
                        withAsterisk
                    />
                </Group>
            </AppShel>
        </Layout>
    )
}

export default Capturar