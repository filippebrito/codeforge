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
  color?: string;
  bgColor?: string;
  textColor?: string;
};

export function Chimp({ label, icon, color, bgColor, textColor }: ChimpProps) {
  return (
    <View className="flex-row items-center gap-1 rounded-full" 
      style={{
        backgroundColor: bgColor || "rgba(70, 72, 212, 0.1)",
        borderRadius: 999,
        paddingHorizontal: 12,
        paddingVertical: 4,
      }}
>

      {icon ? (
            <FontAwesome6 name={icon} iconStyle="solid" size={12} color={color || colors.primary} />
      ) : null}
      <AppText variant="label" className="text-primary" style={{ color: textColor || colors.primary }}>
        {label}
      </AppText>
    </View>
  );
}