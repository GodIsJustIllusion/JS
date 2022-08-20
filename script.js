document.addEventListener('DOMContentLoaded', () => {
    let content = document.getElementById('content');

    content.appendChild(BuildForm.login_textbox());
    content.appendChild(BuildForm.password_textbox());
    content.appendChild(BuildForm.submit_btn());
})

let BuildForm = {
    'login_textbox': function () {
        return HTMLDefaultTags.input('Login', 'text', 'Логин');
    },

    'password_textbox': function () {
        return HTMLDefaultTags.input('Пароль', 'password', 'Пароль');
    },
    
    'submit_btn': function () {
        return HTMLDefaultTags.button('Отправить', 'submit');
    },

}

let HTMLDefaultTags = {
    'button': function (title, type = "") {
        let btn = document.createElement('button');
        btn.innerHTML = title;
        btn.type = type;

        return btn;
    },

    'input': function (name, type = "", placeholder) {
        let input = document.createElement('input');
        input.name = name;
        input.type = type;
        input.placeholder = placeholder;

        return input;
    }
}