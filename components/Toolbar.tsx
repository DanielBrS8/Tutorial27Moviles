import { View, Text, useWindowDimensions } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function Toolbar() {
  const tam = useWindowDimensions()
  const tamIconos = tam.width < 768 ? 24 :
                    tam.width < 1024 ? 28 : 32;

  return (
    <View className='w-full flex-row items-center bg-blue-700 justify-between px-4
                      h-14
                      lg:h-20
                      sm:h-18
      '>
      <View className='flex-row items-center gap-3'>
        <MaterialIcons name={"menu"} size={tamIconos} color={"white"}/>
        <Text className='font-bold color-white
                        text-2xl
                        sm:text-3xl
                        lg:text-4xl
          '>Tutorial 28 App</Text>
      </View>
      <View className='flex-row gap-4'>
        <MaterialIcons name={"favorite"} size={tamIconos} color={"white"}/>
        <MaterialIcons name={"search"} size={tamIconos} color={"white"}/>
        <MaterialIcons name={"more-vert"} size={tamIconos} color={"white"}/>
      </View>
    </View>
  )
}