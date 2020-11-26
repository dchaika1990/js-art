import checkNumInputs from './checkNumImputs';
import closeAllModals from './closeAllModals';

const forms = () => {
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const upload = document.querySelectorAll('[name="upload"]');

    // checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо!',
        failure: 'что-то пошло не так',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
    }

    const path = {
      designer: 'assets/server.php',
      question: 'assets/question.php',
    };

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'post',
            body: data
        });

        return await res.text()
    }

    const clearInputs = () => {
        inputs.forEach( item => item.value = '' );
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        })
    }

    upload.forEach(item => {
        item.addEventListener('input', () => {
            let arr = item.files[0].name.split('.');
            let dots = arr[0].length > 6 ? '...' : '.'
            let name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        })
    })

    form.forEach( item => {

        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(()=> {
                item.style.display = 'none'
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src',message.spinner);
            statusImg.classList.add('animated', 'fadeInUP');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);
            let api = item.closest('.popup-design') || item.classList.contains('calc_form')
                ? path.designer : path.question;

            postData(api, formData)
                .then(res => {
                    console.log(api)
                    console.log(res)
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(error => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000)
                })
        })
    } )
};

export default forms;