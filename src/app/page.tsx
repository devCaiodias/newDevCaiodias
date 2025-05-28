'use client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./not-found";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
