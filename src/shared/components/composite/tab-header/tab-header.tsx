import { Text, View } from "react-native";
import { AppText } from "../../ui/app-text/app-text";
import { Chimp } from "../../ui/chimp/chimp";
import { MetricCard } from "../../ui/metric-card/metric-card";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import { ProgressRing } from "../../ui/chart/progress-ring/progress-ring";
import { TrackList } from "../track-list/track-list";

export function TabHeader() {

    return (
        <View className="mb-4 mx-4 pt-6">
            <View className="flex-row items-center justify-between">
                <AppText variant="heading">Olá, Alex 👋</AppText>
                <Chimp icon="medal" label="Nível 14" />
            </View>
            <AppText variant="body" className="mt-1">
                Pronto para forjar novos caminhos?
            </AppText>


            <View className="my-4 flex-row gap-3">
                <MetricCard
                    label="Ofensiva"
                    value="28"
                    detail="dias seguidos"
                    tone="warm"
                    trailing={
                    <FontAwesome6 name="fire" iconStyle="solid" size={22} color="#f97316" />
                    }
                />
                <MetricCard
                    label="Meta diária"
                    value="2 de 3"
                    detail="lições"
                    trailing={<ProgressRing progress={2 / 3} />}
                />
            </View>
        </View>
    );

}