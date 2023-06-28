import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'justify',
  paddingTop:"30px",
  paddingLeft:"30px",
  paddingRight:"30px",
  color: theme.palette.text.secondary,
}));


const LayoutAbout = () => {
  
  return <div>hello</div>
  
};

export default LayoutAbout