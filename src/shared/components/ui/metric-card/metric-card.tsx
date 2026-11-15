import { View } from "react-native";
import { AppText } from "../app-text/app-text";
import { ReactNode } from "react";


type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
  tone?: "default" | "warm";
  trailing: ReactNode;
};

const tones = {
  default: "bg-white",
  warm: "bg-orange-50",
};

export function MetricCard({
  label,
  value,
  detail,
  tone = "default",
  trailing,
}: MetricCardProps) {
  return (
    <View className={`flex-1 flex-row items-center rounded-2xl p-4 shadow-sm ${tones[tone]}`}>
      <View className="flex-1 pr-2">
        <AppText variant="caption" className="uppercase">
          {label}
        </AppText>
        <AppText variant="heading">{value}</AppText>
        <AppText variant="caption">{detail}</AppText>
      </View>
      {trailing}
    </View>
  );
}