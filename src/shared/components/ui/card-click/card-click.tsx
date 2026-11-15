import { View } from "react-native";
import { AppText } from "../app-text/app-text";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import { colors } from "@/shared/theme/colors";
import { ProgressBar } from "../chart/progress-bar/progress-bar";

export type CardClickProps = {
  icon: IconName;
  tone?: "primary" | "success";
  level: string;
  title: string;
  progress: number;
  nextLesson?: string;
};

const tones = {
  primary: {
    iconBg: "bg-primary/10",
    text: "text-primary",
    color: colors.primary,
  },
  success: {
    iconBg: "bg-green-100",
    text: "text-green-600",
    color: "#16a34a",
  },
};

export function CardClick({
  icon,
  tone = "primary",
  level,
  title,
  progress,
  nextLesson = "",
}: CardClickProps) {
  const palette = tones[tone];
  const done = progress >= 1;

  return (
    <View className="w-full rounded-2xl bg-white p-4 shadow-sm">
      <View className="w-full flex-row gap-3">
        <View className={`h-10 w-10 items-center justify-center rounded-xl ${palette.iconBg}`}>
          <FontAwesome6 name={icon} iconStyle="solid" size={16} color={palette.color} />
        </View>

        <View className="flex-1">
          <View className="flex-row items-center justify-between">
            <AppText variant="label" className={`flex-1 ${palette.text}`}>
              {level}
            </AppText>
            <FontAwesome6
              name={done ? "circle-check" : "angle-right"}
              iconStyle="solid"
              size={12}
              color={done ? "#16a34a" : palette.color}
            />
          </View>
          <AppText variant="heading">{title}</AppText>
        </View>
      </View>

      {done ? (
        <View className="mt-2 w-full flex-row items-center justify-between">
          <AppText variant="caption">Concluído com maestria</AppText>
          <View className="flex-row items-center gap-1">
            <AppText variant="label" className="text-primary">Revisar desafios</AppText>
            <FontAwesome6 name="arrow-up-right-from-square" iconStyle="solid" size={12} color={colors.primary} />
          </View>
        </View>
      ) : (
        <>
          <View className="mt-2 w-full flex-row items-center justify-between">
            <AppText variant="caption" className="flex-1 pr-2">
              Próxima: {nextLesson}
            </AppText>
            <AppText variant="label" className={palette.text}>
              {Math.round(progress * 100)}%
            </AppText>
          </View>
          <ProgressBar progress={progress} color={palette.color} />
        </>
      )}
    </View>
  );
}