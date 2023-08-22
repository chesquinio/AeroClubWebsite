import bcrypt from "bcryptjs";
import { ClubUsers } from "@/model/ClubUsers";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, age, documentNumber, email, password, role, validated } = req.body;

    try {
      await mongooseConnect();

      const existingUser = await ClubUsers.findOne({ documentNumber });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "El número de documento ya está registrado." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new ClubUsers({
        name,
        age,
        document: documentNumber,
        email,
        password: hashedPassword,
        role,
        validated,
      });
      await newUser.save();

      return res
        .status(201)
        .json({ message: "Nuevo socio creado." });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error al registrar el socio." });
    }
  }
}
