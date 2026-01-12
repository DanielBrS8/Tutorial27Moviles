import { View, Text } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export function Toolbar() {
  return (
    <View className="h-14 w-full flex-row items-center justify-between bg-blue-700 px-4">
      <View className="flex-row items-center gap-3">
        <MaterialIcons name={'menu'} size={24} color={'white'} />
        <Text className='font-bold text-2x1 color-white'>Tutorial 27 App</Text>
      </View>
      <View className="flex-row gap-4">
        <MaterialIcons name={'favorite'} size={24} color={'white'} />
        <MaterialIcons name={'search'} size={24} color={'white'} />
        <MaterialIcons name={'more-vert'} size={24} color={'white'} />
      </View>
    </View>
  );
}
