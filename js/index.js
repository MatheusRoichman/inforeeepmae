const toggleSidebar = () => {
  document.querySelector('#mobile-navbar').classList.toggle('active');
};

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

const alunos_swiper = document.querySelector('#alunos-swiper');

for (let i = 1; i <= 18; i++) {
  const slide = document.createElement('div')
  slide.className = 'swiper-slide';
  
  const slide_img = document.createElement('img');
  slide_img.src = `/img/alunos/alunos-${i}.jpeg`;
  slide_img.alt = 'Alunos do Curso Técnico em Informática na escola.';
  slide_img.loading = 'lazy';
  
  slide.append(slide_img);
  
  alunos_swiper.append(slide);
}