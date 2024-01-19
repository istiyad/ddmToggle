const t = document.querySelector('.wpddm-toggle-style-15');
t.addEventListener('click', function () {
    if (this.classList.contains('wpddm-active-light')) {
        this.classList.remove('wpddm-active-light');
        this.classList.add('wpddm-active-dark');
    } else {
        this.classList.remove('wpddm-active-dark');
        this.classList.add('wpddm-active-light');
    }
});
