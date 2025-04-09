import { authorize } from "react-native-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {
  CLIENT_ID,
  CLIENTSECRET,
  AUTHIREZATIONENDPOINT,
  TOKENENDPOINT,
  REDIRECTURL,
} from "@env";

const config = {
  clientId: CLIENT_ID,
  clientSecret: CLIENTSECRET,
  redirectUrl: REDIRECTURL,
  scopes: ["read:user", "user:email"], // escopos apropriados para pegar dados do perfil
  serviceConfiguration: {
    authorizationEndpoint: AUTHIREZATIONENDPOINT,
    tokenEndpoint: TOKENENDPOINT,
  },
};

export const useGithubSignIn = () => {
  const signInWithGithub = async () => {
    try {
      const result = await authorize(config);

      // Buscar dados do usuário no GitHub
      const userInfo = await axios.get("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${result.accessToken}`,
        },
      });

      const dadosUser = {
        userToken: result.accessToken,
        userProfile: userInfo.data.name,
        userProfileIcons: userInfo.data.avatar_url,
      };

      // Salvar dados no AsyncStorage
      const storeData = async () => {
        try {
          const jsonDados = JSON.stringify(dadosUser);
          await AsyncStorage.setItem("dadosUser", jsonDados);
          console.log("Dados salvos com sucesso!");
        } catch (error) {
          console.log("Erro ao salvar os dados:", error);
        }
      };

      await storeData();

      // Recuperar dados para testar
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem("dadosUser");
          if (value !== null) {
            const parsed = JSON.parse(value);
            console.log("Usuário recuperado:", parsed);
          }
        } catch (e) {
          console.log("Erro ao recuperar os dados:", e);
        }
      };

      await getData();
    } catch (error) {
      console.error("Erro ao fazer login com GitHub:", error);
    }
  };

  return { signInWithGithub };
};
