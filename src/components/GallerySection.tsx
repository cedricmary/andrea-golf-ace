import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Camera } from "lucide-react";

const GallerySection = () => {
  const { t } = useLanguage();

  const galleryImages = [
    {
      src: "/lovable-uploads/1b679295-73b3-44d6-b62d-0f8fd1300ad1.png",
      alt: "Andrea enjoying the scenic golf course view",
      caption: "Andrea overlooking the beautiful countryside during tournament week"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-golf-sand/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-8 h-8 text-golf-green" />
            <h2 className="text-4xl md:text-5xl font-bold text-golf-navy font-champion">
              Gallery
            </h2>
          </div>
          <p className="text-xl text-golf-navy/70 max-w-2xl mx-auto">
            Capturing moments from Andrea's golf journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Placeholder for more images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[...Array(4)].map((_, index) => (
            <Card key={index} className="aspect-square bg-golf-sand/20 border-2 border-dashed border-golf-sand/40 flex items-center justify-center">
              <div className="text-center text-golf-navy/40">
                <Camera className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">More photos coming soon</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;