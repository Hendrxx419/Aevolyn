window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#1a1a1a';
  } else {
    navbar.style.backgroundColor = '#000';
  }
});

function openWallet() {
  document.getElementById('walletModal').classList.remove('hidden');
}

function closeWallet() {
  document.getElementById('walletModal').classList.add('hidden');
}