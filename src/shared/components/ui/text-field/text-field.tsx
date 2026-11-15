import { useState, type ComponentProps } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { AppText } from "../app-text/app-text";

type IconName = Extract<
  ComponentProps<typeof FontAwesome6>,
  { iconStyle: "solid" }
>["name"];

type TextFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  icon: IconName;
  secure?: boolean;
  error?: string;
  trailingIcon?: IconName;
  onTrailingIconPress?: () => void;
  labelAction?: {
    label: string;
    onPress: () => void;
  };
};

export function TextField({
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  secure = false,
  error = "",
  trailingIcon,
  onTrailingIconPress,
  labelAction,
}: TextFieldProps) {
  const [visible, setVisible] = useState(false);
  const trailingName = secure ? (visible ? "eye-slash" : "eye") : trailingIcon;

  return (
    <View>
      <View className="mb-2 flex-row items-center justify-between">
        <AppText variant="label">{label}</AppText>
        {labelAction ? (
          <Pressable onPress={labelAction.onPress}>
            <AppText variant="label" className="text-primary">
              {labelAction.label}
            </AppText>
          </Pressable>
        ) : null}
      </View>

      <View className={`h-12 flex-row items-center rounded-lg border bg-surface px-4 ${
        error ? "border-red-500" : "border-slate-200"
      }`}>
        <FontAwesome6 name={icon} iconStyle="solid" size={16} color="#94a3b8" />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#94a3b8"
          secureTextEntry={secure && !visible}
          className="ml-3 flex-1 text-sm"
        />

        {trailingName ? (
          <Pressable
            onPress={
              secure ? () => setVisible((current) => !current) : onTrailingIconPress
            }
          >
            <FontAwesome6
              name={trailingName}
              iconStyle="solid"
              size={16}
              color="#94a3b8"
            />
          </Pressable>
        ) : null}
      </View>

        {error ? ( <AppText variant="error">{error}</AppText> ) : null}
    </View>
  );
}