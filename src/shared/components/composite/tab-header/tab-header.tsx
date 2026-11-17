import { Text, View } from "react-native";
import { AppText } from "../../ui/app-text/app-text";
import { Chips } from "../../ui/chips/chips";
import { MetricCard } from "../../ui/metric-card/metric-card";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import { ProgressRing } from "../../ui/chart/progress-ring/progress-ring";
import { TrackList } from "../track-list/track-list";
import { SectionAreaTitle } from "../../ui/section-area-title/section-area-title";

export function TabHeader() {

    return (
        <View className="mb-4 mx-4 pt-6">

            <SectionAreaTitle 
                title="Olá, Alex 👋" 
                description="Pronto para forjar novos caminhos?" 
                rightView={
                    <Chips icon="medal" label="Nível 14" />
                } 
                />


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