import "./global.css"
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";

import clsx from "clsx";
import { Toolbar } from "components/Toolbar";

const styles = {
  texto: "text-3xl font-bold"
}

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <Toolbar/>
      <View className="flex-1 bg-blue-100 justify-center items-center">
        <Text className={clsx(styles.texto, "color-indigo-500")}>App</Text>
        <Text className={clsx(styles.texto, "mt-3 color-[#FFA07A]")}>Nativewind</Text>
      </View>
    </SafeAreaView>
  );
}