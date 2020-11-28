const checkLengthRequiredInputs = () => {
    const forms = document.querySelectorAll('form');

    forms.forEach( form => {
        form.noValidate = true;
        const requiredInputs = form.querySelectorAll("[required]");
        const buttonSubmit = form.querySelector('button');
        let valid = {};

        function checkValid() {
            return ( !Object.values(valid).includes(false))
                ? buttonSubmit.disabled = false
                : buttonSubmit.disabled = true;
        }

        requiredInputs.forEach(input => {
            let name = input.getAttribute('name');
            valid[name] = false;
            input.addEventListener('input', () => {
                input.value < 2 ? valid[name] = false : valid[name] = true
                checkValid();
            })
        })

        checkValid();
    })
}

export default checkLengthRequiredInputs;