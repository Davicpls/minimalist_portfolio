function atualizarFavicon() {
    const favicon16 = document.getElementById('favicon16');
    const favicon32 = document.getElementById('favicon32');
  
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      favicon16.href = '%PUBLIC_URL%/portfolio16-light.png';
      favicon32.href = '%PUBLIC_URL%/portfolio32-light.png';
    } else {
      favicon16.href = '%PUBLIC_URL%/portfolio16-dark.png';
      favicon32.href = '%PUBLIC_URL%/portfolio32-dark.png';
    }
  }
  
  atualizarFavicon();
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    atualizarFavicon();
  });
  