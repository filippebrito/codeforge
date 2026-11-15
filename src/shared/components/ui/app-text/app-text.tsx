import { ComponentProps } from "react";
import { Text } from "react-native";

const variants = {
  title: "text-3xl font-bold text-on-surface",
  heading: "text-lg font-bold text-on-surface",
  body: "text-sm text-outline",
  label: "text-sm font-medium text-on-surface",
  caption: "text-xs text-slate-500",
  error: "text-sm font-medium text-red-500",
} as const;

type TextVariant = keyof typeof variants;

export function AppText({
  variant = "body",
  className,
  ...props
}: { variant?: TextVariant; className?: string } & ComponentProps<typeof Text>) {
  return <Text className={`${variants[variant]} ${className ?? ""}`} {...props} />;
}