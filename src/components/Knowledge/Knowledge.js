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
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const dataKnowledge = [
  {
    thisId: "moje1",
    header: "Szkoda całkowita",
    description: "Szkoda całkowita",
    accidentType: "PL",
  },
  {
    thisId: "moje2",
    header: "Szkoda częściowa",
    description: "Szkoda częściowa",
    accidentType: "PL",
  },
  {
    thisId: "moje3",
    header: "Utrata wartości pojazdu",
    description: "Utrata wartości pojazdu",
    accidentType: "PZ",
  },
  {
    thisId: "moje4",
    header: "Likwidacja techniczna",
    description: "Likwidacja techniczna",
    accidentType: "PZ",
  },
  {
    thisId: "moje5",
    header: "Likwidacja merytoryczna",
    description: "Likwidacja merytoryczna",
    accidentType: "PZ",
  },
];

export default function Knowledge() {
  const [accident, setAccident] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);

  const handleRadioChange = (event) => {
    setAccident(event.target.value);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleReset = () => {
    setAccident("");
    setSearchValue("");
  };

  return (
    <div>
      {/* Filtrowanie */}
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
          <Grid container spacing={3} direction="column">
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">Rodzaj szkody</FormLabel>
                <RadioGroup
                  aria-label="accident"
                  name="radio-buttons-group"
                  value={accident}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel value="PL" control={<Radio />} label="PL" />
                  <FormControlLabel value="PZ" control={<Radio />} label="PZ" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item>
              <TextField
                sx={{ minWidth: 240 }}
                id="search"
                label="Wyszukaj"
                variant="standard"
                value={searchValue}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={handleReset}>
                Resetuj filtry
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* Mapowanie dataKnowledge */}
      {dataKnowledge
        .filter(({ accidentType, header }) =>
          accident === ""
            ? header.toLowerCase().includes(searchValue)
            : accidentType === accident &&
              header.toLowerCase().includes(searchValue)
        )
        .map(({ thisId, header, description, accidentType }) => (
          <Accordion
            expanded={expanded === thisId}
            onChange={handleAccordionChange(thisId)}
            TransitionProps={{ unmountOnExit: true }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Grid container justifyContent="space-between">
                <Typography variant="h6" color="text.secondary">
                  {header}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip label={accidentType} variant="outlined" />
                </Stack>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
}
