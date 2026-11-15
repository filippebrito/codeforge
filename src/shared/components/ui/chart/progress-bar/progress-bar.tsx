import { View } from "react-native";
import { colors } from "@/shared/theme/colors";

type ProgressBarProps = {
  progress: number;
  color?: string;
};

export function ProgressBar({ progress, color = colors.primary }: ProgressBarProps) {
  const clamped = Math.min(Math.max(progress, 0), 1);

  return (
    <View className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-primary/10">
      <View
        className="h-full rounded-full"
        style={{ width: `${clamped * 100}%`, backgroundColor: color }}
      />
    </View>
  );
}