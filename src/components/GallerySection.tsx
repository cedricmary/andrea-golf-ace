import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

const GallerySection = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isFullGalleryOpen, setIsFullGalleryOpen] = useState(false);

  const galleryImages = [
    {
      src: "/lovable-uploads/1b679295-73b3-44d6-b62d-0f8fd1300ad1.png",
      alt: "Andrea enjoying the scenic golf course view",
      caption: "Andrea overlooking the beautiful countryside during tournament week"
    },
    {
      src: "/lovable-uploads/6ae61128-27aa-498c-8e45-3b5d039287f7.png",
      alt: "Andrea demonstrating perfect swing technique on the golf course",
      caption: "Andrea's textbook swing form during practice session"
    },
    {
      src: "/lovable-uploads/69b1010b-4dcd-4b60-ad2d-dd87b4208200.png",
      alt: "Andrea with fellow young golfers on the course",
      caption: "Team spirit - Andrea with fellow competitors at a youth tournament"
    },
    {
      src: "/lovable-uploads/fa7996ac-cf72-48ad-a56e-df0b95c350b2.png",
      alt: "Andrea in action during tournament play",
      caption: "Tournament focus - Andrea concentrating during competitive play"
    },
    {
      src: "/lovable-uploads/0876263d-fffb-4d78-84b4-12cbdddd43fe.png",
      alt: "Andrea at Club de Golf ULZAMA",
      caption: "Andrea posing at the beautiful Club de Golf ULZAMA with the clubhouse in the background"
    },
    {
      src: "/lovable-uploads/d8fbb45b-62c6-4e30-a2c3-3e0fe05b54b5.png",
      alt: "Andrea on the golf course with scenic mountain views",
      caption: "Andrea enjoying a beautiful day on the golf course with stunning countryside views"
    },
    {
      src: "/lovable-uploads/197c7c65-ca9a-4846-b0f6-ba5d578d87ff.png",
      alt: "Andrea concentrating during practice on the golf course",
      caption: "Andrea focused and determined during practice session on the course"
    },
    {
      src: "/lovable-uploads/0f16fe89-af3b-4f05-aa7b-de4afb44ca62.png",
      alt: "Andrea on the links course by the ocean",
      caption: "Andrea braving the weather on a stunning links golf course by the ocean"
    },
    {
      src: "/lovable-uploads/da42e502-dcd5-40ce-b2cb-11e118ce7112.png",
      alt: "International youth golf gathering with flags from multiple countries",
      caption: "Andrea with fellow young golfers from around the world at an international tournament"
    },
    {
      src: "/lovable-uploads/dcd77dd3-0c7d-4c8e-87ec-51ddfe074217.png",
      alt: "Andrea with coach at historic golf club",
      caption: "Andrea with his coach at a prestigious golf club with beautiful historic architecture"
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const openFullGallery = () => {
    setIsFullGalleryOpen(true);
  };

  const closeFullGallery = () => {
    setIsFullGalleryOpen(false);
  };

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
          <p className="text-xl text-golf-navy/70 max-w-2xl mx-auto mb-6">
            Capturing moments from Andrea's golf journey
          </p>
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={openFullGallery}
              className="bg-golf-green/10 border-golf-green text-golf-green hover:bg-golf-green hover:text-white transition-all"
            >
              <Camera className="w-5 h-5 mr-2" />
              View All Photos
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
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
                <div className="absolute top-2 right-2 bg-black/30 rounded-full p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-4 h-4 text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Lightbox Modal */}
        {isLightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in">
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Previous Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              {/* Next Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              {/* Main Image */}
              <div className="max-w-5xl max-h-[80vh] relative animate-scale-in">
                <img
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  className="w-full h-full object-contain"
                  onClick={nextImage}
                />
                
                {/* Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium text-center">
                    {galleryImages[currentImageIndex].caption}
                  </p>
                  <p className="text-white/70 text-sm text-center mt-2">
                    {currentImageIndex + 1} / {galleryImages.length}
                  </p>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    onClick={() => goToImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Full Gallery View */}
        {isFullGalleryOpen && (
          <div className="fixed inset-0 bg-black/95 z-50 overflow-auto animate-fade-in">
            <div className="min-h-screen p-4">
              {/* Header */}
              <div className="sticky top-0 bg-black/80 backdrop-blur-sm z-10 p-4 mb-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-champion">
                    Complete Gallery - Andrea's Golf Journey
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={closeFullGallery}
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              {/* All Photos Grid */}
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {galleryImages.map((image, index) => (
                    <div 
                      key={index} 
                      className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => {
                        closeFullGallery();
                        setTimeout(() => openLightbox(index), 100);
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-sm font-medium">{image.caption}</p>
                        <p className="text-xs opacity-80 mt-1">Click to view in detail</p>
                      </div>
                      <div className="absolute top-2 right-2 bg-black/30 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Camera className="w-4 h-4 text-white" />
                      </div>
                      {/* Image number badge */}
                      <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                        {index + 1}
                      </div>
                    </div>
                  ))}
                  
                  {/* Placeholder images for upcoming photos */}
                  {[...Array(8)].map((_, index) => (
                    <div 
                      key={`placeholder-${index}`} 
                      className="aspect-[4/3] bg-gradient-to-br from-golf-green/20 to-golf-sand/20 border-2 border-dashed border-golf-green/40 rounded-lg flex items-center justify-center group hover:border-golf-green/60 transition-colors"
                    >
                      <div className="text-center text-golf-navy/60 group-hover:text-golf-green/80 transition-colors">
                        <Camera className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-sm font-medium">Photo {galleryImages.length + index + 1}</p>
                        <p className="text-xs">Coming Soon</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Gallery Stats */}
                <div className="mt-12 text-center text-white/80">
                  <div className="flex items-center justify-center gap-8 text-sm">
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4" />
                      <span>{galleryImages.length} Photos Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>•</span>
                      <span>8 More Coming Soon</span>
                    </div>
                  </div>
                  <p className="mt-4 text-xs opacity-60">
                    Click any photo to view in detail • Scroll to see all images
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder for more images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {[...Array(3)].map((_, index) => (
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