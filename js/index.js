document.addEventListener('DOMContentLoaded', () => {

  const popup_close = document.querySelectorAll('.popup_close');
  const popup = document.querySelectorAll('.popup');
  const overlay = document.querySelector('.overlay');
  const bellSvg = document.querySelectorAll('.bellSvg');

  //////////////////////toggleClass/////////////////////////////////////
  const toggleClass = (elem, className) => elem.classList[(elem.classList.contains(className)) ? 'remove' : 'add'](className);

  bellSvg.forEach(el => {
    el.addEventListener('click', e => {
      toggleClass(document.querySelector('.header__nota'), 'active')
    })
  })



  // document.querySelector('.creatFolderJs').addEventListener('click', (e) => {
  //   e.preventDefault();
  //   popup.forEach(element => {
  //     element.style.display = 'none';
  //     if (element.classList.contains('creatFolderJs')) {
  //       element.style.display = 'block';
  //     }
  //   })
  //   overlay.classList.add('active');
  // })

  // document.querySelector('.settingJs').addEventListener('click', (e) => {
  //   e.preventDefault();
  //   popup.forEach(element => {
  //     element.style.display = 'none';
  //     if (element.classList.contains('settingJs')) {
  //       element.style.display = 'block';
  //     }
  //   })
  //   overlay.classList.add('active');
  // })

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay')) {
      overlay.classList.remove('active')
    }
  })


  popup_close.forEach(element => {
    element.addEventListener('click', (e) => document.querySelector('.overlay').classList.remove('active'));
  });

  document.querySelector('#ChangePassword').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.profile__form_first').classList.remove('active');
    document.querySelector('.profile__form_password').classList.add('active');

  });

  document.querySelector('.setingBtn').addEventListener('click', (e) => {
    e.preventDefault();
    toggleClass(document.querySelector('.dropdownList'), 'active');

  })

}); // end DOMContentLoaded