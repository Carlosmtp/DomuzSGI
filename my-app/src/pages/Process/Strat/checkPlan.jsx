import React from 'react'
import AccordionPlans from './accordionPlans'

import { Box } from '@mui/system';

const checkPlan = () => {
    return (
        <Box>
            <AccordionPlans title={'Revisión'}/>
            <AccordionPlans title={'Mis planes'}/>
        </Box>
    )
}

export default checkPlan