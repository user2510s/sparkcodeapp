import { useEffect } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts, RobotoMono_400Regular } from "@expo-google-fonts/roboto-mono";

import { configureGoogleSignin } from "../../utils/configureGoogleSignin";
import { LoginHeader } from "./LoginHeader";
import { LoginText } from "./LoginText";
import { AuthButtons } from "./AuthButtons";

export default function Login() {
  useEffect(() => {
    configureGoogleSignin();
  }, []);

  const [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ width: "80%", height: 330, gap: 40, marginTop: 100 }}>
        <LoginHeader />
        <LoginText />
      </View>
      <AuthButtons />
      <StatusBar style="auto" />
    </View>
  );
}
