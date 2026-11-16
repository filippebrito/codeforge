import { type ComponentProps } from "react";
import { Pressable, View } from "react-native";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { colors } from "@/shared/theme/colors";
import { AppText } from "../app-text/app-text";

type IconName = Extract<
  ComponentProps<typeof FontAwesome6>,
  { iconStyle: "solid" }
>["name"];

type ButtonProps = {
  label: string;
  icon?: IconName;
  bgColor?: string;
  onPress?: () => void;
};
export function Button({ label, icon = "play", bgColor, onPress }: ButtonProps) {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <View
          className="flex-row items-center justify-center gap-2"
          style={{
            backgroundColor: pressed ? "#D9DCF2" : bgColor || "rgba(70, 72, 212, 0.1)",
            borderColor: "#E0E3F5",
            borderRadius: 12,
            paddingVertical: 8,
            paddingHorizontal: 16,
          }}
        >
          <AppText variant="label" style={{ color: colors.primary }}>
            {label}
          </AppText>
          <FontAwesome6 name={icon} iconStyle="solid" size={12} color={colors.primary} />
        </View>
      )}
    </Pressable>
  );
}