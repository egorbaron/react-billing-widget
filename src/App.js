import { useEffect } from "react";
import "./App.css";
import { AppWrapper, Iframe } from "./components";

function App() {
  useEffect(() => {
    window.addEventListener("message", (e) => {
      if (window.origin !== e.origin) {
        console.log(e);
      }
    });
    return () => window.removeEventListener("message", () => {})
  }, [])
  
  return (
    <AppWrapper>
      <Iframe url="https://app.leadpay.ru/checkout/239/"/>
    </AppWrapper>
  );
}

export default App;