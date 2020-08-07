import Sniffr from 'sniffr';

const getClientInfo = () => {
  const sniffer = new Sniffr();
  const clientInfo = sniffer.sniff(navigator.userAgent);
  return {
    url: window.location.href,
    browser: `${clientInfo.browser.name} ${clientInfo.browser.versionString}`,
    operatingSystem: `${clientInfo.os.name} ${clientInfo.os.versionString}`,
  };
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getClientInfo,
};
