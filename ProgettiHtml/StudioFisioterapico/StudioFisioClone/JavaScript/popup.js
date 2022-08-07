const popups = [...document.getElementsByClassName('popup')];

window.addEventListener('click', ({ target }) => {
  const popup = target.closest('.popup');
  const clickedOnClosedPopup = popup && !popup.classList.contains('show');
  
  popups.forEach(p => p.classList.remove('show'));
  
  if (clickedOnClosedPopup) popup.classList.add('show');  
});