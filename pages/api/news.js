import { mongooseConnect } from "@/lib/mongoose";
import { News } from "@/model/News";

export default async function handle(req, res) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }
    
      await mongooseConnect();

      try {
        const news = await News.find({});
        return res.status(200).json(news);
      } catch (error) {
        return res.status(500).json({ error: "Error en el servidor" });
      }
}
