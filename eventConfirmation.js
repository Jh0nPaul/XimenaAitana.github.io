const footerLink = document.querySelector('footer.footer-class a');

footerLink.addEventListener('click', function (event) {
    event.prevertDefault();
    window.location.href = this.href;
});