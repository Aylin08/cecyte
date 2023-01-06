import { Button, Center, Group, TextInput } from '@mantine/core'
import { DatePicker } from '@mantine/dates';
import React from 'react'
import AppShel from './appshel'
import Layout from './Layout'
import { useState } from 'react';
import { Indicator } from '@mantine/core';

const Capturar = () => {

  
  
    return (
        <Layout tituloPestaña={'Capturar'}>
            <AppShel tituloPagina={'Captura'}>
                <Group>
                    <TextInput
                        label="Título"
                        withAsterisk
                    />
                    <TextInput
                        label="Autor"
                        withAsterisk
                    />
                    
                    <TextInput
                        label="Editorial"
                        withAsterisk
                    />
                    <TextInput
                        label="Editor"
                        withAsterisk
                    />
                    <TextInput
                        label="Edición"
                        withAsterisk
                    />
                     <DatePicker
                          
                          placeholder="Enero 1, 2023"
                          label="Fecha de Copyright"
                          withAsterisk
                          
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

                </Group>

                <Button uppercase top={50} >
                      Guardar
                    </Button>
            </AppShel>
        </Layout>
    )
}

export default Capturar