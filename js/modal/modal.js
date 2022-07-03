function createModal(container) {
    const id = container.replace('#', '').replace('.', '');
    const modalSelector = container + ' .modal';
    const buttonSelector = container + ' .btn';
    const closeSelector = container + ' .close';
    // Get the modal
    var modal = document.querySelector(modalSelector);
    if (!modal) { return; }
    modal.setAttribute('aria-hidden', 'true');

    // Get the button that opens the modal
    var btns = document.querySelectorAll(buttonSelector);

    // Get the <span> element that closes the modal
    var closeButton = document.querySelector(closeSelector);

    const isShowing = () => {
        return modal.getAttribute('aria-hidden') === 'false';
    }
    
    const attachEventHandlers = () => {
        // 1. when the user clicks on the button, open the modal
        btns.forEach((btn, idx) => {
            btn.id = `${id}-open-modal-${idx}`;
            // console.log(btn.id);
            btn.onclick = open;
        });

        // 2. if the modal is open, don't allow the user to tab out
        // of the modal:
        document.addEventListener('focus', function(event) {
            if (isShowing() && !modal.contains(event.target)) {
                console.log('back to top!');
                event.stopPropagation();
                modal.querySelector('.close').focus();
            }
        }, true);

        // 3. When the user clicks anywhere outside of the modal, close it
        window.addEventListener('click', (function(event) {
            if (isShowing() && event.target == modal) {
                console.log('close');
                close();
                event.stopPropagation();
            }
        }).bind(this));
    };

    const disableScrolling = () => {
        document.querySelector('html').style.overflowY = 'hidden';
    };

    const disableTabbing = () => {
        modal.querySelectorAll('a, button').forEach(elem => {
            elem.setAttribute('tabindex', '-1');
        })
    };

    const enableTabbing = () => {
        modal.querySelectorAll('a, button').forEach(elem => {
            elem.setAttribute('tabindex', '1');
        })
    };

    const enableScrolling = () => {
        document.querySelector('html').style.overflowY = 'auto';
    };

    const open = ev => {
        enableTabbing();
        disableScrolling();
        
        const closeButton = modal.querySelector('.close');
        modal.classList.add('show');
        modal.classList.remove('hide');
        modal.setAttribute('aria-hidden', 'false');
        closeButton.focus();
        closeButton.setAttribute('data-button-id', ev.currentTarget.id);
    }
    

    const close = ev => {
        if (ev) {
            const elem = ev.currentTarget;
            const btnId = elem.dataset.buttonId;
            console.log(btnId);
            document.querySelector(`#${btnId}`).focus();
            ev.stopPropagation();
        }
        modal.classList.remove('show');
        modal.classList.add('hide');
        modal.setAttribute('aria-hidden', 'true');
        disableTabbing();
        enableScrolling();

    };

    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = close;

    attachEventHandlers();
    disableTabbing();
};

createModal('.services');
createModal('.guiding-principles');
createModal('.expertise');
createModal('#bio');