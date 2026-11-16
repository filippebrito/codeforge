import { Pressable, View } from "react-native";
import { AppText } from "../../ui/app-text/app-text";
import { Chimp } from "../../ui/chimp/chimp";
import { ReactNode } from "react";

type CardButtonProps = {
  title: string;
  description: string;
  bgColor?: string;
  chimp?: ReactNode;
  cardTitle?: string;
  bottomLeft?: ReactNode;
  bottomRight?: ReactNode;
  onPress?: () => void;
};


export function CardButton({
  title,
  description,
  bgColor,
  chimp,
  cardTitle,
  bottomLeft,
  bottomRight,
  onPress,
}: CardButtonProps) {

    return (
        <View className="mb-4 mx-4 pt-2">
            {cardTitle ? (
                <View className="mb-2 flex-row items-center justify-between">  
                    <AppText variant="heading" className="mb-2">{cardTitle}</AppText>
                    <Pressable onPress={() => {}}>
                        <AppText variant="label" className="text-primary">
                        Ver todos
                        </AppText>
                    </Pressable>
                </View>
            ) : null}
            <View className="w-full rounded-2xl  p-4 shadow-sm" style={{ backgroundColor: bgColor || "white" }}>
                <View className="flex-row items-center justify-between mb-2">
                    {chimp}
                    <AppText variant="label" className="text-on-surface/60">
                        ~5 min
                    </AppText>
                </View>
                <AppText variant="heading">
                    {title}
                </AppText>
                <AppText variant="body">
                    {description}
                </AppText>
                <View className="flex-row items-center justify-between mt-4 ">
                    {bottomLeft}
                    {bottomRight}
                </View>
            </View>
        </View>
    );
}