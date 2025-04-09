import { GoogleSignin, isSuccessResponse } from "@react-native-google-signin/google-signin";

export const useGoogleSignIn = () => {
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        console.log(response);
      }
    } catch (error) {
      console.error("Google Sign In Error:", error);
    }
  };

  return { handleGoogleSignIn };
};
