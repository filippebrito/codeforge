import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { TabHeader } from "@/shared/components/composite/tab-header/tab-header";
import { Screen } from "@/shared/components/ui/screen/screen";
import { MetricCard } from "@/shared/components/ui/metric-card/metric-card";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import { ProgressRing } from "@/shared/components/ui/chart/progress-ring/progress-ring";
import { TrackList } from "@/shared/components/composite/track-list/track-list";
import { CardButton } from "@/shared/components/composite/card-button/card-button";
import { Chimp } from "@/shared/components/ui/chimp/chimp";
import { AppText } from "@/shared/components/ui/app-text/app-text";
import { Button } from "@/shared/components/ui/button/button";


export function DashboardScreen() {

  const insets = useSafeAreaInsets();
  return (
    <Screen scroll={true}>
        <TabHeader />

        <TrackList />

        <CardButton 
          cardTitle="Desafios do Dia"
          title="Refatoração: Factory Pattern para Strategy" 
          description="Elimine condicionais extensas utilizando injeção polimórfica" 
          bgColor="#F1F3FF"
          chimp={
            <Chimp 
              icon="star" 
              label="DAILY KATA - +100 XP" 
              color="#825100"
              bgColor="#FFFFFF"
              textColor="#825100"
               />
          }
          bottomLeft={
            <Chimp 
              label="Nível Pleno" 
              textColor="#464554"
               />
          }
          bottomRight={
            <Button 
              label="Iniciar Desafio" 
              bgColor="#FFFFFF"
              onPress={() => {}} 
              />

          }
        />
    </Screen>
  );
}
