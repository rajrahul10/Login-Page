const btnRightEl = document.querySelectorAll('.btn-right');

for (let i=0; i<btnRightEl.length; i++) {
    btnRightEl[i].addEventListener('click', 
        function() {
            document.querySelector('.sign-in').classList.toggle('hidden');
            document.querySelector('.sign-up').classList.toggle('hidden');
            document.querySelector('.sign-in-links').classList.toggle('hidden');
            document.querySelector('.sign-up-links').classList.toggle('hidden');
        }
    );
}
