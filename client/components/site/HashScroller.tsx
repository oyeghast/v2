import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HashScroller() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
    }
  }, [location.pathname, location.hash]);
  return null;
}
