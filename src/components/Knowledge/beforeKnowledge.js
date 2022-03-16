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
            Czy jest przyjęta odpowiedzialność
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
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "66%", flexShrink: 0 }}>Users</Typography>
          <Stack
            sx={{ width: "33%", flexShrink: 0 }}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
          >
            <Chip label="PZ" color="secondary" variant="outlined" />
            <Chip label="AB5" variant="outlined" />
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "66%", flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Stack
            sx={{ width: "33%", flexShrink: 0 }}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
          >
            <Chip label="PL" color="primary" variant="outlined" />
            <Chip label="KOM" variant="outlined" />
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "66%", flexShrink: 0 }}>
            Personal data
          </Typography>
          <Stack
            sx={{ width: "33%", flexShrink: 0 }}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
          >
            <Chip label="PL" color="primary" variant="outlined" />
            <Chip label="OSO" variant="outlined" />
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
