document.getElementById("downloadButton").addEventListener("click", function() {
    // CV dosyasının URL'sini buraya ekleyin
    var cvUrl = "cv.pdf";
  
    // Yeni bir <a> öğesi oluşturun
    var link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV-Adı"; // İndirilen dosyanın adını buraya ekleyin
    document.body.appendChild(link);
  
    // Simüle edilmiş bir tıklama olayı gönderin
    link.click();
  
    // Oluşturulan <a> öğesini kaldırın
    document.body.removeChild(link);
  });
// Her menü bağlantısına tıklandığında sayfa içi geçiş yapma
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Varsayılan davranışı engelle
      const targetId = this.getAttribute('href').substring(1); // Bağlantının hedef id'sini al
      const targetElement = document.getElementById(targetId); // Hedef elementi bul
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Yumuşak kaydırma ile hedefe git
      }
    });
  });

  document.getElementById('download-btn').addEventListener('click', function() {
    var pdf = new jsPDF();
    pdf.text("Örnek CV", 10, 10);
    pdf.text("Ad: John Doe", 10, 20);
    pdf.text("Yaş: 30", 10, 30);
    // Diğer CV bilgileri eklenmeli
    pdf.save('cv.pdf');
  });
  
  
  
  
