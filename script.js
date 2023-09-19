document.addEventListener("DOMContentLoaded", function () {
  const metinGirişi = document.getElementById("metin");
  const sıkıştırButonu = document.getElementById("sıkıştır");
  const sonuçMetni = document.getElementById("sonuç");

  sıkıştırButonu.addEventListener("click", function () {
    const girişMetni = metinGirişi.value;
    const sıkıştırılmışMetni = rle_sıkıştırma(girişMetni);
    sonuçMetni.textContent = "Komprimierte Texte: " + sıkıştırılmışMetni;
  });

  function rle_sıkıştırma(metin) {
    let sıkıştırılmışMetin = "";
    let tekrarSayısı = 1;

    for (let i = 0; i < metin.length; i++) {
      if (metin[i] === metin[i + 1]) {
        tekrarSayısı++;
      } else {
        if (tekrarSayısı >= 4) {
          sıkıştırılmışMetin += "&" + tekrarSayısı + metin[i];
        } else {
          sıkıştırılmışMetin += metin[i].repeat(tekrarSayısı);
        }
        tekrarSayısı = 1;
      }
    }

    return sıkıştırılmışMetin;
  }
});
