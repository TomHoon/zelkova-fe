"use client";

import C_Button from "@/common/atom/C_Button";
import C_TabBar from "@/common/mocules/C_TabBar";
import C_NavBar from "@/common/mocules/C_NavBar";
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



      <C_Button title="로그인" size="nav" />
      <C_Button title="회원가입" size="nav" type="B" />

      <C_TabBar elementList={["시설안내", "조직도"]} callback={cb} />
      <C_NavBar elementList={[ 
        {label: "기관소개", submenu: ["이용안내","시설안내", "오시는길", "조직도"]},
        {label: "공지사항", submenu: ["공지사항","가정통신문", "채용안내"]},
        {label: "후원&자원봉사", submenu: ["후원의손길", "자원봉사"]},
        {label: "커뮤니티",}
        
        ,]} callback={cb} />


    </div>
  );
}
