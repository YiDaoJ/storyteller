import React from 'react';
import Button from '@material-ui/core/Button';

const CustomButton = ({children, className, onClick}) => (
  <Button variant="contained" color="primary" className={className} onClick={onClick}>
    {children}
  </Button>
)

export default CustomButton