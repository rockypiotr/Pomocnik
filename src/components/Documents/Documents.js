import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

export default function Documents() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [value, setValue] = React.useState(""); // Wartość w pierwszym kroku
  const [secondValue, setSecondValue] = React.useState(""); // Wartość w drugim kroku

  const handleRadioChange = (event) => {
    // Przypisz konkretne "value" na konkretnym "kroku"
    if (activeStep === 0) {
      setValue(event.target.value);
    } else if (activeStep === 1) {
      setSecondValue(event.target.value);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleNext = (event) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const StyledFormControlLabel = styled((props) => (
    <FormControlLabel {...props} />
  ))(({ theme, checked }) => ({
    ".MuiFormControlLabel-label": checked && {
      color: theme.palette.primary.main,
    },
  }));

  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  MyFormControlLabel.propTypes = {
    /**
     * The value of the component.
     */
    value: PropTypes.any,
  };

  const steps = [
    // Pierwszy krok
    {
      label: "Wybierz rodzaj szkody",
      description: function () {
        return (
          <RadioGroup name="type-of-accident" onChange={handleRadioChange}>
            <MyFormControlLabel value="PL" label="PL" control={<Radio />} />
            <MyFormControlLabel value="PZ" label="PZ" control={<Radio />} />
          </RadioGroup>
        );
      },
    },
    // Drugi krok55
    {
      label: "Kto dzwoni?",
      description: function () {
        if (value === "PL") {
          return (
            <RadioGroup name="use-radio-group" onChange={handleRadioChange}>
              <MyFormControlLabel value="KOM" label="KOM" control={<Radio />} />
              <MyFormControlLabel value="AC" label="AC" control={<Radio />} />
              <MyFormControlLabel value="OSO" label="OSO" control={<Radio />} />
            </RadioGroup>
          );
        } else if (value === "PZ") {
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
              <MyFormControlLabel
                value="Zośka"
                label="Zośka"
                control={<Radio />}
              />
            </RadioGroup>
          );
        }
      },
    },
    // Trzeci krok
    {
      label: "Spytaj o",
      description: function () {
        if (secondValue === "KOM") {
          return <p>Wybrałeś KOM</p>;
        } else if (secondValue === "AC") {
          return <p>Wybrałeś AC</p>;
        } else if (secondValue === "OSO") {
          return <p>Wybrałeś OSO</p>;
        } else if (secondValue === "Poszkodowany") {
          return <p>Wybrałeś Poszkodowany</p>;
        } else if (secondValue === "Uposażony") {
          return <p>Wybrałeś Uposażony</p>;
        } else if (secondValue === "Zośka") {
          return <p>Wybrałeś Zośka</p>;
        } else if (secondValue === "Holowanie") {
          return <p>Wybrałeś Holowanie</p>;
        } else if (secondValue === "Hydraulik") {
          return <p>Wybrałeś Hydraulik</p>;
        } else if (secondValue === "Tauron") {
          return <p>Wybrałeś Tauron</p>;
        }
      },
    },
  ];
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description()}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Kontynuuj"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    variant="outlined"
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Wróć
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
