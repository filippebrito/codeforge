import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Screen } from "@/shared/components/ui/screen/screen";
import { TabHeader } from "@/shared/components/composite/tab-header/tab-header";

export function TrackScreen() {

  const insets = useSafeAreaInsets();
  return (
        <Screen>
            <TabHeader />
        </Screen>
  );
}
