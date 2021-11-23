

import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const MenuButton =  styled(Button)({
  fontSize:'17px',
  height:'90px',
  width:'20px',
  backgroundColor:'red',
  fontFamily:'Source Sans Pro'
});


export const Container = styled('div')({
  zIndex:5,
  display: 'flex',
  flexDirection: 'row',
  cursor:'pointer',
  backgroundColor:'green',
  alignSelf:'flex-end',
  marginTop:'40px',
  marginRight:'14vw',
  '@media (max-width:768px)': {
      right:'3vw',
  },
  '@media (min-width:1200px)': {
      marginTop:'40px',
  },
  '@media (min-width:2048px)': {
      marginTop:'60px',
  },
  '@media (min-width:3840px)': {
      marginTop:'60px',
  },
});