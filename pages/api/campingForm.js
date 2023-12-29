import { mongooseConnect } from "@/lib/mongoose";
import { CampingForm } from "@/model/CampingForm";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await mongooseConnect();
    try {
      const { data, childrenAuth } = req.body;

      const existingForm = await CampingForm.findOne({
        documento: data.documento,
      });

      if (existingForm) {
        return res
          .status(400)
          .json({ message: "Ya existe una inscripción con este documento" });
      }

      const formData = {
        nombre: data.nombre,
        apellido: data.apellido,
        documento: data.documento,
        curso: data.curso,
        hermanoDe: data.hermanoDe,
        telefono: data.telefono,
        turno: data.turno,
        email: data.email,
        alergias: {
          medicamentos: {
            tieneAlergia: data.alergicoMedicamentos,
            descripcion: data.tipoAlergicoMedicamentos,
          },
          comidas: {
            tieneAlergia: data.alergicoComidas,
            descripcion: data.tipoAlergicoComidas,
          },
          picaduras: {
            tieneAlergia: data.alergicoPicaduras,
            descripcion: data.tipoAlergicoPicaduras,
          },
        },
        medicoCabecera: {
          nombre: data.medicoCabecera,
          telefono: data.telefonoMedico,
        },
        obraSocial: {
          nombre: data.obraSocial,
          telefono: data.telefonoObraSocial,
        },
        padecimientos: {
          epilepsia: data.epilepsia,
          diabetes: data.diabetes,
          asma: data.asma,
          afeccionesCardiacas: data.afeccionesCardiacas,
        },
        vacunasCovid: {
          recibioVacuna: data.vacunasCovid,
          cualVacuna: data.vacunaCovidCual,
          cuantasDosis: data.vacunaCovidDosis,
        },
        tomaMedicamentos: {
          tomaMedicamentos: data.tomaMedicamentos,
          descripcion: data.tipoTomaMedicamentos,
        },
        sigueTratamiento: {
          sigueTratamiento: data.tratamiento,
          descripcion: data.tipoTratamiento,
        },
        puedeComerDeTodo: {
          puedeComerDeTodo: data.puedeComerDeTodo,
          descripcion: data.tipoNoPuedeComer,
        },
        seMantieneAFlote: data.seMantieneAFlote,
        sabeNadar: data.sabeNadar,
        grupoSanguineo: data.grupoSanguineo,
        datoRelevancia: data.datoRelevancia,
        childrenAuth,
        pariente: data.pariente,
        parienteDocumento: data.parienteDocumento,
        parienteAuth: data.parienteAuth,
        parienteAuthDocumento: data.parienteAuthDocumento,
        edadChico: data.edadChico,
        parentescoParienteAuth: data.parentescoParienteAuth,
        celParienteAuth: data.celParienteAuth,
        datosVeridicos: data.datosVeridicos,
        autorizacionImagen: data.autorizacionImagen,
        autorizacionRopa: data.autorizacionRopa,
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
