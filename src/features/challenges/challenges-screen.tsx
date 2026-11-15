import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { TabHeader } from "@/shared/components/composite/tab-header/tab-header";
import { Screen } from "@/shared/components/ui/screen/screen";

export function ChallengesScreen() {

  const insets = useSafeAreaInsets();
  return (
      <Screen>
          <TabHeader />
      </Screen>
  );
}
