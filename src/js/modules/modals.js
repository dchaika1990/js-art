import closeAllModals from './closeAllModals';

const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) e.preventDefault();
                closeAllModals();
                modal.style.display = 'block';
                document.body.classList.add('modal-open');
                document.body.style.marginRight = `${scroll}px`;
            })
        })

        const closeFoo = (modal) => {
            closeAllModals();
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
            document.body.style.marginRight = `0px`;
        }

        close.addEventListener('click', () => {
            closeFoo(modal);
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) closeFoo(modal);
        })

    }

    function showModalByTime(selector, time) {
        setTimeout(()=>{
            let display;

            document.querySelectorAll('[data-modal]').forEach( item => {
               if (getComputedStyle(item).display !== 'none') {
                   display = 'block';
               }
            });

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.classList.add('modal-open');
            }

        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal(
        '.button-design',
        '.popup-design',
        '.popup-design .popup-close'
    );
    bindModal(
        '.button-consultation',
        '.popup-consultation',
        '.popup-consultation .popup-close'
    );
    // showModalByTime('.popup-consultation', 60000)
};

export default modals;