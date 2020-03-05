// Is on screen
const windowHeight = document.documentElement.clientHeight
const toAnimate = document.querySelectorAll('[data-animation]')
toAnimate.forEach(item => {
  item.classList.add(item.dataset.animation)
})

const isOnScreen = (el) => {
  // if(el.getBoundingClientRect().top <= (windowHeight / 1.2) && !el.classList.contains('show')) {
  //   el.classList.add('show')
  // }
  if(el.getBoundingClientRect().top <= (windowHeight / 1.2)) {
    if(!el.classList.contains('show')) {
      el.classList.add('show')
    }
  } else {
    if(el.classList.contains('show')) {
      el.classList.remove('show')
    }
  }
}

// Sticky header
const header = document.querySelector('.main-header')

document.querySelector('.page').addEventListener('scroll', function(e) {
  toAnimate.forEach(item => {
    isOnScreen(item)
  })

  const scrollTop = document.querySelector('.page').scrollTop
  if(scrollTop > 500 && !header.classList.contains('sticky')) {
    header.classList.add('sticky')
  } else if(scrollTop <= 500 && header.classList.contains('sticky')) {
    header.classList.remove('sticky')
  }
})
// Responsive menu
const toggleMenuBtns = document.querySelectorAll('.toggle-menu-btn')
if(toggleMenuBtns.length > 0) {
  toggleMenuBtns.forEach(item => {
    item.addEventListener('click', function() {
      const isOpened = document.getElementById('responsive-menu').classList.contains('show')
      if(isOpened) {
        closeResponsiveMenu()
      } else {
        openResponsiveMenu()
      }
    })
  })
}

document.addEventListener('click', function(e) {
  if(e.target.id == 'responsive-menu' && e.target.classList.contains('show')) {
    closeResponsiveMenu()
  }
})

const openResponsiveMenu = () => {
  document.body.classList.add('modal-open')
  document.getElementById('responsive-menu').classList.add('show')
}

const closeResponsiveMenu = () => {
  document.body.classList.remove('modal-open')
  document.getElementById('responsive-menu').classList.remove('show')
}

// Welcome modal
if(document.getElementById('welcomeModal')) {
  setTimeout(() => {
    document.body.classList.add('modal-open')
    document.getElementById('welcomeModal').classList.add('show')
  }, 2000);
}

// Modals
const closeModal = (modalId) => {
  document.getElementById(modalId).classList.remove('show')
  document.body.classList.remove('modal-open')
}

const openModal = (modalId) => {
  console.log(modalId)
  document.getElementById(modalId).classList.add('show')
  document.body.classList.add('modal-open')
}

const modalCloseBtns = document.querySelectorAll('.custom-modal__close-btn')
modalCloseBtns.forEach(item => {
  item.addEventListener('click', function(e) {
    const modal = e.target.dataset.modal
    closeModal(modal)
  })
})

const modalOpenBtns = document.querySelectorAll('.open-modal')
modalOpenBtns.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault()
    let modal = ''
    const parent = e.target.parentNode
    if(parent.hasAttribute('data-modal')) {
      modal = parent.dataset.modal
    } else {
      modal = parent.parentNode.dataset.modal
    }
    openModal(modal)
  })
})

document.addEventListener('click', function (event) {
  if(event.target.classList.contains('custom-modal') && event.target.classList.contains('show')) {
    closeModal(event.target.id)
  }
})

// Listen tabs
function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove('show');
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).classList.add('show');
  evt.currentTarget.className += " active";

  initSponsorsSliders()
}

// Sliders
const initSponsorsSliders = () => {
  new Swiper('.sponsors-slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}

const swiper = new Swiper('.sponsors-slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 4
    },
    0: {
      slidesPerView: 2
    }
  }
});

const testimonials = new Swiper('.testimonials-slider', {
  slidesPerView: 1,
  fadeEffect: { crossFade: true },
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const directorio = new Swiper('.directorio-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
      centeredSlides: true,
      initialSlide: 2,
    }
  }
});

const programas = new Swiper('.programas-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 2
    },
    576: {
      slidesPerView: 1
    }
  }
});

const blog = new Swiper('.blog-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    576: {
      slidesPerView: 1
    }
  }
});

const becasPopulares = new Swiper('.becas-populares-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

const proceso = new Swiper('.proceso-slider', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpoints: {
    992: {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 1
    }
  }
});

const directorioDetails = new Swiper('.directorio-details-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});