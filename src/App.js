import { useLayoutEffect, useState} from "react";
import { AppWrapper, Iframe } from "./components";
import { getMessageEvents } from "./utils";

function App() {
  const [loading, setLoading] = useState(false);
  const [payUrl, setPayUrl] = useState("");
  const onLoad = () => setLoading(false);
  const id = window.name;
  const messageEvents = getMessageEvents(id);
  const onClose = () => {
    window.top.postMessage({
      test_widget: { type: messageEvents.closeIframe },
    }, "*");
  };

  const receiveMessage = (e) => {
    const type = e.data?.test_widget?.type;
    if (type === messageEvents.sendData) {
      const url = e.data?.test_widget?.data?.payUrl;
      if (url) {
        setPayUrl(url);
      }
    }
  };
  
  useLayoutEffect(() => {
    window.addEventListener("message", receiveMessage);
    window.parent.postMessage({
      test_widget: { type: messageEvents.getData }
    }, "*");
    setLoading(true);
    return () => window.removeEventListener("message", receiveMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <AppWrapper loading={loading} onClose={onClose}>
      <Iframe onLoad={onLoad} url={payUrl} title="leadpay"/>
    </AppWrapper>
  );
}

export default App;