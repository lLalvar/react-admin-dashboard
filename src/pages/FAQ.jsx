import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PageHeader from '../components/PageHeader'

const accordionValues = [
  {
    title: 'An Important Question',
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    title: 'Another Important Question',
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    title: 'Your Favorite Question',
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    title: 'Some Random Question',
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    title: 'The Final Question',
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
]

const FAQ = () => {
  return (
    <Box>
      <PageHeader title='Calendar' subTitle='Full Calendar Interactive Page' />
      <Box>
        {accordionValues.map((values, index) => (
          <Accordion key={index} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color='secondary.light'>{values.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{values.text}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  )
}

export default FAQ
