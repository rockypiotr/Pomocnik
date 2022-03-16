import * as React from "react";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";

export default function Pz() {
  const [value, setValue] = React.useState("");

  const StyledFormControlLabel = styled((props) => (
    <FormControlLabel {...props} />
  ))(({ theme, checked }) => ({
    ".MuiFormControlLabel-label": checked && {
      color: theme.palette.primary.main,
    },
  }));

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  return (
    <RadioGroup name="use-radio-group" onChange={handleRadioChange}>
      <MyFormControlLabel
        value="Poszkodowany"
        label="Poszkodowany"
        control={<Radio />}
      />
      <MyFormControlLabel
        value="Uposażony"
        label="Uposażony"
        control={<Radio />}
      />
      <MyFormControlLabel value="Zośka" label="Zośka" control={<Radio />} />
    </RadioGroup>
  );
}
