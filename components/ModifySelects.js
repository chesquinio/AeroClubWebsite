import { useState } from "react";
import { Controller } from "react-hook-form";
import { motion } from "framer-motion";

const ModifySelect = ({ label, fieldName, control, defaultProp }) => {
  const [showAdditionalInput, setShowAdditionalInput] = useState(false);

  const handleSelectChange = (selectedValue) => {
    if (!defaultProp) {
      setShowAdditionalInput(selectedValue === "si");
    } else {
      setShowAdditionalInput(selectedValue === "no");
    }
  };

  return (
    <div>
      <label className="block text-gray-700 font-normal mb-1">{label}</label>
      <Controller
        name={fieldName}
        control={control}
        defaultValue={!defaultProp ? "no" : "si"}
        render={({ field }) => (
          <select
            {...field}
            className="mb-4 p-2 border w-full border-gray-300 rounded"
            onChange={(e) => {
              field.onChange(e);
              handleSelectChange(e.target.value);
            }}
          >
            <option value="no">No</option>
            <option value="si">Si</option>
          </select>
        )}
      />
      {showAdditionalInput && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          <Controller
            name={`tipo${
              fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
            }`}
            control={control}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                className="mb-4 p-2 border w-full border-gray-300 rounded"
                placeholder={`¿Cual/es?`}
              />
            )}
            rules={{ required: true }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default ModifySelect;
