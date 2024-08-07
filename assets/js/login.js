// Mendapatkan elemen-elemen
const passwordInput = document.getElementById("password-input");
const showPasswordButton = document.getElementById("show-password-button");
const eyeIcon = document.getElementById("eye-icon");

// Fungsi untuk menampilkan atau menyembunyikan password
function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.style.fill = "#000"; // Ubah warna ikon saat password ditampilkan
  } else {
    passwordInput.type = "password";
    eyeIcon.style.fill = "#727586"; // Kembali ke warna awal
  }
}

// Menambahkan event listener ke tombol
showPasswordButton.addEventListener("click", togglePassword);

document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah aksi default, misalnya pengiriman form

    // Tampilkan notifikasi
    var notification = document.getElementById('notification-custom');
    notification.style.display = 'block';

    // Atur timer untuk menghilangkan notifikasi
    setTimeout(function() {
        notification.classList.add('fade-out');
        setTimeout(function() {
            notification.style.display = 'none';
            notification.classList.remove('fade-out');
        }, 500); // Waktu yang sama dengan durasi transisi fade-out
    }, 3000); // Notifikasi tampil selama 3 detik

    // Reset form login
    document.getElementById('login-form').reset();
});