import { useEffect, useState } from "react";

const useOnlineState = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
useEffect(() => {
  const handleOffline = () => setOnlineStatus(false);
  const handleOnline = () => setOnlineStatus(true);

  window.addEventListener("offline", handleOffline);
  window.addEventListener("online", handleOnline);

  return () => {
    window.removeEventListener("offline", handleOffline);
    window.removeEventListener("online", handleOnline);
  };
}, []);


  return onlineStatus;
};

export default useOnlineState;
