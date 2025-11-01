import { useState } from "react";

export function useRefresh() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(true);    
  const cleanUpRefresh = () => setRefresh(false);   

  return { refresh, triggerRefresh, cleanUpRefresh };
}
