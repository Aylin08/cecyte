import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { Container, Flex, Text, Center, TextInput, PasswordInput, Group, Button,  } from '@mantine/core'
import Link from 'next/link'
import { FaUser } from 'react-icons/fa'
import ImagenInicio from './LogoInicio';
import { IconPassword } from '@tabler/icons';
import { BiLogInCircle } from 'react-icons/bi';


const Validation = z.object({

  empleadoNum : z.string().min(4,{message: 'Se necesita numero de empleado'}), //Cambiar numero min de empleado
  passwordEmpleado : z.string().min(4,({message:'Contraseña muy corta'}))

});



const Log = () => {



  const form = useForm({

    validate:zodResolver(Validation),

    initialValues:{
      empleadoNum:'',
      passwordEmpleado: 'secret'

    }

  })


  return (
    <Container size={350} px={0}
      style={{
        paddingTop: '10%',
        paddingBottom: '10%',

      }}

    > 

      <Flex
        mih={'40%'}
        bg="rgba(0, 0, 0, .3)"
        gap="xl"
        justify="center"
        align="center"
        direction="column"
        style={{
          borderRadius: '15%',
        }}>

        <Center>
          <ImagenInicio />
        </Center>
        <Text weight={700} align="center" fz="lg" style={{ fontFamily: 'Greycliff CF, sans-serif', color: 'white' }}>  Bienvenido (a)</Text>
       
         

    <form onSubmit={form.onSubmit((values)=> console.log)}>
   
        <TextInput
          style={{
            paddingLeft: '10%',
            paddingRight: '10%',
            width: '90%',


          }

        }
          mt="sm"
          label="Usuario"
          placeholder="No. Empleado"
          icon={<FaUser color='#571719'></FaUser>}
          color='white'

          {...form.getInputProps('empleadoNum')}

        />
        <PasswordInput
          style={{
            paddingLeft: '10%',
            paddingRight: '10%',
            width: '90%',

          }}
          placeholder="Contraseña"
          label="Contraseña"
          icon={<IconPassword color='#571719'></IconPassword>}

          {...form.getInputProps('passwordEmpleado')}
        />
        <Group position="center" mt="md" mb="xs">
          <br></br>

          <Button leftIcon={<BiLogInCircle />} sx={(theme) => ({ backgroundColor: '#571719', '&:hover': { backgroundColor: theme.fn.darken('#743C3E', 0.05), }, })} type="submit" >
           
          <Link href="/inicio">Iniciar Sesión</Link>
          </Button>
        </Group>
        </form>
        <br></br>
      </Flex>
    
    </Container>

  )
}


export default Log