
    function toggleMenu() {
        const menu = document.querySelector('.menu');
        const hamburger = document.querySelector('.hamburger');
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    }
  
    function showLinks() {
        var linksDiv = document.getElementById('links');
        linksDiv.classList.toggle('hidden');
    }


  
  
    function showLinks() {
        var linksDiv = document.getElementById('links');
        linksDiv.classList.toggle('hidden');
    }

function beliProduk() {
  alert("Produk berhasil ditambahkan ke keranjang belanja.");
}

function searchNews() {
  var input, filter, category, newsBoxes, newsTitles, newsCategories, i;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  category = document.getElementById('categorySelect').value.toUpperCase();

  newsBoxes = document.getElementsByClassName('news-box');

  for (i = 0; i < newsBoxes.length; i++) {
    newsTitles = newsBoxes[i].getElementsByClassName('news-title')[0];
    newsCategories = newsBoxes[i].getAttribute('data-category').toUpperCase();

    if ((newsTitles.innerText.toUpperCase().indexOf(filter) > -1 || filter === '') &&
        (newsCategories.indexOf(category) > -1 || category === '')) {
      newsBoxes[i].style.display = "flex";
    } else {
      newsBoxes[i].style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var descriptions = document.querySelectorAll('.news-description');
  descriptions.forEach(function(description) {
    description.style.webkitLineClamp = '1';
  });
});

function toggleDescription(element) {
  var parent = element.parentNode;
  var description = parent.querySelector('.news-description');
  var isExpanded = description.style.webkitLineClamp === '1';

  if (isExpanded) {
    description.style.webkitLineClamp = null;
    element.textContent = "Sembunyikan";
  } else {
    description.style.webkitLineClamp = '1';
    element.textContent = "Baca Selengkapnya";
  }
}


// Fungsi untuk mencari produk berdasarkan input pengguna
// Fungsi untuk mencari produk berdasarkan input pengguna
function searchProducts() {
  var input, filter, category, productBoxes, productTitles, productCategories, i;
  input = document.getElementById('searchInput');
  filter = input.value.toLowerCase(); // Mengonversi kata kunci pencarian menjadi huruf kecil
  category = document.getElementById('categorySelect').value.toUpperCase();

  productBoxes = document.getElementsByClassName('product-box');

  for (i = 0; i < productBoxes.length; i++) {
    productTitles = productBoxes[i].getElementsByClassName('product-title')[0];
    productCategories = productBoxes[i].getAttribute('data-category').toUpperCase();

    // Memeriksa apakah judul produk mengandung kata kunci yang dimasukkan pengguna
    if (productTitles.innerText.toLowerCase().includes(filter) || filter === '') {
      // Memeriksa apakah kategori produk sesuai dengan kategori yang dipilih pengguna
      if (productCategories.indexOf(category) > -1 || category === '') {
        productBoxes[i].style.display = "flex";
      } else {
        productBoxes[i].style.display = "none";
      }
    } else {
      productBoxes[i].style.display = "none";
    }
  }
}

// Fungsi untuk menyaring produk berdasarkan kategori yang dipilih
function filterCategory(category) {
  var productBoxes, i;
  productBoxes = document.getElementsByClassName('product-box');

  for (i = 0; i < productBoxes.length; i++) {
    if (category === 'Semua Kategori' || productBoxes[i].getAttribute('data-category') === category.toLowerCase()) {
      productBoxes[i].style.display = "flex";
    } else {
      productBoxes[i].style.display = "none";
    }
  }
}

// Fungsi untuk menampilkan atau menyembunyikan deskripsi produk secara lengkap
function toggleDescription(element) {
  var parent = element.parentNode;
  var description = parent.querySelector('.product-description');
  var isExpanded = description.classList.contains('expanded');

  if (isExpanded) {
    description.classList.remove('expanded');
    description.classList.add('collapsed');
    element.textContent = "Baca Selengkapnya";
  } else {
    description.classList.remove('collapsed');
    description.classList.add('expanded');
    element.textContent = "Sembunyikan";
  }
}// Fungsi untuk bergeser ke slide sebelumnya dalam slider gambar
function prevSlide() {
  var slides = document.getElementsByClassName("product-image");
  for (var i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("active")) {
      slides[i].classList.remove("active");
      if (i === 0) {
        slides[slides.length - 1].classList.add("active");
      } else {
        slides[i - 1].classList.add("active");
      }
      break;
    }
  }
}

// Fungsi untuk bergeser ke slide berikutnya dalam slider gambar
function nextSlide() {
  var slides = document.getElementsByClassName("product-image");
  for (var i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("active")) {
      slides[i].classList.remove("active");
      if (i === slides.length - 1) {
        slides[0].classList.add("active");
      } else {
        slides[i + 1].classList.add("active");
      }
      break;
    }
  }
}
  
function showText() {
  var textDiv = document.getElementById('text');
  textDiv.classList.toggle('hidden');
}