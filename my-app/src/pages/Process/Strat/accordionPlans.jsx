import React from 'react'

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardPlan from './CardPlan'

const AccordionPlans = ( {title, plans, setUpdate, access}) => {

  return (
    <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        backgroundColor: "secondary.dark"
                    }}
                >
                    <Typography color='white'>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        backgroundColor: "background.default"
                    }}>
                    {plans.map((e,i) => <CardPlan plan={e} key={i} setUpdate={setUpdate} index={i} access={access}/>)}
                </AccordionDetails>
            </Accordion>
  )
}

export default AccordionPlans