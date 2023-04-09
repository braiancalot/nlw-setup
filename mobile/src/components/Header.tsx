import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />

      <TouchableOpacity
        activeOpacity={0.7}
        className="border border-violet-500 rounded-lg px-4 py-3 flex flex-row items-center"
      >
        <Feather name="plus" color={colors.violet[500]} size={20} />

        <Text className="text-white font-semibold ml-3">Novo</Text>
      </TouchableOpacity>
    </View>
  );
}
