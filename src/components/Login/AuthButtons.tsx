import { View } from "react-native";
import { GoogleButton } from "./GoogleButton";
import { GithubButton } from "./GithubButton";

export const AuthButtons = () => (
  <View style={{ gap: 50, flexDirection: "row" }}>
    <GoogleButton />
    <GithubButton />
  </View>
);
