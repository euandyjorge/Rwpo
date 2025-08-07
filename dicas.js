// Exemplo: alerta ao clicar em uma dica
document.querySelectorAll('.evento-dicas li').forEach(item => {
  item.addEventListener('click', () => {
    alert('Essa dica pode te ajudar a ganhar mais recompensas!');
  });
});