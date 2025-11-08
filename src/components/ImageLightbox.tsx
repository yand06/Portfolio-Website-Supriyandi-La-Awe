import { useEffect } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import {
  X,
  Download,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  alt?: string;
}

export const ImageLightbox = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
  alt = "Gallery image",
}: ImageLightboxProps) => {
  const currentImage = images[currentIndex];
  const isFirstImage = currentIndex === 0;
  const isLastImage = currentIndex === images.length - 1;

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && !isFirstImage) {
        onNavigate(currentIndex - 1);
      } else if (e.key === "ArrowRight" && !isLastImage) {
        onNavigate(currentIndex + 1);
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, isFirstImage, isLastImage, onNavigate, onClose]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = currentImage;
    link.download = `image-${currentIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrevious = () => {
    if (!isFirstImage) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (!isLastImage) {
      onNavigate(currentIndex + 1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] max-h-[95vh] p-0 overflow-hidden bg-transparent border-0 shadow-none">
        {/* Close Button */}
        <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-background/80 backdrop-blur-sm p-2 opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border border-border shadow-lg">
          <X className="h-5 w-5 text-foreground" />
          <span className="sr-only">Close</span>
        </DialogClose>

        {/* Transform Wrapper for Zoom & Pan */}
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={5}
          centerOnInit
          wheel={{ step: 0.1 }}
          pinch={{ step: 5 }}
          doubleClick={{ mode: "toggle", step: 2 }}
          panning={{ velocityDisabled: false }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              {/* Image Container */}
              <div className="relative flex items-center justify-center min-h-[50vh] md:min-h-[70vh] lg:min-h-[85vh]">
                <TransformComponent
                  wrapperClass="!w-full !h-full"
                  contentClass="!w-full !h-full flex items-center justify-center"
                >
                  <img
                    src={currentImage}
                    alt={`${alt} ${currentIndex + 1}`}
                    className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl select-none"
                    draggable={false}
                  />
                </TransformComponent>

                {/* Navigation Buttons - Desktop */}
                {images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handlePrevious}
                      disabled={isFirstImage}
                      className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background disabled:opacity-30 disabled:cursor-not-allowed border border-border shadow-lg z-10"
                    >
                      <ChevronLeft className="h-8 w-8" />
                      <span className="sr-only">Previous image</span>
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleNext}
                      disabled={isLastImage}
                      className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background disabled:opacity-30 disabled:cursor-not-allowed border border-border shadow-lg z-10"
                    >
                      <ChevronRight className="h-8 w-8" />
                      <span className="sr-only">Next image</span>
                    </Button>
                  </>
                )}
              </div>

              {/* Bottom Controls - Floating bar dengan Zoom Controls */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-md border border-border rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  {/* Zoom Controls */}
                  <div className="flex items-center gap-1 border-r border-border pr-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => zoomOut()}
                      className="h-8 w-8 p-0 hover:bg-accent"
                      title="Zoom Out"
                    >
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => resetTransform()}
                      className="h-8 w-8 p-0 hover:bg-accent"
                      title="Reset Zoom"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => zoomIn()}
                      className="h-8 w-8 p-0 hover:bg-accent"
                      title="Zoom In"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Image Counter */}
                  {images.length > 1 && (
                    <div className="text-foreground text-sm md:text-base font-medium whitespace-nowrap px-2">
                      {currentIndex + 1} / {images.length}
                    </div>
                  )}

                  {/* Mobile Navigation */}
                  {images.length > 1 && (
                    <div className="flex md:hidden gap-1 border-l border-border pl-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handlePrevious}
                        disabled={isFirstImage}
                        className="h-8 w-8 p-0 disabled:opacity-30"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleNext}
                        disabled={isLastImage}
                        className="h-8 w-8 p-0 disabled:opacity-30"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {/* Download Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleDownload}
                    className="h-8 border-l border-border pl-2"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Download</span>
                  </Button>
                </div>
              </div>
            </>
          )}
        </TransformWrapper>
      </DialogContent>
    </Dialog>
  );
};
