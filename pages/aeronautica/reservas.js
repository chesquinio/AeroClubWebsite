import NoSsr from "@/components/NoSsr";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import { format, isEqual } from "date-fns";
import { getTimes } from "@/lib/getTime";

function FlyReservationPage() {
  const [date, setDate] = useState({});
  const [currentForm, setCurrentForm] = useState(1);
  const [isModal, setIsModal] = useState(false);
  const [message, setMessage] = useState(null);

  const times = getTimes({ justDate: date.justDate });

  const goBack = () => {
    if (currentForm > 1) {
      setCurrentForm(currentForm - 1);
      setDate({});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <NoSsr>
      <motion.div
        className="bg-white rounded-lg sm:shadow-xl px-8 py-2 mt-10 sm:mt-24 sm:mb-10 w-full sm:w-3/5 xl:w-2/5 2xl:w-1/3 mx-auto text-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <form onSubmit={handleSubmit}>
          {currentForm > 1 && (
            <button
              type="button"
              onClick={goBack}
              className="backButton w-10 h-10 text-gray-700 text-4xl rounded"
            >
              <i className="bx bx-left-arrow-alt"></i>
            </button>
          )}

          {currentForm === 1 && (
            <motion.section
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
            >
              <h1 className="font-light text-center text-3xl mb-6">
                Elije una fecha:
              </h1>
              <div className="w-full justify-center items-center">
                <Calendar
                  minDate={new Date()}
                  view="month"
                  onClickDay={(date) =>
                    setDate((prev) => ({ ...prev, justDate: date }))
                  }
                />
              </div>
            </motion.section>
          )}

          {currentForm === 2 && (
            <motion.section
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
            >
              <h3 className="text-3xl text-center font-light mb-6">
                Horarios disponibles:
              </h3>
              <div className="grid grid-col-1 md:grid-cols-3 text-center gap-5">
                {times?.map((time, i) => (
                  <button
                    key={`time-${i}`}
                    type="button"
                    onClick={() =>
                      setDate((prev) => ({ ...prev, dateTime: time }))
                    }
                    className={`py-8 px-4 rounded text-xl ${
                      isEqual(date.dateTime, time)
                        ? "bg-blue-400 text-white"
                        : "bg-whiteblue text-gray-800 hover:bg-blue-200 hover:text-white"
                    } transition duration-300 ease-in-out`}
                  >
                    {format(time, "kk:mm")}
                  </button>
                ))}
              </div>
            </motion.section>
          )}
          {message && <p className="text-gray my-2">{message}</p>}
          {currentForm > 1 ? (
            <button
              type="submit"
              disabled={!date.dateTime}
              className={`text-white w-full text-center text-xl py-3 rounded my-4 ${
                !date.dateTime ? "bg-blue-200" : "bg-blue-400"
              }`}
            >
              Enviar
            </button>
          ) : (
            <button
              onClick={() => setCurrentForm(currentForm + 1)}
              disabled={!date.justDate}
              className={`text-white w-full text-center text-xl py-3 rounded my-4 ${
                !date.justDate ? "bg-blue-200" : "bg-blue-400"
              }`}
            >
              Siguiente
            </button>
          )}
        </form>
      </motion.div>
    </NoSsr>
  );
}

export default FlyReservationPage;
