import { ActionIcon, Divider, Group, ScrollArea, Space, Table, TextInput, Button } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import { BiEdit, BiSearch } from 'react-icons/bi';
import { GoTrashcan } from 'react-icons/go';
import AppShel from '../components/appshel'
import Layout from '../components/Layout'
import api from '../services/api';
import { IconEditCircle } from '@tabler/icons';



const Modificar = (props: any) => {
    const [buscar, setBuscar] = useState<any>('');
    const [data, setData] = useState<any[]>([]);
    const [usuarios, setUsuarios] = useState<any[]>([]);
    useEffect(() => {
        init();
    }, [])
    useEffect(() => {
        init();
    }, [props.reload])

    async function init() {

        const list = await api.consultaLibros();
        setData(list.data);
        setUsuarios(list.data);
    }

    const handleChange = (e: any) => {
        setBuscar(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda: any) => {
        var resultadosBusqueda = data.filter((elemento) => {
            if (elemento.attributes.Nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setUsuarios(resultadosBusqueda);
    }

    async function deletePost(id: String) {
        try {
            await api.eliminarLibros(id);
            //Notification.success("Mantenimiento", "Se ha eliminado con éxito");
            init();
        } catch (error) {
            // Notification.error("Mantenimieto", "No se ha podido eliminar");
            console.error(error);
        }

    }

    const rows = usuarios && usuarios.map((d) => (
        <tr key={d.id}>
            <td>{d.attributes.Nombre}</td>
            <td>{d.attributes.Editor}</td>
            <td>{d.attributes.Editorial}</td>
            <td>{d.attributes.Fecha}</td>
            <td>{d.attributes.paginas}</td>
            <td>
                <Group spacing="xs">
                    <ActionIcon radius="xs" size="xs">
                        <BiEdit></BiEdit>
                    </ActionIcon>

                    <ActionIcon radius="xs" size="xs" >
                        <GoTrashcan onClick={(id) => deletePost(d.id)} />
                    </ActionIcon>
                </Group>

            </td>
        </tr>
    ));
    return (
        <Layout tituloPestaña={'Edición'}>
            <AppShel tituloPagina={'Edición'}>
                <ScrollArea style={{ height: '80%' }} type="never" scrollbarSize={10}>
                    <Group style={{
                        height: 40
                    }}>
                        <TextInput
                            style={{
                                width: 200,
                                marginTop: 4,
                                marginLeft: 5,
                            }}
                            placeholder="Buscar"
                            value={buscar}
                            onChange={handleChange}
                            mb="sm"
                            icon={<BiSearch></BiSearch>}
                        />



                    </Group>
                    <Space h="xl" />
                    <Divider color={"black"} size={1} />
                    <Table horizontalSpacing="xl" verticalSpacing="md" fontSize="xs">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Editor</th>
                                <th>Editorial</th>
                                <th>Fecha publicación</th>
                                <th>Páginas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </ScrollArea>
            </AppShel>
        </Layout>
    )
}

export default Modificar