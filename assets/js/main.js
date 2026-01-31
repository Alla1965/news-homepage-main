
  const menuBtn = document.querySelector('.menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.close-menu');


  menuBtn.addEventListener('click', () => {
    console.log("Hello");
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // заблокувати скрол
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = ''; // повернути скрол
  });

