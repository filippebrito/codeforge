import { Text, View } from "react-native";

type UserAvatarProps = {
  name: string;
};

export function UserAvatar({ name }: UserAvatarProps) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <View className="h-9 w-9 items-center justify-center rounded-full bg-primary">
      <Text className="text-sm font-semibold text-white">{initial}</Text>
    </View>
  );
}