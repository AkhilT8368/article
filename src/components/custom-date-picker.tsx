import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";

interface CustomDatePickerProps {
  label: string;
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <DatePicker
      label={label}
      value={value}
      onChange={onChange}
      slots={{ textField: (params) => <TextField size="small" {...params} /> }}
    />
  );
};

export default CustomDatePicker;
