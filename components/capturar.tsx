import React from 'react'
import AppShel from './appshel'
import Layout from './Layout'
import { useForm } from '@mantine/form';
import { TextInput, Button, Group } from '@mantine/core';
import styles from '../styles/Home.module.css'

const Capturar = () => {

    const form = useForm({
        initialValues: {
          titulo: '',
          autor: '',
          editorial:'',
          editor:'',
          edicion:'',
          copyright:'',
        },
      });


    return (
        <Layout tituloPestaña={'Capturar'}>
            <AppShel tituloPagina={'Captura'}>
  

      
      <div className={styles.wrapper}>

      <TextInput label="Titulo" placeholder="Titulo" 
       {...form.getInputProps('titulo')} />

      <TextInput mt="md" label="Autor" placeholder="Autor" 
      {...form.getInputProps('autor')}  />

      <TextInput mt="md" label="Editorial" placeholder="Editorial" 
      {...form.getInputProps('editorial')} />
   

      <TextInput mt="md" label="Editor" placeholder="Editor"
       {...form.getInputProps('editor')} />

      <TextInput mt="md" label="Edición" placeholder="Edición"
       {...form.getInputProps('edicion')} />

      <TextInput mt="md" label="Copyright" placeholder="Copyright"
      {...form.getInputProps('copyright')} />
      

      </div>
    <Group position="center" mt="xl">
        <Button variant="outline" 
        

        >
          Guardar Información
        </Button>
        
      </Group>


            </AppShel>
        </Layout>
    )
}

export default Capturar