function timerCrescente(releaseDate) {
  const el = document.getElementById('timerDisplay');

  function atualizarTimer() {
    const now = new Date();
    let diff = now - releaseDate;

    const days = Math.floor(diff / (1000*60*60*24));
    diff -= days * (1000*60*60*24);

    const hours = String(Math.floor(diff / (1000*60*60))).padStart(2, '0');
    diff -= hours * (1000*60*60);

    const minutes = String(Math.floor(diff / (1000*60))).padStart(2, '0');
    diff -= minutes * (1000*60);

    const seconds = String(Math.floor(diff / 1000)).padStart(2, '0');

    el.textContent = `${days}d ${hours}:${minutes}:${seconds}`;
  }

  atualizarTimer();
  setInterval(atualizarTimer, 1000);
}

// espera o HTML carregar
window.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('timerDisplay');
  const dateStr = el.dataset.releaseDate;          // ex: "2016-08-20T00:00:00"
  const releaseDate = new Date(dateStr);
  timerCrescente(releaseDate);
});
