////Contoh UI Header yang di Buat oleh Ai
"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSlide {
  id: number;
  color: string;
  gradient: string;
}

export default function HeroPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides: HeroSlide[] = [
    {
      id: 1,
      color: "bg-slate-900",
      gradient: "from-slate-900 via-slate-800 to-slate-900",
    },
    {
      id: 2,
      color: "bg-slate-800",
      gradient: "from-slate-800 via-slate-700 to-slate-800",
    },
    {
      id: 3,
      color: "bg-gray-900",
      gradient: "from-gray-900 via-slate-800 to-gray-900",
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-950">
      {/* Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
            />

            {/* Animated Grid Pattern */}
            <div
              className={`absolute inset-0 opacity-10 transition-transform duration-8000 ${
                index === currentSlide ? "translate-x-full" : "translate-x-0"
              }`}
              style={{
                backgroundImage:
                  "linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)",
                backgroundSize: "50px 50px",
              }}
            />

            {/* Animated Shape - Moving from right to left */}
            <div
              className="absolute -right-96 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 opacity-5 blur-3xl"
              style={{
                animation:
                  index === currentSlide
                    ? "moveShape 12s ease-in-out infinite"
                    : "none",
              }}
            />
          </div>
        ))}
      </div>

      {/* Content Overlay - Fixed Position */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
          {/* Tagline */}
          <div className="inline-block">
            <p className="text-sm md:text-base text-gray-300 font-light tracking-widest uppercase">
              Minimize, Optimize, Elevate
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight tracking-tight">
            <span className="font-light">Simplicity</span>
            <br />
            <span className="text-gray-400">Redefined</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Discover minimalist products designed for modern living. Clean
            design, maximum functionality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <Button
              className="px-8 py-6 h-auto bg-white text-slate-900 hover:bg-gray-100 font-medium text-base transition-colors"
              size="lg"
            >
              Explore Collection
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 h-auto bg-transparent border-gray-500 text-white hover:bg-white/10 hover:border-white font-medium text-base transition-all"
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Indicators & Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-2 rounded-full border border-gray-600 text-white hover:bg-white/10 hover:border-white transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-2 rounded-full border border-gray-600 text-white hover:bg-white/10 hover:border-white transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-20">
        <p className="text-gray-400 text-sm font-light tracking-wider">
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </p>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes moveShape {
          0% {
            right: -384px;
            opacity: 0.05;
          }
          50% {
            right: 20%;
            opacity: 0.1;
          }
          100% {
            right: -384px;
            opacity: 0.05;
          }
        }
      `}</style>
    </section>
  );
}
