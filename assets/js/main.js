
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Intro carousel
  var heroCarousel = $("#heroCarousel");

  heroCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animate__animated animate__fadeInDown');
    $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

const products = [
  {
      id: "product1",
      name: "Mesin Cetak A3+ INKO CP1040",
      category: "printer",
      description: "Mesin INKO CP1040 adalah mesin cetak A3+ dengan kecepatan tinggi dan kualitas cetak baik untuk dokumen dan materi promosi besar.",
      img: "https://inko.id/assets/images/produks/20220304115147.webp",
      link: "spek.html"
  },
  {
      id: "product2",
      name: "Mesin Cetak A3+ INKO A71+",
      category: "printer",
      description: "Mesin cetak A3+ INKO A71+ adalah model yang cocok untuk mencetak dokumen berukuran besar dengan kecepatan dan kualitas cetak yang baik.",
      img: "https://inko.id/assets/images/produks/20220304115619.webp",
      link: "spek2.html"
  },

  {
    id: "product3",
    name: "Mesin Doublade Petit Valloy",
    category: "finnisher",
    description: "Mesin DUOBLADE PETIT adalah mesin pemotong label digital di atas meja. Mesin ini merupakan versi ramping dari DUOBLADE SX dan terdiri dari alat pelepas, penggulung, stasiun pemotongan, laminasi, penghilang matriks, dan pemotongan. Mesin ini bekerja dengan dua kepala pemotong.",
    img: "https://inko.id/assets/images/produks/20230102161322.webp",
    link: "spek3.html"
},

{
  id: "product4",
  name: "Mesin Doublade F Valloy",
  category: "finnisher",
  description: "Mesin DUOBLADE F adalah pemotong pisau digital unik yang dapat diberi makan lembar secara otomatis. Alat ini bekerja dengan 2 kepala pemotong. Alat ini dapat dipasang tidak hanya di kantor tetapi juga di pabrik berkat ukurannya yang ringkas. ",
  img: "https://inko.id/assets/images/produks/20221219113002.webp",
  link: "spek4.html"
},

{
  id: "product4",
  name: "Mesin Cetak A3+ INKO MP-1035",
  category: "printer",
  description: "Mesin cetak A3+ INKON MP-1035 adalah mesin cetak laser yang dirancang untuk mencetak dokumen dan gambar berkualitas tinggi pada ukuran A3+. ",
  img: "https://inko.id/assets/images/produks/20221003161006.webp",
  link: "spek5.html"
},

{
  id: "product5",
  name: "Mesin Cetak A3+ INKO CP-940 XC",
  category: "printer",
  description: "Mesin cetak A3+ INKO CP-940 XC adalah printer yang dirancang untuk kebutuhan pencetakan berkualitas tinggi pada media berukuran besar. Printer ini ideal untuk bisnis yang memerlukan pencetakan dokumen, poster, dan bahan promosi lainnya dalam ukuran besar dan dengan kualitas profesional",
  img: "https://inko.id/assets/images/produks/20221003152948.webp",
  link: "spek6.html"
},

{
  id: "product6",
  name: "Mesin AZAULT LST-0604 RM",
  category: "finnisher",
  description: "Mesin AZAULT LST-0604 RM adalah printer canggih yang dirancang untuk kebutuhan pencetakan khusus dengan kualitas tinggi dan presisi. Printer ini sangat cocok untuk industri yang membutuhkan pencetakan pada berbagai media dan material. ",
  img: "https://inko.id/assets/images/produks/20230103114809.webp",
  link: "spek7.html"
},

{
  id: "product7",
  name: "Mesin Cetak A3+ INKO CP736",
  category: "printer",
  description: "Mesin Cetak A3+ INKO CP736 adalah printer yang dirancang untuk mencetak pada media berukuran besar dengan kualitas tinggi. Mesin ini ideal untuk bisnis dan industri yang memerlukan pencetakan dokumen, poster, brosur, dan bahan promosi lainnya dalam ukuran A3+ dengan kualitas profesional.",
  img: "https://inko.id/assets/images/produks/20220304114835.webp",
  link: "spek8.html"
},

{
  id: "product8",
  name: "Mesin Cetak A3+ LD 6500/01",
  category: "printer",
  description: "Mesin Cetak A3+ LD 6500/01 adalah printer canggih yang dirancang untuk kebutuhan pencetakan berkualitas tinggi pada media berukuran besar, terutama A3+. Printer ini cocok untuk berbagai aplikasi, termasuk pencetakan dokumen, poster, brosur, dan bahan promosi lainnya.",
  img: "https://inko.id/assets/images/produks/20220304115427.webp",
  link: "spek9.html"
},

{
  id: "product9",
  name: "Mesin Cetak A3+ LB-71",
  category: "printer",
  description: "Mesin Cetak A3+ LB-71 adalah salah satu model mesin cetak yang digunakan untuk mencetak pada kertas berukuran A3+ atau ukuran yang sedikit lebih besar dari A3. Mesin ini sering digunakan dalam industri percetakan untuk menghasilkan cetakan berkualitas tinggi.",
  img: "https://inko.id/assets/images/produks/20220304115518.webp",
  link: "spek10.html"
},

{
  id: "product10",
  name: "Mesin Label Printing INKO VP600",
  category: "printer",
  description: "Mesin label printing INKO VP600 adalah mesin label printing digital yang cepat dan efisien untuk cetak label dalam jumlah sedang hingga besar, cocok untuk industri pencetakan label komersial dan skala menengah.",
  img: "https://inko.id/assets/images/produks/20220304114943.webp",
  link: "spek11.html"
},

{
  id: "product11",
  name: "Mesin Label Printing INKO VP750",
  category: "printer",
  description: "Mesin Label Printing INKO VP750 adalah mesin cetak label yang canggih dan dapat diandalkan untuk berbagai kebutuhan cetak label. ",
  img: "https://inko.id/assets/images/produks/20220304115047.webp",
  link: "spek12.html"
},

{
  id: "produc12",
  name: "Mesin Cetak A3+ INKO CP735",
  category: "printer",
  description: "Mesin Cetak A3+ INKO CP735 adalah salah satu model mesin cetak yang dapat menangani cetak A3+ dengan kualitas yang baik. Mesin ini cocok digunakan untuk kebutuhan cetak berukuran besar seperti poster, brosur, atau grafik yang memerlukan resolusi dan detail tinggi.",
  img: "https://inko.id/assets/images/produks/20220304114401.webp",
  link: "spek13.html"
},

{
  id: "product13",
  name: "Mesin Cetak A3+ INKO A71",
  category: "printer",
  description: "Mesin Cetak A3+ INKO A71 adalah salah satu pilihan yang bagus untuk kebutuhan cetak berukuran besar seperti poster, dokumen grafis, atau materi promosi lainnya. Mesin ini terkenal karena kemampuannya dalam menghasilkan cetakan berkualitas tinggi dengan resolusi yang baik",
  img: "https://inko.id/assets/images/produks/20220304115710.webp",
  link: "spek14.html"
},

{
  id: "product15",
  name: "Mesin Cetak A3+ INKO A-110",
  category: "printer",
  description: "Mesin cetak A3+ INKO A-110 adalah salah satu pilihan yang baik untuk kebutuhan cetak skala besar. Mesin ini biasanya digunakan untuk mencetak poster, brosur, atau materi promosi lainnya dengan kualitas cetak yang baik.",
  img: "https://inko.id/assets/images/produks/20221003153134.webp",
  link: "spek15.html"
},
  // Tambahkan produk lainnya hingga mencapai 15 produk
];

document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
});

function displayProducts(products) {
  const productGrid = document.getElementById("productGrid");
  productGrid.innerHTML = "";
  products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.setAttribute("data-category", product.category);
      productDiv.innerHTML = `
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <a href="${product.link}">Spesifikasi</a>
      `;
      productGrid.appendChild(productDiv);
  });
}
function searchProducts() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchInput) ||
      product.category.toLowerCase().includes(searchInput)
  );
  displayProducts(filteredProducts);
}

function filterProducts(category) {
  const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
  displayProducts(filteredProducts);
}

/*-------============PRELOADER=============-------*/

function preloader() {
  if (navigator.onLine) {
    setTimeout(showPage, 300); // Ubah waktu jika perlu
  } else {
    // Cek koneksi setiap 3 detik
    checkConnection();
  }

  // Tambahkan event listener untuk mendeteksi perubahan status koneksi
  window.addEventListener('online', showPage);
  window.addEventListener('offline', showPreloader);
}

function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.body.style.overflow = "auto"; // Mengembalikan kemampuan scroll setelah preloader hilang 
}

function showPreloader() {
  document.getElementById("preloader").style.display = "flex"; // Mengembalikan preloader ke tengah
  document.body.style.overflow = "hidden"; // Menonaktifkan scroll ketika preloader aktif 
}

function checkConnection() {
  var connectionInterval = setInterval(function() {
    if (navigator.onLine) {
      clearInterval(connectionInterval);
      showPage();
    }
  }, 3000);
}

window.onload = preloader;


/*===============---------ENDD===============---------*/



/*------------======LIVE CHAT==========-----*/

// Quick exercise
// Working on a login panel from my Bananaplate project
// http://dribbble.com/iamnbutler/projects/178899-BANANAPLATE

$(document).ready(function(){
  // No links pls
  $('.ui-button.inactive').click(function(){
    e.preventDefault();
  });
  
  $('#close').click(function(){
    $('.ui-panel').removeClass('bounceInDown').addClass('bounceOutUp');
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
      const chatNotification = document.getElementById('chatNotification');
      chatNotification.style.display = 'block';
  }, 5000); // 5 menit (300000 ms)
});

function toggleChat() {
  const chatPopup = document.getElementById('chatPopup');
  chatPopup.style.display = chatPopup.style.display === 'block' ? 'none' : 'block';
  
  const chatNotification = document.getElementById('chatNotification');
  chatNotification.style.display = 'none';
}

function startChat() {
  document.getElementById('chatForm').style.display = 'none';
  document.getElementById('chatConversation').style.display = 'block';
}

function sendMessage(event) {
  event.preventDefault();
  const chatMessage = document.getElementById('chatMessage').value;
  if (chatMessage.trim() !== '') {
      addMessage('sent', chatMessage);
      document.getElementById('chatMessage').value = '';
      setTimeout(() => {
          const response = getChatbotResponse(chatMessage);
          addMessage('received', response);
      }, 1000);
  }
}

function addMessage(type, text) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message', type);
  
  const messageContent = document.createElement('div');
  messageContent.classList.add('message-content');
  messageContent.textContent = text;
  
  messageContainer.appendChild(messageContent);
  document.querySelector('.conversation-container').appendChild(messageContainer);
  document.querySelector('.conversation-container').scrollTop = document.querySelector('.conversation-container').scrollHeight;
}

function getChatbotResponse(userMessage) {
  const responses = [
      { pattern: /Kapan pesanan saya akan sampai?/i, response: 'Pesanan Anda diperkirakan tiba dalam 3-5 hari kerja. Untuk estimasi yang lebih akurat, Anda bisa memeriksa status pelacakan melalui link yang kami kirimkan' },
      { pattern: / Apakah pesanan saya sudah diproses?/i, response: 'Anda akan menerima email konfirmasi saat pesanan Anda telah diproses dan dikirim. Jika Anda belum menerima email tersebut, Anda bisa memeriksa status pesanan di akun Anda' },
      { pattern: / metode pembayaran|via pembayaran?/i, response: ' Kami menerima pembayaran melalui kartu kredit, debit, transfer bank, dan e-wallet seperti OVO,DANA dan GoPay.' },
      { pattern: /cicilan|cicil/i, response: ' Ya, kami menawarkan opsi cicilan melalui mitra pembiayaan kami. Silakan pilih metode cicilan saat checkout untuk informasi lebih lanjut.' },
      { pattern: /Bagaimana cara mengatasi masalah teknis dengan produk?/i, response: 'Anda dapat menghubungi dukungan teknis kami melalui live chat atau email. Sertakan detail masalah dan nomor seri produk untuk bantuan yang lebih cepat.' },
      { pattern: /Bagaimana cara menghubungi dukungan teknis?/i, response: 'Anda bisa menghubungi dukungan teknis kami melalui live chat, email di info@cpd-inko.com, atau telepon di 021-29028970 / 021-29028971' },
      { pattern: /Apakah ada promo atau diskon saat ini/i, response: 'Promo dan diskon terbaru dapat ditemukan di halaman utama situs kami atau di newsletter yang kami kirimkan. Pastikan untuk mendaftar agar tidak ketinggalan informasi terbaru.' },
      { pattern: /hi|halo/i, response: 'Hi! Ada yang bisa kami bantu?' },
      { pattern: /melacak pesanan|status pesanan/i, response: ' Anda dapat melacak pesanan Anda menggunakan nomor pelacakan yang dikirimkan melalui email konfirmasi. Masukkan nomor tersebut di situs kurir untuk melihat status pengiriman.' },
      { pattern: /bagaimana cara menggunakan produk ini/i, response: ' Anda dapat mengikuti panduan pengguna yang kami sediakan di situs kami. Jika ada pertanyaan spesifik, jangan ragu untuk bertanya!' },
      { pattern: /mesin|spesifikasi|detail/i, response: 'Untuk Spesifikasi Atau Detail Mesin Sudah Ada DiWebsite Kami Kak Kalo Mau Lihat Jelas Lagi Ke Gudang Kami Aj Kak.' },
      { pattern: /harga|berapa/i, response: 'Langsung Aja Kak Hubungi Contact Kami Untuk Menanyakan Harga Atau Apa Terimakasih :)' },
      { pattern: /lokasi|alamat|kantor/i, response: 'Untuk lokasi Kantor kami sudah dicantumkan di Website dan lebih jelas lagi ada di Maps.' },
      { pattern: /lihat-lihat|cek/i, response: 'Tentu, Kak. Langsung saja ke kantor kami.' },
      { pattern: /ready|tersedia/i, response: 'Jika tidak tertera SOLD OUT maka tersedia. Selagi masih ditampilkan di WEBSITE kami, produk kami ready, ya Kak.' },
      { pattern: /thanks|terima kasih|makasih/i, response: 'Sama-sama!' },
      { pattern: /bye|selamat tinggal/i, response: 'Selamat tinggal! Semoga harimu menyenangkan!' }
  ];

  const lowerCaseMessage = userMessage.toLowerCase();
  for (const response of responses) {
      if (response.pattern.test(lowerCaseMessage)) {
          return response.response;
      }
  }

  return 'Maaf, saya tidak mengerti. Bisa tolong ulangi?';
}

document.getElementById('chatMessage').addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage(event);
  }
});

//--------------------END-----------------//

//--------LOGIN-------------//

document.getElementById('reset-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;

  fetch('/send-reset-email', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          alert('Reset email sent successfully!');
      } else {
          alert('Error sending reset email.');
      }
  })
  .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while sending the reset email.');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Mencegah form dari pengiriman default

      const email = emailInput.value;
      const password = passwordInput.value;

      // Validasi email dan password
      if (!validateEmail(email)) {
          showNotification('Please enter a valid email address.', false);
          return;
      }

      if (password.trim() === '') {
          showNotification('Please enter your password.', false);
          return;
      }

      // Tampilkan notifikasi sukses
      showNotification('Logging in...', true);
      resetForm(); // Reset form setelah menampilkan notifikasi
  });

  function validateEmail(email) {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
  }

  function resetForm() {
      form.reset();
  }

  function showNotification(message, isSuccess) {
      const notification = document.createElement('div');
      notification.className = isSuccess ? 'notification success' : 'notification error';
      notification.textContent = message;

      document.body.appendChild(notification);

      setTimeout(() => {
          notification.remove();
      }, 3000); // Hapus notifikasi setelah 3 detik
  }
});


//-----------------------END LOGIN----------------//


function openDownloadPage() {
  // Ganti URL di bawah ini dengan URL halaman download APK kamu
  window.location.href = 'app.html';
}

// Tambahkan event listener untuk memastikan fungsi dipanggil saat elemen diklik
document.addEventListener('DOMContentLoaded', function() {
  var downloadApkElement = document.querySelector('.download-apk');
  if (downloadApkElement) {
      downloadApkElement.addEventListener('click', openDownloadPage);
  }
});


document.addEventListener("DOMContentLoaded", function() {
  var currentUrl = window.location.href;
  var menuItems = document.querySelectorAll('.menu-kiri li a');
  
  menuItems.forEach(function(item) {
      if (item.href === currentUrl) {
          item.parentElement.classList.add('active');
      }
  });
});

function searchArticles() {
  // Ambil input dari pengguna
  var query = document.getElementById('searchInput').value.toLowerCase();

  // Kosongkan hasil pencarian sebelumnya
  var resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';

  // Jika input kosong, tampilkan pesan tidak ada hasil ditemukan
  if (query.trim() === '') {
      resultsContainer.innerText = 'Tidak ada hasil ditemukan.';
      return;
  }

  // Data artikel yang ada di halaman (untuk contoh ini, data disimpan di dalam array)
  var articles = [
      {
          title: "Tetap memilih kualitas: Pentingnya pelayanan unggul dalam industri digital printing.",
          url: "artikelview.html",
          imageUrl: "https://inko.id/assets/images/artikels/Img_65dd4583f1e7320240227091427.webp"
      },
      {
          title: "Mengapa Harus Inko? Memilih Kualitas dan keunggulan dalam Digital Printing.",
          url: "artikelview2.html",
          imageUrl: "https://inko.id/assets/images/artikels/Img_6632f78fb942720240502091647.webp"
      },
      {
          title: "Mengenal Digital Printing: Konsep Dasar dan Keuntungan dari sistim cetak digital",
          url: "artikelview3.html",
          imageUrl: "https://inko.id/assets/images/artikels/Img_660ccad5b72a820240403101949.webp"
      },

      {
        title: "INKO Hadir di ALLPACK ALLPRINT INDONESIA 2023: Membawa Inovasi Melalui Mesin Digital Printing",
        url: "artikelview4.html",
        imageUrl: "https://inko.id/assets/images/artikels/Img_653f24ee0af2f20231030113718.webp"
    },
    {
        title: "10 TIPS DAN TRIK Mengatur dan Menyimpan Media Cetak dalam Digital Printing",
        url: "artikelview5.html",
        imageUrl: "https://snapy.co.id/gambar/artikel/tahapan-proses-cetak-offset.jpg"
    },
    {
        title: "Metode Hot Folder dalam proses cetak digital",
        url: "beritaterkait1.html",
        imageUrl: "http://verbok.com/wp-content/uploads/2016/11/Hot-Folders-Print-By-Verbok.png"
    },

    {
      title: "Pengertian label barcode, jenis dan fungsinya",
      url: "beritaterkait2.html",
      imageUrl: "https://thumbs.dreamstime.com/b/bar-code-scanner-barcode-label-isolated-white-background-d-illustration-192518878.jpg"
  },
  {
      title: "Elektrostatik Dalam Proses Cetak: Penyebab, Dampak, Kendala, dan Teknik Pengendalian yang Sukses.",
      url: "beritaterkait3.html",
      imageUrl: "https://inko.id/assets/images/artikels/Img_64a22f0f0cd4e20230703101439.webp"
  },
  {
      title: "Melangkah ke Era Digital : Transformasi Dokumen dari Analog ke digital.",
      url: "beritaterkait4.html",
      imageUrl: "https://inko.id/assets/images/artikels/Img_649265a4ad00520230621105116.webp"
  },

  
{
    title: "Perawatan mesin label Inko VIP",
    url: "beritaterkait5.html",
    imageUrl: "https://inko.id/assets/images/artikels/Img_641c00203bd6d20230323153040.webp"
},
{
    title: "Proyeksi Bisnis Digital Printing di tahun 2024",
    url: "beritaterkait6.html",
    imageUrl: "https://inko.id/assets/images/artikels/Img_645c99748371220230511152956.webp"
},

{
  title: "Cara menghilangkan atau menghapus latar belakang (background) pada gambar.",
  url: "beritaterkait7.html",
  imageUrl: "https://inko.id/assets/images/artikels/Img_645084852ae8120230502113325.webp"
},
{
  title: "Prosess Image Raster pada mesin cetak digital (RIP)",
  url: "beritaterkait8.html",
  imageUrl: "https://inko.id/assets/images/artikels/Img_63f6c99fc6e5620230223100415.webp"
},
{
  title: "Teka-teki Digital Printing: Mengenal dan mengatasi error dengan cerdas.",
  url: "beritaterkait9.html",
  imageUrl: "https://inko.id/assets/images/artikels/Img_66271bec74f8120240423102444.webp"
},
      // Tambahkan data artikel lainnya di sini...
  ];

  // Filter artikel berdasarkan query
  var results = articles.filter(article => article.title.toLowerCase().includes(query));

  // Tampilkan hasil
  if (results.length > 0) {
      results.forEach(result => {
          // Buat elemen container untuk setiap artikel
          var articleContainer = document.createElement('div');
          articleContainer.style.display = 'flex';
          articleContainer.style.alignItems = 'center';
          articleContainer.style.marginBottom = '10px';

          // Buat elemen gambar
          var articleImage = document.createElement('img');
          articleImage.src = result.imageUrl;
          articleImage.alt = result.title;
          articleImage.style.width = '100px'; // Sesuaikan ukuran gambar sesuai kebutuhan
          articleImage.style.height = '100px';
          articleImage.style.marginRight = '10px';

          // Buat elemen link
          var articleLink = document.createElement('a');
          articleLink.href = result.url;
          articleLink.innerText = result.title;

          // Tambahkan gambar dan link ke dalam container
          articleContainer.appendChild(articleImage);
          articleContainer.appendChild(articleLink);

          // Tambahkan container artikel ke dalam resultsContainer
          resultsContainer.appendChild(articleContainer);
      });
  } else {
      resultsContainer.innerText = 'Tidak ada hasil ditemukan.';
  }
}

function resetSearch() {
  // Kosongkan input dan hasil pencarian
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').innerHTML = '';
}

