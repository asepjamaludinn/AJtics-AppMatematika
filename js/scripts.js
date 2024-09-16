// Toggle

const navbarnav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// click anyway
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});

// shapes
const shapeSelect = document.getElementById("shape-select");
const segitigaSection = document.getElementById("segitiga");
const jajargenjangSection = document.getElementById("jajargenjang");

shapeSelect.addEventListener("change", function () {
  const selectedValue = shapeSelect.value;

  if (selectedValue === "segitiga") {
    segitigaSection.style.display = "block";
    jajargenjangSection.style.display = "none";
  } else if (selectedValue === "jajargenjang") {
    segitigaSection.style.display = "none";
    jajargenjangSection.style.display = "block";
  }
});

// luas segitiga
const hitungLuasButton = document.getElementById("hitung-luas");

hitungLuasButton.addEventListener("click", (e) => {
  e.preventDefault();
  const alas = document.getElementById("alas").value;
  const tinggi = document.getElementById("tinggi").value;

  if (alas == "" || tinggi == "") {
    alert("Form masih kosong!");
    return;
  }

  const luas = (1 / 2) * (alas * tinggi);
  document.getElementById("result-luas").innerHTML = `
  Hasil Perhitungan: <br>
  Luas = 1/2 × a × t <br>
  Luas = 1/2 x ${alas} × ${tinggi} <br>
  Luas = ${luas}
`;
});

// keliling segitiga
const hitungKelilingButton = document.getElementById("hitung-keliling");

hitungKelilingButton.addEventListener("click", (e) => {
  e.preventDefault();
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);
  const c = parseInt(document.getElementById("c").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Form masih kosong!");
    return;
  }

  const keliling = a + b + c;
  document.getElementById("result-keliling").innerHTML = `
  Hasil Perhitungan: <br>
  Keliling =  S1 + S2 + a <br>
  Keliling = ${a} +  ${b} + ${c} <br>
  Keliling = ${keliling}
  `;
});

// Luas jajargenjang
const hitungLuasJGButton = document.getElementById("hitung-luas-jajargenjang");

hitungLuasJGButton.addEventListener("click", (e) => {
  e.preventDefault();
  const alas = document.getElementById("alasjg").value;
  const tinggi = document.getElementById("tinggijg").value;

  if (alas == "" || tinggi == "") {
    alert("Form masih kosong!");
    return;
  }

  const luas = alas * tinggi;
  document.getElementById("result-luas-jajargenjang").innerHTML = `
  Hasil Perhitungan: <br>
  Luas jajargenjang = a x t <br>
  Luas jajargenjang = ${alas} x ${tinggi} <br>
  Luas jajargenjang = ${luas}
  `;
});

// keliling jajargenjang
const hitungKelilingJGButton = document.getElementById(
  "hitung-keliling-jajargenjang"
);

hitungKelilingJGButton.addEventListener("click", (e) => {
  e.preventDefault();
  const a = parseFloat(document.getElementById("a-jajargenjang").value);
  const b = parseFloat(document.getElementById("b-jajargenjang").value);

  if (isNaN(a) || isNaN(b)) {
    alert("Form masih kosong!");
    return;
  }
  const keliling = 2 * (parseFloat(a) + parseFloat(b));
  document.getElementById("result-keliling-jajargenjang").innerHTML = `
  Hasil Perhitungan: <br>
  Keliling Jajargenjang = 2 x ( a + b ) <br>
  Keliling Jajargenjang = 2 x (${a} + ${b}) <br>
  Keliling Jajargenjang = ${keliling}
  `;
});
