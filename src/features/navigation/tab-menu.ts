export const tabMenu = [
  { name: "dashboard", title: "Início", icon: "house" },
  { name: "track", title: "Trilha", icon: "route" },
  { name: "challenges", title: "Desafios", icon: "code" },
  { name: "profile", title: "Perfil", icon: "user" },
] as const;

export type TabMenuItem = (typeof tabMenu)[number];