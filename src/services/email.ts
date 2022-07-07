import { MailSlurp } from 'mailslurp-client';

const apiKey = '5c8f928d34e74ae4e5d2339e9911d65e18e5e4f6071171db8567b00710207c3d';

const mailslurp = new MailSlurp({ apiKey });
const inboxId = 'f32feb2c-c5d0-4df0-9268-b0a55bfd6a55';
export const sendEmail = async (to: string[], subject: string, body: any): Promise<string> => {
  const sentEmail = await mailslurp.sendEmail(inboxId, {
    to,
    subject,
    body: JSON.stringify(body),
  });

  return sentEmail.id;
};
// export const sendEmail = (to: string[], subject: string, body: any): Promise<boolean> => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.info('email sent to', to, body);
//       resolve(true);
//     }, 3000);
//   });
// };
