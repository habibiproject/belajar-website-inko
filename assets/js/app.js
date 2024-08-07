document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('appStoreLink').addEventListener('click', function(event) {
        event.preventDefault();
        alert('Sedang dalam perbaikan');
    });
  });

  function sendMessage() {
    const countryCode = document.getElementById('country-code').value;
    const phoneNumber = document.getElementById('phone-number').value;

    // Validasi input nomor telepon
    if (phoneNumber.trim() === "") {
        alert("Nomor telepon tidak boleh kosong.");
        return;
    }

    alert("Mohon tunggu, kami akan kirim link ke handphone Anda.");

    // Reset form setelah mengirim pesan
    document.getElementById('country-code').value = "+62";
    document.getElementById('phone-number').value = "";
    
    // Implementasikan logika pengiriman link ke nomor handphone di sini
    // ...
}

function preloader() {
    if (navigator.onLine) {
      setTimeout(showPage, 2000); // Ubah waktu jika perlu
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
  
  // Swiper initialization
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
