import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageview } from "./ga";

export default function GAListener() {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.PROD) {
      pageview(location.pathname + location.search);
    }
  }, [location]);

  return null;
}
