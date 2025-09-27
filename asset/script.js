$(document).ready(function(){
    $('.testimonial-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 992,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 1 }
        }
      ]
    });
  });

  // JavaScript
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    button.classList.toggle('active');

    if (button.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }

    // Close others
    document.querySelectorAll('.faq-question').forEach(otherBtn => {
      if (otherBtn !== button && otherBtn.classList.contains('active')) {
        otherBtn.classList.remove('active');
        otherBtn.nextElementSibling.style.maxHeight = 0;
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.querySelector('.menu-toggle');
            const diamondIcon = document.querySelector('.diamond-icon');
            const sideMenu = document.querySelector('.side-menu');
            const menuOverlay = document.querySelector('.menu-overlay');
            const closeMenu = document.querySelector('.close-menu');
            const searchToggle = document.querySelector('.search-toggle');
            const searchInputContainer = document.querySelector('.search-input-container');
            const closeSearch = document.querySelector('.close-search');
            const menuItems = document.querySelectorAll('.menu-item');

            const toggleMenu = () => {
                menuToggle.classList.toggle('active');
                sideMenu.classList.toggle('open');
                menuOverlay.classList.toggle('open');
                diamondIcon.style.display = menuToggle.classList.contains('active') ? 'none' : 'block';

                if (menuToggle.classList.contains('active')) {
                    menuItems.forEach((item, index) => {
                        item.style.setProperty('--delay', `${index * 0.5}s`);
                    });
                }
            };

            const closeAllMenus = () => {
                menuToggle.classList.remove('active');
                sideMenu.classList.remove('open');
                menuOverlay.classList.remove('open');
                setTimeout(() => {
                    diamondIcon.style.display = 'block'; // Show diamond icon after 3 seconds
                }, 200);
            };

            const toggleSearch = () => {
                searchInputContainer.classList.toggle('active');
            };

            // Event listeners
            menuToggle.addEventListener('click', toggleMenu);
            closeMenu.addEventListener('click', closeAllMenus);
            menuOverlay.addEventListener('click', closeAllMenus);
            searchToggle.addEventListener('click', toggleSearch);
            closeSearch.addEventListener('click', toggleSearch);

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && sideMenu.classList.contains('open')) {
                    closeAllMenus();
                }
            });
        });

document.addEventListener("DOMContentLoaded", function () {
    const wrappers = document.querySelectorAll(".img-wrapper");
    const container = document.querySelector(".container");
    let animated = false;

    function revealImagesSequentially() {
      if (animated) return;
      const rect = container.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        animated = true;
        wrappers.forEach((wrapper, index) => {
          setTimeout(() => {
            wrapper.classList.add("visible");
          }, index * 250); // Delay between images
        });
      }
    }

    window.addEventListener("scroll", revealImagesSequentially);
    revealImagesSequentially(); // in case already in view
  });

  document.addEventListener("DOMContentLoaded", function () {
      const wrappers = document.querySelectorAll(".img-wrapper");
      const container = document.querySelector(".why-images");
      let animated = false;

      function revealImagesSequentially() {
        if (animated) return;
        const rect = container.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          animated = true;
          wrappers.forEach((wrapper, index) => {
            setTimeout(() => {
              wrapper.classList.add("visible");
            }, index * 250);
          });
        }
      }

      window.addEventListener("scroll", revealImagesSequentially);
      revealImagesSequentially(); // trigger if already visible
    });