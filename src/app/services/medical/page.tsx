"use client"

import Link from "next/link"
import React, { useMemo } from "react"
import RevealOnScroll from "@/components/motion/RevealOnScroll"
import ServiceGallery from "@/components/shared/ServiceGallery"
import ProviderCard from "@/components/shared/ProviderCard"
import ProcessStep from "@/components/shared/ProcessStep"
import { Hero } from "@/components/shared"

export default function MedicalServicePage() {
  const medicalServices = useMemo(
    () => [
      {
        id: "medical-consultations",
        title: "Medical Consultations",
        duration: "Same day",
        description:
          "Professional medical consultations with qualified doctors and specialists for diagnosis, treatment planning, and health advice.",
        outcomes: [
          "Expert Medical Diagnosis",
          "Treatment Plan Development",
          "Prescription Management",
          "Health Risk Assessment",
          "Follow-up Care Coordination",
        ],
        ideal: "All Patients",
      },
      {
        id: "health-screenings",
        title: "Health Screenings & Checkups",
        duration: "1-2 hours",
        description:
          "Comprehensive health screenings and preventive checkups to detect potential health issues early and maintain optimal wellness.",
        outcomes: [
          "Full Body Health Assessment",
          "Blood Work & Lab Tests",
          "Cardiovascular Screening",
          "Cancer Screening Programs",
          "Preventive Care Planning",
        ],
        ideal: "Health-conscious Individuals",
      },
      {
        id: "specialized-treatments",
        title: "Specialized Treatments",
        duration: "Varies by treatment",
        description:
          "Advanced medical treatments and procedures performed by specialist physicians using modern medical equipment and techniques.",
        outcomes: [
          "Cardiology Treatments",
          "Orthopedic Procedures",
          "Dermatology Services",
          "Gynecological Care",
          "Pediatric Specialties",
        ],
        ideal: "Specialty Care Patients",
      },
      {
        id: "wellness-programs",
        title: "Wellness & Preventive Care",
        duration: "Ongoing",
        description:
          "Holistic wellness programs focusing on lifestyle medicine, nutrition counseling, and preventive healthcare strategies.",
        outcomes: [
          "Nutrition & Diet Planning",
          "Fitness & Exercise Programs",
          "Stress Management",
          "Health Education",
          "Lifestyle Coaching",
        ],
        ideal: "Wellness Seekers",
      },
    ],
    []
  )

  const medicalTourismPackages = useMemo(
    () => [
      {
        id: "comprehensive-checkup",
        title: "Comprehensive Health Package",
        duration: "Customizable",
        description:
          "Complete health assessment package combining multiple screenings, consultations, and diagnostic tests for thorough health evaluation.",
        fields: [
          "Executive Health Screening",
          "Cardiac Assessment",
          "Cancer Screening",
          "Metabolic Health Check",
          "Mental Health Evaluation",
        ],
        requirements: "Health package available",
      },
      {
        id: "medical-tourism",
        title: "Medical Tourism Package",
        duration: "Flexible stay",
        description:
          "Comprehensive medical tourism services combining quality healthcare with comfortable accommodation and cultural experiences.",
        fields: [
          "Medical Treatment Coordination",
          "Hospital Accommodation",
          "Recovery & Rehabilitation",
          "Cultural Experience Tours",
          "Transportation Services",
        ],
        requirements: "Tourism package available",
      },
      {
        id: "fertility-treatment",
        title: "Fertility & Reproductive Health",
        duration: "Treatment-based",
        description:
          "Specialized fertility treatments and reproductive health services with modern facilities and experienced fertility specialists.",
        fields: [
          "Fertility Assessments",
          "IVF & Assisted Reproduction",
          "Reproductive Surgery",
          "Genetic Counseling",
          "Family Planning Services",
        ],
        requirements: "Specialty package available",
      },
      {
        id: "dental-care",
        title: "Dental & Oral Health",
        duration: "Variable",
        description:
          "Complete dental care services from routine cleanings to advanced cosmetic and reconstructive dental procedures.",
        fields: [
          "Routine Dental Care",
          "Cosmetic Dentistry",
          "Oral Surgery",
          "Orthodontic Treatment",
          "Dental Implants",
        ],
        requirements: "Dental package available",
      },
    ],
    []
  )

  const medicalProviders = [
    {
      name: "Korle-Bu Teaching Hospital",
      location: "Accra, Ghana",
      established: "1923",
      tagline: "Premier Medical Institution",
      description:
        "Ghana's largest medical center and premier teaching hospital providing comprehensive healthcare services with modern facilities and expert medical professionals.",
      specialties: [
        "Cardiothoracic Surgery",
        "Neurosurgery",
        "Oncology Services",
        "Emergency Medicine",
        "Medical Education",
      ],
      image: "korle-bu-hospital.jpg",
      website: "https://kbth.gov.gh",
    },
    {
      name: "Ghana International Hospital",
      location: "East Legon, Accra",
      established: "2014",
      tagline: "International Standard Healthcare",
      description:
        "Modern private hospital offering international standard healthcare services with advanced medical technology and personalized patient care.",
      specialties: [
        "International Healthcare Standards",
        "Advanced Diagnostic Imaging",
        "Minimally Invasive Surgery",
        "Executive Health Services",
        "Medical Tourism",
      ],
      image: "ghana-international-hospital.jpg",
      website: "https://ghih.org",
    },
    {
      name: "University of Ghana Medical Centre",
      location: "Legon, Accra",
      established: "2018",
      tagline: "Excellence in Healthcare",
      description:
        "State-of-the-art medical facility combining clinical excellence with medical education and research for comprehensive healthcare delivery.",
      specialties: [
        "Multi-Specialty Care",
        "Medical Research",
        "Advanced Diagnostics",
        "Telemedicine Services",
        "Health Education",
      ],
      image: "ug-medical-centre.jpg",
      website: "https://ugmc.ug.edu.gh",
    },
    {
      name: "Trust Hospital",
      location: "Cantonments, Accra",
      established: "1996",
      tagline: "Trusted Healthcare Partner",
      description:
        "Leading private healthcare provider offering comprehensive medical services with focus on quality care and patient satisfaction.",
      specialties: [
        "General Medicine",
        "Surgical Services",
        "Maternity Care",
        "Pediatric Services",
        "Occupational Health",
      ],
      image: "trust-hospital.jpg",
      website: "https://trusthospital.com.gh",
    },
    {
      name: "Nyaho Medical Centre",
      location: "Airport Residential Area, Accra",
      established: "1994",
      tagline: "Quality Healthcare Excellence",
      description:
        "Premier private medical facility providing high-quality healthcare services with modern equipment and experienced medical professionals.",
      specialties: [
        "Cardiac Care",
        "Orthopedic Surgery",
        "Women's Health",
        "Diagnostic Services",
        "Emergency Care",
      ],
      image: "nyaho-medical-centre.jpg",
      website: "https://nyahomedical.com",
    },
    {
      name: "Komfo Anokye Teaching Hospital",
      location: "Kumasi, Ghana",
      established: "1954",
      tagline: "Leading Referral Hospital",
      description:
        "Major teaching and referral hospital serving northern Ghana with specialized medical services and training programs for healthcare professionals.",
      specialties: [
        "Specialized Surgery",
        "Intensive Care",
        "Medical Training",
        "Research Programs",
        "Regional Healthcare",
      ],
      image: "komfo-anokye-hospital.jpg",
      website: "https://kath.gov.gh",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Health Assessment & Consultation",
      description:
        "Initial health assessment and medical consultation to understand your health needs, medical history, and treatment objectives.",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      features: [
        "Comprehensive health history review",
        "Physical examination and assessment",
        "Medical needs identification",
        "Treatment goal setting",
        "Healthcare plan development",
      ],
      image: "health-assessment.jpg",
    },
    {
      step: "2",
      title: "Diagnostic Testing & Evaluation",
      description:
        "Advanced diagnostic testing and medical evaluations using modern equipment to accurately diagnose conditions and plan treatment.",
      icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      features: [
        "Laboratory tests and blood work",
        "Medical imaging and scans",
        "Specialist consultations",
        "Diagnostic procedure coordination",
        "Results analysis and interpretation",
      ],
      image: "diagnostic-testing.jpg",
    },
    {
      step: "3",
      title: "Treatment & Medical Care",
      description:
        "Personalized medical treatment and care delivery by qualified healthcare professionals using evidence-based medical practices.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      features: [
        "Personalized treatment plans",
        "Medical procedures and interventions",
        "Medication management",
        "Therapeutic services",
        "Progress monitoring and adjustments",
      ],
      image: "medical-treatment.jpg",
    },
    {
      step: "4",
      title: "Recovery & Follow-up Care",
      description:
        "Comprehensive recovery support and ongoing follow-up care to ensure optimal health outcomes and long-term wellness.",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      features: [
        "Post-treatment recovery support",
        "Regular follow-up appointments",
        "Health progress monitoring",
        "Preventive care recommendations",
        "Long-term wellness planning",
      ],
      image: "recovery-followup.jpg",
    },
  ]

  return (
    <section id="medical" className="scroll-mt-32">
      <Hero
        title="Medical Services"
        subtitle="Professional medical consultations, advanced healthcare treatments, and wellness programs designed to support your health journey in Ghana."
      />

      {/* Our Medical Care Process */}
      <ProcessStep
        process={process}
        title="Healthcare in Ghana"
        imageBasePath="/medical/process"
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {/* Medical Services */}
        <RevealOnScroll delay={0.4}>
          <div className="mb-20"></div>
        </RevealOnScroll>
        <ServiceGallery
          items={medicalServices}
          title="Medical Services"
          subtitle="Comprehensive healthcare services delivered by qualified medical professionals"
          color="emerald"
          layout="side-by-side"
        />

        {/* Medical Providers */}
        <RevealOnScroll delay={0.4}>
          <div className="mb-20 mt-16">
            <ProviderCard
              providers={medicalProviders}
              title="Leading Medical Institutions"
              subtitle="Premier hospitals and medical centers providing quality healthcare services"
              imageBasePath="/medical/providers"
            />
          </div>
        </RevealOnScroll>

        {/* Medical Tourism Packages */}
        <RevealOnScroll delay={0.5}>
          <div className="mb-20">
            <ServiceGallery
              items={medicalTourismPackages}
              title="Medical Care Packages"
              subtitle="Specialized healthcare packages designed for comprehensive medical care and wellness"
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
              Your Health is Our Priority
            </h3>
            <p className="text-[#5F6B7A] mb-8 max-w-2xl mx-auto">
              Access quality healthcare services in Ghana with our network of
              premier medical institutions and experienced healthcare
              professionals. Your wellness journey starts here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Schedule Medical Consultation
              </Link>
              <Link
                href="/#how-to-apply"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Learn About Our Process
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
