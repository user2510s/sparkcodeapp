import { Text } from "react-native";

export const LoginText = () => (
  <Text
    style={{
      color: "#B9B9B9",
      fontSize: 13,
      fontFamily: "RobotoMono_400Regular",
    }}
  >
    Log in to continue your{" "}
    <Text style={{ color: "#8C93FF" }}>sparkapps</Text> experience, or
    <Text style={{ color: "#FE2562" }}> create a free account.</Text>
  </Text>
);
