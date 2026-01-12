import { View, Text, Pressable } from 'react-native'
import React from 'react'


type BotonProps = {

    texto:string
    onPress:()=>void

}


export default function Boton({texto,onPress}:BotonProps) {
  return (
    <Pressable onPress={onPress} className='px-4 py-2 rounded-md bg-blue-700 active:bg-blue-900 active:scale-90'>
      <Text className='text-white text-center font-bold'>{texto}</Text>
    </Pressable>
  )
}