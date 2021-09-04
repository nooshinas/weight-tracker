import React, { useEffect, useState } from "react";

export const useForm = (
  handleSubmit: () => void,
  initValues?: Record<string, any>
) => {
  const [values, setValues] = useState(initValues);

  useEffect(() => {
    setValues(initValues);
  }, [initValues]);

  return {
    values,
    onChange: (e: React.FormEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [e.currentTarget.name]:
          e.currentTarget.type === "number"
            ? parseFloat(e.currentTarget.value)
            : e.currentTarget.value,
      });
    },
    onSubmit: (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      handleSubmit();
    },
  };
};
