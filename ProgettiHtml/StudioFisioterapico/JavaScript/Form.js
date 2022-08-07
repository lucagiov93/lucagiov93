(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('s6upomD2kwHWifWax');
})();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('test_service_6p7sn28', 'template_lj5vi2c', this)
            .then(function() {
                console.log('SUCCESS!');
                alert("Mail-Inviata");
            }, function(error) {
                console.log('FAILED...', error);
                alert("Mail-non-inviata");
            });
    });
}