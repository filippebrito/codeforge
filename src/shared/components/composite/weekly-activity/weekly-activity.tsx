import { View } from "react-native";
import { AppText } from "../../ui/app-text/app-text";
import { Chips } from "../../ui/chips/chips";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import { CircularStatus } from "../../ui/circular-status/circular-status";
import { SectionAreaTitle } from "../../ui/section-area-title/section-area-title";


export function WeeklyActivity() {
    return (
        <View className="mb-4 mx-4 pt-2">
            <SectionAreaTitle title="Atividade Semanal" />
            <View className="bg-cardBg rounded-lg p-4">
                <View className="flex-row items-center justify-between mb-2">
                    <View className="flex-row items-center gap-2">
                        <AppText variant="heading">
                            2.450
                        </AppText>
                        <AppText variant="caption">
                            / 3.000 XP
                        </AppText>
                    </View>
                    <Chips label="Meta 82%" bgColor="#C9FFE7" textColor="#006C49" />
                </View>
                <View className="flex-row items-center justify-between">
                    <CircularStatus status="completed" label="Seg" />
                    <CircularStatus status="completed" label="Ter" />
                    <CircularStatus status="completed" label="Qua" />
                    <CircularStatus status="in-progress" label="Qui" />
                    <CircularStatus status="not-started" label="Sex" />
                    <CircularStatus status="not-started" label="Sáb" />
                    <CircularStatus status="not-started" label="Dom" />
                </View>
            </View>
        </View>
    );
}