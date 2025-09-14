export const downloadGuide = (language: string = "en") => {
  const guideFiles = {
    en: "/guide/Settlement Guide  EasyLife Ghana.pdf.pdf",
    es: "/guide/GUÍA DE INSTALACIÓN  EasyLife Ghana.pdf.pdf",
    fr: "/guide/Guide d'installation  EasyLife Ghana .pdf.pdf",
  }

  const filePath =
    guideFiles[language as keyof typeof guideFiles] || guideFiles.en

  // Create a temporary anchor element to trigger download
  const link = document.createElement("a")
  link.href = filePath
  link.download = filePath.split("/").pop() || "EasyLife-Ghana-Guide.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
