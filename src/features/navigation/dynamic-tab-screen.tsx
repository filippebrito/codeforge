import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { SymbolView } from "expo-symbols";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";

import { UserAvatar } from "@/shared/components/ui/user-avatar/user-avatar";
import type { TabMenuItem } from "@/features/navigation/tab-menu";

export function renderTabScreen(tab: TabMenuItem) {
  return (
    <Tabs.Screen
      key={tab.name}
      name={tab.name}
      options={{
        title: tab.title,
        tabBarIcon: ({ color }) => (
          <FontAwesome6 name={tab.icon} iconStyle="solid" size={22} color={color} />
        ),
        headerTitleAlign: "left" as const,
        headerLeftContainerStyle: { flexGrow: 0, width: 0 },
        headerTitleContainerStyle: {
            marginHorizontal: 0,
            marginLeft: 16,
            left: 0,
            alignItems: "flex-start" as const,
        },
        headerTitle: () => (
            <View
                style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                }}
            >
                <View className="h-10 w-10 items-center justify-center rounded-2xl bg-primary">
                  <FontAwesome6
                      name="terminal"
                      iconStyle="solid"
                      size={18}
                      color="#ffffff"
                  />
                </View>
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                {tab.title}
                </Text>
            </View>
        ),
        headerRight: () => (
            <View style={{ marginRight: 16 }}>
                <UserAvatar name="Alex" />
            </View>
        ),
      }}
    />
  );
}