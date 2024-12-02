// Função para aplicar o efeito de zoom
const zoomContainer = document.getElementById('zoom-container');
const zoomImage = document.getElementById('zoom-image');

zoomContainer.addEventListener('mousemove', (event) => {
  const { left, top, width, height } = zoomContainer.getBoundingClientRect();
  const x = (event.clientX - left) / width * 100;
  const y = (event.clientY - top) / height * 100;
  
  // Ajusta o zoom e a posição da imagem com base na posição do mouse
  zoomImage.style.transformOrigin = `${x}% ${y}%`;
  zoomImage.style.transform = 'scale(1.5)';
});

zoomContainer.addEventListener('mouseleave', () => {
  // Restaura a imagem ao tamanho original quando o mouse sai do container
  zoomImage.style.transform = 'scale(1)';
});
