import { authorize } from 'react-native-app-auth';
import axios from 'axios';
import { CLIENT_ID, CLIENTSECRET, AUTHIREZATIONENDPOINT, TOKENENDPOINT, REDIRECTURL } from "@env";

const config = {
  clientId: CLIENT_ID,
  clientSecret: CLIENTSECRET,
  redirectUrl: REDIRECTURL,
  scopes: ['read:user', 'user:email'], // escopos apropriados para pegar dados do perfil
  serviceConfiguration: {
    authorizationEndpoint: AUTHIREZATIONENDPOINT,
    tokenEndpoint: TOKENENDPOINT,
  },
};

export const useGithubSignIn = () => {
  const signInWithGithub = async () => {
    try {
      const result = await authorize(config);
      console.log("Token de acesso:", result.accessToken);

      // Buscar dados do usuário no GitHub
      const userInfo = await axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${result.accessToken}`,
        },
      });

      console.log("Nome do usuário:", userInfo.data.name);
      console.log("Foto do usuário:", userInfo.data.avatar_url);
    } catch (error) {
      console.error("Erro ao fazer login com GitHub:", error);
    }
  };

  return { signInWithGithub };
};
