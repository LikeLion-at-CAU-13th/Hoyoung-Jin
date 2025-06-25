import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import Result from "./pages/Result";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Quizs from "./pages/Quizs";

const App = () => {
  return (
    <div>
      <AppDom>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizs" element={<Quizs />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </AppDom>
    </div>
  );
};

export default App;

const AppDom = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
