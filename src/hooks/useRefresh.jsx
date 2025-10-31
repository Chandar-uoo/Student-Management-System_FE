
import { useState } from "react";

export function useRefresh() {
  const [refresh, setRefresh] = useState(false);
  const triggerRefresh = () => setRefresh(prev => !prev);
  return { refresh, triggerRefresh };
}
