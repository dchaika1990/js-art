const sliders = (options = {}) => {
    const {slides, dir, prev, next, animationSpeed = 5000, animation = 'slideIn'} = options;
    let slideIndex = 1;
    let paused = false;
    const items = document.querySelectorAll(slides);

    function showSlides(n) {
        if (n > items.length) slideIndex = 1;
        if (n < 1) slideIndex = items.length;

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        })

        items[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex)

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove(animation + 'Left');
            items[slideIndex - 1].classList.add(animation + 'Right');
        })
        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove(animation + 'Right');
            items[slideIndex - 1].classList.add(animation + 'Left');
        })
    } catch (e) {}
    
    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(()=> {
                plusSlides(1);
                items[slideIndex - 1].classList.remove(animation + 'Up');
                items[slideIndex - 1].classList.add(animation + 'Down');
            }, animationSpeed);
        } else {
            paused = setInterval(()=> {
                plusSlides(1);
                items[slideIndex - 1].classList.remove(animation + 'Left');
                items[slideIndex - 1].classList.add(animation + 'Right');
            }, animationSpeed);
        }
    }

    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', ()=> {
        clearInterval(paused);
    })
    items[0].parentNode.addEventListener('mouseleave', ()=> {
        activateAnimation();
    })
};

export default sliders;