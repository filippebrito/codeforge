import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export function ProfileScreen() {

  const insets = useSafeAreaInsets();
  return (
    <View 
        className="flex-1 bg-surface"
        style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <StatusBar style="dark" />
      <Text>Perfil</Text>
    </View>
  );
}
