import { Container, Card, Flex, Text, Center, TextInput, PasswordInput, Group, Button } from '@mantine/core'
import Link from 'next/link'
import { BiUser, BiLock } from 'react-icons/bi'
import { CgLogIn } from 'react-icons/cg'
import Images from './Image';

const Log = () => {

  return (
    <Container size={350} px={0}
      style={{
        paddingTop: '10%',
        paddingBottom: '10%'
      }}

    >

      <Flex
        mih={'40%'}
        bg="rgba(0, 0, 0, .3)"
        gap="xl"
        justify="center"
        align="center"
        direction="column" >

        <Center>
          <Images />
        </Center>
        <Text weight={700} align="center" style={{ fontFamily: 'Greycliff CF, sans-serif', color: 'white' }}>  Bienvenido (a)</Text>
        <TextInput
          style={{
            paddingLeft: '10%',
            paddingRight: '10%',
            width: '90%',

          }}
          mt="sm"
          label="Usuario"
          placeholder="No. Empleado"
          icon={<BiUser></BiUser>}

        />
        <PasswordInput
          style={{
            paddingLeft: '10%',
            paddingRight: '10%',
            width: '90%',

          }}
          placeholder="Contraseña"
          label="Contraseña"
          icon={<BiLock></BiLock>}
        />
        <Group position="center" mt="md" mb="xs">
          <br></br>
          <Button leftIcon={<CgLogIn />} sx={(theme) => ({ backgroundColor: '#571719', '&:hover': { backgroundColor: theme.fn.darken('#743C3E', 0.05), }, })} type="submit" >
            <Link href="/inicio">Iniciar Sesión</Link>
          </Button>
        </Group>
        <br></br>
      </Flex>

    </Container>

  )
}


export default Log