import "dotenv/config";

export default () => ({
  expo: {
    name: "sparkapp",
    slug: "sparkapp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    scheme: "sparkapp", // 🔑 usado para redirecionamento OAuth
    extra: {
      appAuthRedirectScheme: "sparkapp", // 🔑 para substituir <appAuthRedirectScheme> no AndroidManifest.xml
    },
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#000",
    },
    plugins: [
      [
        "@react-native-google-signin/google-signin",
        {
          iosUrlScheme: process.env.GOOGLE_IOS_URL_SCHEME,
        },
      ],
      "expo-font",
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.sparkappios.code",
    },
    android: {
      package: "com.sparkapp.code",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#000",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  },
});
