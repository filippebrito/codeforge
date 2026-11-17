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
import { Chips } from "@/shared/components/ui/chips/chips";
import { AppText } from "@/shared/components/ui/app-text/app-text";
import { Button } from "@/shared/components/ui/button/button";
import { WeeklyActivity } from "@/shared/components/composite/weekly-activity/weekly-activity";
import { CardClickProps } from "@/shared/components/ui/card-click/card-click";
import { SectionAreaTitle } from "@/shared/components/ui/section-area-title/section-area-title";


export function DashboardScreen() {

  const insets = useSafeAreaInsets();

  const tracks: Array<CardClickProps & { id: string }> = [
    {
      id: "hexagonal",
      icon: "terminal",
      tone: "primary",
      level: "NÍVEL AVANÇADO · 4 de 12 lições",
      title: "Arquitetura Hexagonal & DDD",
      nextLesson: "Domain Events & Value Objects.",
      progress: 0.33,
    },
    {
      id: "solid",
      icon: "certificate",
      tone: "success",
      level: "DESIGN DE SISTEMAS · 6 de 8 lições",
      title: "Inversão de Dependências e SOLID",
      nextLesson: "Interface Segregation Kata",
      progress: 0.75,
    },
    {
      id: "algorithms",
      icon: "bolt",
      tone: "primary",
      level: "FUNDAMENTOS · 10 de 10 lições",
      title: "Estruturas de Dados & Algoritmos",
      progress: 1,
    },
  ];

  return (
    <Screen scroll={true}>
        <TabHeader />

        <View className="mb-4 mx-4">
          <SectionAreaTitle 
            title="Minhas Trilhas Ativas" 
            description={`${tracks.length} ativas`}
            rightButtonLabel="Ver todas"
            onRightButtonPress={() => {console.log("Ver todas clicado")}}
            />
          <TrackList tracks={tracks}/>
        </View>


        <CardButton 
          cardTitle="Desafios do Dia"
          title="Refatoração: Factory Pattern para Strategy" 
          description="Elimine condicionais extensas utilizando injeção polimórfica" 
          bgColor="#F1F3FF"
          chips={
            <Chips 
              icon="star" 
              label="DAILY KATA - +100 XP" 
              color="#825100"
              bgColor="#FFFFFF"
              textColor="#825100"
               />
          }
          bottomLeft={
            <Chips 
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

        <WeeklyActivity />
    </Screen>
  );
}
