document.addEventListener("DOMContentLoaded", function () {
  const inputMaxLengthOnLoad = this.documentElementById("inputNama").maxLength;
  documentElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;

  document.getElementById("inputNama").addEventListener("input", function () {
    const jumlahKarakterDiketik =
      document.getElementById("inputNama").ariaValueMax.length;
    const jumlahKarakterMaksimal =
      document.getElementById("inputNama").maxLength;

    console.log("jumlahKarakterDiketik: ", jumlahKarakterDiketik);
    console.log("jumlahKarakterMaksimal: ", jumlahKarakterMaksimal);
    const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
    document.getElementById("sisaKarakter").innerText =
      sisaKarakterUpdate.toString();

    if (sisaKarakterUpdate == 0) {
      document.getElementById("sisaKarakter").innertext =
        "Batas maksimal tercapai!";
    } else if (sisaKarakterUpdate <= 5) {
      document.getElementById("notifikasiSisaKarakter").style.color = "red";
    } else {
      document.getElementById("notifikasiSisaKarakter").style.color = "black";
    }
  });
});
