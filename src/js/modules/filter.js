const filter = () => {
    const menu = document.querySelector('.portfolio-menu');
    const items = menu.querySelectorAll('li');
    const wrapper = document.querySelector('.portfolio-wrapper');
    const markAll = wrapper.querySelectorAll('.all');
    const no = document.querySelector('.portfolio-no');

    function show(elem) {
        elem.style.display = 'block';
        elem.classList.add('animated', 'fadeIn')
    }

    function hide(elem) {
        elem.style.display = 'none';
        elem.classList.remove('animated', 'fadeIn');
    }

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            hide(mark);
        })
        hide(no);

        if (markType) {
            markType.forEach(mark => {
                show(mark);
            })
        } else {
            show(no);
        }
    }

    menu.addEventListener('click', function (e) {
        let elem = e.target;
        if (elem && !elem.classList.contains('active') && elem.tagName === 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
            let itemsTabs = wrapper.querySelectorAll('.' + elem.getAttribute('class'));
            if (elem.getAttribute('class') === 'grandmother'
                || elem.getAttribute('class') === 'granddad') {
                typeFilter();
            } else {
                typeFilter(itemsTabs)
            }
            elem.classList.add('active')
        }
    })
}

export default filter;