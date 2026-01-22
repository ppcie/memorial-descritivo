async function gerarPDF() {
  preencherDocumento();

  const { jsPDF } = window.jspdf;
  const canvas = await html2canvas(document.getElementById("pagina-a4"), { scale: 2 });
  const img = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  pdf.addImage(img, "PNG", 0, 0, 210, 297);
  pdf.save("memorial-descritivo.pdf");
}
