"use client"

import Link from "next/link"
import React, { useMemo } from "react"
import RevealOnScroll from "@/components/motion/RevealOnScroll"
import ServiceGallery from "@/components/shared/ServiceGallery"
import ProviderCard from "@/components/shared/ProviderCard"
import ProcessStep from "@/components/shared/ProcessStep"
import { Hero } from "@/components/shared"

export default function TourismServicePage() {
  const tourismExperiences = useMemo(
    () => [
      {
        id: "cultural-heritage",
        title: "Cultural Heritage Tours",
        duration: "3-7 days",
        description:
          "Immersive cultural experiences exploring Ghana's rich heritage, traditional customs, and historical significance through guided tours of castles, museums, and cultural sites.",
        outcomes: [
          "UNESCO World Heritage Sites",
          "Traditional Festival Experiences",
          "Cultural Immersion Programs",
          "Historical Castle Tours",
          "Local Community Visits",
        ],
        ideal: "Culture Enthusiasts",
      },
      {
        id: "wildlife-nature",
        title: "Wildlife & Nature Tours",
        duration: "2-5 days",
        description:
          "Adventure into Ghana's pristine national parks and nature reserves to experience diverse wildlife, beautiful landscapes, and eco-tourism activities.",
        outcomes: [
          "Kakum Canopy Walk Experience",
          "Mole National Park Safari",
          "Bird Watching Expeditions",
          "Monkey Sanctuary Visits",
          "Eco-Lodge Accommodations",
        ],
        ideal: "Nature Lovers",
      },
      {
        id: "beach-coastal",
        title: "Beach & Coastal Tours",
        duration: "2-4 days",
        description:
          "Relaxing coastal experiences along Ghana's beautiful Atlantic coastline featuring pristine beaches, water sports, and seaside cultural attractions.",
        outcomes: [
          "Cape Coast Beach Resorts",
          "Water Sports Activities",
          "Fishing Village Tours",
          "Lighthouse Experiences",
          "Sunset Beach Dinners",
        ],
        ideal: "Beach Lovers",
      },
      {
        id: "adventure-trekking",
        title: "Adventure & Trekking",
        duration: "1-3 days",
        description:
          "Thrilling outdoor adventures including mountain hiking, waterfall trekking, and adventure sports for the active traveler seeking excitement.",
        outcomes: [
          "Mount Afadja Hiking",
          "Wli Waterfalls Trekking",
          "Rock Climbing Experiences",
          "River Rafting Adventures",
          "Camping Expeditions",
        ],
        ideal: "Adventure Seekers",
      },
    ],
    []
  )

  const tourismPackages = useMemo(
    () => [
      {
        id: "ghana-discovery",
        title: "Ghana Discovery Package",
        duration: "Flexible duration",
        description:
          "Comprehensive tour package covering Ghana's highlights including Accra, Cape Coast, Kumasi, and major attractions with guided experiences.",
        fields: [
          "Accra City Tour",
          "Cape Coast Castles",
          "Kumasi Cultural Sites",
          "Cocoa Farm Visits",
          "Traditional Craft Centers",
        ],
        requirements: "All-inclusive package available",
      },
      {
        id: "roots-heritage",
        title: "African Roots Heritage Tour",
        duration: "Customizable",
        description:
          "Specially designed for diaspora visitors seeking to connect with African heritage through historical sites and cultural experiences.",
        fields: [
          "Slave Castle Tours",
          "Door of No Return Experience",
          "Ancestral Village Visits",
          "Traditional Naming Ceremonies",
          "Heritage Documentation",
        ],
        requirements: "Heritage package available",
      },
      {
        id: "luxury-safari",
        title: "Luxury Safari Experience",
        duration: "Premium experience",
        description:
          "Premium wildlife and nature experiences with luxury accommodations, private guides, and exclusive access to Ghana's best natural attractions.",
        fields: [
          "Private Game Drives",
          "Luxury Eco-Lodges",
          "Expert Wildlife Guides",
          "Exclusive Nature Reserves",
          "Fine Dining Experiences",
        ],
        requirements: "Luxury package available",
      },
      {
        id: "business-leisure",
        title: "Business & Leisure Combo",
        duration: "Tailored schedule",
        description:
          "Perfect blend of business meetings and leisure activities for corporate travelers wanting to experience Ghana's culture alongside work.",
        fields: [
          "Business Facility Access",
          "Corporate Meeting Venues",
          "Cultural Evening Programs",
          "Local Business Networking",
          "Executive Transportation",
        ],
        requirements: "Corporate package available",
      },
    ],
    []
  )

  const tourismProviders = [
    {
      name: "Ghana Tourism Authority",
      location: "Accra, Ghana",
      established: "1973",
      tagline: "Promoting Sustainable Tourism",
      description:
        "The official government agency responsible for tourism development, promotion, and regulation in Ghana, ensuring quality tourism experiences and sustainable practices.",
      specialties: [
        "Tourism Policy Development",
        "Destination Marketing",
        "Tourism Standards & Quality",
        "Tourist Information Services",
        "Tourism Investment Promotion",
      ],
      image: "gta-headquarters.jpg",
      website: "https://www.ghana.travel",
    },
    {
      name: "Jolinaiko Eco Tours",
      location: "Accra, Ghana",
      established: "2010",
      tagline: "Authentic Ghana Experiences",
      description:
        "Award-winning tour operator specializing in cultural heritage tours, eco-tourism, and authentic Ghanaian experiences with expert local guides.",
      specialties: [
        "Cultural Heritage Tours",
        "Eco-Tourism Packages",
        "Photography Safaris",
        "Educational Tours",
        "Custom Itineraries",
      ],
      image: "jolinaiko-tours.jpg",
      website: "https://www.jolinaiko.com",
    },
    {
      name: "Ashanti African Tours",
      location: "Kumasi, Ghana",
      established: "2005",
      tagline: "Gateway to Ashanti Culture",
      description:
        "Premier tour operator offering comprehensive cultural tours focusing on Ashanti heritage, traditional crafts, and authentic cultural experiences in the Ashanti region.",
      specialties: [
        "Ashanti Cultural Tours",
        "Traditional Craft Workshops",
        "Royal Palace Visits",
        "Festival Celebrations",
        "Cultural Immersion Programs",
      ],
      image: "ashanti-tours.jpg",
      website: "https://www.ashantiafricantours.com",
    },
    {
      name: "Volunteer Ghana",
      location: "Cape Coast, Ghana",
      established: "2008",
      tagline: "Tourism with Purpose",
      description:
        "Unique tourism operator combining volunteer opportunities with cultural tourism, offering meaningful travel experiences that contribute to local communities.",
      specialties: [
        "Volunteer Tourism",
        "Community Development Projects",
        "Educational Tours",
        "Sustainable Tourism",
        "Cultural Exchange Programs",
      ],
      image: "volunteer-ghana.jpg",
      website: "https://www.volunteerghana.org",
    },
    {
      name: "Zaina Lodge",
      location: "Mole National Park, Ghana",
      established: "1999",
      tagline: "Luxury Safari Experience",
      description:
        "Premier eco-lodge offering luxury wildlife safari experiences in Mole National Park with world-class accommodations and expert wildlife guides.",
      specialties: [
        "Luxury Safari Accommodations",
        "Wildlife Photography Tours",
        "Expert Guide Services",
        "Eco-Tourism Experiences",
        "Conference & Event Facilities",
      ],
      image: "zaina-lodge.jpg",
      website: "https://www.zainalodge.com",
    },
    {
      name: "Kakum National Park",
      location: "Central Region, Ghana",
      established: "1991",
      tagline: "Canopy Walk Adventure",
      description:
        "Ghana's most visited national park featuring the famous canopy walkway, diverse wildlife, and pristine rainforest ecosystem experiences.",
      specialties: [
        "Canopy Walk Experiences",
        "Rainforest Guided Tours",
        "Bird Watching Programs",
        "Nature Education",
        "Research Facilities",
      ],
      image: "kakum-canopy.jpg",
      website: "https://www.kakumnationalpark.org",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Travel Consultation & Planning",
      description:
        "Personalized consultation to understand your travel preferences, interests, and requirements to create the perfect Ghana tourism experience.",
      icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3",
      features: [
        "Personal travel preferences assessment",
        "Custom itinerary development",
        "Budget planning and optimization",
        "Activity and attraction recommendations",
        "Travel timeline coordination",
      ],
      image: "travel-consultation.jpg",
    },
    {
      step: "2",
      title: "Booking & Reservations",
      description:
        "Complete booking management including accommodations, transportation, tours, and activities with confirmed reservations and documentation.",
      icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      features: [
        "Hotel and accommodation bookings",
        "Transportation arrangements",
        "Tour and activity reservations",
        "Travel insurance coordination",
        "Documentation and confirmation",
      ],
      image: "booking-reservations.jpg",
    },
    {
      step: "3",
      title: "Travel Experience & Support",
      description:
        "Comprehensive on-ground support throughout your Ghana journey with local guides, 24/7 assistance, and seamless experience coordination.",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      features: [
        "Expert local guide services",
        "24/7 travel support hotline",
        "Real-time itinerary adjustments",
        "Cultural interpretation and education",
        "Emergency assistance and coordination",
      ],
      image: "travel-experience.jpg",
    },
    {
      step: "4",
      title: "Memories & Follow-up",
      description:
        "Post-travel support including photo sharing, experience documentation, feedback collection, and planning for future visits to Ghana.",
      icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
      features: [
        "Professional photo and video sharing",
        "Travel experience documentation",
        "Feedback and testimonial collection",
        "Future travel planning assistance",
        "Ghana alumni network connection",
      ],
      image: "travel-memories.jpg",
    },
  ]

  return (
    <section id="tourism" className="scroll-mt-32">
      <Hero
        title="Tourism Services"
        subtitle="Discover the beauty, culture, and heritage of Ghana through carefully curated tourism experiences and professional travel services."
      />

      {/* Our Tourism Experience Process */}
      <ProcessStep
        process={process}
        title="Ghana Tourism"
        imageBasePath="/tourism/process"
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {/* Tourism Experiences */}
        <RevealOnScroll delay={0.4}>
          <div className="mb-20"></div>
        </RevealOnScroll>
        <ServiceGallery
          items={tourismExperiences}
          title="Tourism Experiences"
          subtitle="Explore Ghana's diverse attractions through our carefully designed tourism experiences"
          color="emerald"
          layout="side-by-side"
        />

        {/* Tourism Providers */}
        <RevealOnScroll delay={0.4}>
          <div className="mb-20 mt-16">
            <ProviderCard
              providers={tourismProviders}
              title="Tourism Partners & Destinations"
              subtitle="Trusted partners and premier destinations for authentic Ghana tourism experiences"
              imageBasePath="/tourism/providers"
            />
          </div>
        </RevealOnScroll>

        {/* Tourism Packages */}
        <RevealOnScroll delay={0.5}>
          <div className="mb-20">
            <ServiceGallery
              items={tourismPackages}
              title="Tourism Packages"
              subtitle="Comprehensive tour packages designed to showcase the best of Ghana's culture and attractions"
              color="purple"
              layout="side-by-side"
            />
          </div>
        </RevealOnScroll>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl py-20">
        <RevealOnScroll delay={0.8}>
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 p-8 text-center">
            <h3 className="text-2xl font-bold text-[#0D1623] mb-4">
              Ready to Explore Ghana?
            </h3>
            <p className="text-[#5F6B7A] mb-8 max-w-2xl mx-auto">
              Embark on an unforgettable journey through Ghana&apos;s rich
              culture, stunning landscapes, and warm hospitality. Let us create
              the perfect tourism experience for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Plan Your Ghana Adventure
              </Link>
              <Link
                href="/#how-to-apply"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                View Our Tourism Process
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
