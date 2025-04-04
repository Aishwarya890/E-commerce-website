const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');

for (const trigger of triggerOpen) {
    let currentId = trigger.dataset.target;
    let targetEl = document.querySelector(`#${currentId}`);

    const openData = function () {
        targetEl.classList.remove('active');
        overlay.classList.remove('active');
    };

    trigger.addEventListener('click', function () {
        targetEl.classList.add('active');
        overlay.classList.add('active');
    });

    targetEl.querySelector('[close-button]').addEventListener('click', openData);
    overlay.addEventListener('click', openData);
}

// Mobile-menu submenu
const submenu = document.querySelectorAll('.child-trigger');

submenu.forEach((menu) => {
  menu.addEventListener('click', function(e) {
    e.preventDefault();

    // Remove active class from all other submenu items
    submenu.forEach((item) => {
      if (item !== this) {
        const parent = item.closest('.has-child');
        if (parent) {
          parent.classList.remove('active');
        }
      }
    });

    // Toggle active class on the clicked menu's parent element
    const currentParent = this.closest('.has-child');
    if (currentParent) {
      currentParent.classList.toggle('active');
    }
  });
});

//sorter

//sorter
const sorter = document.querySelector('.sort-list'); 

if (sorter) {
  const sortLi = sorter.querySelectorAll("li");

  // Toggle dropdown visibility
  sorter.querySelector('.opt-trigger').addEventListener('click', function() { 
    sorter.querySelector('ul').classList.toggle('show');
  });

  sortLi.forEach((item) => {
    item.addEventListener('click', function() {
      // Remove "active" class from other list items
      sortLi.forEach((li) => li !== this ? li.classList.remove('active') : null);

      // Add "active" class to clicked item
      this.classList.add("active");

      // Update selected value
      sorter.querySelector('.opt-trigger span.value').textContent = this.textContent;

      // Hide dropdown
      sorter.querySelector('ul').classList.toggle('show');
    });
  });
}

//tabbed
const triggers = document.querySelectorAll('.tabbed-trigger');
const contents = document.querySelectorAll('.tabbed > div');

triggers.forEach((btn) => {
  btn.addEventListener('click', function() {
    let dataTarget = this.dataset.id;
    let body = document.querySelector(`#${dataTarget}`);

    // Remove active class from all triggers and contents
    triggers.forEach((b) => b.parentNode.classList.remove('active'));
    contents.forEach((s) => s.classList.remove('active'));

    // Add active class to clicked trigger and corresponding content
    this.parentNode.classList.add('active');
    body.classList.add('active');
  });
});





//slider
const swiper = new Swiper('.sliderbox', {
    loop: true,
    effect:'fade',
    autoHeight:true,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  });


  //carsousel

  
  const carousel = new Swiper('.carouselbox', {
    spaceBetween: 30, 
    slidesPerView: "auto",
    centeredSlides: true,
  
    // Navigation buttons
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev' // Fixed typo
    },
  
    breakpoints: {
      481: {
        slidesPerView: 2, // Fixed typo
        slidesPerGroup: 1, // Fixed typo
        centeredSlides: false,
      },
      640: {
        slidesPerView: 3, // Fixed typo
        slidesPerGroup: 3, // Fixed typo
        centeredSlides: false,
      },
      992: {
        slidesPerView: 4, // Fixed typo
        slidesPerGroup: 4, // Fixed typo
        centeredSlides: false,
      }
    }
  });


  //product image > page-single
  const thumbImage = new Swiper('.thumbnail-image', {
    // loop: true,
    direction: 'vertical', // Corrected typo
    spaceBetween: 15,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
});

const mainImage = new Swiper('.main-image', {
  loop: true,
  autoHeight:true,

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
  thumbs:{
    swiper:thumbImage,

  },

});


  
