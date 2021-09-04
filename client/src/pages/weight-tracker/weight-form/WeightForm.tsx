import React from "react";
import Button from "../../../components/button/Button";
import DatePicker from "../../../components/date-picker/DatePicker";
import Input from "../../../components/input/Input";
import { useForm } from "../../../hooks/form/useForm";
import { Weight } from "../../../interfaces/weight";
import "./WeightForm.scss";

interface Props {
  initValue?: Partial<Weight>;
  onSubmit: (values: Weight) => void;
}

const WeightForm = (props: Props) => {
  const { values, onChange, onSubmit } = useForm(
    () => props.onSubmit(values as Weight),
    props.initValue
  );

  return (
    <div className="weight-form">
      <Input
        suffix="kg"
        placeholder="Add your weight"
        type="number"
        required
        name="weight"
        defaultValue={props?.initValue?.weight}
        onChange={(e) => onChange(e)}
      />
      <DatePicker
        required
        defaultValue={props?.initValue?.date}
        name="date"
        onChange={(e) => onChange(e)}
      />
      <Button className="submit-btn" onClick={(e) => onSubmit(e)}>
        Submit
      </Button>
    </div>
  );
};

export default WeightForm;
