"use client"

import Link from "next/link"
import React, { useMemo } from "react"
import { useTranslation } from "react-i18next"
import RevealOnScroll from "@/components/motion/RevealOnScroll"
import ServiceGallery from "@/components/shared/ServiceGallery"
import ProviderCard from "@/components/shared/ProviderCard"
import ProcessStep from "@/components/shared/ProcessStep"
import { Hero } from "@/components/shared"

export default function AcademicServicePage() {
  const { t } = useTranslation()
  const englishPrograms = useMemo(
    () => [
      {
        id: "esl",
        title: t("pages.academic.englishPrograms.programs.esl.title"),
        duration: t("pages.academic.englishPrograms.programs.esl.duration"),
        description: t(
          "pages.academic.englishPrograms.programs.esl.description"
        ),
        outcomes: t("pages.academic.englishPrograms.programs.esl.outcomes", {
          returnObjects: true,
        }) as string[],
        ideal: t("pages.academic.englishPrograms.programs.esl.ideal"),
      },
      {
        id: "business-english",
        title: t(
          "pages.academic.englishPrograms.programs.businessEnglish.title"
        ),
        duration: t(
          "pages.academic.englishPrograms.programs.businessEnglish.duration"
        ),
        description: t(
          "pages.academic.englishPrograms.programs.businessEnglish.description"
        ),
        outcomes: t(
          "pages.academic.englishPrograms.programs.businessEnglish.outcomes",
          { returnObjects: true }
        ) as string[],
        ideal: t(
          "pages.academic.englishPrograms.programs.businessEnglish.ideal"
        ),
      },
      {
        id: "academic-english",
        title: t(
          "pages.academic.englishPrograms.programs.academicEnglish.title"
        ),
        duration: t(
          "pages.academic.englishPrograms.programs.academicEnglish.duration"
        ),
        description: t(
          "pages.academic.englishPrograms.programs.academicEnglish.description"
        ),
        outcomes: t(
          "pages.academic.englishPrograms.programs.academicEnglish.outcomes",
          { returnObjects: true }
        ) as string[],
        ideal: t(
          "pages.academic.englishPrograms.programs.academicEnglish.ideal"
        ),
      },
      {
        id: "professional-english",
        title: t(
          "pages.academic.englishPrograms.programs.professionalEnglish.title"
        ),
        duration: t(
          "pages.academic.englishPrograms.programs.professionalEnglish.duration"
        ),
        description: t(
          "pages.academic.englishPrograms.programs.professionalEnglish.description"
        ),
        outcomes: t(
          "pages.academic.englishPrograms.programs.professionalEnglish.outcomes",
          { returnObjects: true }
        ) as string[],
        ideal: t(
          "pages.academic.englishPrograms.programs.professionalEnglish.ideal"
        ),
      },
      {
        id: "ielts-prep",
        title: t("pages.academic.englishPrograms.programs.ieltsPrep.title"),
        duration: t(
          "pages.academic.englishPrograms.programs.ieltsPrep.duration"
        ),
        description: t(
          "pages.academic.englishPrograms.programs.ieltsPrep.description"
        ),
        outcomes: t(
          "pages.academic.englishPrograms.programs.ieltsPrep.outcomes",
          { returnObjects: true }
        ) as string[],
        ideal: t("pages.academic.englishPrograms.programs.ieltsPrep.ideal"),
      },
      {
        id: "communication-skills",
        title: t(
          "pages.academic.englishPrograms.programs.communicationSkills.title"
        ),
        duration: t(
          "pages.academic.englishPrograms.programs.communicationSkills.duration"
        ),
        description: t(
          "pages.academic.englishPrograms.programs.communicationSkills.description"
        ),
        outcomes: t(
          "pages.academic.englishPrograms.programs.communicationSkills.outcomes",
          { returnObjects: true }
        ) as string[],
        ideal: t(
          "pages.academic.englishPrograms.programs.communicationSkills.ideal"
        ),
      },
      {
        id: "intensive-english",
        title: t(
          "pages.academic.englishPrograms.programs.intensiveEnglish.title"
        ),
        duration: t(
          "pages.academic.englishPrograms.programs.intensiveEnglish.duration"
        ),
        description: t(
          "pages.academic.englishPrograms.programs.intensiveEnglish.description"
        ),
        outcomes: t(
          "pages.academic.englishPrograms.programs.intensiveEnglish.outcomes",
          { returnObjects: true }
        ) as string[],
        ideal: t(
          "pages.academic.englishPrograms.programs.intensiveEnglish.ideal"
        ),
      },
      {
        id: "conversation-classes",
        title: t(
          "pages.academic.englishPrograms.programs.conversationClasses.title"
        ),
        duration: t(
          "pages.academic.englishPrograms.programs.conversationClasses.duration"
        ),
        description: t(
          "pages.academic.englishPrograms.programs.conversationClasses.description"
        ),
        outcomes: t(
          "pages.academic.englishPrograms.programs.conversationClasses.outcomes",
          { returnObjects: true }
        ) as string[],
        ideal: t(
          "pages.academic.englishPrograms.programs.conversationClasses.ideal"
        ),
      },
    ],
    [t]
  )

  const universityPrograms = [
    {
      id: "bachelor",
      title: t("pages.academic.universityPrograms.programs.bachelor.title"),
      duration: t(
        "pages.academic.universityPrograms.programs.bachelor.duration"
      ),
      description: t(
        "pages.academic.universityPrograms.programs.bachelor.description"
      ),
      fields: t("pages.academic.universityPrograms.programs.bachelor.fields", {
        returnObjects: true,
      }) as string[],
      requirements: t(
        "pages.academic.universityPrograms.programs.bachelor.requirements"
      ),
    },
    {
      id: "master",
      title: t("pages.academic.universityPrograms.programs.master.title"),
      duration: t("pages.academic.universityPrograms.programs.master.duration"),
      description: t(
        "pages.academic.universityPrograms.programs.master.description"
      ),
      fields: t("pages.academic.universityPrograms.programs.master.fields", {
        returnObjects: true,
      }) as string[],
      requirements: t(
        "pages.academic.universityPrograms.programs.master.requirements"
      ),
    },
    {
      id: "phd",
      title: t("pages.academic.universityPrograms.programs.phd.title"),
      duration: t("pages.academic.universityPrograms.programs.phd.duration"),
      description: t(
        "pages.academic.universityPrograms.programs.phd.description"
      ),
      fields: t("pages.academic.universityPrograms.programs.phd.fields", {
        returnObjects: true,
      }) as string[],
      requirements: t(
        "pages.academic.universityPrograms.programs.phd.requirements"
      ),
    },
    {
      id: "professional",
      title: t("pages.academic.universityPrograms.programs.professional.title"),
      duration: t(
        "pages.academic.universityPrograms.programs.professional.duration"
      ),
      description: t(
        "pages.academic.universityPrograms.programs.professional.description"
      ),
      fields: t(
        "pages.academic.universityPrograms.programs.professional.fields",
        { returnObjects: true }
      ) as string[],
      requirements: t(
        "pages.academic.universityPrograms.programs.professional.requirements"
      ),
    },
  ]

  const technicalPrograms = [
    {
      id: "engineering-tech",
      title: t(
        "pages.academic.technicalPrograms.programs.engineeringTech.title"
      ),
      duration: t(
        "pages.academic.technicalPrograms.programs.engineeringTech.duration"
      ),
      description: t(
        "pages.academic.technicalPrograms.programs.engineeringTech.description"
      ),
      specializations: t(
        "pages.academic.technicalPrograms.programs.engineeringTech.specializations",
        { returnObjects: true }
      ) as string[],
      outcome: t(
        "pages.academic.technicalPrograms.programs.engineeringTech.outcome"
      ),
    },
    {
      id: "information-tech",
      title: t(
        "pages.academic.technicalPrograms.programs.informationTech.title"
      ),
      duration: t(
        "pages.academic.technicalPrograms.programs.informationTech.duration"
      ),
      description: t(
        "pages.academic.technicalPrograms.programs.informationTech.description"
      ),
      specializations: t(
        "pages.academic.technicalPrograms.programs.informationTech.specializations",
        { returnObjects: true }
      ) as string[],
      outcome: t(
        "pages.academic.technicalPrograms.programs.informationTech.outcome"
      ),
    },
    {
      id: "applied-sciences",
      title: t(
        "pages.academic.technicalPrograms.programs.appliedSciences.title"
      ),
      duration: t(
        "pages.academic.technicalPrograms.programs.appliedSciences.duration"
      ),
      description: t(
        "pages.academic.technicalPrograms.programs.appliedSciences.description"
      ),
      specializations: t(
        "pages.academic.technicalPrograms.programs.appliedSciences.specializations",
        { returnObjects: true }
      ) as string[],
      outcome: t(
        "pages.academic.technicalPrograms.programs.appliedSciences.outcome"
      ),
    },
    {
      id: "business-tech",
      title: t("pages.academic.technicalPrograms.programs.businessTech.title"),
      duration: t(
        "pages.academic.technicalPrograms.programs.businessTech.duration"
      ),
      description: t(
        "pages.academic.technicalPrograms.programs.businessTech.description"
      ),
      specializations: t(
        "pages.academic.technicalPrograms.programs.businessTech.specializations",
        { returnObjects: true }
      ) as string[],
      outcome: t(
        "pages.academic.technicalPrograms.programs.businessTech.outcome"
      ),
    },
    {
      id: "trades-crafts",
      title: t("pages.academic.technicalPrograms.programs.tradesCrafts.title"),
      duration: t(
        "pages.academic.technicalPrograms.programs.tradesCrafts.duration"
      ),
      description: t(
        "pages.academic.technicalPrograms.programs.tradesCrafts.description"
      ),
      specializations: t(
        "pages.academic.technicalPrograms.programs.tradesCrafts.specializations",
        { returnObjects: true }
      ) as string[],
      outcome: t(
        "pages.academic.technicalPrograms.programs.tradesCrafts.outcome"
      ),
    },
  ]

  const languageSchools = [
    {
      name: t("pages.academic.languageSchools.schools.gil.name"),
      location: t("pages.academic.languageSchools.schools.gil.location"),
      established: t("pages.academic.languageSchools.schools.gil.established"),
      tagline: t("pages.academic.languageSchools.schools.gil.tagline"),
      description: t("pages.academic.languageSchools.schools.gil.description"),
      specialties: t("pages.academic.languageSchools.schools.gil.specialties", {
        returnObjects: true,
      }) as string[],
      image: "gil-accra.jpg",
      website: t("pages.academic.languageSchools.schools.gil.website"),
    },
    {
      name: t("pages.academic.languageSchools.schools.ace.name"),
      location: t("pages.academic.languageSchools.schools.ace.location"),
      established: t("pages.academic.languageSchools.schools.ace.established"),
      tagline: t("pages.academic.languageSchools.schools.ace.tagline"),
      description: t("pages.academic.languageSchools.schools.ace.description"),
      specialties: t("pages.academic.languageSchools.schools.ace.specialties", {
        returnObjects: true,
      }) as string[],
      image: "ace-languages.jpg",
      website: t("pages.academic.languageSchools.schools.ace.website"),
    },
    {
      name: t("pages.academic.languageSchools.schools.celps.name"),
      location: t("pages.academic.languageSchools.schools.celps.location"),
      established: t(
        "pages.academic.languageSchools.schools.celps.established"
      ),
      tagline: t("pages.academic.languageSchools.schools.celps.tagline"),
      description: t(
        "pages.academic.languageSchools.schools.celps.description"
      ),
      specialties: t(
        "pages.academic.languageSchools.schools.celps.specialties",
        { returnObjects: true }
      ) as string[],
      image: "celps.jpg",
      website: t("pages.academic.languageSchools.schools.celps.website"),
    },
    {
      name: t("pages.academic.languageSchools.schools.hopeLife.name"),
      location: t("pages.academic.languageSchools.schools.hopeLife.location"),
      established: t(
        "pages.academic.languageSchools.schools.hopeLife.established"
      ),
      tagline: t("pages.academic.languageSchools.schools.hopeLife.tagline"),
      description: t(
        "pages.academic.languageSchools.schools.hopeLife.description"
      ),
      specialties: t(
        "pages.academic.languageSchools.schools.hopeLife.specialties",
        { returnObjects: true }
      ) as string[],
      image: "hope-life.jpg",
      website: t("pages.academic.languageSchools.schools.hopeLife.website"),
    },
    {
      name: t("pages.academic.languageSchools.schools.goethe.name"),
      location: t("pages.academic.languageSchools.schools.goethe.location"),
      established: t(
        "pages.academic.languageSchools.schools.goethe.established"
      ),
      tagline: t("pages.academic.languageSchools.schools.goethe.tagline"),
      description: t(
        "pages.academic.languageSchools.schools.goethe.description"
      ),
      specialties: t(
        "pages.academic.languageSchools.schools.goethe.specialties",
        { returnObjects: true }
      ) as string[],
      image: "goethe-institut.jpg",
      website: t("pages.academic.languageSchools.schools.goethe.website"),
    },
    {
      name: t("pages.academic.languageSchools.schools.durra.name"),
      location: t("pages.academic.languageSchools.schools.durra.location"),
      established: t(
        "pages.academic.languageSchools.schools.durra.established"
      ),
      tagline: t("pages.academic.languageSchools.schools.durra.tagline"),
      description: t(
        "pages.academic.languageSchools.schools.durra.description"
      ),
      specialties: t(
        "pages.academic.languageSchools.schools.durra.specialties",
        { returnObjects: true }
      ) as string[],
      image: "durra-institute.jpg",
      website: t("pages.academic.languageSchools.schools.durra.website"),
    },
  ]

  const Universities = [
    {
      name: t("pages.academic.universities.institutions.ug.name"),
      type: t("pages.academic.universities.institutions.ug.type"),
      location: t("pages.academic.universities.institutions.ug.location"),
      established: t("pages.academic.universities.institutions.ug.established"),
      programs: t("pages.academic.universities.institutions.ug.programs", {
        returnObjects: true,
      }) as string[],
      image: "university-of-ghana.jpg",
      ranking: t("pages.academic.universities.institutions.ug.ranking"),
      students: t("pages.academic.universities.institutions.ug.students"),
    },
    {
      name: t("pages.academic.universities.institutions.knust.name"),
      type: t("pages.academic.universities.institutions.knust.type"),
      location: t("pages.academic.universities.institutions.knust.location"),
      established: t(
        "pages.academic.universities.institutions.knust.established"
      ),
      programs: t("pages.academic.universities.institutions.knust.programs", {
        returnObjects: true,
      }) as string[],
      image: "knust-university.jpg",
      ranking: t("pages.academic.universities.institutions.knust.ranking"),
      students: t("pages.academic.universities.institutions.knust.students"),
    },
    {
      name: t("pages.academic.universities.institutions.gimpa.name"),
      type: t("pages.academic.universities.institutions.gimpa.type"),
      location: t("pages.academic.universities.institutions.gimpa.location"),
      established: t(
        "pages.academic.universities.institutions.gimpa.established"
      ),
      programs: t("pages.academic.universities.institutions.gimpa.programs", {
        returnObjects: true,
      }) as string[],
      image: "gimpa-university.jpg",
      ranking: t("pages.academic.universities.institutions.gimpa.ranking"),
      students: t("pages.academic.universities.institutions.gimpa.students"),
    },
    {
      name: t("pages.academic.universities.institutions.ashesi.name"),
      type: t("pages.academic.universities.institutions.ashesi.type"),
      location: t("pages.academic.universities.institutions.ashesi.location"),
      established: t(
        "pages.academic.universities.institutions.ashesi.established"
      ),
      programs: t("pages.academic.universities.institutions.ashesi.programs", {
        returnObjects: true,
      }) as string[],
      image: "ashesi-university.jpg",
      ranking: t("pages.academic.universities.institutions.ashesi.ranking"),
      students: t("pages.academic.universities.institutions.ashesi.students"),
    },
    {
      name: t("pages.academic.universities.institutions.ucc.name"),
      type: t("pages.academic.universities.institutions.ucc.type"),
      location: t("pages.academic.universities.institutions.ucc.location"),
      established: t(
        "pages.academic.universities.institutions.ucc.established"
      ),
      programs: t("pages.academic.universities.institutions.ucc.programs", {
        returnObjects: true,
      }) as string[],
      image: "ucc-university.jpg",
      ranking: t("pages.academic.universities.institutions.ucc.ranking"),
      students: t("pages.academic.universities.institutions.ucc.students"),
    },
    {
      name: t("pages.academic.universities.institutions.ait.name"),
      type: t("pages.academic.universities.institutions.ait.type"),
      location: t("pages.academic.universities.institutions.ait.location"),
      established: t(
        "pages.academic.universities.institutions.ait.established"
      ),
      programs: t("pages.academic.universities.institutions.ait.programs", {
        returnObjects: true,
      }) as string[],
      image: "ait-university.jpg",
      ranking: t("pages.academic.universities.institutions.ait.ranking"),
      students: t("pages.academic.universities.institutions.ait.students"),
    },
    {
      name: t("pages.academic.universities.institutions.central.name"),
      type: t("pages.academic.universities.institutions.central.type"),
      location: t("pages.academic.universities.institutions.central.location"),
      established: t(
        "pages.academic.universities.institutions.central.established"
      ),
      programs: t("pages.academic.universities.institutions.central.programs", {
        returnObjects: true,
      }) as string[],
      image: "central-university.jpg",
      ranking: t("pages.academic.universities.institutions.central.ranking"),
      students: t("pages.academic.universities.institutions.central.students"),
    },
    {
      name: t("pages.academic.universities.institutions.puc.name"),
      type: t("pages.academic.universities.institutions.puc.type"),
      location: t("pages.academic.universities.institutions.puc.location"),
      established: t(
        "pages.academic.universities.institutions.puc.established"
      ),
      programs: t("pages.academic.universities.institutions.puc.programs", {
        returnObjects: true,
      }) as string[],
      image: "puc-university.jpg",
      ranking: t("pages.academic.universities.institutions.puc.ranking"),
      students: t("pages.academic.universities.institutions.puc.students"),
    },
  ]

  const TechnicalSchools = [
    {
      name: t("pages.academic.technicalSchools.institutions.atu.name"),
      type: t("pages.academic.technicalSchools.institutions.atu.type"),
      location: t("pages.academic.technicalSchools.institutions.atu.location"),
      established: t(
        "pages.academic.technicalSchools.institutions.atu.established"
      ),
      programs: t("pages.academic.technicalSchools.institutions.atu.programs", {
        returnObjects: true,
      }) as string[],
      image: "accra-technical-university.jpg",
      achievement: t(
        "pages.academic.technicalSchools.institutions.atu.achievement"
      ),
      students: t("pages.academic.technicalSchools.institutions.atu.students"),
    },
    {
      name: t("pages.academic.technicalSchools.institutions.kti.name"),
      type: t("pages.academic.technicalSchools.institutions.kti.type"),
      location: t("pages.academic.technicalSchools.institutions.kti.location"),
      established: t(
        "pages.academic.technicalSchools.institutions.kti.established"
      ),
      programs: t("pages.academic.technicalSchools.institutions.kti.programs", {
        returnObjects: true,
      }) as string[],
      image: "kumasi-technical.jpg",
      achievement: t(
        "pages.academic.technicalSchools.institutions.kti.achievement"
      ),
      students: t("pages.academic.technicalSchools.institutions.kti.students"),
    },
    {
      name: t("pages.academic.technicalSchools.institutions.ttu.name"),
      type: t("pages.academic.technicalSchools.institutions.ttu.type"),
      location: t("pages.academic.technicalSchools.institutions.ttu.location"),
      established: t(
        "pages.academic.technicalSchools.institutions.ttu.established"
      ),
      programs: t("pages.academic.technicalSchools.institutions.ttu.programs", {
        returnObjects: true,
      }) as string[],
      image: "ttu-technical.jpg",
      achievement: t(
        "pages.academic.technicalSchools.institutions.ttu.achievement"
      ),
      students: t("pages.academic.technicalSchools.institutions.ttu.students"),
    },
    {
      name: t("pages.academic.technicalSchools.institutions.btu.name"),
      type: t("pages.academic.technicalSchools.institutions.btu.type"),
      location: t("pages.academic.technicalSchools.institutions.btu.location"),
      established: t(
        "pages.academic.technicalSchools.institutions.btu.established"
      ),
      programs: t("pages.academic.technicalSchools.institutions.btu.programs", {
        returnObjects: true,
      }) as string[],
      image: "btu-technical.jpg",
      achievement: t(
        "pages.academic.technicalSchools.institutions.btu.achievement"
      ),
      students: t("pages.academic.technicalSchools.institutions.btu.students"),
    },
  ]

  const process = [
    {
      step: t("pages.academic.process.steps.assessment.step"),
      title: t("pages.academic.process.steps.assessment.title"),
      description: t("pages.academic.process.steps.assessment.description"),
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      features: t("pages.academic.process.steps.assessment.features", {
        returnObjects: true,
      }) as string[],
      image: "academic-assessment.jpg",
    },
    {
      step: t("pages.academic.process.steps.selection.step"),
      title: t("pages.academic.process.steps.selection.title"),
      description: t("pages.academic.process.steps.selection.description"),
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      features: t("pages.academic.process.steps.selection.features", {
        returnObjects: true,
      }) as string[],
      image: "institution-selection.jpg",
    },
    {
      step: t("pages.academic.process.steps.application.step"),
      title: t("pages.academic.process.steps.application.title"),
      description: t("pages.academic.process.steps.application.description"),
      icon: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      features: t("pages.academic.process.steps.application.features", {
        returnObjects: true,
      }) as string[],
      image: "application-submission.jpg",
    },
    {
      step: t("pages.academic.process.steps.enrollment.step"),
      title: t("pages.academic.process.steps.enrollment.title"),
      description: t("pages.academic.process.steps.enrollment.description"),
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      features: t("pages.academic.process.steps.enrollment.features", {
        returnObjects: true,
      }) as string[],
      image: "enrollment-completion.jpg",
    },
  ]

  return (
    <section id="academic" className="scroll-mt-32">
      <Hero
        title={t("pages.academic.title")}
        subtitle={t("pages.academic.subtitle")}
      />
      {/* Our Academic Support Process */}
      <ProcessStep
        process={process}
        title={t("pages.academic.process.title")}
        imageBasePath="/academic/process"
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {/* English Language Programs Section */}
        <RevealOnScroll delay={0.4}>
          <div className="mb-20"></div>
        </RevealOnScroll>
        <ServiceGallery
          items={englishPrograms}
          title={t("pages.academic.englishPrograms.title")}
          subtitle={t("pages.academic.englishPrograms.subtitle")}
          color="emerald"
          layout="side-by-side"
        />

        {/* English Language Schools */}
        <RevealOnScroll delay={0.4}>
          <div className="mb-20 mt-16">
            <ProviderCard
              providers={languageSchools}
              title={t("pages.academic.languageSchools.title")}
              subtitle={t("pages.academic.languageSchools.subtitle")}
              imageBasePath="/academic/language-schools"
            />
          </div>
        </RevealOnScroll>

        {/* Universities Section */}
        <RevealOnScroll delay={0.5}>
          <div className="mb-20">
            <ServiceGallery
              items={universityPrograms}
              title={t("pages.academic.universityPrograms.title")}
              subtitle={t("pages.academic.universityPrograms.subtitle")}
              color="blue"
              layout="side-by-side"
            />
            <ProviderCard
              providers={Universities}
              title={t("pages.academic.universities.title")}
              subtitle={t("pages.academic.universities.subtitle")}
              imageBasePath="/academic/universities"
            />
          </div>
        </RevealOnScroll>

        {/* Technical & Professional Schools */}
        <RevealOnScroll delay={0.6}>
          <div className="mb-20">
            <ServiceGallery
              items={technicalPrograms}
              title={t("pages.academic.technicalPrograms.title")}
              subtitle={t("pages.academic.technicalPrograms.subtitle")}
              color="purple"
              layout="side-by-side"
            />
            <ProviderCard
              providers={TechnicalSchools}
              title={t("pages.academic.technicalSchools.title")}
              subtitle={t("pages.academic.technicalSchools.subtitle")}
              imageBasePath="/academic/technical-schools"
            />
          </div>
        </RevealOnScroll>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl py-20">
        <RevealOnScroll delay={0.8}>
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 p-8 text-center">
            <h3 className="text-2xl font-bold text-[#0D1623] mb-4">
              {t("pages.academic.cta.title")}
            </h3>
            <p className="text-[#5F6B7A] mb-8 max-w-2xl mx-auto">
              {t("pages.academic.cta.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                {t("pages.academic.cta.consultationButton")}
              </Link>
              <Link
                href="/#how-to-apply"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                {t("pages.academic.cta.applicationButton")}
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
