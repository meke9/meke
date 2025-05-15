// JavaScript Kodları
function mobilyaOner() {
  const evtipi = document.getElementById("evtipi").value;
  const kisiler = parseInt(document.getElementById("kisiler").value);
  const cocuk = document.getElementById("cocuk").checked;
  const hayvan = document.getElementById("hayvan").checked;

  let oneriler = "";

  if (evtipi === "1+1") {
    oneriler += "Küçük alanlara uygun açık renkli ikili koltuk öneriyoruz. ";
  } else if (evtipi === "2+1") {
    oneriler += "2+1 eviniz için kompakt bir köşe takımı ve modern TV ünitesi öneriyoruz. ";
  } else if (evtipi === "3+1") {
    oneriler += "Geniş salon için üçlü koltuk ve yemek odası takımı düşünebilirsiniz. ";
  } else {
    oneriler += "Büyük eviniz için konforlu L koltuklar ve tam takım mobilya paketi öneriyoruz. ";
  }

  if (kisiler >= 4) {
    oneriler += "Kalabalık bir aile için bol yastıklı, dayanıklı kumaşlı koltuklar iyi olur. ";
  }

  if (cocuk) {
    oneriler += "Çocuklu evler için leke tutmayan kumaşlar ve yuvarlak kenarlı mobilyalar tavsiye edilir. ";
  }

  if (hayvan) {
    oneriler += "Evcil hayvan varsa tırmalamaya dayanıklı kumaşlar ve yüksek ayaklı mobilyalar daha kullanışlı olur.";
  }

  document.getElementById("oneri").innerText = "🧠 Önerimiz: " + oneriler;
}
function getFiyat(urun, icerik) {
  const fiyatlar = {
    koltuk: {
      Ekonomik: 80000,
      Klasik: 100000,
      Modern: 120000,
      Lüks: 150000
    },
    yatak: {
      Ekonomik: 120000,
      Klasik: 150000,
      Modern: 180000,
      Lüks: 220000
    },
    yemek: {
      Ekonomik: 150000,
      Klasik: 200000,
      Modern: 250000,
      Lüks: 300000
    }
  };

  return fiyatlar[urun][icerik] || 0;
}

function paketHesapla() {
  const koltukAdet = parseInt(document.getElementById("koltuk-adet").value) || 0;
  const koltukRenk = document.getElementById("koltuk-renk").value;
  const koltukIcerik = document.getElementById("koltuk-icerik").value;
  const koltukFiyat = getFiyat("koltuk", koltukIcerik);

  const yatakAdet = parseInt(document.getElementById("yatak-adet").value) || 0;
  const yatakRenk = document.getElementById("yatak-renk").value;
  const yatakIcerik = document.getElementById("yatak-icerik").value;
  const yatakFiyat = getFiyat("yatak", yatakIcerik);

  const yemekAdet = parseInt(document.getElementById("yemek-adet").value) || 0;
  const yemekRenk = document.getElementById("yemek-renk").value;
  const yemekIcerik = document.getElementById("yemek-icerik").value;
  const yemekFiyat = getFiyat("yemek", yemekIcerik);

  const tableBody = document.getElementById("paketTablo").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Tabloyu temizle

  let toplam = 0;

  function satirEkle(urun, adet, fiyatBirim, renk, icerik) {
    if (adet > 0) {
      const fiyat = adet * fiyatBirim;
      toplam += fiyat;
      const row = tableBody.insertRow();
      row.insertCell(0).textContent = `${urun} (${renk}, ${icerik})`;
      row.insertCell(1).textContent = adet;
      row.insertCell(2).textContent = `₺${fiyat.toLocaleString("tr-TR")}`;
    }
  }

  satirEkle("Koltuk", koltukAdet, koltukFiyat, koltukRenk, koltukIcerik);
  satirEkle("Yatak Odası", yatakAdet, yatakFiyat, yatakRenk, yatakIcerik);
  satirEkle("Yemek Odası", yemekAdet, yemekFiyat, yemekRenk, yemekIcerik);

  if (toplam > 0) {
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = "Toplam";
    row.insertCell(1).textContent = "-";
    row.insertCell(2).textContent = `₺${toplam.toLocaleString("tr-TR")}`;
    row.style.fontWeight = "bold";
  }
}

function temizlePaket() {
  document.getElementById("koltuk-adet").value = "0";
  document.getElementById("yatak-adet").value = "0";
  document.getElementById("yemek-adet").value = "0";
  document.getElementById("paketTablo").getElementsByTagName("tbody")[0].innerHTML = "";
}
function temizleOneri() {
  document.getElementById("evtipi").value = "1+1";
  document.getElementById("kisiler").value = "1";
  document.getElementById("cocuk").checked = false;
  document.getElementById("hayvan").checked = false;
  document.getElementById("oneri").innerText = "";
}
function temizleFiyat() {
  document.getElementById("koltuk-adet").value = "0";
  document.getElementById("yatak-adet").value = "0";
  document.getElementById("yemek-adet").value = "0";
  document.getElementById("paketTablo").getElementsByTagName("tbody")[0].innerHTML = "";
}

