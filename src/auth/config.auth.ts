export const configAuth = {
  secret: 'a0c16717-19a8-48ee-9bc1-a7ff8430fe96',
  global: true,
  signOptions: {
    issuer: 'Api.Open.Adm.Issuer',
    audience: 'Api.Open.Adm.Audience',
    expiresIn: '86400s',
  },
};
