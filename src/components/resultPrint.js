// import React from 'react';
// import html2canvas from 'html2canvas';
// import { jsPDF } from "jspdf";


// const resultPrint = () => {
//   const createPDF = () => {
//      const divToDisplay = document.getElementById('the_stuff_to_make_pdf')
//      html2canvas(divToDisplay).then((canvas) => {
//        const divImage = canvas.toDataURL("image/png");
//        const pdf = new jsPDF();
//        pdf.addImage(divImage, 'PNG', 0, 0);
//        pdf.save("download.pdf");
//      })
//   }
//   return (
//    <Container>
//      <SomeMarkup id="the_stuff_to_make_pdf" } />
//      <Button onClick={createPDF} />
//    </Container>
//   )
// }

// export default  resultPrint;