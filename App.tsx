import "./global.css"
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";

import clsx from "clsx";
import { Toolbar } from "components/Toolbar";
import Boton from "components/Boton";

const styles = {
  texto: "text-3xl font-bold"
}

export default function App() {

  const aleatorio = Math.floor(5*Math.random())

  const colorTexto={

    "color-red-500" : aleatorio === 0,
    "color-yellow-500" : aleatorio === 1,
    "color-blue-500" : aleatorio === 2,
    "color-green-500" : aleatorio === 3,
    "color-orange-500" : aleatorio === 4,

  }

  return (
    <SafeAreaView className="flex-1">
      <Toolbar/>
      <View className="flex-1 bg-blue-100 justify-center items-center">
        <Text className={clsx(styles.texto, "color-indigo-500")}>App</Text>
        <Text className={clsx(styles.texto, "mt-3 color-[#FFA07A]")}>Nativewind</Text>
        <Text className={clsx(styles.texto,colorTexto,aleatorio===0 && "bg-white")}>Texto de color aleatorio</Text>
        <Boton onPress={()=> console.log("Boton Pulsado")} texto="Boton"></Boton>
      </View>
    </SafeAreaView>
  );
}