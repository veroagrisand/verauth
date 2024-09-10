'use client'

import React from "react";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function App() {
     return (
          <Calendar
               aria-label="Date (Read Only)"
               value={today(getLocalTimeZone())}
               isReadOnly
               className="absolute top-full left-full transform -translate-x-full -translate-y-full"
          />
     );
}