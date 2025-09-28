import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-metallic dark:bg-metallic-dark relative">
      <div className="wing-bg" />
      <div className="text-center glass-panel outline-glow px-10 py-12">
        <h1 className="text-6xl font-minecrafter title-glow mb-4">404</h1>
        <p className="text-lg text-slate-700 dark:text-slate-200 mb-6">Oops! Page not found</p>
        <Link to="/" className="btn-primary">Return Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
