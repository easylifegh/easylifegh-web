"use client"

import { Mail, Phone, MapPin, Globe, ArrowRight, ExternalLink, Plane, Heart, Star, Send, CheckCircle, Users, Award, Shield } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const services = [
    { name: 'Tourism Packages', href: '/tourism', icon: Plane },
    { name: 'English Language Study', href: '/study', icon: Star },
    { name: 'Verified Housing', href: '/housing', icon: Shield },
    { name: 'Airport Pickup', href: '/pickup', icon: Users },
    { name: 'Document Processing', href: '/documents', icon: Award }
  ];

  const support = [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Support', href: '/support' },
    { name: 'Requirements Guide', href: '/requirements' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Status Check', href: '/status' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Partners', href: '/partners' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' }
  ];

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-muted via-muted to-bg border-t border-border/50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto w-full max-w-screen-xl px-[var(--gutter)] py-[var(--section-y)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          
          {/* Company Info with Enhanced Design */}
          <div className="lg:col-span-2">
            <div className="group flex items-center mb-6 cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl bg-gradient-to-br from-primary to-accent p-3 group-hover:scale-105 transition-transform duration-300">
                  <Plane className="w-6 h-6 text-primary-fg transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div className="ml-4">
                <h2 className="font-bold text-[var(--step-1)] text-fg italic tracking-tight group-hover:text-primary transition-colors duration-300">
                  go<span className="text-primary">2</span>ghana
                </h2>
                <p className="text-[var(--step--1)] text-muted-fg">Your journey starts here</p>
              </div>
            </div>
            
            <p className="text-[var(--step-0)] text-muted-fg mb-8 max-w-prose leading-relaxed">
              Simplifying your journey to Ghana with verified requirements, personalized guidance, 
              and reliable support for tourism and English language study.
            </p>

            {/* Enhanced Contact Info */}
            <div className="space-y-4">
              <div className="group flex items-center p-3 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-4 h-4 text-primary group-hover:text-primary-fg" />
                </div>
                <span className="ml-3 text-[var(--step--1)] text-muted-fg group-hover:text-fg transition-colors duration-300">hello@go2ghana.com</span>
              </div>
              
              <div className="group flex items-center p-3 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer">
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-4 h-4 text-accent group-hover:text-primary-fg" />
                </div>
                <span className="ml-3 text-[var(--step--1)] text-muted-fg group-hover:text-fg transition-colors duration-300">+233 XX XXX XXXX</span>
              </div>
              
              <div className="group flex items-center p-3 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-primary group-hover:text-primary-fg" />
                </div>
                <span className="ml-3 text-[var(--step--1)] text-muted-fg group-hover:text-fg transition-colors duration-300">Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* Enhanced Services Section */}
          <div>
            <h3 className="font-semibold text-[var(--step-0)] text-fg mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full mr-3"></div>
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.name} style={{ animationDelay: `${index * 100}ms` }}>
                    <a 
                      href={item.href}
                      className="group flex items-center p-2 rounded-lg text-[var(--step--1)] text-muted-fg hover:text-primary hover:bg-white/30 dark:hover:bg-white/5 transition-all duration-300"
                    >
                      <IconComponent className="w-4 h-4 mr-3 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
                      <span className="flex-1">{item.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Enhanced Support Section */}
          <div>
            <h3 className="font-semibold text-[var(--step-0)] text-fg mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded-full mr-3"></div>
              Support
            </h3>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={item.name} style={{ animationDelay: `${index * 100}ms` }}>
                  <a 
                    href={item.href}
                    className="group flex items-center p-2 rounded-lg text-[var(--step--1)] text-muted-fg hover:text-primary hover:bg-white/30 dark:hover:bg-white/5 transition-all duration-300"
                  >
                    <span className="flex-1">{item.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Company Section */}
          <div>
            <h3 className="font-semibold text-[var(--step-0)] text-fg mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full mr-3"></div>
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={item.name} style={{ animationDelay: `${index * 100}ms` }}>
                  <a 
                    href={item.href}
                    className="group flex items-center p-2 rounded-lg text-[var(--step--1)] text-muted-fg hover:text-primary hover:bg-white/30 dark:hover:bg-white/5 transition-all duration-300"
                  >
                    <span className="flex-1">{item.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Legal Section */}
          <div>
            <h3 className="font-semibold text-[var(--step-0)] text-fg mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded-full mr-3"></div>
              Legal
            </h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={item.name} style={{ animationDelay: `${index * 100}ms` }}>
                  <a 
                    href={item.href}
                    className="group flex items-center p-2 rounded-lg text-[var(--step--1)] text-muted-fg hover:text-primary hover:bg-white/30 dark:hover:bg-white/5 transition-all duration-300"
                  >
                    <span className="flex-1">{item.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5 p-8 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
            <div className="relative max-w-md">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-primary mr-3 animate-pulse" />
                <h3 className="font-semibold text-[var(--step-1)] text-fg">Stay Connected</h3>
              </div>
              <p className="text-[var(--step--1)] text-muted-fg mb-6 leading-relaxed">
                Get the latest updates on Ghana requirements, travel insights, and exclusive offers.
              </p>
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg/50 text-fg text-[var(--step--1)] placeholder:text-muted-fg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                  />
                </div>
                <button 
                  onClick={handleSubscribe}
                  className={`group relative overflow-hidden px-6 py-3 rounded-xl font-medium text-[var(--step--1)] transition-all duration-300 active:scale-95 ${
                    isSubscribed 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gradient-to-r from-primary to-accent text-primary-fg hover:shadow-lg hover:shadow-primary/25'
                  }`}
                >
                  <div className="relative flex items-center justify-center">
                    {isSubscribed ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span>Subscribed!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        <span>Subscribe</span>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Bar */}
      <div className="relative border-t border-border/50 bg-gradient-to-r from-bg via-muted/50 to-bg">
        <div className="mx-auto w-full max-w-screen-xl px-[var(--gutter)] py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-[var(--step--1)] text-muted-fg">
                © 2025 go2ghana. Made with <Heart className="inline w-4 h-4 text-red-500 mx-1" /> for Ghana
              </p>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <Globe className="w-4 h-4 text-primary group-hover:rotate-180 transition-transform duration-500" />
                <span className="text-[var(--step--1)] text-muted-fg group-hover:text-primary transition-colors duration-300">
                  Available in English & Français
                </span>
              </div>
            </div>
            
            {/* Enhanced Status Indicator */}
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-25"></div>
              </div>
              <span className="text-[var(--step--1)] dark:text-green-300 font-medium">
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}