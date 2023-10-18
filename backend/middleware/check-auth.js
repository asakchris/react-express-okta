const axios = require("axios");
const https = require("https");
const fs = require("fs");

// Ignore SSL verification in local
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const checkAuth = async (req, res, next) => {
  const token = JSON.parse(req.cookies["okta-token-storage_idToken"]);
  const data = { token: token.idToken };
  const response = await axios.post(
    "https://dev-15107069.okta.com/oauth2/default/v1/introspect",
    data,
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      params: {
        client_id: "0oacgo5p9qbwidBlF5d7",
      },
      httpsAgent: agent,
    }
  );
  //console.log(response);

  // Token validation failed
  if (!response.data.active) {
    return res.status(401).json({ message: "Auth failed" });
  }

  req.headers["App-User-Email"] = response.data.email;
  next();
};

module.exports = checkAuth;
