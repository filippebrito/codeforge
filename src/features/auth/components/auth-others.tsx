import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import { Pressable, Text, View } from "react-native";

type AuthOthersProps = {
  onGithubPress?: () => void;
  onGooglePress?: () => void;
};

export function AuthOthers({ onGithubPress, onGooglePress }: AuthOthersProps) {
    return (
      <View className="mt-4 flex-row gap-3">
        <Pressable
        onPress={onGithubPress}
        className="h-12 flex-1 flex-row items-center justify-center gap-2 rounded-lg border border-slate-200"
        >
        <FontAwesome6 name="github" iconStyle="brand" size={16} color="#111827" />
        <Text className="text-sm font-medium">GitHub</Text>
        </Pressable>

        <Pressable
        onPress={onGooglePress}
        className="h-12 flex-1 flex-row items-center justify-center gap-2 rounded-lg border border-slate-200"
        >
        <FontAwesome6 name="google" iconStyle="brand" size={16} color="#4285F4" />
        <Text className="text-sm font-medium">Google</Text>
        </Pressable>
    </View>
    );
}