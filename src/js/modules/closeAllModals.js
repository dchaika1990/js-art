const closeAllModals = () => {
    const modals = document.querySelectorAll('[data-modal]')
    modals.forEach(item => item.style.display = 'none')
}

export default closeAllModals;