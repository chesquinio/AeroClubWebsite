import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import ModifySelect from "@/components/ModifySelects";
import { mongooseConnect } from "@/lib/mongoose";
import { CampingData } from "@/model/CampingData";
import Head from "next/head";
import Header from "@/components/Header";

function Test({ campingData }) {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "onChange" });
  const [currentForm, setCurrentForm] = useState(1);
  const [withdrawAuth, setWithdrawAuth] = useState(false);
  const [exitAuth, setExitAuth] = useState(false);
  const [message, setMessage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!campingData[0].activeBotton) {
      router.push("/parque");
    }
  }, []);

  const onSubmit = async (data) => {
    if (currentForm < 4) {
      setCurrentForm(currentForm + 1);
    } else {
      if (!withdrawAuth && !exitAuth) {
        setMessage("Es necesario elegir una de las opciones");
      } else {
        const childrenAuth = [withdrawAuth, exitAuth];
        await axios
          .post("/api/campingForm", { data, childrenAuth })
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
      }
    }
  };

  const goBack = () => {
    if (currentForm > 1) {
      setCurrentForm(currentForm - 1);
    }
  };

  return (
    <>
      <Head>
        <title>Planilla de Incripción | Aero Club Rafaela</title>
      </Head>
      <Header />
      <h3
        className="font-medium text-3xl mb-4 text-center mt-28"
        style={{
          background: "linear-gradient(to right, #4EACF2, #004691)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Planilla de Inscripción
      </h3>
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8 w-4/5 lg:w-1/2 mx-auto mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative pt-5">
          {currentForm > 1 && (
            <button
              type="button"
              onClick={goBack}
              className="absolute backButton w-10 h-10 text-gray-700 text-4xl rounded"
            >
              <i class="bx bx-left-arrow-alt"></i>
            </button>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            {currentForm === 1 && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
              >
                <h3 className="text-lg mb-2">Datos Personales del Niño/a:</h3>
                <div className="flex flex-col md:flex-row gap-3 mb-4">
                  <div className="md:w-1/2">
                    <label className="block text-gray-700 font-normal mb-1">
                      Nombre
                    </label>
                    <Controller
                      name="nombre"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="text"
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        />
                      )}
                      rules={{ required: true }}
                    />
                  </div>
                  <div className="md:w-1/2">
                    <label className="block text-gray-700 font-normal mb-1">
                      Apellido
                    </label>
                    <Controller
                      name="apellido"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="text"
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        />
                      )}
                      rules={{ required: true }}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 mb-4">
                  <div className="md:w-1/2">
                    <label className="block text-gray-700 font-normal mb-1">
                      N° Documento
                    </label>
                    <Controller
                      name="documento"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="text"
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        />
                      )}
                      rules={{ required: true }}
                    />
                  </div>
                  <div className="md:w-1/2">
                    <label className="block text-gray-700 font-normal mb-1">
                      Curso
                    </label>
                    <Controller
                      name="curso"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="text"
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        />
                      )}
                      rules={{ required: true }}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 mb-4">
                  <div className="md:w-1/2">
                    <label className="block text-gray-700 font-normal mb-1">
                      Es hermano de... (Opcional)
                    </label>
                    <Controller
                      name="hermanoDe"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="text"
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        />
                      )}
                    />
                  </div>
                  <div className="md:w-1/2">
                    <label className="block text-gray-700 font-normal mb-1">
                      Email de contacto al padre
                    </label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="email"
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        />
                      )}
                      rules={{ required: true }}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {currentForm === 2 && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
              >
                <h4 className="text-lg mb-4">Historia Clínica:</h4>
                <h5 className="text-md mb-2">Es alérgico a:</h5>
                <div className="flex flex-col md:flex-row gap-3 mb-4">
                  <div className="md:w-1/3">
                    <ModifySelect
                      label="Medicamentos"
                      fieldName="alergicoMedicamentos"
                      control={control}
                    />
                  </div>
                  <div className="md:w-1/3">
                    <ModifySelect
                      label="Comidas"
                      fieldName="alergicoComidas"
                      control={control}
                    />
                  </div>
                  <div className="md:w-1/3">
                    <ModifySelect
                      label="Picaduras"
                      fieldName="alergicoPicaduras"
                      control={control}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 mb-4">
                  <div className="md:w-1/2">
                    <label className="block text-gray-700 font-normal mb-1">
                      Médico de cabecera
                    </label>
                    <Controller
                      name="medicoCabecera"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="text"
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        />
                      )}
                      rules={{ required: true }}
                    />
                  </div>
                  <div className="md:w-1/2">
                    <label className="block text-gray-700 font-normal mb-1">
                      Teléfono (Opcional)
                    </label>
                    <Controller
                      name="telefonoMedico"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="text"
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 mb-4">
                  <div className="md:w-1/2">
                    <label className="block text-gray-700 font-normal mb-1">
                      Obra Social
                    </label>
                    <Controller
                      name="obraSocial"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="text"
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        />
                      )}
                      rules={{ required: true }}
                    />
                  </div>
                  <div className="md:w-1/2">
                    <label className="block text-gray-700 font-normal mb-1">
                      Teléfono (Opcional)
                    </label>
                    <Controller
                      name="telefonoObraSocial"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="text"
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        />
                      )}
                    />
                  </div>
                </div>
                <h5 className="text-md mb-2">Padeció o padece:</h5>
                <div className="flex flex-col md:flex-row gap-3 mb-2">
                  <div className="md:w-1/4">
                    <label className="block text-gray-700 font-normal mb-1">
                      Epilepsia
                    </label>
                    <Controller
                      name="epilepsia"
                      control={control}
                      defaultValue="no"
                      render={({ field }) => (
                        <select
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        >
                          <option value="no">No</option>
                          <option value="si">Si</option>
                        </select>
                      )}
                    />
                  </div>
                  <div className="md:w-1/4">
                    <label className="block text-gray-700 font-normal mb-1">
                      Diabetes
                    </label>
                    <Controller
                      name="diabetes"
                      control={control}
                      defaultValue="no"
                      render={({ field }) => (
                        <select
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        >
                          <option value="no">No</option>
                          <option value="si">Si</option>
                        </select>
                      )}
                    />
                  </div>
                  <div className="md:w-1/4">
                    <label className="block text-gray-700 font-normal mb-1">
                      Asma
                    </label>
                    <Controller
                      name="asma"
                      control={control}
                      defaultValue="no"
                      render={({ field }) => (
                        <select
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        >
                          <option value="no">No</option>
                          <option value="si">Si</option>
                        </select>
                      )}
                    />
                  </div>
                  <div className="md:w-1/4">
                    <label className="block text-gray-700 font-normal mb-1">
                      Afecciones cardíacas
                    </label>
                    <Controller
                      name="afeccionesCardiacas"
                      control={control}
                      defaultValue="no"
                      render={({ field }) => (
                        <select
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        >
                          <option value="no">No</option>
                          <option value="si">Si</option>
                        </select>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 mb-4">
                  <div className="md:w-1/3">
                    <label className="block text-gray-700 font-normal mb-1">
                      Vacunas Covid-19
                    </label>
                    <Controller
                      name="vacunasCovid"
                      control={control}
                      defaultValue="no"
                      render={({ field }) => (
                        <select
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        >
                          <option value="no">No</option>
                          <option value="si">Si</option>
                        </select>
                      )}
                    />
                  </div>
                  <div className="md:w-1/3">
                    <label className="block text-gray-700 font-normal mb-1">
                      ¿Cuál?
                    </label>
                    <Controller
                      name="vacunasCovidCual"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="text"
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        />
                      )}
                    />
                  </div>
                  <div className="md:w-1/3">
                    <label className="block text-gray-700 font-normal mb-1">
                      Cuantas dosis
                    </label>
                    <Controller
                      name="vacunasCovidDosis"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="text"
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        />
                      )}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {currentForm === 3 && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
              >
                <div className="flex flex-col md:flex-row gap-3 mb-2">
                  <div className="md:w-1/4">
                    <ModifySelect
                      label="¿Toma medicamentos?"
                      fieldName="tomaMedicamentos"
                      control={control}
                    />
                  </div>
                  <div className="md:w-1/4">
                    <ModifySelect
                      label="¿Sigue algún tratamiento?"
                      fieldName="tratamiento"
                      control={control}
                    />
                  </div>
                  <div className="md:w-1/4">
                    <ModifySelect
                      label="¿Puede comer de todo?"
                      fieldName="puedeComerDeTodo"
                      defaultProp="si"
                      control={control}
                    />
                  </div>
                  <div className="md:w-1/4">
                    <label className="block text-gray-700 font-normal mb-1">
                      ¿Se mantiene a flote?
                    </label>
                    <Controller
                      name="seMantieneAFlote"
                      control={control}
                      defaultValue="no"
                      render={({ field }) => (
                        <select
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        >
                          <option value="no">No</option>
                          <option value="si">Si</option>
                        </select>
                      )}
                    />
                    <label className="block text-gray-700 font-normal mb-1">
                      ¿Sabe nadar?
                    </label>
                    <Controller
                      name="sabeNadar"
                      control={control}
                      defaultValue="no"
                      render={({ field }) => (
                        <select
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        >
                          <option value="no">No</option>
                          <option value="si">Si</option>
                        </select>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 mb-4">
                  <div className="md:w-1/2">
                    <label className="block text-gray-700 font-normal mb-1">
                      Grupo sanguíneo
                    </label>
                    <Controller
                      name="grupoSanguineo"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="text"
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        />
                      )}
                      rules={{ required: true }}
                    />
                  </div>
                  <div className="md:w-1/2">
                    <label className="block text-gray-700 font-normal mb-1">
                      Algun dato de relevancia (Opcional)
                    </label>
                    <Controller
                      name="datoRelevancia"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="text"
                          {...field}
                          className="mb-4 p-2 border w-full border-gray-300 rounded"
                        />
                      )}
                    />
                  </div>
                </div>
              </motion.div>
            )}
            {currentForm === 4 && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
              >
                <div>
                  <div className="flex justify-center mb-2">
                    <button
                      onClick={() => {
                        setWithdrawAuth(true);
                        setExitAuth(true);
                      }}
                      type="button"
                      className={`text-gray-500 hover:text-gray-900 transition-all ${
                        withdrawAuth === true && exitAuth === true
                          ? "text-gray-900"
                          : ""
                      }`}
                    >
                      Ambos
                    </button>
                  </div>
                  <div className="flex flex-row gap-5 mb-10">
                    <button
                      type="button"
                      onClick={() => {
                        setWithdrawAuth(true);
                        setExitAuth(false);
                      }}
                      className={`w-full md:w-1/2 bg-gray-100 rounded py-3 px-4 transition-all ${
                        withdrawAuth ? "bg-gray-300" : ""
                      }`}
                    >
                      Autorización de Retiro
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setExitAuth(true);
                        setWithdrawAuth(false);
                      }}
                      className={`w-full md:w-1/2 bg-gray-100 rounded py-3 px-4 transition-all ${
                        exitAuth ? "bg-gray-300" : ""
                      }`}
                    >
                      Autorización de Salida
                    </button>
                  </div>
                  {withdrawAuth && (
                    <motion.div
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                    >
                      <div className="flex flex-col gap-5">
                        <p>
                          POR EL PRESENTE YO (Madre, Padre o Tutor Responsable){" "}
                          <Controller
                            name="pariente"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                {...field}
                                className="mb-4 p-1 text-center border-b-2 outline-none border-gray-300"
                              />
                            )}
                            rules={{ required: true }}
                          />{" "}
                          D.N.I:{" "}
                          <Controller
                            name="parienteDocumento"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                {...field}
                                className="mb-4 p-1 w-32 text-center border-b-2 outline-none border-gray-300"
                              />
                            )}
                            rules={{ required: true }}
                          />{" "}
                          , autorizo a (apellido y nombre de la persona)
                          <Controller
                            name="parienteAuth"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                {...field}
                                className="mb-4 p-1 text-center border-b-2 outline-none border-gray-300"
                              />
                            )}
                            rules={{ required: true }}
                          />{" "}
                          D.N.I:
                          <Controller
                            name="parienteAuthDocumento"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                {...field}
                                className="mb-4 p-1 w-32 text-center border-b-2 outline-none border-gray-300"
                              />
                            )}
                            rules={{ required: true }}
                          />{" "}
                          , a retirar a mi hijo/a:
                          <Controller
                            name="nombre"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                {...field}
                                className="mb-4 p-1 text-center border-b-2 outline-none border-gray-300"
                              />
                            )}
                            rules={{ required: true }}
                          />{" "}
                          D.N.I:
                          <Controller
                            name="documento"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                {...field}
                                className="mb-4 p-1 w-32 text-center border-b-2 outline-none border-gray-300"
                              />
                            )}
                            rules={{ required: true }}
                          />{" "}
                          , de
                          <Controller
                            name="edadChico"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                {...field}
                                className="mb-4 p-1 w-16 text-center border-b-2 outline-none border-gray-300"
                              />
                            )}
                            rules={{ required: true }}
                          />{" "}
                          años, concurrente de "Aero Colonia", en caso de ser
                          necesario
                        </p>
                        <div className="flex flex-col gap-4 mb-8">
                          <span className="text-lg">
                            Datos personales de la persona autorizada:
                          </span>
                          <p>
                            Parentesco:{" "}
                            <Controller
                              name="parentescoParienteAuth"
                              control={control}
                              render={({ field }) => (
                                <input
                                  type="text"
                                  {...field}
                                  className="p-1 text-center border-b-2 outline-none border-gray-300"
                                />
                              )}
                              rules={{ required: true }}
                            />{" "}
                          </p>
                          <p>
                            N° Celular:{" "}
                            <Controller
                              name="celParienteAuth"
                              control={control}
                              render={({ field }) => (
                                <input
                                  type="text"
                                  {...field}
                                  className="p-1 text-center border-b-2 outline-none border-gray-300"
                                />
                              )}
                              rules={{ required: true }}
                            />{" "}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {withdrawAuth && exitAuth && (
                    <motion.div
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                      className="w-full h-px bg-gray-500 mt-4 mb-8"
                    ></motion.div>
                  )}
                  {exitAuth && (
                    <motion.div
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                    >
                      <div className="flex flex-col gap-5 mb-4">
                        <p>
                          POR EL PRESENTE YO (Madre, Padre o Tutor Responsable){" "}
                          <Controller
                            name="pariente"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                {...field}
                                className="mb-4 p-1 text-center border-b-2 outline-none border-gray-300"
                              />
                            )}
                            rules={{ required: true }}
                          />{" "}
                          D.N.I:{" "}
                          <Controller
                            name="parienteDocumento"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                {...field}
                                className="mb-4 p-1 w-32 text-center border-b-2 outline-none border-gray-300"
                              />
                            )}
                            rules={{ required: true }}
                          />{" "}
                          , autorizo a retirarse por sus propios medios, a mi
                          hijo/a:
                          <Controller
                            name="nombre"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                {...field}
                                className="mb-4 p-1 text-center border-b-2 outline-none border-gray-300"
                              />
                            )}
                            rules={{ required: true }}
                          />{" "}
                          D.N.I:
                          <Controller
                            name="documento"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                {...field}
                                className="mb-4 p-1 w-32 text-center border-b-2 outline-none border-gray-300"
                              />
                            )}
                            rules={{ required: true }}
                          />{" "}
                          , de
                          <Controller
                            name="edadChico"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                {...field}
                                className="mb-4 p-1 w-16 text-center border-b-2 outline-none border-gray-300"
                              />
                            )}
                            rules={{ required: true }}
                          />{" "}
                          años, concurrente de "Aero Colonia", en caso de ser
                          necesario
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
                <div className="w-full mb-4">
                  <p className="text-gray-500 text-sm">
                    Ademas de la informacion adjuntada, sera necesario presentar
                    los certificados de buco dental y apto medico en formato
                    físico en la oficina del club
                  </p>
                </div>
                <div className="flex gap-3 mb-4">
                  <Controller
                    name="datosVeridicos"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <input type="checkbox" {...field} className="mr-2" />
                    )}
                    rules={{ required: true }}
                  />
                  <p className="text-sm">
                    Declaro que todos los datos son verídicos al dia de la fecha
                    de este formulario
                  </p>
                </div>
                <div className="flex gap-3 mb-4">
                  <Controller
                    name="autorizacionImagen"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <input type="checkbox" {...field} className="mr-2" />
                    )}
                  />
                  <p className="text-sm">
                    Estoy de acuerdo con la{" "}
                    <a
                      className="text-blue-600 underline"
                      href="https://aeroclub-website.s3.sa-east-1.amazonaws.com/1699376046158.pdf"
                      target="_blank"
                    >
                      Autorizacion de Publicación de Imágenes
                    </a>
                  </p>
                </div>
                <div className="flex gap-3 mb-4">
                  <Controller
                    name="autorizacionRopa"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <input type="checkbox" {...field} className="mr-2" />
                    )}
                  />
                  <p className="text-sm">
                    Estoy de acuerdo con la{" "}
                    <a
                      className="text-blue-600 underline"
                      href="https://aeroclub-website.s3.sa-east-1.amazonaws.com/1699376400969.pdf"
                      target="_blank"
                    >
                      Autorizacion para Cambio de Ropa
                    </a>
                  </p>
                </div>
                <div className="mb-4">
                  {message && <p className="text-gray-500">{message}</p>}
                </div>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={!isValid}
              className={`bg-blue-500 hover:bg-blue-700 text-white w-full py-2 px-4 rounded transition-all ${
                !isValid && "cursor-not-allowed opacity-50"
              }`}
            >
              {currentForm < 4 ? "Siguiente" : "Enviar"}
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
}

export default Test;

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
