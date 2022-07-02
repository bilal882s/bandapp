import React from 'react';
import {Link} from "react-router-dom";

export default function Backtohome() {
  return (
    <>
        <Link to="/" className="btn btn-success">Back to home</Link>
    </>
  )
}
