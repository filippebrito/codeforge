import { View } from "react-native";
import { AppText } from "../app-text/app-text";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import { type ComponentProps } from "react";

type IconName = Extract<
  ComponentProps<typeof FontAwesome6>,
  { iconStyle: "solid" }
>["name"];

const statuses: Record<
  CircularStatusProps["status"],
  { bgColor: string; textColor: string; fontName: IconName }
> = {
  completed: {
    bgColor: "#006C49",
    textColor: "#FFFFFF",
    fontName: "check",
  },
  "in-progress": {
    bgColor: "#4648D4",
    textColor: "#FFFFFF",
    fontName: "fire",
  },
  "not-started": {
    bgColor: "#EAEDFF",
    textColor: "#464554",
    fontName: "minus",
  },
};

type CircularStatusProps = {
    status: "completed" | "in-progress" | "not-started";
    label: string;
};

export function CircularStatus({ status, label }: CircularStatusProps) {
  const palette = statuses[status];

    return (
        <View className="flex-1 items-center">
            <AppText variant="caption" className="mb-1">
                {label}
            </AppText>
            <View 
                className="h-8 w-8 rounded-full items-center justify-center" 
                style={{ backgroundColor: palette.bgColor, borderRadius: 999 }}>
                <FontAwesome6 name={palette.fontName} iconStyle="solid" size={12} color={palette.textColor} />
            </View>    
        </View>
    );
}