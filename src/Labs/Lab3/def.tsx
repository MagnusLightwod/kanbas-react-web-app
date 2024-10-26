import React, { useState } from "react";

function Def({ a } : any) {
    const { c, d } = a;
    return (
      <pre>
        {c} <br /> {d}
      </pre>
    );
  }
  
  const b = {
    c: "e",
    d: "f",
  };
  
  export default function Abc() {
    return <Def a={b} />;
  }
  