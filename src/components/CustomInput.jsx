/* eslint-disable react/prop-types */

import { Input, Typography } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const CustomInput = ({
  name,
  type,
  size,
  value,
  placeholder,
  label,
  defaultValue,
}) => {
  const { control} = useFormContext();
  return (
    <>
      <Typography
        style={{ fontSize: 14, fontWeight: 500, fontFamily:'sans-serif',   }}
      >
        {label ? label : null}
      </Typography>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            placeholder={placeholder}
            size={size}
            type={type}
            {...field}
            defaultValue={defaultValue ? defaultValue : ""}
            value={value ? value : field.value}
            style={{marginBottom:8}}
            required
          />
          
        )}
       
      />
    </>
  );
};

export default CustomInput;
