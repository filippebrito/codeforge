import { type ReactNode } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

type ScreenProps = {
  children: ReactNode;
  edges?: Array<"top" | "bottom">;
  scroll?: boolean;
};

export function Screen({ children, edges = [], scroll = false }: ScreenProps) {
  return (
    <SafeAreaView className="flex-1 bg-surface" edges={edges}>
      <StatusBar style="dark" />
      {scroll ? (
        <ScrollView
          className="flex-1"
          contentContainerClassName="pb-6"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </SafeAreaView>
  );
}