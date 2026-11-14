import { Tabs } from 'expo-router';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { tabMenu } from '@/features/navigation/tab-menu';
import { renderTabScreen } from '@/features/navigation/dynamic-tab-screen';
import { colors } from "@/shared/theme/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      {tabMenu.map(renderTabScreen)}
    </Tabs>
  );
}
