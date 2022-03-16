import * as React from "react";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";

export default function Pl() {
  const [activeStep, setActiveStep] = React.useState(0);
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
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
        value="Właściciel"
        label="Właściciel"
        control={<Radio />}
      />
      <MyFormControlLabel value="Sprawca" label="Sprawca" control={<Radio />} />
      <MyFormControlLabel
        value="Twój stary pijany"
        label="Twój stary pijany"
        control={<Radio />}
      />
    </RadioGroup>
  );
}
