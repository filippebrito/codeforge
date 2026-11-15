import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { TabHeader } from "@/shared/components/composite/tab-header/tab-header";
import { Screen } from "@/shared/components/ui/screen/screen";
import { MetricCard } from "@/shared/components/ui/metric-card/metric-card";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import { ProgressRing } from "@/shared/components/ui/chart/progress-ring/progress-ring";
import { TrackList } from "@/shared/components/composite/track-list/track-list";


export function DashboardScreen() {

  const insets = useSafeAreaInsets();
  return (
    <Screen scroll={true}>
        <TabHeader />

        <TrackList />
    </Screen>
  );
}
