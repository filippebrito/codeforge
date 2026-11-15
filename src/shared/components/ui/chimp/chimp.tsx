import { colors } from "@/shared/theme/colors";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { type ComponentProps } from "react";
import { View } from "react-native";
import { AppText } from "../app-text/app-text";

type IconName = Extract<
  ComponentProps<typeof FontAwesome6>,
  { iconStyle: "solid" }
>["name"];

type ChimpProps = {
  label: string;
  icon?: IconName;
};

export function Chimp({ label, icon = "medal" }: ChimpProps) {
  return (
    <View className="flex-row items-center gap-1 self-start rounded-full bg-primary/10 px-3 py-1">
      <FontAwesome6 name={icon} iconStyle="solid" size={12} color={colors.primary} />
      <AppText variant="label" className="text-primary">
        {label}
      </AppText>
    </View>
  );
}