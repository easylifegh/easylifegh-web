"use client"

import { Menu, X, Globe, ArrowRight, Plane, MapPin, GraduationCap, Home } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const navigation = [
    { name: 'Tourism', href: '/tourism', icon: Plane },
    { name: 'Study', href: '/study', icon: GraduationCap },
    { name: 'Housing', href: '/housing', icon: Home },
    { name: 'Explore', href: '/explore', icon: MapPin }
  ];

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border/50">
      <div className="mx-auto w-full max-w-screen-xl px-[var(--gutter)]">
        <div className="flex items-center justify-between py-4">
          {/* Logo with Animation */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative rounded-2xl bg-gradient-to-br from-primary to-accent p-3 group-hover:scale-105 transition-transform duration-300">
                <Plane className="w-6 h-6 text-primary-fg transform group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="ml-4">
              <h1 className="font-bold text-[var(--step-1)] italic tracking-tight group-hover:text-primary transition-colors duration-300">
                go<span className="text-primary">2</span>ghana
              </h1>
              <p className="text-[var(--step--1)] opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                Your journey starts here
              </p>
            </div>
          </div>

          {/* Desktop Navigation with Hover Effects */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative px-4 py-2 rounded-xl text-[var(--step--1)] hover:text-primary transition-all duration-300 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-muted scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-xl"></div>
                  <div className="relative flex items-center space-x-2">
                    <IconComponent className="w-4 h-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions with Advanced Interactions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Toggle with Smooth Animation */}
            <button 
              onClick={() => setCurrentLang(currentLang === 'EN' ? 'FR' : 'EN')}
              className="group relative overflow-hidden px-4 py-2 rounded-xl border border-border bg-muted/50 hover:bg-muted transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-primary group-hover:rotate-180 transition-transform duration-500" />
                <span className="text-[var(--step--1)] font-medium relative">
                  <span className={`transition-all duration-300 ${currentLang === 'EN' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full absolute'}`}>EN</span>
                  <span className={`transition-all duration-300 ${currentLang === 'FR' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full absolute'}`}>FR</span>
                </span>
              </div>
            </button>

            {/* Gradient CTA with Hover Effects */}
            <button className="group relative overflow-hidden px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent font-medium text-[var(--step--1)] hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-xl"></div>
            </button>
          </div>

          {/* Mobile Menu Button with Animation */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-3 rounded-xl border border-border bg-muted/50 hover:bg-muted transition-all duration-300 group"
          >
            <div className="relative w-5 h-5">
              <Menu className={`absolute inset-0 w-5 h-5 text-fg transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`absolute inset-0 w-5 h-5 text-fg transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu with Slide Animation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-6 border-t border-border/50">
            <nav className="space-y-2">
              {navigation.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center space-x-3 px-4 py-3 rounded-xl text-fg hover:text-primary hover:bg-muted/50 transition-all duration-300"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                      opacity: isMenuOpen ? 1 : 0,
                      transition: `all 0.3s ease-out ${index * 100}ms`
                    }}
                  >
                    <IconComponent className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">{item.name}</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                );
              })}
            </nav>
            
            {/* Mobile Actions */}
            <div className="flex items-center space-x-3 pt-6 mt-6 border-t border-border/50">
              <button 
                onClick={() => setCurrentLang(currentLang === 'EN' ? 'FR' : 'EN')}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl border border-border bg-muted/50 hover:bg-muted transition-all duration-300"
              >
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-[var(--step--1)] font-medium">{currentLang}</span>
              </button>
              
              <button className="flex-1 relative overflow-hidden px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent font-medium text-[var(--step--1)] active:scale-95 transition-transform duration-200">
                <div className="flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}