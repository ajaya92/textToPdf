function generatePdf(){
    var pdf = new jsPDF();
    var plainText = document.getElementById("plainText").value;
    

    pdf.text(10,10,plainText);;

    var output = pdf.output("bloburl");
    window.open(output,"_blank");
    document.getElementById("plainText").value = '';
}