import * as React from "react";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const dataKnowledge = [
  {
    header: "Pierwsza",
    description: "Pierwsza",
  },
  {
    header: "Druga",
    description: "Druga",
  },
  {
    header: "Trzeci",
    description: "Trzeci",
  },
  {
    header: "Czwarty",
    description: "Czwarty",
  },
  {
    header: "Piąty",
    description: "Piąty",
  },
];

export default function Knwoledge() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Card
        sx={{
          minWidth: 275,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <CardContent>
          <Typography variant="h5" color="text.primary" gutterBottom>
            Filtruj
          </Typography>
          <Grid spacing={2}>
            <Grid>
              <FormControl component="fieldset">
                <FormLabel component="legend">Rodzaj szkody</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="PL" control={<Radio />} label="PL" />
                  <FormControlLabel value="PZ" control={<Radio />} label="PZ" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid>
              <TextField
                sx={{ minWidth: 240 }}
                id="standard-basic"
                label="Wyszukaj"
                variant="standard"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {dataKnowledge.map(({ header, description }) => (
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: "66%", flexShrink: 0 }}
              variant="h6"
              color="text.secondary"
            >
              {header}
            </Typography>
            <Stack
              sx={{ width: "33%", flexShrink: 0 }}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={1}
            >
              <Chip label="PZ" color="secondary" variant="outlined" />
              <Chip label="AB1" variant="outlined" />
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
