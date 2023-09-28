import { mongooseConnect } from "@/lib/mongoose";
import { CampingForm } from "@/model/CampingForm";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await mongooseConnect();
    try {
      const {
        nombre, apellido, documento, fechaNacimiento, domicilio, localidad,
        telefono, telefonoEmergencia, celular, email, socio, particular, alergicoMedicamentos,
        alergicoMedicamentosCual, alergicoComidas, alergicoComidasCual,
        alergicoPicaduras, alergicoPicadurasCual, medicoCabecera, 
        telefonoMedico, obraSocial, telefonoObraSocial, epilepsia, diabetes,
        asma, afeccionesCardiacas, vacunasCovid, vacunaCovidCual,
        vacunaCovidDosis, tomaMedicamentos, tomaMedicamentosCual,
        tratamiento, tratamientoCual, puedeComerDeTodo, noPuedeComer,
        seMantieneAFlote, sabeNadar, grupoSanguineo, datoRelevancia,
        certificadoMedico, bucoDental, datosVeridicos, autorizacionDatos,
      } = req.body;

      const existingForm = await CampingForm.findOne({ documento });

      if (existingForm) {
        return res.status(400).json({ message: "Ya existe una inscripción con este documento" });
      }

      const formData = {
        nombre,
        apellido,
        documento,
        fechaNacimiento,
        domicilio,
        localidad,
        telefono,
        telefonoEmergencia,
        celular,
        email,
        categoriaInscripcion: {
          socio,
          particular,
        },
        alergias: {
          medicamentos: {
            tieneAlergia: alergicoMedicamentos,
            descripcion: alergicoMedicamentosCual,
          },
          comidas: {
            tieneAlergia: alergicoComidas,
            descripcion: alergicoComidasCual,
          },
          picaduras: {
            tieneAlergia: alergicoPicaduras,
            descripcion: alergicoPicadurasCual,
          },
        },
        medicoCabecera: {
          nombre: medicoCabecera,
          telefono: telefonoMedico,
        },
        obraSocial: {
          nombre: obraSocial,
          telefono : telefonoObraSocial,
        },
        padecimientos: {
          epilepsia,
          diabetes,
          asma,
          afeccionesCardiacas,
        },
        vacunasCovid: {
          recibioVacuna: vacunasCovid,
          cualVacuna: vacunaCovidCual,
          cuantasDosis: vacunaCovidDosis,
        },
        tomaMedicamentos: {
          tomaMedicamentos,
          descripcion: tomaMedicamentosCual,
        },
        sigueTratamiento: {
          sigueTratamiento: tratamiento,
          descripcion: tratamientoCual,
        },
        puedeComerDeTodo: {
          puedeComerDeTodo,
          descripcion: noPuedeComer,
        },
        seMantieneAFlote,
        sabeNadar,
        grupoSanguineo,
        datoRelevancia,
        certificadoMedico,
        bucoDental,
        datosVeridicos: datosVeridicos === "on",
        autorizacionDatos: autorizacionDatos === "on",
      };

      const newForm = new CampingForm(formData);

      await newForm.save();

      res.status(201).json({ message: "Inscripción exitosa" });
    } catch (error) {
      console.error("Error al crear la inscripción:", error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}