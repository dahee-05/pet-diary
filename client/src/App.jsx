import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.module.css";
import Layout from "./components/Layout.jsx";
import DiaryList from "./components/DiaryList.jsx";
import DiaryWrite from "./components/DiaryWrite.jsx";
import TranslationPage from "./components/TranslationPage.jsx";
import DiaryLogin from "./components/member/DiaryLogin.jsx";
import ProtectedRoute from "../utils/ProtectedRoute.jsx";
import NaverLogin from "./components/member/NaverLogin.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DiaryLogin />} />
          <Route path="/naver-redirect" element={<NaverLogin />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/list" element={<DiaryList />} />
            <Route path="/write" element={<DiaryWrite />} />
            <Route path="/trans" element={<TranslationPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
