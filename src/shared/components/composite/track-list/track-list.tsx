import { Pressable, View } from "react-native";
import { AppText } from "../../ui/app-text/app-text";
import { CardClick, CardClickProps } from "../../ui/card-click/card-click";
import { SectionAreaTitle } from "../../ui/section-area-title/section-area-title";

type TrackListProps = {
  tracks: Array<CardClickProps & { id: string }>;
};


export function TrackList({tracks} : TrackListProps) {
  return (
      <View className="mt-4 gap-3">
        {tracks.map(({ id, ...track }) => (
          <CardClick key={id} {...track} />
        ))}
      </View>
  );
}