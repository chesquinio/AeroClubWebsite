import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PoliticaPrivacidad() {
  const sections = [
    { id: "responsable", title: "1. Responsable del Tratamiento" },
    { id: "marco-legal", title: "2. Marco Legal Aplicable" },
    { id: "datos-recopilados", title: "3. Datos que Recopilamos" },
    { id: "finalidades", title: "4. ¿Cómo Utilizamos los Datos?" },
    { id: "legitimacion", title: "5. Base de Legitimación" },
    { id: "destinatarios", title: "6. ¿Con Quién Compartimos la Información?" },
    { id: "derechos", title: "7. ¿Cuáles son los Derechos del Usuario?" },
    { id: "menores", title: "8. Datos de Menores de Edad" },
    { id: "seguridad", title: "9. Seguridad y Confidencialidad" },
    { id: "cookies", title: "10. Política de Cookies" },
    { id: "contacto", title: "11. Contacto y Autoridad de Control" },
    { id: "actualizaciones", title: "12. Modificaciones y Actualizaciones" },
  ];

  return (
    <>
      <Head>
        <title>Política de Privacidad | Aero Club Rafaela</title>
        <meta
          name="description"
          content="Política de Privacidad y Protección de Datos Personales del Aero Club Rafaela de conformidad con la Ley N° 25.326 de la República Argentina."
        />
        <meta property="og:title" content="Política de Privacidad | Aero Club Rafaela" />
        <meta
          property="og:description"
          content="Conocé cómo protegemos y tratamos tus datos personales en el Aero Club Rafaela conforme a la legislación vigente."
        />
      </Head>

      <Header />

      <main className="lazy-load min-h-screen bg-gray-50 pb-16">
        {/* Banner Hero */}
        <div
          className="mt-24 h-40 relative flex items-center justify-center"
          style={{
            backgroundImage: "url('/aeronautica.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div
            className="absolute inset-0 flex flex-col justify-center items-center px-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
          >
            <h1
              className="text-white text-3xl md:text-5xl font-semibold text-center"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
            >
              Política de Privacidad
            </h1>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          {/* Tarjeta de Introducción */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-moreblue flex-shrink-0">
                <i className="bx bx-shield-quarter text-2xl"></i>
              </div>
              <div>
                <h2
                  className="text-2xl sm:text-3xl font-medium mb-3"
                  style={{
                    background: "linear-gradient(to right, #4EACF2, #004691)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Protección de Datos Personales en el Aero Club Rafaela
                </h2>
                <p className="text-gray-700 leading-relaxed text-justify mb-3">
                  La presente Política de Privacidad describe y explica quiénes somos, cómo recopilamos,
                  utilizamos, compartimos y protegemos los datos de carácter personal que los usuarios, socios,
                  alumnos, pilotos y visitantes nos proporcionan a través de nuestro sitio web y de nuestras
                  diferentes áreas de actividad (aeronáutica, escuela de vuelo, tenis, parque y colonia de vacaciones).
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Para el <strong>Aero Club Rafaela</strong> es una prioridad fundamental respetar la intimidad
                  y resguardar la seguridad y confidencialidad de la información personal de cada persona que
                  interactúa con nuestra institución, en estricto apego a los principios y mandatos de la legislación
                  argentina vigente.
                </p>
              </div>
            </div>
          </div>

          {/* Índice de navegación rápida */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <i className="bx bx-list-ul text-moreblue text-xl"></i>
              Índice de Contenidos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-sm">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-gray-600 hover:text-moreblue hover:bg-blue-50/50 p-2 rounded-lg transition-colors flex items-center gap-2"
                >
                  <i className="bx bx-chevron-right text-moreblue"></i>
                  <span>{section.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Secciones detalladas */}
          <div className="space-y-8">
            {/* 1. Responsable del Tratamiento */}
            <section
              id="responsable"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-moreblue flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Responsable del Tratamiento
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                Los datos personales facilitados a través de este sitio web o en el marco de las actividades
                sociales, deportivas y formativas del club quedan incorporados y bajo la responsabilidad del:
              </p>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200/70 text-sm sm:text-base space-y-2">
                <p className="text-gray-800">
                  <strong>Entidad:</strong> Aero Club Rafaela (Asociación Civil sin fines de lucro, fundada el 1 de marzo de 1925).
                </p>
                <p className="text-gray-800">
                  <strong>Domicilio institucional:</strong> Ruta Nacional 34, Km 220, Rafaela (C.P. 2300), Provincia de Santa Fe, República Argentina.
                </p>
                <p className="text-gray-800">
                  <strong>Ámbito de actividad:</strong> Formación aeronáutica (Escuela de Vuelo), actividades de aviación deportiva, tenis, camping, natatorio y desarrollo social/recreativo.
                </p>
                <p className="text-gray-800">
                  <strong>Contacto oficial:</strong> Teléfono / WhatsApp:{" "}
                  <a
                    href="tel:03492641181"
                    className="text-moreblue hover:underline font-medium"
                  >
                    03492 64-1181
                  </a>{" "}
                  / Canales de secretaría institucional.
                </p>
              </div>
            </section>

            {/* 2. Marco Legal Aplicable */}
            <section
              id="marco-legal"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-moreblue flex items-center justify-center text-sm font-bold">
                  2
                </span>
                Marco Legal Aplicable
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                El tratamiento de los datos personales en el Aero Club Rafaela se rige por:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>Ley Nacional N° 25.326 de Protección de los Datos Personales</strong> de la República Argentina y su Decreto Reglamentario N° 1558/2001.
                </li>
                <li>
                  Disposiciones y resoluciones emanadas de la <strong>Agencia de Acceso a la Información Pública (AAIP)</strong>, órgano de control de la Ley N° 25.326.
                </li>
                <li>
                  Normativas y regulaciones técnicas de la <strong>Administración Nacional de Aviación Civil (ANAC)</strong> en lo atingente a la actividad aérea, registros de pilotos, seguridad operacional y libros de vuelo reglamentarios.
                </li>
              </ul>
              <div className="bg-blue-50/60 border-l-4 border-moreblue p-4 rounded-r-xl text-sm text-gray-700">
                El club aplica rigurosamente los principios de licitud, finalidad, lealtad, exactitud, seguridad y confidencialidad exigidos por el marco normativo argentino.
              </div>
            </section>

            {/* 3. Datos que Recopilamos */}
            <section
              id="datos-recopilados"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-moreblue flex items-center justify-center text-sm font-bold">
                  3
                </span>
                Datos que Recopilamos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                En función de la relación del usuario con nuestra institución (visitante web, solicitante de vuelo de bautismo, alumno de la Escuela de Vuelo, socio activo o deportista), recabamos distintas categorías de datos:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/70">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <i className="bx bx-user text-moreblue"></i>
                    Información facilitada por el usuario
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1.5">
                    <li><strong>Datos de identificación:</strong> Nombre, apellido, número de DNI o documento equivalente, edad y fecha de nacimiento.</li>
                    <li><strong>Datos de contacto:</strong> Dirección de correo electrónico, teléfono móvil / WhatsApp, ciudad y domicilio.</li>
                    <li><strong>Credenciales de cuenta:</strong> Contraseña cifrada para acceso al panel de socios y reservas online.</li>
                    <li><strong>Comunicaciones y consultas:</strong> Mensajes, preguntas y solicitudes remitidas a través de formularios o WhatsApp.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/70">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <i className="bx bx-navigation text-moreblue"></i>
                    Datos de actividad específica
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1.5">
                    <li><strong>Área Aeronáutica:</strong> Licencias de piloto, certificado psicofísico emitido por autoridad aeronáutica, cómputo de horas de vuelo y registros de aeronaves solicitadas.</li>
                    <li><strong>Área Tenis y Deportes:</strong> Solicitudes de turnos de canchas, inscripciones a certámenes y categorías de juego.</li>
                    <li><strong>Área Parque y Colonia:</strong> Ficha de inscripción médica o de emergencias provista voluntariamente por los padres para la temporada de pileta o colonia infantil.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/70 mt-4">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <i className="bx bx-laptop text-moreblue"></i>
                  Datos técnicos y de navegación
                </h4>
                <p className="text-sm text-gray-600">
                  Al navegar en nuestro portal web se registran automáticamente detalles técnicos generales como dirección IP anónima o truncada, sistema operativo, tipo de navegador web, páginas visitadas dentro del sitio y duración de la sesión, mediante cookies funcionales o de diagnóstico para garantizar la operatividad de la página.
                </p>
              </div>

              <p className="text-gray-700 text-sm mt-4 text-justify">
                <strong>Datos sensibles:</strong> El Aero Club Rafaela no solicita ni almacena datos sensibles relativos a origen racial, posturas políticas, convicciones religiosas o filosóficas ni afiliación sindical. Cualquier dato médico vinculado a aptitud psicofísica se recopila únicamente bajo exigencia expresa de la autoridad aeronáutica (ANAC) o con el exclusivo propósito de velar por la salud y seguridad de alumnos o deportistas en emergencias.
              </p>
            </section>

            {/* 4. ¿Cómo Utilizamos los Datos? */}
            <section
              id="finalidades"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-moreblue flex items-center justify-center text-sm font-bold">
                  4
                </span>
                ¿Cómo Utilizamos los Datos? (Finalidades)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                Los datos recabados son tratados exclusivamente con las siguientes finalidades institucionales y operativas:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                  <i className="bx bx-check-circle text-moreblue text-xl flex-shrink-0 mt-0.5"></i>
                  <div>
                    <strong className="text-gray-800 text-sm">Gestión de la membresía y condición de socio:</strong>
                    <p className="text-gray-600 text-sm">Administración de registros, altas, validación de socios y comunicación de novedades institucionales.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                  <i className="bx bx-check-circle text-moreblue text-xl flex-shrink-0 mt-0.5"></i>
                  <div>
                    <strong className="text-gray-800 text-sm">Operación y reservas aeronáuticas:</strong>
                    <p className="text-gray-600 text-sm">Coordinación de cronogramas y turnos de aeronaves, instrucción en la Escuela de Vuelo, vuelos de bautismo y cumplimiento de las regulaciones aeronáuticas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                  <i className="bx bx-check-circle text-moreblue text-xl flex-shrink-0 mt-0.5"></i>
                  <div>
                    <strong className="text-gray-800 text-sm">Gestión de instalaciones deportivas y recreativas:</strong>
                    <p className="text-gray-600 text-sm">Reserva de canchas de tenis, inscripciones en actividades del parque, temporadas de verano y colonia de vacaciones infantil.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                  <i className="bx bx-check-circle text-moreblue text-xl flex-shrink-0 mt-0.5"></i>
                  <div>
                    <strong className="text-gray-800 text-sm">Atención y comunicación con el usuario:</strong>
                    <p className="text-gray-600 text-sm">Responder consultas canalizadas vía web, WhatsApp o teléfono, así como enviar notificaciones operativas relevantes (meteorología, estado del aeródromo o eventos del club).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                  <i className="bx bx-check-circle text-moreblue text-xl flex-shrink-0 mt-0.5"></i>
                  <div>
                    <strong className="text-gray-800 text-sm">Seguridad y mejora de la plataforma:</strong>
                    <p className="text-gray-600 text-sm">Monitorear el correcto funcionamiento de los servicios informáticos, prevenir accesos no autorizados y optimizar la experiencia de navegación.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Base de Legitimación */}
            <section
              id="legitimacion"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-moreblue flex items-center justify-center text-sm font-bold">
                  5
                </span>
                Base de Legitimación y Conservación
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                El tratamiento de los datos personales se fundamenta en:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4 text-justify">
                <li>
                  <strong>Consentimiento expreso e informado:</strong> Otorgado libremente por el titular al enviar un formulario de contacto, solicitar el alta como socio, inscribirse en un curso o actividad, o navegar aceptando el uso de cookies.
                </li>
                <li>
                  <strong>Ejecución estatutaria o precontractual:</strong> Necesaria para prestar los servicios asociados al club, posibilitar el uso de canchas, coordinar reservas y prestar la instrucción aeronáutica solicitada.
                </li>
                <li>
                  <strong>Cumplimiento de obligaciones legales:</strong> En particular las requeridas por el Código Aeronáutico y directivas emanadas de los organismos públicos competentes.
                </li>
              </ul>
              <p className="text-gray-700 text-sm leading-relaxed text-justify">
                Los datos personales se conservarán mientras se mantenga la relación asociativa o deportiva con la institución, o durante el tiempo necesario para responder a posibles responsabilidades legales y aeronáuticas derivadas de dicha relación, procediendo a su supresión cuando ya no resulten necesarios para las finalidades que motivaron su recolección.
              </p>
            </section>

            {/* 6. ¿Con Quién Compartimos la Información? */}
            <section
              id="destinatarios"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-moreblue flex items-center justify-center text-sm font-bold">
                  6
                </span>
                ¿Con Quién Compartimos la Información?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                El Aero Club Rafaela <strong>bajo ninguna circunstancia vende, cede ni comercializa</strong> los datos personales de sus usuarios o socios con terceros para fines publicitarios ajenos a la vida institucional.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                La información podrá ser comunicada únicamente en los siguientes supuestos:
              </p>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200/70">
                  <strong className="text-gray-800">Proveedores de servicios tecnológicos (Encargados de Tratamiento):</strong>
                  <p className="mt-1">Proveedores que nos brindan servicios de alojamiento en la nube (ej. Amazon Web Services, proveedores de base de datos o correo electrónico). Dichas entidades acceden a los datos de manera limitada y bajo estrictos acuerdos de confidencialidad y medidas de seguridad conformes a los estándares internacionales (ISO 27001, SOC, entre otros).</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200/70">
                  <strong className="text-gray-800">Autoridades aeronáuticas y gubernamentales:</strong>
                  <p className="mt-1">Organismos oficiales como la Administración Nacional de Aviación Civil (ANAC), autoridades judiciales, impositivas o de seguridad, cuando exista una obligación legal o mandato judicial expreso que así lo requiera.</p>
                </div>
              </div>
            </section>

            {/* 7. Derechos del Usuario */}
            <section
              id="derechos"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-moreblue flex items-center justify-center text-sm font-bold">
                  7
                </span>
                ¿Cuáles son los Derechos del Usuario?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                Como titular de los datos personales, de acuerdo con la Ley N° 25.326 de la República Argentina, usted cuenta con los derechos de:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/30">
                  <h4 className="font-semibold text-moreblue mb-1">Derecho de Acceso</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Conocer qué datos personales suyos obran en nuestros registros y las características de su tratamiento.</p>
                </div>
                <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/30">
                  <h4 className="font-semibold text-moreblue mb-1">Derecho de Rectificación y Actualización</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Corregir datos inexactos, desactualizados, incompletos o erróneos.</p>
                </div>
                <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/30">
                  <h4 className="font-semibold text-moreblue mb-1">Derecho de Supresión o Cancelación</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Solicitar la eliminación de sus datos cuando no exista obligación legal o estatutaria que exija su preservación.</p>
                </div>
                <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/30">
                  <h4 className="font-semibold text-moreblue mb-1">Derecho de Oposición y Revocación</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Revocar el consentimiento previamente otorgado para determinados usos o comunicaciones.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200/70 text-sm">
                <h4 className="font-semibold text-gray-800 mb-2">¿Cómo ejercer estos derechos?</h4>
                <p className="text-gray-600 mb-2 text-justify">
                  El titular podrá ejercer sus derechos de forma gratuita comunicándose con la secretaría del club al teléfono / WhatsApp:
                </p>
                <p className="font-medium text-moreblue mb-3">
                  <a href="tel:03492641181" className="hover:underline">
                    03492 64-1181
                  </a>
                </p>
                <p className="text-gray-500 text-xs text-justify">
                  La solicitud deberá incluir nombre completo, número de documento (DNI) para acreditar identidad, indicación clara del derecho que desea ejercer y teléfono o medio de contacto a efectos de notificaciones.
                </p>
              </div>
            </section>

            {/* 8. Datos de Menores de Edad */}
            <section
              id="menores"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-moreblue flex items-center justify-center text-sm font-bold">
                  8
                </span>
                Datos de Menores de Edad
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                El Aero Club Rafaela promueve actividades familiares, formativas y recreativas tales como la Colonia de Vacaciones de verano infantil, escuelitas de tenis y vuelos de divulgación.
              </p>
              <div className="bg-blue-50/40 p-4 rounded-xl border border-blue-100 text-sm text-gray-700 space-y-2 text-justify">
                <p>
                  En todos los casos en que se recopilen datos personales de menores de 18 años para la participación en tales actividades, <strong>se requerirá obligatoriamente la autorización expresa y el consentimiento informado de sus progenitores, tutores o representantes legales</strong>.
                </p>
                <p>
                  Los datos de menores serán tratados con máxima reserva y protección reforzada, utilizándose exclusivamente para el normal desarrollo de la actividad y la salvaguarda de su bienestar físico e integral. Si tomáramos conocimiento de datos suministrados por un menor sin la correspondiente autorización parental, procederemos de inmediato a su supresión.
                </p>
              </div>
            </section>

            {/* 9. Seguridad y Confidencialidad */}
            <section
              id="seguridad"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-moreblue flex items-center justify-center text-sm font-bold">
                  9
                </span>
                Seguridad y Confidencialidad
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                Con el objeto de evitar la pérdida, extravío, mal uso, alteración, acceso no autorizado o sustracción de los datos personales e información confidencial de los usuarios, el Aero Club Rafaela adopta las medidas técnicas y organizativas de seguridad razonables y adecuadas conforme a las directivas de la Ley N° 25.326.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                <div className="p-3 bg-gray-50 rounded-xl text-center">
                  <i className="bx bx-lock-alt text-2xl text-moreblue mb-1"></i>
                  <h5 className="font-medium text-xs text-gray-800">Cifrado de Contraseñas</h5>
                  <p className="text-xxs text-gray-500 mt-1">Almacenamiento seguro mediante algoritmos hash</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl text-center">
                  <i className="bx bx-server text-2xl text-moreblue mb-1"></i>
                  <h5 className="font-medium text-xs text-gray-800">Servidores Seguros</h5>
                  <p className="text-xxs text-gray-500 mt-1">Infraestructura protegida con controles de acceso</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl text-center">
                  <i className="bx bx-user-check text-2xl text-moreblue mb-1"></i>
                  <h5 className="font-medium text-xs text-gray-800">Acceso Restringido</h5>
                  <p className="text-xxs text-gray-500 mt-1">Autorización estricta por roles administrativos</p>
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed text-justify mt-3">
                Sin perjuicio de las precauciones adoptadas, la transmisión de información a través de Internet no es enteramente infalible frente a ataques cibernéticos maliciosos. Por ello, instamos a los usuarios a mantener en resguardo la confidencialidad de sus credenciales y no compartirlas con terceros.
              </p>
            </section>

            {/* 10. Política de Cookies */}
            <section
              id="cookies"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-moreblue flex items-center justify-center text-sm font-bold">
                  10
                </span>
                Política de Cookies
              </h2>

              <div className="space-y-4 text-gray-700 text-justify">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">¿Qué son las cookies?</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Una cookie es un pequeño archivo de texto que un sitio web descarga en su computadora, tableta o teléfono inteligente cuando visita una página. Permiten que el sitio recuerde sus acciones y preferencias (como el inicio de sesión, idioma y opciones de visualización) durante un tiempo determinado, facilitando su navegación y optimizando la carga de la plataforma.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">¿Qué cookies utilizamos?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/70">
                      <strong className="text-sm text-gray-800 block mb-1">Cookies Estrictamente Necesarias y de Sesión</strong>
                      <p className="text-xs text-gray-600">
                        Indispensables para el funcionamiento del portal, gestión de autenticación de socios, navegación segura y prevención de abusos o fraudes.
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/70">
                      <strong className="text-sm text-gray-800 block mb-1">Cookies de Rendimiento y Análisis</strong>
                      <p className="text-xs text-gray-600">
                        Permiten cuantificar de forma agregada y anónima el número de visitantes y analizar cómo interactúan con las distintas secciones para mejorar el diseño y los servicios.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">¿Cómo desactivar y gestionar las cookies?</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Usted puede en cualquier momento permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la configuración de las opciones del navegador instalado. A continuación, facilitamos los enlaces a las guías oficiales de los principales navegadores:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                    <a
                      href="https://support.google.com/chrome/answer/95647?hl=es"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-gray-200 hover:border-moreblue hover:text-moreblue transition-all"
                    >
                      <i className="bx bxl-chrome text-xl block mb-1"></i>
                      Google Chrome
                    </a>
                    <a
                      href="https://support.microsoft.com/es-es/windows/administrar-cookies-en-microsoft-edge-ver-permitir-bloquear-eliminar-y-usar-168dab11-0753-043d-7c16-ede5947fc64d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-gray-200 hover:border-moreblue hover:text-moreblue transition-all"
                    >
                      <i className="bx bxl-edge text-xl block mb-1"></i>
                      Microsoft Edge
                    </a>
                    <a
                      href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-gray-200 hover:border-moreblue hover:text-moreblue transition-all"
                    >
                      <i className="bx bxl-firefox text-xl block mb-1"></i>
                      Mozilla Firefox
                    </a>
                    <a
                      href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-gray-200 hover:border-moreblue hover:text-moreblue transition-all"
                    >
                      <i className="bx bxl-apple text-xl block mb-1"></i>
                      Apple Safari
                    </a>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    Tenga en cuenta que si decide deshabilitar determinadas cookies técnicas, algunas funcionalidades o áreas del sitio podrían no operar correctamente.
                  </p>
                </div>
              </div>
            </section>

            {/* 11. Contacto y Autoridad de Control */}
            <section
              id="contacto"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-moreblue flex items-center justify-center text-sm font-bold">
                  11
                </span>
                Contacto y Autoridad de Control
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                Ante cualquier duda, inquietud o consulta vinculada a esta Política de Privacidad o al tratamiento de sus datos, puede comunicarse directamente con la secretaría del Aero Club Rafaela:
              </p>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/70 text-sm space-y-1 mb-6">
                <p><strong>Institución:</strong> Aero Club Rafaela</p>
                <p><strong>Ubicación:</strong> RN34 Km 220, Rafaela, Provincia de Santa Fe, Argentina</p>
                <p>
                  <strong>Teléfono / WhatsApp de contacto:</strong>{" "}
                  <a href="tel:03492641181" className="text-moreblue hover:underline font-medium">
                    03492 64-1181
                  </a>
                </p>
              </div>

              {/* Mención legal obligatoria AAIP Ley 25.326 */}
              <div className="bg-blue-50 border border-blue-200 p-4 sm:p-5 rounded-xl">
                <h4 className="font-semibold text-blue-900 text-sm mb-2 flex items-center gap-2">
                  <i className="bx bx-info-circle text-lg text-moreblue"></i>
                  Información para el titular de los datos (Resolución AAIP)
                </h4>
                <p className="text-xs sm:text-sm text-blue-950 leading-relaxed text-justify mb-2">
                  &ldquo;El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326.&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-blue-950 leading-relaxed text-justify">
                  &ldquo;La <strong>AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA (AAIP)</strong>, en su carácter de Órgano de Control de la Ley Nº 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.&rdquo;
                </p>
              </div>
            </section>

            {/* 12. Modificaciones y Actualizaciones */}
            <section
              id="actualizaciones"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-moreblue flex items-center justify-center text-sm font-bold">
                  12
                </span>
                Modificaciones y Actualizaciones
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                El Aero Club Rafaela se reserva expresamente el derecho de revisar y actualizar la presente Política de Privacidad cuando resulte necesario para reflejar modificaciones en nuestras prácticas, responder a exigencias operativas o adecuarse a reformas legislativas y reglamentarias.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify mt-3">
                Cualquier cambio sustancial será publicado en esta misma sección, indicando la fecha de última actualización para que los usuarios puedan conocer oportunamente el modo en que se gestiona y resguarda su información.
              </p>
            </section>
          </div>

          {/* Última actualización simple sin badge */}
          <div className="mt-12 text-center text-xs text-gray-500">
            Última actualización: Octubre 2026
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
