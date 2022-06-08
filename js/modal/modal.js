function createModal(container) {
    const modalSelector = container + ' .modal';
    const buttonSelector = container + ' .btn';
    const closeSelector = container + ' .close';
    // Get the modal
    var modal = document.querySelector(modalSelector);
    modal.setAttribute('aria-hidden', 'true');

    // Get the button that opens the modal
    var btns = document.querySelectorAll(buttonSelector);

    // Get the <span> element that closes the modal
    var closeButton = document.querySelector(closeSelector);
    closeButton.setAttribute('aria-hidden', 'true');

    // When the user clicks on the button, open the modal
    btns.forEach((btn, idx) => {
        btn.id = `${container}-open-modal-${idx}`;
        console.log(btn.id);
        btn.onclick = ev => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            modal.querySelector('.close').setAttribute('data-button-id', ev.currentTarget.id);
            modal.setAttribute('aria-hidden', 'false');
            modal.querySelector('.close').focus();
            document.body.style.overflowY = 'hidden';
        }
    });

    const close = function (ev) {
        // console.log(ev.currentTarget);
        modal.classList.remove('show');
        modal.classList.add('hide');
        modal.setAttribute('aria-hidden', 'true');
        document.querySelector(closeSelector).focus();
        document.body.style.overflowY = 'auto';
    };

    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = close;


    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            close();
        }
    });
};

createModal('#speaking');
createModal('.guiding-principles');
createModal('.services');
createModal('.expertise');
createModal('#bio');