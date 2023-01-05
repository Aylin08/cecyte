import React, { useState, useEffect } from 'react';
import { Table, ScrollArea, TextInput, Group, Divider, Space } from '@mantine/core';
import { BiSearch } from 'react-icons/bi'
import api from '../services/api';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';



const Buscar = (props: any) => {
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
      if (elemento.attributes.Nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  }

  const rows = usuarios && usuarios.map((d) => (
    <tr key={d.id}>
      <td>{d.attributes.Nombre}</td>
      <td>{d.attributes.Editor}</td>
      <td>{d.attributes.Editorial}</td>
      <td>{d.attributes.Fecha}</td>
      <td>{d.attributes.paginas}</td>

    </tr>
  ));
  return (
    <ScrollArea style={{ height: 250 }} type="always" scrollbarSize={18}>
      <Group style={{
        height: 40,
      }}>

        <TextInput
          style={{
            width: '55%',
            marginTop: 4,
            marginLeft: 2,

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
  )
}

export default Buscar