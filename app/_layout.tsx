import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: 'Login'}} />
      <Stack.Screen name="principal" options={{title: 'Principal'}} />
    </Stack>

  );
}
