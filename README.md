# CodeForge

CodeForge is a mobile app in active development for learning software architecture and code at your own pace. The project is public and open source: anyone can clone it and keep building on it. The interface is in Portuguese. The source code is in English.

The app is built with Expo, React Native, Expo Router, TypeScript, and NativeWind. Screens live in `app/`. Product behavior lives in `src/features/`. Reusable UI lives in `src/shared/`. Sign-in and sign-up validate input with Zod and call an auth service. That service is mocked until the authentication API exists: it waits briefly, then returns a fake access token so the loading state can be exercised.

## Português

O CodeForge é um aplicativo mobile em desenvolvimento para aprender arquitetura de software e código no seu ritmo. O projeto é público e open source: qualquer pessoa pode clonar o repositório e continuar a implementação. A interface está em português. O código-fonte está em inglês.

O app é feito com Expo, React Native, Expo Router, TypeScript e NativeWind. As telas ficam em `app/`. O comportamento do produto fica em `src/features/`. A interface reutilizável fica em `src/shared/`. Entrar e criar conta validam os campos com Zod e chamam um service de autenticação. Esse service está simulado até a API existir: ele espera um instante e devolve um token falso, para o estado de carregamento poder ser testado.
