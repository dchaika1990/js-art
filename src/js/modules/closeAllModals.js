const closeAllModals = () => {
    const modals = document.querySelectorAll('[data-modal]')
    modals.forEach(item => {
        item.style.display = 'none';
        item.classList.add('animated', 'fadeIn');
    })
}

export default closeAllModals;