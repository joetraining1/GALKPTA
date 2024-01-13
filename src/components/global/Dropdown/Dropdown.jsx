import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Dropdown = ({ title, exclaim, children }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{
        width: '100%',
        backgroundColor: '#fff',
        height: 'fit-content',
        borderRadius: '0.1vw'
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            alignItems: 'center'
          }}
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
            {title}
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>{exclaim}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
  );
}

export default Dropdown