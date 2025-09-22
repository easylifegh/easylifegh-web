"use client"

import Link from "next/link"
import React, { useMemo } from "react"
import RevealOnScroll from "@/components/motion/RevealOnScroll"
import ServiceGallery from "@/components/shared/ServiceGallery"
import ProviderCard from "@/components/shared/ProviderCard"
import ProcessStep from "@/components/shared/ProcessStep"
import { Hero } from "@/components/shared"

export default function AcademicServicePage() {
  const englishPrograms = useMemo(
    () => [
      {
        id: "esl",
        title: "English as Second Language (ESL)",
        duration: "3-12 months",
        description:
          "Comprehensive English foundation program designed for non-native speakers. Covers basic to advanced grammar, vocabulary, pronunciation, and conversation skills in an immersive English-speaking environment.",
        outcomes: [
          "Speak English confidently in daily situations",
          "Understand and use proper grammar structures",
          "Build vocabulary for personal and professional use",
          "Gain cultural understanding of English-speaking contexts",
        ],
        ideal: "Beginners to intermediate English learners",
      },
      {
        id: "business-english",
        title: "Business English",
        duration: "2-6 months",
        description:
          "Professional English communication for the workplace. Focus on business terminology, presentations, meetings, negotiations, and email communication.",
        outcomes: [
          "Lead confident business presentations",
          "Participate effectively in professional meetings",
          "Write compelling business emails and reports",
          "Negotiate successfully in English",
        ],
        ideal: "Working professionals and entrepreneurs",
      },
      {
        id: "academic-english",
        title: "Academic English",
        duration: "3-9 months",
        description:
          "Preparation for university-level English. Academic writing, research skills, critical thinking, and university entrance requirements.",
        outcomes: [
          "Write research papers and essays effectively",
          "Develop critical thinking and analysis skills",
          "Master academic presentation techniques",
          "Meet university English requirements",
        ],
        ideal: "Future university students",
      },
      {
        id: "professional-english",
        title: "Professional English",
        duration: "2-8 months",
        description:
          "Specialized English for specific professions including healthcare, engineering, law, and technology sectors.",
        outcomes: [
          "Use technical terminology confidently",
          "Create professional industry documents",
          "Communicate complex ideas clearly",
          "Advance in your chosen field",
        ],
        ideal: "Career professionals seeking advancement",
      },
      {
        id: "ielts-prep",
        title: "IELTS Preparation",
        duration: "1-6 months",
        description:
          "Intensive preparation for the International English Language Testing System. Focus on all four skills: listening, reading, writing, and speaking.",
        outcomes: [
          "Achieve target IELTS band score",
          "Master all four language skills",
          "Use effective test-taking strategies",
          "Gain confidence for exam day",
        ],
        ideal: "Students planning to study abroad",
      },
      {
        id: "communication-skills",
        title: "Communication Skills",
        duration: "2-4 months",
        description:
          "Enhanced verbal and non-verbal communication, public speaking, presentation skills, and interpersonal communication.",
        outcomes: [
          "Speak confidently to any audience",
          "Master non-verbal communication",
          "Build strong interpersonal relationships",
          "Lead with communication excellence",
        ],
        ideal: "Leaders and public speakers",
      },
      {
        id: "intensive-english",
        title: "Intensive English",
        duration: "1-3 months",
        description:
          "Fast-track English improvement with daily intensive sessions. Accelerated learning for quick language acquisition.",
        outcomes: [
          "See rapid improvement in weeks",
          "Gain intensive daily practice",
          "Receive personalized attention",
          "Achieve quick language goals",
        ],
        ideal: "Students with time constraints",
      },
      {
        id: "conversation-classes",
        title: "Conversation Classes",
        duration: "Ongoing",
        description:
          "Practical speaking practice in relaxed, social settings. Focus on fluency, natural expressions, and cultural understanding.",
        outcomes: [
          "Speak naturally in social situations",
          "Understand cultural nuances",
          "Build lasting friendships",
          "Gain everyday conversation confidence",
        ],
        ideal: "Anyone wanting speaking practice",
      },
    ],
    []
  )

  const universityPrograms = [
    {
      id: "bachelor",
      title: "Bachelor's Degree Programs",
      duration: "4 years",
      description:
        "Comprehensive undergraduate programs across multiple disciplines including Arts, Sciences, Engineering, Business, and Medicine.",
      fields: [
        "Engineering",
        "Medicine",
        "Business Administration",
        "Computer Science",
        "Liberal Arts",
        "Agriculture",
        "Education",
      ],
      requirements: "WASSCE (C6 in 6 subjects) or International Equivalent",
    },
    {
      id: "master",
      title: "Master's Degree Programs",
      duration: "1-2 years",
      description:
        "Advanced graduate programs for specialized knowledge and research in your chosen field with thesis and coursework options.",
      fields: [
        "MBA",
        "Public Administration",
        "Engineering",
        "IT",
        "Health Sciences",
        "Development Studies",
        "Agriculture",
      ],
      requirements: "Bachelor's Degree (2nd Class Lower or Better)",
    },
    {
      id: "phd",
      title: "PhD & Doctoral Programs",
      duration: "4-6 years",
      description:
        "Research-intensive doctoral programs leading to PhD qualification with original research contribution to your field.",
      fields: [
        "Research",
        "Academia",
        "Scientific Innovation",
        "Policy Development",
        "Advanced Engineering",
        "Medical Research",
      ],
      requirements: "Master's Degree or Exceptional Bachelor's",
    },
    {
      id: "professional",
      title: "Professional Programs",
      duration: "1-3 years",
      description:
        "Career-focused programs designed for working professionals including executive education and professional certifications.",
      fields: [
        "Executive MBA",
        "Professional Certifications",
        "Continuing Education",
        "Leadership Development",
        "Industry Training",
      ],
      requirements: "Work Experience (2+ years) + Relevant Background",
    },
  ]

  const technicalPrograms = [
    {
      id: "engineering-tech",
      title: "Engineering Technology",
      duration: "2-4 years",
      description:
        "Hands-on engineering programs covering mechanical, electrical, civil, and electronic engineering applications.",
      specializations: [
        "Mechanical Engineering",
        "Electrical Engineering",
        "Civil Engineering",
        "Electronic Engineering",
        "Automotive Technology",
      ],
      outcome: "Engineering Technician/Technologist",
    },
    {
      id: "information-tech",
      title: "Information Technology",
      duration: "2-3 years",
      description:
        "Modern IT programs covering software development, networking, cybersecurity, and digital systems management.",
      specializations: [
        "Software Development",
        "Network Administration",
        "Cybersecurity",
        "Database Management",
        "Web Development",
      ],
      outcome: "IT Specialist/Developer",
    },
    {
      id: "applied-sciences",
      title: "Applied Sciences",
      duration: "2-4 years",
      description:
        "Practical science programs with laboratory work and real-world applications in various scientific fields.",
      specializations: [
        "Laboratory Technology",
        "Environmental Science",
        "Food Science",
        "Agricultural Technology",
        "Health Sciences",
      ],
      outcome: "Science Technician/Analyst",
    },
    {
      id: "business-tech",
      title: "Business Technology",
      duration: "2-3 years",
      description:
        "Modern business programs integrating technology, entrepreneurship, and practical business skills for the digital economy.",
      specializations: [
        "Digital Marketing",
        "E-commerce",
        "Business Analytics",
        "Project Management",
        "Entrepreneurship",
      ],
      outcome: "Business Analyst/Manager",
    },
    {
      id: "trades-crafts",
      title: "Skilled Trades & Crafts",
      duration: "1-3 years",
      description:
        "Traditional and modern trades training for skilled artisans and craftspeople with emphasis on practical skills.",
      specializations: [
        "Welding",
        "Carpentry",
        "Plumbing",
        "Electrical Installation",
        "Construction",
        "Automotive Repair",
      ],
      outcome: "Skilled Tradesperson/Artisan",
    },
  ]

  const languageSchools = [
    {
      name: "Ghana Institute of Languages",
      location: "Accra Central",
      established: "1961",
      tagline: "Excellence in English Language Education",
      description:
        "Leading institution offering comprehensive English programs for international students and professionals.",
      specialties: ["ESL", "Business English", "IELTS Prep"],
      image: "gil-accra.jpg",
      students: "2,500+",
      website: "https://gil.edu.gh",
    },
    {
      name: "Durra Institute",
      location: "East Legon, Accra",
      established: "2010",
      tagline: "Professional English Excellence",
      description:
        "Modern institute specializing in professional and academic English development programs.",
      specialties: [
        "Professional English",
        "Academic English",
        "Communication",
      ],
      image: "durra-east-legon.jpg",
      students: "1,800+",
      website: "https://durra.edu.gh",
    },
    {
      name: "Linguistic Center Ghana",
      location: "Kumasi",
      established: "2005",
      tagline: "Intensive Language Training Hub",
      description:
        "Dedicated to rapid English improvement through intensive and conversation-focused programs.",
      specialties: ["Intensive English", "Conversation", "ESL"],
      image: "linguistic-kumasi.jpg",
      students: "1,200+",
      website: "https://linguistic.edu.gh",
    },
    {
      name: "International Language Academy",
      location: "Cape Coast",
      established: "2008",
      tagline: "Global Standards, Local Excellence",
      description:
        "International-standard English programs preparing students for global opportunities.",
      specialties: ["Academic English", "IELTS", "Professional"],
      image: "ila-cape-coast.jpg",
      students: "900+",
      website: "https://ila.edu.gh",
    },
    {
      name: "Elite English Center",
      location: "Tamale",
      established: "2012",
      tagline: "Premium English Education",
      description:
        "Elite training center focused on business communication and professional development.",
      specialties: ["Business English", "ESL", "Communication"],
      image: "elite-tamale.jpg",
      students: "750+",
      website: "https://elite.edu.gh",
    },
    {
      name: "Modern Language Institute",
      location: "Ho, Volta Region",
      established: "2015",
      tagline: "Contemporary Language Solutions",
      description:
        "Modern approach to English learning with innovative teaching methodologies and techniques.",
      specialties: ["Conversation", "Academic", "Intensive"],
      image: "mli-ho.jpg",
      students: "650+",
      website: "https://mli.edu.gh",
    },
  ]

  const Universities = [
    {
      name: "University of Ghana",
      type: "Public Research University",
      location: "Legon, Accra",
      established: "1948",
      programs: ["Bachelor's", "Master's", "PhD"],
      image: "university-of-ghana.jpg",
      ranking: "#1 in Ghana",
      students: "38,000+",
    },
    {
      name: "Kwame Nkrumah University of Science and Technology",
      type: "Public Technical University",
      location: "Kumasi",
      established: "1952",
      programs: ["Engineering", "Medicine", "Technology", "Sciences"],
      image: "knust-university.jpg",
      ranking: "#2 in Ghana",
      students: "35,000+",
    },
    {
      name: "Ghana Institute of Management & Public Administration",
      type: "Public Management University",
      location: "Accra",
      established: "1961",
      programs: ["Business", "Public Administration", "Management"],
      image: "gimpa-university.jpg",
      ranking: "Top Business School",
      students: "15,000+",
    },
    {
      name: "Ashesi University",
      type: "Private Liberal Arts University",
      location: "Berekuso",
      established: "2002",
      programs: ["Computer Science", "Engineering", "Business", "Liberal Arts"],
      image: "ashesi-university.jpg",
      ranking: "Top Private University",
      students: "1,500+",
    },
    {
      name: "University of Cape Coast",
      type: "Public University",
      location: "Cape Coast",
      established: "1962",
      programs: ["Education", "Arts", "Sciences", "Business"],
      image: "ucc-university.jpg",
      ranking: "#3 in Ghana",
      students: "25,000+",
    },
    {
      name: "Accra Institute of Technology",
      type: "Private Technical University",
      location: "Accra",
      established: "1998",
      programs: ["IT", "Engineering", "Business Technology"],
      image: "ait-university.jpg",
      ranking: "Leading IT University",
      students: "8,000+",
    },
    {
      name: "Central University",
      type: "Private University",
      location: "Tema",
      established: "1988",
      programs: ["Business", "Theology", "IT", "Liberal Arts"],
      image: "central-university.jpg",
      ranking: "Top Private",
      students: "12,000+",
    },
    {
      name: "Presbyterian University College",
      type: "Private Religious University",
      location: "Abetifi",
      established: "1996",
      programs: ["Agriculture", "Business", "Development Studies"],
      image: "puc-university.jpg",
      ranking: "Top Agricultural",
      students: "6,500+",
    },
  ]

  const TechnicalSchools = [
    {
      name: "Asuansi Technical Institute",
      type: "Oldest Technical School (Since 1917)",
      location: "Asuansi",
      established: "1917",
      programs: [
        "Mechanical Engineering",
        "Electrical Engineering",
        "Construction",
      ],
      image: "asuansi-technical.jpg",
      achievement: "Historic Institution",
      students: "3,500+",
    },
    {
      name: "Keta Secondary Technical School (KETASCO)",
      type: "Award-Winning Technical School",
      location: "Keta",
      established: "1975",
      programs: ["Science & Math", "Technical Sciences", "Applied Engineering"],
      achievement: "2024 National Science & Math Quiz Finalist",
      image: "ketasco-technical.jpg",
      students: "2,800+",
    },
    {
      name: "Accra Technical University",
      type: "Technical University",
      location: "Accra",
      established: "1949",
      programs: [
        "Engineering Technology",
        "Applied Sciences",
        "Business Technology",
      ],
      image: "accra-technical-university.jpg",
      achievement: "Modern Facilities",
      students: "12,000+",
    },
    {
      name: "Kumasi Technical Institute",
      type: "Government Technical Institute",
      location: "Kumasi",
      established: "1954",
      programs: ["Automotive", "Welding", "Electronics", "Construction"],
      image: "kumasi-technical.jpg",
      achievement: "Industry Partnership",
      students: "4,200+",
    },
    {
      name: "Tema Technical Institute",
      type: "Industrial Technical School",
      location: "Tema",
      established: "1968",
      programs: ["Marine Engineering", "Port Operations", "Logistics"],
      image: "tema-technical.jpg",
      achievement: "Maritime Excellence",
      students: "2,500+",
    },
    {
      name: "Takoradi Technical University",
      type: "Technical University",
      location: "Takoradi",
      established: "1954",
      programs: ["Petroleum Engineering", "Mining", "Marine Technology"],
      image: "ttu-technical.jpg",
      achievement: "Oil & Gas Focus",
      students: "8,500+",
    },
    {
      name: "Bolgatanga Technical University",
      type: "Regional Technical University",
      location: "Bolgatanga",
      established: "1999",
      programs: ["Agriculture Technology", "ICT", "Applied Sciences"],
      image: "btu-technical.jpg",
      achievement: "Agricultural Innovation",
      students: "5,000+",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Educational Assessment",
      description:
        "We evaluate your academic background, qualifications, and career goals to recommend the perfect educational pathway in Ghana.",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      features: [
        "Academic transcript evaluation",
        "Career pathway consultation",
      ],
      image: "academic-assessment.jpg",
    },
    {
      step: "2",
      title: "Institution Selection",
      description:
        "Based on your assessment, we help you choose from Ghana's top universities, language schools, or technical institutes that match your goals.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      features: [
        "Institution ranking & comparison",
        "Program requirements matching",
      ],
      image: "institution-selection.jpg",
    },
    {
      step: "3",
      title: "Application Submission",
      description:
        "We prepare and submit your complete application package, including all required academic documents, transcripts, and application forms.",
      icon: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      features: [
        "Document preparation & review",
        "Application submission tracking",
      ],
      image: "application-submission.jpg",
    },
    {
      step: "4",
      title: "Enrollment Completion",
      description:
        "Once accepted, we finalize your enrollment, secure your student placement, and ensure all academic requirements are confirmed.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      features: ["Admission confirmation", "Registration & orientation"],
      image: "enrollment-completion.jpg",
    },
  ]

  return (
    <section id="academic" className="scroll-mt-32">
      <Hero
        title="Academic Services"
        subtitle="English language programs, university admission, and technical education to help you achieve your academic goals in Ghana."
      />
      {/* Our Academic Support Process */}
      <ProcessStep
        process={process}
        title="Our Academic Support Process"
        imageBasePath="/academic"
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {/* English Language Programs Section */}
        <RevealOnScroll delay={0.4}>
          <div className="mb-20"></div>
        </RevealOnScroll>
        <ServiceGallery
          items={englishPrograms}
          title="English Programs"
          subtitle="Choose from our comprehensive range of English language courses"
          imageBasePath="/academic"
          color="emerald"
          layout="side-by-side"
        />

        {/* English Language Schools */}
        <RevealOnScroll delay={0.4}>
          <div className="mb-20 mt-16">
            <ProviderCard
              providers={languageSchools}
              title="Language Schools in Ghana"
              subtitle="Explore trusted institutions across Ghana"
              imageBasePath="/academic"
            />
          </div>
        </RevealOnScroll>

        {/* Universities Section */}
        <RevealOnScroll delay={0.5}>
          <div className="mb-20">
            <ServiceGallery
              items={universityPrograms}
              title="University Programs"
              subtitle="From undergraduate to doctoral levels across all disciplines"
              imageBasePath="/academic"
              color="blue"
              layout="side-by-side"
            />
            <ProviderCard
              providers={Universities}
              title="Universities in Ghana"
              subtitle="Explore leading institutions offering world-class higher education"
              imageBasePath="/academic"
            />
          </div>
        </RevealOnScroll>

        {/* Technical & Professional Schools */}
        <RevealOnScroll delay={0.6}>
          <div className="mb-20">
            <ServiceGallery
              items={technicalPrograms}
              title="Technical Programs"
              subtitle="Industry-focused training from basic trades to advanced technology"
              imageBasePath="/academic"
              color="purple"
              layout="side-by-side"
            />
            <ProviderCard
              providers={TechnicalSchools}
              title="Technical Schools in Ghana"
              subtitle="Industry-focused institutions preparing skilled professionals"
              imageBasePath="/academic"
            />
          </div>
        </RevealOnScroll>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl py-20">
        <RevealOnScroll delay={0.8}>
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 p-8 text-center">
            <h3 className="text-2xl font-bold text-[#0D1623] mb-4">
              Ready to Start Your Academic Journey in Ghana?
            </h3>
            <p className="text-[#5F6B7A] mb-8 max-w-2xl mx-auto">
              From language learning to advanced degrees, we will guide you
              through every step of the process. Get personalized advice and
              start your application today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/#how-to-apply"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Start Application
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
