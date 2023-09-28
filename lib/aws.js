import AWS from 'aws-sdk';

const sesConfig = {
    accessKeyId: process.env.SES_ACCESS_KEY,
    secretAccessKey: process.env.SES_SECRET_ACCESS_KEY,
    region: 'sa-east-1'
  };

const AWS_SES = new AWS.SES(sesConfig);

export const sendEmail = async (recipientEmail, name) => {
  let params = {
    Source: 'AeroClub <info@aeroclubrafaela.com>',
    Destination: {
      ToAddresses: [recipientEmail],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `<h1>Bienvenido a la Colonia ${name}!</h1>
                <h3>Tu Inscripcion ha sido realizada</h3>
                <p>Deberás acercarte presencialmente al club para acercar los certificados en su formato físico.</p>
                <br/>
                <p>Este correo esta hecho con finalidad de informar, si presisa mas información puede comunicarse aquí: aeroclubrafaela@wilnet.com.ar</p>`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Inscripción Colonia Aero Club',
      },
    },
  };

  try {
    await AWS_SES.sendEmail(params).promise();
  } catch (error) {
    console.error(error);
  }
}
