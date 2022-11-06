import React from 'react'
import { Image, Center, Text } from '@mantine/core';
const Log = () => {
  return (

    <Image
      src='https://photos.app.goo.gl/UtE2cJ3Z5dwTh4kv7'
      radius="sm"
    >
      <Center p="md">
        <Text color="#000">
          BackgroundImage component can be used to add any content on image. It is useful for hero
          headers and other similar sections
        </Text>
      </Center>
    </Image>


  )
}

export default Log