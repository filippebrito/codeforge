import { Pressable, View } from "react-native";
import { AppText } from "../../ui/app-text/app-text";
import { Chips } from "../../ui/chips/chips";
import { ReactNode } from "react";
import { SectionAreaTitle } from "../../ui/section-area-title/section-area-title";

type CardButtonProps = {
  title: string;
  description: string;
  bgColor?: string;
  chips?: ReactNode;
  cardTitle?: string;
  bottomLeft?: ReactNode;
  bottomRight?: ReactNode;
  onPress?: () => void;
};


export function CardButton({
  title,
  description,
  bgColor,
  chips,
  cardTitle,
  bottomLeft,
  bottomRight,
  onPress,
}: CardButtonProps) {

    return (
        <View className="mb-4 mx-4 pt-2">
            {cardTitle ? (
                <SectionAreaTitle 
                    title={cardTitle} 
                    rightButtonLabel="Ver todos"
                    onRightButtonPress={() => {console.log("Ver todas clicado")}} 
                />
            ) : null}
            <View className="w-full rounded-2xl  p-4 shadow-sm" style={{ backgroundColor: bgColor || "white" }}>
                <View className="flex-row items-center justify-between mb-2">
                    {chips}
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