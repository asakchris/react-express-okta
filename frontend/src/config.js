const CLIENT_ID = process.env.REACT_APP_OKTA_CLIENT_ID || "{clientId}";
const ISSUER =
  process.env.REACT_APP_OKTA_ISSUER ||
  "https://{yourOktaDomain}.com/oauth2/default";
const OKTA_TESTING_DISABLEHTTPSCHECK =
  process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
const BASENAME = process.env.PUBLIC_URL || "";
const REDIRECT_URI = `${window.location.origin}${BASENAME}/login/callback`;

export const config = {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
    storageManager: {
      token: {
        storageTypes: ["cookie"],
      },
    },
    cache: {
      storageTypes: ["cookie"],
    },
    transaction: {
      storageTypes: ["cookie"],
    },
  },
};
