import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

export default function Backtohome() {
  return (
    <>
      <Link to="/">
        <Button>Back to home</Button>
      </Link>
    </>
  )
}
