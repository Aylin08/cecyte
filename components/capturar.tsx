import { Button, Center, Flex, Group, TextInput } from '@mantine/core'
import { DatePicker } from '@mantine/dates';
import React from 'react'
import AppShel from './appshel'
import Layout from './Layout'
import { useState } from 'react';
import { Indicator } from '@mantine/core';
import api from '../services/api';
import styles from '../styles/Home.module.css';
import es from '@mantine/dates';
// First import locale data
import 'dayjs/locale/es';
import {IconReport } from '@tabler/icons';


const Capturar = (props: any) => {
    const [nombre, setNombre] = useState('');
    const [editor, setEditor] = useState('');
    const [editorial, setEditorial] = useState('');
    const [fecha, setFecha] = useState(new Date());
    const [paginas, setPaginas] = useState('');


    async function createPost() {

        if (!validacion()) {
            return;
        }
        const body = {
            data: {
                Nombre: nombre,
                Editor: editor,
                Editorial: editorial,
                fecha: fecha,
                paginas: paginas,
            }
        }
        try {
            await api.agregarLibros(body);

            limpiarFormulario();
            props.recargar();
            //Notification.success("Usuarios","Usuario agregado correctamente");
        } catch (error) {
            //Notification.error("Usuarios","Usuario no creado");
            console.error(error);
        }
    }

    function limpiarFormulario() {
        setNombre('');
        setEditor('');
        setEditorial('');
        setPaginas('');
        setFecha(new Date());

    }

    function validacion() {
        return nombre != '' && editor != '' && editorial != '' && paginas != '';
    }



    return (
        <Layout tituloPestaña={'Capturar'}>
            <AppShel tituloPagina={'Captura'}>
   
                <Group className={styles.wrapper}>
                    <TextInput
                        label="Título"
                        withAsterisk
                        value={nombre} onChange={(event) => setNombre(event.currentTarget.value)}
                    />
                    <TextInput
                        label="Autor"
                        withAsterisk
                    />

                    <TextInput
                        label="Editorial"
                        value={editorial} onChange={(event) => setEditorial(event.currentTarget.value)}
                        withAsterisk
                    />
                    <TextInput
                        label="Editor"
                        value={editor} onChange={(event) => setEditor(event.currentTarget.value)}
                        withAsterisk
                    />
                    <TextInput
                        label="Edición"
                        withAsterisk
                    />
                    <DatePicker
                    locale='es'

                        placeholder="Enero 1, 2023"
                        label="Fecha de Copyright"
                        withAsterisk
                        value={fecha}
                        // onChange={setFecha}
                        renderDay={(date) => {
                            const day = date.getDate();
                            return (
                                <Indicator size={6} color="red" offset={8} disabled={day !== 1}>
                                    <div>{day}</div>
                                </Indicator>
                            );
                        }}
                    />
                    <TextInput
                        label="Lugar de Publicación"
                        withAsterisk
                    />
                    <TextInput
                        label="Categoría"
                        withAsterisk
                    />
                    <TextInput
                        label="Idioma"
                        withAsterisk
                    />

                    <TextInput
                        label="Páginas"
                        value={paginas} onChange={(event) => setPaginas(event.currentTarget.value)}
                        withAsterisk
                    />
                    <TextInput
                        label="Estado"
                        withAsterisk
                    />
                    <TextInput
                        label="Ubicación"
                        withAsterisk
                    />
                    <TextInput
                        label="Notas"
                        withAsterisk
                    />

                    <Button uppercase top={16} leftIcon={<IconReport/>} variant="white">
                            Guardar</Button>

                </Group>

                
            </AppShel>
        </Layout>
    )
}

export default Capturar