import React, { useState, useEffect } from 'react';
import { Table, ActionIcon, ScrollArea, TextInput, Group, Divider } from '@mantine/core';
import { BiSearch } from 'react-icons/bi'
import { HiOutlineSearchCircle } from 'react-icons/hi'
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';



const Buscar = () => {
  const [buscar, setBuscar] = useState("");
  
  
  return (
    <ScrollArea style={{ height: 250 }} type="always" scrollbarSize={18}>
      <Group style={{
        height: 40,

      }}>

      

     
       
       <TextInput
          style={{
            width: '45%',
            marginTop: 4,
            marginLeft: 2,

          }}
          placeholder="Buscar"
          value={buscar}
          mb="sm"
          icon={<BiSearch></BiSearch>}
        />

        <ActionIcon variant="light" size={23} color="dark" style={{
          marginLeft: '2%',
          marginBottom: 5,
          width: 40
        }}>

          
          <HiOutlineSearchCircle />
        </ActionIcon>


      </Group>
      <Divider color={"black"} size={1} />
      <Table horizontalSpacing="xl" verticalSpacing="md" fontSize="xs">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Editor</th>
            <th>Editorial</th>
            <th>Fecha publicación</th>
            <th>Páginas</th>
            {/* <th>Estatus</th> */}
            <th></th>
          </tr>
        </thead>


      </Table>
    </ScrollArea>
  )
}

export default Buscar