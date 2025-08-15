import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      {/* Navigation */}
      <div className="absolute top-6 left-6 z-20">
        <Button variant="outline" size="sm" asChild className="bg-golf-green border-golf-green text-white hover:bg-golf-green/90 hover:text-white shadow-lg">
          <Link to="/">
            <Home className="h-4 w-4 mr-2" />
            {t('notfound.home')}
          </Link>
        </Button>
      </div>

      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher />
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t('notfound.title')}</h1>
        <p className="text-xl text-gray-600 mb-8">{t('notfound.description')}</p>
        <Button variant="outline" size="lg" asChild className="bg-golf-green border-golf-green text-white hover:bg-golf-green/90 hover:text-white shadow-lg">
          <Link to="/">
            <Home className="h-4 w-4 mr-2" />
            {t('notfound.home')}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
