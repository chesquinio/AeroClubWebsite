import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { CampingData } from "@/model/CampingData";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { sendEmail } from "../api/send";

function CampingForm({ campingData }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    documento: "",
    fechaNacimiento: "",
    domicilio: "",
    localidad: "",
    telefono: "",
    telefonoEmergencia: "",
    celular: "",
    email: "",
    socio: "no",
    particular: "no",
    alergicoMedicamentos: "no",
    alergicoMedicamentosCual: "",
    alergicoComidas: "no",
    alergicoComidasCual: "",
    alergicoPicaduras: "no",
    alergicoPicadurasCual: "",
    medicoCabecera: "",
    telefonoMedico: "",
    obraSocial: "",
    telefonoObraSocial: "",
    epilepsia: "no",
    diabetes: "no",
    asma: "no",
    afeccionesCardiacas: "no",
    vacunasCovid: "no",
    vacunaCovidCual: "",
    vacunaCovidDosis: "",
    tomaMedicamentos: "no",
    tomaMedicamentosCual: "",
    tratamiento: "no",
    tratamientoCual: "",
    puedeComerDeTodo: "si",
    noPuedeComer: "",
    seMantieneAFlote: "no",
    sabeNadar: "no",
    grupoSanguineo: "",
    datoRelevancia: "",
    datosVeridicos: false,
    autorizacionDatos: false,
  });
  const [certificadoMedico, setCertificadoMedico] = useState(null);
  const [bucoDental, setBucoDental] = useState(null);
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (!campingData[0].activeBotton) {
      router.push("/colonia");
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function uploadPdf1(ev) {
    const files = ev.target?.files;

    if (files?.length > 0) {
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post("/api/upload", data);
      setCertificadoMedico(res.data.links);
    }
  }

  async function uploadPdf2(ev) {
    const files = ev.target?.files;

    if (files?.length > 0) {
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post("/api/upload", data);
      setBucoDental(res.data.links);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const requiredFields = [
      "nombre",
      "apellido",
      "documento",
      "fechaNacimiento",
      "domicilio",
      "localidad",
      "telefonoEmergencia",
      "celular",
      "email",
      "obraSocial",
      "medicoCabecera",
      "grupoSanguineo",
    ];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "Este campo es requerido";
      }
    });

    if (
      formData.alergicoMedicamentos === "si" &&
      !formData.alergicoMedicamentosCual
    ) {
      newErrors.alergicoMedicamentosCual = "Este campo es requerido";
    }

    if (formData.alergicoComidas === "si" && !formData.alergicoComidasCual) {
      newErrors.alergicoComidasCual = "Este campo es requerido";
    }

    if (
      formData.alergicoPicaduras === "si" &&
      !formData.alergicoPicadurasCual
    ) {
      newErrors.alergicoPicadurasCual = "Este campo es requerido";
    }

    if (formData.vacunasCovid === "si") {
      if (!formData.vacunaCovidCual) {
        newErrors.vacunaCovidCual = "Este campo es requerido";
      }
      if (!formData.vacunaCovidDosis) {
        newErrors.vacunaCovidDosis = "Este campo es requerido";
      }
    }

    if (formData.tomaMedicamentos === "si" && !formData.tomaMedicamentosCual) {
      newErrors.tomaMedicamentosCual = "Este campo es requerido";
    }

    if (formData.tratamiento === "si" && !formData.tratamientoCual) {
      newErrors.tratamientoCual = "Este campo es requerido";
    }

    if (formData.puedeComerDeTodo === "no" && !formData.noPuedeComer) {
      newErrors.noPuedeComer = "Este campo es requerido";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setMessage("Por favor complete todos los campos requeridos");
      return;
    }

    const data = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      documento: formData.documento,
      fechaNacimiento: formData.fechaNacimiento,
      domicilio: formData.domicilio,
      localidad: formData.localidad,
      telefono: formData.telefono,
      telefonoEmergencia: formData.telefonoEmergencia,
      celular: formData.celular,
      email: formData.email,
      socio: formData.socio,
      particular: formData.particular,
      alergicoMedicamentos: formData.alergicoMedicamentos,
      alergicoMedicamentosCual: formData.alergicoMedicamentosCual,
      alergicoComidas: formData.alergicoComidas,
      alergicoComidasCual: formData.alergicoComidasCual,
      alergicoPicaduras: formData.alergicoPicaduras,
      alergicoPicadurasCual: formData.alergicoPicadurasCual,
      medicoCabecera: formData.medicoCabecera,
      telefonoMedico: formData.telefonoMedico,
      obraSocial: formData.obraSocial,
      telefonoObraSocial: formData.telefonoObraSocial,
      epilepsia: formData.epilepsia,
      diabetes: formData.diabetes,
      asma: formData.asma,
      afeccionesCardiacas: formData.afeccionesCardiacas,
      vacunasCovid: formData.vacunasCovid,
      vacunaCovidCual: formData.vacunaCovidCual,
      vacunaCovidDosis: formData.vacunaCovidDosis,
      tomaMedicamentos: formData.tomaMedicamentos,
      tomaMedicamentosCual: formData.tomaMedicamentosCual,
      tratamiento: formData.tratamiento,
      tratamientoCual: formData.tratamientoCual,
      puedeComerDeTodo: formData.puedeComerDeTodo,
      noPuedeComer: formData.noPuedeComer,
      seMantieneAFlote: formData.seMantieneAFlote,
      sabeNadar: formData.sabeNadar,
      grupoSanguineo: formData.grupoSanguineo,
      datoRelevancia: formData.datoRelevancia,
      datosVeridicos: formData.datosVeridicos,
      autorizacionDatos: formData.autorizacionDatos,
      certificadoMedico,
      bucoDental,
    };
    await axios.post("/api/send", {
      recipientEmail: data.email,
      name: data.nombre,
    });
    if (certificadoMedico !== null && bucoDental !== null) {
      if (data.datosVeridicos !== false || data.autorizacionDatos !== false) {
        await axios
        .post("/api/campingForm", data)
        .then((response) => {
          setMessage(response.data.message);
          axios.post("/api/send", {
            recipientEmail: data.email,
            name: data.nombre,
          });
          router.push("/parque");
        })
        .catch((error) => {
          setMessage(error.response.data.message);
        });
      } else {
        setMessage("Es necesario ceder los acuerdos");
      }
    } else {
      setMessage("Es necesario añadir ambos certificados");
    }
  }

  return (
    <>
      <Head>
        <title>Incripciones Colonia | Aero Club Rafaela</title>
      </Head>
      <Header />
      <div className="min-h-screen mt-24 mb-6 flex justify-center items-start">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8 w-4/5 lg:w-1/2"
        >
          <h2
            className="font-medium text-3xl mb-4 text-center"
            style={{
              background: "linear-gradient(to right, #4EACF2, #004691)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Inscripción a la Colonia
          </h2>
          <h3 className="text-lg mb-2">Datos Personales:</h3>
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <div className="md:w-1/2">
              <label className="block text-gray-700 font-normal mb-1">
                Nombre
              </label>
              <input
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring outline-none focus:ring-moreblue ${
                  errors.nombre
                    ? "border-red-500 border-2 focus:ring-0"
                    : "border-gray-300"
                }`}
                type="text"
                placeholder="Ingrese su nombre..."
              />
              {errors.nombre && <p className="text-red-500">{errors.nombre}</p>}
            </div>
            <div className="md:w-1/2">
              <label className="block text-gray-700 font-normal mb-1">
                Apellido
              </label>
              <input
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring outline-none focus:ring-moreblue ${
                  errors.apellido
                    ? "border-red-500 border-2 focus:ring-0"
                    : "border-gray-300"
                }`}
                type="text"
                placeholder="Ingrese su apellido..."
              />
              {errors.apellido && (
                <p className="text-red-500">{errors.apellido}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <div className="md:w-1/2">
              <label className="block text-gray-700 font-normal mb-1">
                N° Documento
              </label>
              <input
                name="documento"
                value={formData.documento}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring outline-none focus:ring-moreblue ${
                  errors.documento
                    ? "border-red-500 border-2 focus:ring-0"
                    : "border-gray-300"
                }`}
                type="text"
                placeholder="Ingrese su documento..."
              />
              {errors.documento && (
                <p className="text-red-500">{errors.documento}</p>
              )}
            </div>
            <div className="md:w-1/2">
              <label className="block text-gray-700 font-normal mb-1">
                Fecha de Nac. (De 3 a 14 Años)
              </label>
              <input
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring outline-none focus:ring-moreblue ${
                  errors.documento
                    ? "border-red-500 border-2 focus:ring-0"
                    : "border-gray-300"
                }`}
                type="date"
              />
              {errors.fechaNacimiento && (
                <p className="text-red-500">{errors.fechaNacimiento}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <div className="md:w-1/3">
              <label className="block text-gray-700 font-normal mb-1">
                Domicilio
              </label>
              <input
                name="domicilio"
                value={formData.domicilio}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring outline-none focus:ring-moreblue ${
                  errors.domicilio
                    ? "border-red-500 border-2 focus:ring-0"
                    : "border-gray-300"
                }`}
                type="text"
                placeholder="Ingrese su domicilio..."
              />
              {errors.domicilio && (
                <p className="text-red-500">{errors.domicilio}</p>
              )}
            </div>
            <div className="md:w-1/3">
              <label className="block text-gray-700 font-normal mb-1">
                Localidad
              </label>
              <input
                name="localidad"
                value={formData.localidad}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring outline-none focus:ring-moreblue ${
                  errors.localidad
                    ? "border-red-500 border-2 focus:ring-0"
                    : "border-gray-300"
                }`}
                type="text"
                placeholder="Ingrese su localidad..."
              />
              {errors.localidad && (
                <p className="text-red-500">{errors.localidad}</p>
              )}
            </div>
            <div className="md:w-1/3">
              <label className="block text-gray-700 font-normal mb-1">
                Teléfono (Opcional)
              </label>
              <input
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
                type="text"
                placeholder="Ingrese su teléfono..."
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-normal mb-1">
              En caso de emergencia llamar a (N° de Tel.)
            </label>
            <input
              name="telefonoEmergencia"
              value={formData.telefonoEmergencia}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring outline-none focus:ring-moreblue ${
                errors.telefonoEmergencia
                  ? "border-red-500 border-2 focus:ring-0"
                  : "border-gray-300"
              }`}
              type="text"
              placeholder="Número de teléfono..."
            />
            {errors.telefonoEmergencia && (
              <p className="text-red-500">{errors.telefonoEmergencia}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-normal mb-1">
              Número de celular para enviar notificaciones vía WhatsApp
            </label>
            <input
              name="celular"
              value={formData.celular}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring outline-none focus:ring-moreblue ${
                errors.celular
                  ? "border-red-500 border-2 focus:ring-0"
                  : "border-gray-300"
              }`}
              type="text"
              placeholder="Ingrese su celular..."
            />
            {errors.celular && <p className="text-red-500">{errors.celular}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-normal mb-1">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring outline-none focus:ring-moreblue ${
                errors.email
                  ? "border-red-500 border-2 focus:ring-0"
                  : "border-gray-300"
              }`}
              type="email"
              placeholder="Ingrese su email..."
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <h4 className="text-lg mb-4">Categoria de Inscripción:</h4>
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <div className="md:w-1/2">
              <label className="block text-gray-700 font-normal mb-1">
                Socio
              </label>
              <select
                name="socio"
                value={formData.socio}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
              >
                <option value="no">No</option>
                <option value="si">Si</option>
              </select>
            </div>
            <div className="md:w-1/2">
              <label className="block text-gray-700 font-normal mb-1">
                Particular
              </label>
              <select
                name="particular"
                value={formData.particular}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
              >
                <option value="no">No</option>
                <option value="si">Si</option>
              </select>
            </div>
          </div>
          <h4 className="text-lg mb-4">Historia Clínica:</h4>
          <h5 className="text-md mb-2">Es alérgico a:</h5>
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <div className="md:w-1/3">
              <label className="block text-gray-700 font-normal mb-1">
                Medicamentos
              </label>
              <select
                name="alergicoMedicamentos"
                value={formData.alergicoMedicamentos}
                onChange={handleInputChange}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
              >
                <option value="no">No</option>
                <option value="si">Si</option>
              </select>
              {formData.alergicoMedicamentos === "si" && (
                <div>
                  <input
                    name="alergicoMedicamentosCual"
                    value={formData.alergicoMedicamentosCual}
                    onChange={handleInputChange}
                    type="text"
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue ${
                      errors.alergicoMedicamentosCual
                        ? "border-red-500 border-2"
                        : ""
                    }`}
                    placeholder="Cual?"
                  />
                  {errors.alergicoMedicamentosCual && (
                    <p className="text-red-500">
                      {errors.alergicoMedicamentosCual}
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="md:w-1/3">
              <label className="block text-gray-700 font-normal mb-1">
                Comidas
              </label>
              <select
                name="alergicoComidas"
                value={formData.alergicoComidas}
                onChange={handleInputChange}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
              >
                <option value="no">No</option>
                <option value="si">Si</option>
              </select>
              {formData.alergicoComidas === "si" && (
                <div>
                  <input
                    name="alergicoComidasCual"
                    value={formData.alergicoComidasCual}
                    onChange={handleInputChange}
                    type="text"
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue ${
                      errors.alergicoComidasCual
                        ? "border-red-500 border-2"
                        : ""
                    }`}
                    placeholder="Cual?"
                  />
                  {errors.alergicoComidasCual && (
                    <p className="text-red-500">{errors.alergicoComidasCual}</p>
                  )}
                </div>
              )}
            </div>
            <div className="md:w-1/3">
              <label className="block text-gray-700 font-normal mb-1">
                Picaduras
              </label>
              <select
                name="alergicoPicaduras"
                value={formData.alergicoPicaduras}
                onChange={handleInputChange}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
              >
                <option value="no">No</option>
                <option value="si">Si</option>
              </select>
              {formData.alergicoPicaduras === "si" && (
                <div>
                  <input
                    name="alergicoPicadurasCual"
                    value={formData.alergicoPicadurasCual}
                    onChange={handleInputChange}
                    type="text"
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue ${
                      errors.alergicoPicadurasCual
                        ? "border-red-500 border-2"
                        : ""
                    }`}
                    placeholder="Cual?"
                  />
                  {errors.alergicoPicadurasCual && (
                    <p className="text-red-500">
                      {errors.alergicoPicadurasCual}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <div className="md:w-1/2">
              <label className="block text-gray-700 font-normal mb-1">
                Médico de cabecera
              </label>
              <input
                name="medicoCabecera"
                value={formData.medicoCabecera}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring outline-none focus:ring-moreblue ${
                  errors.medicoCabecera
                    ? "border-red-500 border-2 focus:ring-0"
                    : "border-gray-300"
                }`}
                type="medicoCabecera"
                placeholder="Ingrese su nómbre..."
              />
              {errors.medicoCabecera && (
                <p className="text-red-500">{errors.medicoCabecera}</p>
              )}
            </div>
            <div className="md:w-1/2">
              <label className="block text-gray-700 font-normal mb-1">
                Teléfono (Opcional)
              </label>
              <input
                name="telefonoMedico"
                value={formData.telefonoMedico}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
                type="text"
                placeholder="Ingrese su teléfono..."
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <div className="md:w-1/2">
              <label className="block text-gray-700 font-normal mb-1">
                Obra Social
              </label>
              <input
                name="obraSocial"
                value={formData.obraSocial}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring outline-none focus:ring-moreblue ${
                  errors.obraSocial
                    ? "border-red-500 border-2 focus:ring-0"
                    : "border-gray-300"
                }`}
                type="text"
                placeholder="Ingrese su nómbre..."
              />
              {errors.obraSocial && (
                <p className="text-red-500">{errors.obraSocial}</p>
              )}
            </div>
            <div className="md:w-1/2">
              <label className="block text-gray-700 font-normal mb-1">
                Teléfono (Opcional)
              </label>
              <input
                name="telefonoObraSocial"
                value={formData.telefonoObraSocial}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
                type="text"
                placeholder="Ingrese su teléfono..."
              />
            </div>
          </div>
          <h5 className="text-md mb-2">Padeció o padece:</h5>
          <div className="flex flex-col md:flex-row gap-3 mb-2">
            <div className="md:w-1/4">
              <label className="block text-gray-700 font-normal mb-1">
                Epilepsia
              </label>
              <select
                name="epilepsia"
                value={formData.epilepsia}
                onChange={handleInputChange}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
              >
                <option value="no">No</option>
                <option value="si">Si</option>
              </select>
            </div>
            <div className="md:w-1/4">
              <label className="block text-gray-700 font-normal mb-1">
                Diabetes
              </label>
              <select
                name="diabetes"
                value={formData.diabetes}
                onChange={handleInputChange}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
              >
                <option value="no">No</option>
                <option value="si">Si</option>
              </select>
            </div>
            <div className="md:w-1/4">
              <label className="block text-gray-700 font-normal mb-1">
                Asma
              </label>
              <select
                name="asma"
                value={formData.asma}
                onChange={handleInputChange}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
              >
                <option value="no">No</option>
                <option value="si">Si</option>
              </select>
            </div>
            <div className="md:w-1/4">
              <label className="block text-gray-700 font-normal mb-1">
                Afecciones cardíacas
              </label>
              <select
                name="afeccionesCardiacas"
                value={formData.afeccionesCardiacas}
                onChange={handleInputChange}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
              >
                <option value="no">No</option>
                <option value="si">Si</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <div className="md:w-1/3">
              <label className="block text-gray-700 font-normal mb-1">
                Vacunas Covid-19
              </label>
              <select
                name="vacunasCovid"
                value={formData.vacunasCovid}
                onChange={handleInputChange}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
              >
                <option value="no">No</option>
                <option value="si">Si</option>
              </select>
            </div>
            {formData.vacunasCovid === "si" && (
              <>
                <div className="md:w-1/3">
                  <label className="block text-gray-700 font-normal mb-1">
                    ¿Cuál?
                  </label>
                  <input
                    name="vacunaCovidCual"
                    value={formData.vacunaCovidCual}
                    onChange={handleInputChange}
                    type="text"
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue ${
                      errors.vacunaCovidCual ? "border-red-500 border-2" : ""
                    }`}
                    placeholder="Cual?"
                  />
                  {errors.vacunaCovidCual && (
                    <p className="text-red-500">{errors.vacunaCovidCual}</p>
                  )}
                </div>
                <div className="md:w-1/3">
                  <label className="block text-gray-700 font-normal mb-1">
                    Cuantas dosis
                  </label>
                  <input
                    name="vacunaCovidDosis"
                    value={formData.vacunaCovidDosis}
                    onChange={handleInputChange}
                    type="text"
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue ${
                      errors.vacunaCovidDosis ? "border-red-500 border-2" : ""
                    }`}
                    placeholder="Cual?"
                  />
                  {errors.vacunaCovidDosis && (
                    <p className="text-red-500">{errors.vacunaCovidDosis}</p>
                  )}
                </div>
              </>
            )}
          </div>
          <div className="flex flex-col md:flex-row gap-3 mb-2">
            <div className="md:w-1/4">
              <label className="block text-gray-700 font-normal mb-1">
                ¿Toma medicamentos?
              </label>
              <select
                name="tomaMedicamentos"
                value={formData.tomaMedicamentos}
                onChange={handleInputChange}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
              >
                <option value="no">No</option>
                <option value="si">Si</option>
              </select>
              {formData.tomaMedicamentos === "si" && (
                <div>
                  <input
                    name="tomaMedicamentosCual"
                    value={formData.tomaMedicamentosCual}
                    onChange={handleInputChange}
                    type="text"
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue ${
                      errors.tomaMedicamentosCual
                        ? "border-red-500 border-2"
                        : ""
                    }`}
                    placeholder="Cuales?"
                  />
                  {errors.tomaMedicamentosCual && (
                    <p className="text-red-500">
                      {errors.tomaMedicamentosCual}
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="md:w-1/4">
              <label className="block text-gray-700 font-normal mb-1">
                ¿Sigue algún tratamiento?
              </label>
              <select
                name="tratamiento"
                value={formData.tratamiento}
                onChange={handleInputChange}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
              >
                <option value="no">No</option>
                <option value="si">Si</option>
              </select>
              {formData.tratamiento === "si" && (
                <div>
                  <input
                    name="tratamientoCual"
                    value={formData.tratamientoCual}
                    onChange={handleInputChange}
                    type="text"
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue ${
                      errors.tratamientoCual ? "border-red-500 border-2" : ""
                    }`}
                    placeholder="Cuales?"
                  />
                  {errors.tratamientoCual && (
                    <p className="text-red-500">{errors.tratamientoCual}</p>
                  )}
                </div>
              )}
            </div>
            <div className="md:w-1/4">
              <label className="block text-gray-700 font-normal mb-1">
                ¿Puede comer de todo?
              </label>
              <select
                name="puedeComerDeTodo"
                value={formData.puedeComerDeTodo}
                onChange={handleInputChange}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
              >
                <option value="no">No</option>
                <option value="si">Si</option>
              </select>
              {formData.puedeComerDeTodo === "no" && (
                <div>
                  <input
                    name="noPuedeComer"
                    value={formData.noPuedeComer}
                    onChange={handleInputChange}
                    type="text"
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue ${
                      errors.noPuedeComer ? "border-red-500 border-2" : ""
                    }`}
                    placeholder="Que cosa?"
                  />
                  {errors.noPuedeComer && (
                    <p className="text-red-500">{errors.noPuedeComer}</p>
                  )}
                </div>
              )}
            </div>
            <div className="md:w-1/4">
              <label className="block text-gray-700 font-normal mb-1">
                ¿Se mantiene a flote?
              </label>
              <select
                name="seMantieneAFlote"
                value={formData.seMantieneAFlote}
                onChange={handleInputChange}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
              >
                <option value="no">No</option>
                <option value="si">Si</option>
              </select>
              <label className="block text-gray-700 font-normal mb-1">
                ¿Sabe nadar?
              </label>
              <select
                name="sabeNadar"
                value={formData.sabeNadar}
                onChange={handleInputChange}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
              >
                <option value="no">No</option>
                <option value="si">Si</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <div className="md:w-1/2">
              <label className="block text-gray-700 font-normal mb-1">
                Grupo sanguíneo
              </label>
              <input
                name="grupoSanguineo"
                value={formData.grupoSanguineo}
                onChange={handleInputChange}
                type="text"
                className={`w-full px-4 py-2 border rounded-lg focus:ring outline-none focus:ring-moreblue ${
                  errors.grupoSanguineo
                    ? "border-red-500 border-2 focus:ring-0"
                    : "border-gray-300"
                }`}
                placeholder="Ingrese su grupo sanguíneo..."
              />
              {errors.grupoSanguineo && (
                <p className="text-red-500">{errors.grupoSanguineo}</p>
              )}
            </div>
            <div className="md:w-1/2">
              <label className="block text-gray-700 font-normal mb-1">
                Algun dato de relevancia (Opcional)
              </label>
              <input
                name="datoRelevancia"
                value={formData.datoRelevancia}
                onChange={handleInputChange}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring outline-none focus:ring-moreblue"
                placeholder="Algun dato relevante..."
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <div className="md:w-1/2">
              <label className="block text-gray-700 font-normal mb-1">
                Certificado médico (APTO NATATORIO)
              </label>
              <div className="relative">
                <label className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-100 transition-colors duration-300">
                  <span
                    className={`${
                      certificadoMedico ? "text-gray-500" : "text-blue-500"
                    }`}
                  >
                    Seleccionar PDF
                  </span>
                  <input
                    onChange={uploadPdf1}
                    className="hidden absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    type="file"
                    accept=".pdf"
                  />
                </label>
                <span className="pl-2 text-gray-500">
                  {certificadoMedico
                    ? "PDF Seleccionado"
                    : "Ningún archivo seleccionado"}
                </span>
              </div>
            </div>
            <div className="md:w-1/2">
              <label className="block text-gray-700 font-normal mb-1">
                Bucodental estampillado
              </label>
              <div className="relative">
                <label className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-100 transition-colors duration-300">
                  <span
                    className={`${
                      bucoDental ? "text-gray-500" : "text-blue-500"
                    }`}
                  >
                    Seleccionar PDF
                  </span>
                  <input
                    onChange={uploadPdf2}
                    className="hidden absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    type="file"
                    accept=".pdf"
                  />
                </label>
                <span className="pl-2 text-gray-500">
                  {bucoDental
                    ? "PDF Seleccionado"
                    : "Ningún archivo seleccionado"}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full mb-4">
              <p className="text-gray-500 text-sm">Estos PDF se utilizaran como forma de archivo, adicional a esto es necesario presentarlos en formato fisico en la oficina del club</p>
          </div>
          <div className="flex gap-3 mb-4">
            <input
              className="w-5"
              type="checkbox"
              name="datosVeridicos"
              checked={formData.datosVeridicos}
              onChange={handleInputChange}
            />
            <p>
              Declaro que todos los datos son verídicos al dia de la fecha de
              este formulario
            </p>
          </div>
          <div className="flex gap-3 mb-4">
            <input
              className="w-5"
              type="checkbox"
              name="autorizacionDatos"
              checked={formData.autorizacionDatos}
              onChange={handleInputChange}
            />
            <p>
              Estoy de acuerdo y autorizo la utilización de los datos
              proporcionados
            </p>
          </div>
          <div className="mb-4">
            {message && <p className="text-gray-500">{message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-moreblue text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default CampingForm;

export async function getServerSideProps(context) {
  try {
    await mongooseConnect();

    const data = await CampingData.find({});
    const serializedData = JSON.parse(JSON.stringify(data));

    return {
      props: {
        campingData: serializedData,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        campingData: [],
      },
    };
  }
}
