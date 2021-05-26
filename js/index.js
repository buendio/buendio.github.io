document.addEventListener('DOMContentLoaded', () => {

  const popup_close = document.querySelectorAll('.popup_close');

  document.querySelector('.creatSiteJs').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.overlay').classList.add('active');
  })

  popup_close.forEach(element => {
    element.addEventListener('click', (e) => document.querySelector('.overlay').classList.remove('active'));
  });

}); // end DOMContentLoaded