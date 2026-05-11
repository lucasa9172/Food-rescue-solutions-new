const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

function confirmOrder(){
  document.getElementById("confirm").classList.remove("d-none");
}

function showMessage(){
  document.getElementById("msg").classList.remove("d-none");
}
