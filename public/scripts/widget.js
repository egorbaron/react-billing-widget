function initTestWidget () {
  const iframe = document.createElement("iframe");
  iframe.src = "https://test-react-widget.vercel.app/";
  iframe.style.cssText = "height: 100% !important; width: 100% !important; position: fixed !important; border: 0px !important; inset: 0px !important; max-height: 100% important; z-index: 99999 !important";
  document.body.appendChild(iframe);
  const receiveMessage = (e) => {
    "close-iframe" == e.data && iframe.remove();
  }
  iframe.onload = () => {
    iframe.contentWindow.postMessage({
      testData: "some data..."
    }, "*");
  };
  window.addEventListener("message", receiveMessage);
}