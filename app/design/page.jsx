"use client";

import { useState } from "react";
import C_Button from "@/common/atom/C_Button";
import C_TabBar from "@/common/mocules/C_TabBar";
import C_NavBar from "@/common/mocules/C_NavBar";
import C_SocialButton from "@/common/atom/C_SocialButton";
import C_Input from "@/common/atom/C_Input";
import C_Footer from "@/common/organisms/C_Footer";

import C_TableList from "@/common/mocules/C_TableList";


import C_DesignStyles from "@/styles/C_Desgin.module.scss";


export default function App() {
  const cb = () => {
    console.log("callback 실행");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [email2, setEmail2] = useState("");

  const columns = [
    { label: "No", key: "no", width: "10%" },
    { label: "Title", key: "title", width: "70%" },
    { label: "Date", key: "date", width: "20%" },
  ];

  const data = Array.from({ length: 10 }, (_, i) => ({
    no: 10,
    title: "Lorem ipsum dolor sit amet consectetur.",
    date: "2000.00.00",
  }));


  return (
    <div className={C_DesignStyles.designContainer}>

      <C_Button title="파일 첨부" size="attach" type="B" />
      <C_Button title="로그인" size="nav" />
      <C_Button title="회원가입" size="nav" type="B" />
      <C_Button title="검색" size="medium" type="C"/>
      <C_Button title="글 수정" size="wide" />
      <C_Button title="로그인" size="large" />
      <C_Button title="가입 완료" size="xlarge" />



      <C_Button title="로그인" size="nav" />
      <C_Button title="회원가입" size="nav" type="B" />

      <C_TabBar elementList={["시설안내", "조직도"]} callback={cb} />

      <C_NavBar elementList={[ 
        {label: "기관소개", submenu: ["이용안내","시설안내", "오시는길", "조직도"]},
        {label: "공지사항", submenu: ["공지사항","가정통신문", "채용안내"]},
        {label: "후원&자원봉사", submenu: ["후원의손길", "자원봉사"]},
        {label: "커뮤니티",}
        
        ,]} callback={cb} />

        
      <C_SocialButton 
        onClickKakao={() => console.log("카카오 로그인")}
        onClickGoogle={() => console.log("구글 로그인")}
      />

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

      <C_Footer/>

    <C_TableList
        title="공지사항"
        columns={columns}
        data={data}
        searchable={true}
        onSearch={(keyword) => console.log(keyword)}
      />

    </div>

    
  );
}
