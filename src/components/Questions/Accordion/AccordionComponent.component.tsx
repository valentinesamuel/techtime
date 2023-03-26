import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Accordion from "@mui/material/Accordion";
import {
  AccordionBody,
  AccordionContainer,
  AccordionHeading,
} from "./AccordionComponent.styles";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";

type Props = {};

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        ".Mui-expanded & > .collapsIconWrapper": {
          display: "none",
        },
        ".expandIconWrapper": {
          display: "none",
        },
        ".Mui-expanded & > .expandIconWrapper": {
          display: "block",
        },
      }}
    >
      <div className="collapsIconWrapper">
        <AddIcon />
      </div>
      <div className="expandIconWrapper">
        <RemoveIcon sx={{ color: "#004DB3" }} />
      </div>
    </Box>
  );
};

const AccordionComponent = (props: Props) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <AccordionContainer>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        square={true}
        disableGutters={true}
        elevation={0}
      >
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <AccordionHeading className={expanded === "panel1" ? "open" : ""}>
            Is there a free trial available ?
          </AccordionHeading>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionBody>
            high-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition. hbuild your future
            with our quality education. the best and largest all-in-one online
            tutoring platform in the worldd definition.
          </AccordionBody>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        square={true}
        disableGutters={true}
        elevation={0}
      >
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <AccordionHeading className={expanded === "panel2" ? "open" : ""}>
            Can i change my plan later?
          </AccordionHeading>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionBody>
            high-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition. hbuild your future
            with our quality education. the best and largest all-in-one online
            tutoring platform in the worldd definition.
          </AccordionBody>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        square={true}
        disableGutters={true}
        elevation={0}
      >
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <AccordionHeading className={expanded === "panel3" ? "open" : ""}>
            Are the courses lifetime?
          </AccordionHeading>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionBody>
            high-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition. hbuild your future
            with our quality education. the best and largest all-in-one online
            tutoring platform in the worldd definition.
          </AccordionBody>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        square={true}
        disableGutters={true}
        elevation={0}
      >
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <AccordionHeading className={expanded === "panel4" ? "open" : ""}>
            Do i get certified after taking courses?
          </AccordionHeading>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionBody>
            high-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition. hbuild your future
            with our quality education. the best and largest all-in-one online
            tutoring platform in the worldd definition.
          </AccordionBody>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        square={true}
        disableGutters={true}
        elevation={0}
      >
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <AccordionHeading className={expanded === "panel5" ? "open" : ""}>
            How do i reach out to mentors?
          </AccordionHeading>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionBody>
            high-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition. hbuild your future
            with our quality education. the best and largest all-in-one online
            tutoring platform in the worldd definition.
          </AccordionBody>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        square={true}
        disableGutters={true}
        elevation={0}
      >
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <AccordionHeading className={expanded === "panel6" ? "open" : ""}>
            Do we get job ready after taking courses?
          </AccordionHeading>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionBody>
            high-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition. hbuild your future
            with our quality education. the best and largest all-in-one online
            tutoring platform in the worldd definition.
          </AccordionBody>
        </AccordionDetails>
      </Accordion>
    </AccordionContainer>
  );
};

export default AccordionComponent;
