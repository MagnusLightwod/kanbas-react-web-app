
import React, { useState } from "react";
export default function Rew({ d = { b: "a" } }) {
    const a = {
      b: "b",
      c: 1,
    };
    const e = {
      ...a,
      ...d,
    };
    return (
      <ul>
        <li>{e.c}</li>
        <li>{e.b}</li>
      </ul>
    );
  }
  