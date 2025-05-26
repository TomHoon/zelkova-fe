"use client";

import { useState } from "react";
import C_Button from "@/common/atom/C_Button";
import C_TabBar from "@/common/mocules/C_TabBar";
import C_Input from "@/common/atom/C_Input";

import C_DesignStyles from "@/styles/C_Desgin.module.scss";

export default function App() {
  const cb = () => {
    console.log("callback 실행");
  };

  const [errorInput, setErrorInput] = useState("");
  const [focusedInput, setFocusedInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [smallInput, setSmallInput] = useState("");

  return (
    <div className={C_DesignStyles.designContainer}>

      <C_Button title="small button" size="small" />
      <C_Button title="medium button" size="medium" />
      <C_Button title="large button" size="large" />
      <C_Button title="large A button" size="large" type="A" />
      <C_Button title="large B button" size="large" type="B" />

      <C_TabBar elementList={["시설안내", "조직도"]} callback={cb} />

      <C_Input
        value={errorInput}
        onChange={(e) => setErrorInput(e.target.value)}
        placeholder="에러"
        state="error"
      />

      <C_Input
        value={dateInput}
        onChange={(e) => setDateInput(e.target.value)}
        width="200px"
        placeholder="날짜"          
        isDate={true}
      />

      <C_Input
        value={focusedInput}
        onChange={(e) => setFocusedInput(e.target.value)}
        placeholder="클릭 시"
        state="focused"
      />

      <C_Input
        value={smallInput}
        onChange={(e) => setSmallInput(e.target.value)}
        placeholder="작은 placeholder"
        size="sm"
      />
    </div>
  );
}
