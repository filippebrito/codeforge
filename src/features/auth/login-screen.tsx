import { useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ActivityIndicator, View, Text, Pressable, ScrollView } from 'react-native';
import { TextField } from "@/shared/components/ui/text-field/text-field";
import { flattenError } from "zod";
import { loginSchema } from "@/features/auth/auth-schema";
import { router } from "expo-router";
import { login, LoginError } from "@/features/auth/auth-service";
import { AuthHeader } from "./components/auth-header";
import { AuthOthers } from "./components/auth-others";
import { Screen } from "@/shared/components/ui/screen/screen";
import { AppText } from "@/shared/components/ui/app-text/app-text";

export function LoginScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const insets = useSafeAreaInsets();
    const [formError, setFormError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const isSubmittingRef = useRef(false);
    const [fieldErrors, setFieldErrors] = useState<{
      email?: string;
      password?: string;
    }>({});

    async function handleLogin() {
      setFieldErrors({});
      setFormError("");
      
      if (isSubmittingRef.current) {
        return;
      }

      const result = loginSchema.safeParse({ email, password });

      if (!result.success) {
        const flat = flattenError(result.error);

        setFieldErrors({
          email: flat.fieldErrors.email?.[0],
          password: flat.fieldErrors.password?.[0],
        });
        return;
      }

      isSubmittingRef.current = true;
      setIsSubmitting(true);
      setFieldErrors({});

      try {
        await login(result.data);
        router.replace("/(tabs)/dashboard");
      } catch (error) {
        const message =
          error instanceof LoginError && error.kind === "unauthorized"
            ? "E-mail ou senha inválidos."
            : "Serviço indisponível. Tente mais tarde.";
        setFormError(message);
      } finally {
        isSubmittingRef.current = false;
        setIsSubmitting(false);
      }
    }

    return (
      <Screen edges={["top", "bottom"]}>

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
                labelAction={{
                  label: "Esqueceu?",
                  onPress: () => {
                    console.log("forgot password");
                  },
                }}
              />
            </View>
            <Pressable
              disabled={isSubmitting}
              onPress={handleLogin}
              className={`mt-4 h-12 items-center justify-center rounded-xl bg-primary ${
                isSubmitting ? "opacity-70" : ""
              }`}
            >
              {isSubmitting ? (
                <ActivityIndicator color="#ffffff" />
              ) : (
                <Text className="text-base font-semibold text-white">
                  Entrar na plataforma
                </Text>
              )}

            </Pressable>

              {formError ? (
                  <AppText variant="error" className="mt-4 text-center">
                    {formError}
                  </AppText>
                ) : null
              }

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
            Não tem uma conta?{" "}
            <Text
              className="font-semibold text-primary"
              onPress={() => {
                router.push("/sign-up");
              }}
            >
              Cadastre-se
            </Text>
          </Text>
        </ScrollView>

      </Screen>
    );
}