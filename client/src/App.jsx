import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.module.css";
import Layout from "./components/Layout.jsx";
import DiaryList from "./components/DiaryList.jsx";
import DiaryWrite from "./components/DiaryWrite.jsx";
import TranslationPage from "./components/TranslationPage.jsx";
import DiaryLogin from "./components/member/DiaryLogin.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<DiaryList />} />
          <Route path="/login" element={<DiaryLogin />} /> */}
          <Route index element={<DiaryLogin />} />
          <Route path="/write" element={<DiaryWrite />} />
          <Route path="/trans" element={<TranslationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
