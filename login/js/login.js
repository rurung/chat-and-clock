const userIdDom = document.getElementById('userId');
const userPwDom = document.getElementById('userPw');
const submitDom = document.getElementById('submit');

userIdDom.addEventListener("keyup", validate);
userPwDom.addEventListener("keyup", validate);

const validate = () => {
    if (!(userIdDom.value && userPwDom.value)) {
        submitDom.disabled = true;
        submitDom.classList.remove("disabled");
    } else {
        submitDom.disabled = false;
        submitDom.style.cursor = "pointer";
        submitDom.classList.add("disabled");
    }
    }

submitDom.addEventListener('click', (e) => {
    let msg = ''
    if(userIdDom.value === userId) {
        userIdDom.style.color = '#333'
    } else {
        userIdDom.style.color = 'red';
        msg = 'ID false'
    }

    if(userPwDom.value === userPw) {
        userPwDom.style.color = '#333';
    } else {
        userPwDom.style.color = 'red';
        msg = 'Password false'
    }
    if(!msg) {
        alert('성공');
    } else {
        alert('실패')
    }
})
