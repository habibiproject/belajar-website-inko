document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email-input');
    const backupEmailInput = document.getElementById('backup-email-input');
    const backupEmailToggleButton = document.getElementById('backup-email-toggle-button');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form dari pengiriman default

        const email = emailInput.value;
        const backupEmail = backupEmailInput.value;

        // Validasi email
        if (!validateEmail(email)) {
            showNotification('Please enter a valid email address.', false);
            return;
        }

        // Tampilkan notifikasi sukses
        showNotification('Reset email has been sent.', true);
        resetForm(); // Reset form setelah menampilkan notifikasi
    });

    backupEmailToggleButton.addEventListener('click', function() {
        backupEmailInput.style.display = 'block';
        backupEmailToggleButton.style.display = 'none';
    });

    function validateEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function resetForm() {
        form.reset();
        backupEmailInput.style.display = 'none';
        backupEmailToggleButton.style.display = 'block';
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
