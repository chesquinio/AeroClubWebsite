import React from "react";

export default function SpecialAero() {
  return (
    <div className="h-auto w-full p-10 bg-gray-100">
      <h1 className="text-4xl font-light text-gray-800 text-center mb-10">
        Festival Aéreo
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="w-72 sm:w-80 h-auto mx-auto">
          <img
            src="/special1.jpeg"
            alt="Festival Aéreo"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="w-72 sm:w-80 h-auto mx-auto">
          <img
            src="/special4.jpeg"
            alt="Festival Aéreo"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="w-72 sm:w-80 h-auto mx-auto">
          <img
            src="/special3.jpeg"
            alt="Festival Aéreo"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
      <div className="mt-28">
        <h3 className="text-2xl font-light text-gray-800 text-center lg:text-left mb-10">
          Información para visitantes
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="w-72 h-auto mx-auto">
            <img
              src="/special5.jpeg"
              alt="Festival Aéreo"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="w-72 h-auto lg:col-span-2 mx-auto">
            <img
              src="/special6.jpeg"
              alt="Festival Aéreo"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="w-72 h-auto mx-auto">
            <img
              src="/special7.jpeg"
              alt="Festival Aéreo"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="w-72 h-auto lg:col-span-2 mx-auto">
            <img
              src="/special8.jpeg"
              alt="Festival Aéreo"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="w-72 h-auto lg:col-span-2 mx-auto">
            <img
              src="/special9.jpeg"
              alt="Festival Aéreo"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
