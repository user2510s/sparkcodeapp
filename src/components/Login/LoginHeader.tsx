import { Image, View } from "react-native";

export const LoginHeader = () => (
  <View style={{ alignItems: "center" }}>
    <Image
      style={{ width: 139, height: 195 }}
      source={require("../../../assets/spark.png")}
    />
  </View>
);
