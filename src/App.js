import { useLayoutEffect, useState} from "react";
import { AppWrapper, Iframe } from "./components";

function App() {
  const [loading, setLoading] = useState(false);
  const onLoad = () => setLoading(false);
  const listenMessage = (e) => {
    if (window.origin !== e.origin) {
      // console.log(e);
    }
  };
    
  useLayoutEffect(() => {
    setLoading(true);
    window.addEventListener("message", listenMessage);
    return () => window.removeEventListener("message", listenMessage);
  }, []);
  
  return (
    <AppWrapper loading={loading}>
      <Iframe onLoad={onLoad} url="https://app.leadpay.ru/checkout/239/" title="leadpay"/>
    </AppWrapper>
  );
}

export default App;