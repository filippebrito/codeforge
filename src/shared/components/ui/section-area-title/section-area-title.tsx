
import { AppText } from "../app-text/app-text";
import { Pressable, View } from "react-native";
import { type ReactNode } from "react";

type SectionAreaTitleProps = {
    title: string;
    description?: string;
    rightButtonLabel?: string;
    onRightButtonPress?: () => void;
    rightView?: ReactNode;
};


export function SectionAreaTitle({ title, description, rightButtonLabel, onRightButtonPress, rightView }: SectionAreaTitleProps) {
    
    function showRightAction() {
        if (rightButtonLabel && onRightButtonPress) {
            return (
            <Pressable onPress={onRightButtonPress}>
                {({ pressed }) => (
                <AppText
                    variant="label"
                    className="text-primary"
                    style={{ opacity: pressed ? 0.5 : 1 }}
                >
                    {rightButtonLabel}
                </AppText>
                )}
            </Pressable>
            );
        }

        if (rightView) {
            return <View>{rightView}</View>;
        }

        return null;
    }
    
    return (
        <View>
            <View className="mb-2 flex-row items-center justify-between">  
                <AppText variant="heading">{title}</AppText>
                {showRightAction()}
            </View>
            {description && (
                <AppText variant="body" className="text-muted">
                    {description}
                </AppText>
            )}
        </View>
    );
}