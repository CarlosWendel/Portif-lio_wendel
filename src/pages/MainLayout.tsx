import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Home } from "./home/Home";

export function MainLayout() {
  return (
    <>
      <Header />
      <Home />
      <Outlet />
    </>
  );
}
