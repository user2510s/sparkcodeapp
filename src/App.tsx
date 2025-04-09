import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  useEffect(() => {
    SystemUI.setBackgroundColorAsync("transparent");
  }, []);
  return (
      <LoginScreen/>
  );
}
