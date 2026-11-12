import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View, Text, Pressable, ScrollView } from 'react-native';
import { TextField } from "@/shared/components/ui/text-field/text-field";
import { flattenError } from "zod";
import { signupSchema } from "@/features/auth/auth-schema";
import { router } from "expo-router";
import { login } from "@/features/auth/auth-service";
import { AuthHeader } from "./components/auth-header";
import { AuthOthers } from "./components/auth-others";

export function SignupScreen() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const insets = useSafeAreaInsets();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const isSubmittingRef = useRef(false);
    const [fieldErrors, setFieldErrors] = useState<{
      name?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    }>({});

    async function handleSignup() {
    if (isSubmittingRef.current) {
      return;
    }

    const result = signupSchema.safeParse({ name, email, password, confirmPassword });

    if (!result.success) {
      const flat = flattenError(result.error);

      setFieldErrors({
        name: flat.fieldErrors.name?.[0],
        email: flat.fieldErrors.email?.[0],
        password: flat.fieldErrors.password?.[0],
        confirmPassword: flat.fieldErrors.confirmPassword?.[0],
      });
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);
    setFieldErrors({});

    try {
      await login(result.data);
      router.replace("/(tabs)");
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  }

  return (
    <View 
      className="flex-1 bg-surface"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <StatusBar style="dark" />

      <ScrollView
          className="flex-1"
          contentContainerClassName="px-6 pt-6"
          contentContainerStyle={{ paddingTop: 24, paddingBottom: 24 }}
          keyboardShouldPersistTaps="handled"
        >
      
        <AuthHeader />

        <View className="w-full bg-white p-6 rounded-xl shadow-sm">
          <View className="gap-4">
            <TextField
              label="nome"
              placeholder="Alex Brito"
              value={name}
              onChangeText={setName}
              icon="envelope"
              error={fieldErrors.name}
            />
            <TextField
              label="E-mail"
              placeholder="alex@exemplo.com"
              value={email}
              onChangeText={setEmail}
              icon="envelope"
              error={fieldErrors.email}
            />

            <TextField
              label="Senha"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              icon="lock"
              error={fieldErrors.password}
              secure
            />

            <TextField
              label="Confirmar Senha"
              placeholder="••••••••"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              icon="lock"
              error={fieldErrors.confirmPassword}
              secure
            />
          </View>
          <Pressable
            disabled={isSubmitting}
            onPress={handleSignup}
            className={`mt-4 h-12 items-center justify-center rounded-xl bg-primary ${
              isSubmitting ? "opacity-70" : ""
            }`}
          >
            {isSubmitting ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text className="text-base font-semibold text-white">
                Criar conta gratuita
              </Text>
            )}
          </Pressable>

          <View className="mt-6 flex-row items-center">
            <View className="h-px flex-1 bg-slate-200" />
            <Text className="mx-3 text-xs text-slate-400">ou continue com</Text>
            <View className="h-px flex-1 bg-slate-200" />
          </View>

          <AuthOthers 
            onGithubPress={() => console.log("GitHub pressed")} 
            onGooglePress={() => console.log("Google pressed")} />
        </View>

        <Text className="mt-6 text-center text-sm text-slate-500">
          Já tem uma conta?{" "}
          <Text
            className="font-semibold text-primary"
            onPress={() => {
              router.back();
            }}
          >
            Entrar
          </Text>
        </Text>
      </ScrollView>

    </View>
  );
}