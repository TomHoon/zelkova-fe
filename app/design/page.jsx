"use client";

import C_Button from "@/common/atom/C_Button";
import C_TabBar from "@/common/mocules/C_TabBar";
import C_DesignStyles from "@/styles/C_Desgin.module.scss";

export default function App() {
  const cb = () => {
    console.log("callback 실행");
  };

  return (
    <div className={C_DesignStyles.designContainer}>
      <C_Button title="small button" size="small" />
      <C_Button title="medium button" size="medium" />
      <C_Button title="large button" size="large" />

      <C_Button title="large A button" size="large" type="A" />
      <C_Button title="large B button" size="large" type="B" />

      <C_TabBar elementList={["시설안내", "조직도"]} callback={cb} />
    </div>
  );
}
