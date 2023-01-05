import React from 'react'
import { Footer, Text, ActionIcon, Group } from '@mantine/core';
import { BiRegistered } from 'react-icons/bi';
const Footers = () => {
  return (
    <Footer height={40} p="sm" sx={(theme) => ({ backgroundColor: '#571719' })}>
      <Group spacing="xs">

        <ActionIcon>
          <BiRegistered size={'90%'} color={'white'} />

        </ActionIcon>
        <Text color={'white'} fw={700} ta="right" fz="md">Copy Right 2023 </Text>
      </Group>
    </Footer>
  )
}
export default Footers