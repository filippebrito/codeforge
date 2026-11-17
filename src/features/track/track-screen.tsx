import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Screen } from "@/shared/components/ui/screen/screen";
import { TabHeader } from "@/shared/components/composite/tab-header/tab-header";
import { CardClickProps } from "@/shared/components/ui/card-click/card-click";
import { SectionAreaTitle } from "@/shared/components/ui/section-area-title/section-area-title";
import { TrackList } from "@/shared/components/composite/track-list/track-list";
import { AppText } from "@/shared/components/ui/app-text/app-text";

export function TrackScreen() {

  const insets = useSafeAreaInsets();

  const tracksProgress: Array<CardClickProps & { id: string }> = [
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
      }
    ];

  const tracksNew: Array<CardClickProps & { id: string }> = [
      {
        id: "hexagonal",
        icon: "terminal",
        tone: "primary",
        level: "NÍVEL AVANÇADO · 4 de 12 lições",
        title: "Arquitetura Hexagonal & DDD",
        nextLesson: "Domain Events & Value Objects.",
        progress: 0,
      },
      {
        id: "solid",
        icon: "certificate",
        tone: "success",
        level: "DESIGN DE SISTEMAS · 6 de 8 lições",
        title: "Inversão de Dependências e SOLID",
        nextLesson: "Interface Segregation Kata",
        progress: 0,
      }
    ];

  const tracksFinished: Array<CardClickProps & { id: string }> = [
      {
        id: "hexagonal",
        icon: "terminal",
        tone: "primary",
        level: "NÍVEL AVANÇADO · 4 de 12 lições",
        title: "Arquitetura Hexagonal & DDD",
        nextLesson: "Domain Events & Value Objects.",
        progress: 100,
      }
    ];


  return (
        <Screen scroll={true}>
            <TabHeader />

            <View className="mb-4 mx-4">
              <SectionAreaTitle 
                title="Em Progresso" 
                rightView={
                  <AppText
                    variant="label"
                    className="text-primary">
                    2 trilhas
                  </AppText>
                }
                />
              <TrackList tracks={tracksProgress}/>
            </View>

            <View className="mb-4 mx-4">
              <SectionAreaTitle 
                title="Disponíveis para iníciar" 
                rightView={
                  <AppText
                    variant="label"
                    className="text-primary">
                    2 disponíveis
                  </AppText>
                }
                />
              <TrackList tracks={tracksNew}/>
            </View>

            <View className="mb-4 mx-4">
              <SectionAreaTitle 
                title="Concluídas" 
                rightView={
                  <AppText
                    variant="label"
                    className="text-primary">
                    1 finalizado
                  </AppText>
                }
                />
              <TrackList tracks={tracksFinished}/>
            </View>

        </Screen>
  );
}
