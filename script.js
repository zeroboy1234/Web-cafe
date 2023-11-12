
    function toggleModal() {
      var modal = document.querySelector('.modal');
      // Kiểm tra nếu modal đang ẩn, thì hiển thị, ngược lại ẩn đi
      modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'flex' : 'none';
    }


    function manageModal() {
        var btnBackElements = document.querySelectorAll('.btn-back');
        btnBackElements.forEach(function(btnBack) {
            btnBack.addEventListener('click', hideModal);
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                hideModal();
            }
        });
        function hideModal() {
            var modal = document.querySelector('.modal');
            modal.style.display = 'none';
        }
    }
    document.addEventListener('DOMContentLoaded', manageModal);
    



    function switchForm(formType) {
        const signupForm = document.querySelector('.signup-form');
        const loginForm = document.querySelector('.login-form');
        const signupBtn = document.querySelector('.signup-btn');
        const loginBtn = document.querySelector('.login-btn');

        if (formType === 'login') {
            signupForm.classList.remove('active-form');
            signupForm.classList.add('inactive-form');
            loginForm.classList.remove('inactive-form');
            loginForm.classList.add('active-form');
            signupBtn.classList.remove('active-btn');
            signupBtn.classList.add('inactive-btn');
            loginBtn.classList.remove('inactive-btn');
            loginBtn.classList.add('active-btn');
        } else {
            loginForm.classList.remove('active-form');
            loginForm.classList.add('inactive-form');
            signupForm.classList.remove('inactive-form');
            signupForm.classList.add('active-form');
            loginBtn.classList.remove('active-btn');
            loginBtn.classList.add('inactive-btn');
            signupBtn.classList.remove('inactive-btn');
            signupBtn.classList.add('active-btn');
        }
    }