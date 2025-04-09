import { TouchableOpacity, Text, Image } from "react-native";
import { useGoogleSignIn } from "../../hooks/useGoogleSignIn";

export const GoogleButton = () => {
  const { handleGoogleSignIn } = useGoogleSignIn();

  return (
    <TouchableOpacity
      style={{
        paddingVertical: 16,
        paddingHorizontal: 25,
        borderColor: "#B9B9B9",
        borderWidth: 0.5,
        borderRadius: 11,
        flexDirection: "row",
        gap: 10,
      }}
      onPress={handleGoogleSignIn}
    >
      <Image
        style={{ width: 20, height: 20 }}
        source={require("../../../assets/google.png")}
      />
      <Text
        style={{
          fontFamily: "RobotoMono_400Regular",
          fontSize: 12,
          letterSpacing: 1.5,
          color: "#B9B9B9",
        }}
      >
        Google
      </Text>
    </TouchableOpacity>
  );
};
