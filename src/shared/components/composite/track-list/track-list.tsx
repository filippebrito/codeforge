import { Pressable, View } from "react-native";
import { AppText } from "../../ui/app-text/app-text";
import { CardClick, CardClickProps } from "../../ui/card-click/card-click";

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


export function TrackList() {
  return (
    <View className="mb-4 mx-4">
      <View className="mb-2 flex-row items-center justify-between">  
        <AppText variant="heading">Minas Trilhas Ativas</AppText>
        <Pressable onPress={() => {}}>
            <AppText variant="label" className="text-primary">
              Ver todas
            </AppText>
          </Pressable>
      </View>
      <AppText variant="body" className="text-muted">
        {tracks.length} ativas
      </AppText>
      <View className="mt-4 gap-3">
        {tracks.map(({ id, ...track }) => (
          <CardClick key={id} {...track} />
        ))}
      </View>
    </View>
  );
}