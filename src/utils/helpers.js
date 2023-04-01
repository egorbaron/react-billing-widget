export const getMessageEvents = (id) => ({
  getData: `get-data-${id}`,
  sendData: `send-data-${id}`,
  closeIframe: `close-iframe-${id}`
});
