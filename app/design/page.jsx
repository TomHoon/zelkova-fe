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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [email2, setEmail2] = useState("");

  return (
    <div className={C_DesignStyles.designContainer}>

      <C_Button title="small button" size="small" />
      <C_Button title="medium button" size="medium" />
      <C_Button title="large button" size="large" />
      <C_Button title="large A button" size="large" type="A" />
      <C_Button title="large B button" size="large" type="B" />

      <C_TabBar elementList={["시설안내", "조직도"]} callback={cb} />

      <C_Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
        type="email"
      />

      <C_Input
        value={email2}
        onChange={(e) => setEmail2(e.target.value)}
        placeholder="이메일2"
        placeholderSize="sm"
        placeholderColor="B"
        state="error"
        type="email"
        width="400px"
      />

      <C_Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
        placeholderColor="B"
        state="error"
        type="password"
      />

      <C_Input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="나이"
        placeholderSize="sm"
        placeholderColor="B"
        state="focused"
        type="number"
        width="100px"
      />
    </div>
  );
}
