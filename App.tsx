import "./global.css"
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text,  } from "react-native";

import clsx from "clsx";
import Boton from "components/Boton";
import Toolbar from "components/Toolbar";
import { useEffect } from "react";
import { useColorScheme } from "nativewind";

const styles = {
  texto: "text-3xl font-bold"
}

export default function App() {

  const aleatorio = Math.floor(5*Math.random())

  const {colorScheme,setColorScheme}=useColorScheme()

  useEffect(()=> setColorScheme("system"), [])
  
  const colorTexto={

    "color-red-500" : aleatorio === 0,
    "color-yellow-500" : aleatorio === 1,
    "color-blue-500" : aleatorio === 2,
    "color-green-500" : aleatorio === 3,
    "color-orange-500" : aleatorio === 4,

  }

  return (
    <SafeAreaView className="dark flex-1">
      <Toolbar/>
      <View className="flex-1 bg-background dark:bg-darkBackground justify-center items-center">
        <Text className={clsx(styles.texto, "color-primary dark:color-darkPrimary")}>App</Text>
        <Text className={clsx(styles.texto, "color-secondary dark:color-darkSecondary")}>Nativewind</Text>
        <Text className={clsx(styles.texto,colorTexto,aleatorio===0 && "bg-white")}>Texto de color aleatorio</Text>
        <Boton onPress={()=> setColorScheme(colorScheme === "light" ? "dark" : "light")} texto="Boton"></Boton>
      </View>
    </SafeAreaView>
  );
}