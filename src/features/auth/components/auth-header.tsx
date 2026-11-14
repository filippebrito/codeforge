import { Text, View } from "react-native";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";

export function AuthHeader() {
    return (
      <View className="mb-6 items-center">
        <View className="mb-4 h-14 w-14 items-center justify-center rounded-2xl bg-primary">
          <FontAwesome6 name="terminal" iconStyle="solid" size={22} color="#ffffff" />
        </View>

        <View className="mb-2">
          <Text className="text-3xl font-bold text-on-surface">
            CodeForge
          </Text>
          <View className="absolute -right-2 top-1 h-2 w-2 rounded-full bg-primary" />
        </View>

        <Text className="text-center text-sm text-outline">
          Aprenda arquitetura e código no seu ritmo.
        </Text>
      </View>
    );
}