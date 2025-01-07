import Softphone from 'ringcentral-softphone';

const softphone = new Softphone({
  outboundProxy: process.env.SIP_INFO_OUTBOUND_PROXY,
  username: process.env.SIP_INFO_USERNAME,
  password: process.env.SIP_INFO_PASSWORD,
  authorizationId: process.env.SIP_INFO_AUTHORIZATION_ID,
  domain: process.env.SIP_INFO_DOMAIN,
});

const main = async () => {
  await softphone.register();
  console.log('app is registered');

  softphone.on('invite', async (inviteMessage) => {
    const callSession = await softphone.answer(inviteMessage);

    callSession.on('dtmf', (digit) => {
      console.log('dtmf', digit);
    });
  });
};

void main();
