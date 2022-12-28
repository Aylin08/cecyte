import { Container, Flex, Text, Center, TextInput, PasswordInput, Group, Button } from '@mantine/core'
import Link from 'next/link'
import { FaUser } from 'react-icons/fa'
import { CgLogIn } from 'react-icons/cg'
import ImagenInicio from './LogoInicio';
import { IconPassword } from '@tabler/icons';
import { BiLogInCircle } from 'react-icons/bi';

const Log = () => {

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
        <TextInput
          style={{
            paddingLeft: '10%',
            paddingRight: '10%',
            width: '90%',


          }}
          mt="sm"
          label="Usuario"
          placeholder="No. Empleado"
          icon={<FaUser color='#571719'></FaUser>}
          color='white'

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
        />
        <Group position="center" mt="md" mb="xs">
          <br></br>
          <Button leftIcon={<BiLogInCircle />} sx={(theme) => ({ backgroundColor: '#571719', '&:hover': { backgroundColor: theme.fn.darken('#743C3E', 0.05), }, })} type="submit" >
            <Link href="/inicio">Iniciar Sesión</Link>
          </Button>
        </Group>
        <br></br>
      </Flex>

    </Container>

  )
}


export default Log