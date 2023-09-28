import { sendEmail } from "@/lib/aws";

export default async (req, res) => {
  const { recipientEmail, name } = req.body;

  try {
    await sendEmail(recipientEmail, name);
    res.status(200).json({ message: 'Email enviado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al enviar el correo electrónico' });
  }
};