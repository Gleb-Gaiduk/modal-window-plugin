library.modal = function (options) {
    const _modal = _createModal(options);
    const closingTime = 300;
    let closing = false;

    const modalFunctionality = {
        open() {
            !closing && _modal.classList.add('open');
        },

        close() {
            closing = true;
            _modal.classList.remove('open');
            _modal.classList.add('hide');
            setTimeout(() => {
                _modal.classList.remove('hide');
                closing = false;
                if (typeof options.onClose === 'function') {
                    options.onClose();
                }
            }, closingTime);
        },

        setContent(text) {
            _modal.querySelector('.modal__text').textContent = text;
        }
    };

    const closeHandler = (event) => {
        if (event.target.dataset.close) {
            modalFunctionality.close();
        }
    }

    _modal.addEventListener('click', closeHandler);

    return Object.assign(modalFunctionality, {
        destroy() {
            _modal.remove();
            _modal.removeEventListener('click', closeHandler);
        }
    })
};

function _createModal(options) {
    const modalInstance = document.createElement('div');
    modalInstance.classList.add('modal');
    modalInstance.insertAdjacentHTML("afterbegin", `
    <div class="modal__overlay">
                <div class="modal__window" style="width:${options.width || 'auto'}">
                ${(options.closable) ? '<button class="modal__close-button" data-close="true"><img class="modal__close-icon" data-close="true" src="src/images/close.svg"></button>' : ''}
                    <h2 class="modal__heading">${options.heading || 'Customize your heading'}</h2>
                    <div class="modal__container">
                        <div class="modal__body">
                            <h3 class="modal__title">${options.title || 'Customize your title'}</h3>
                            <p class="modal__text">
                            </p>
                            <div class="modal__rates-wrapper">
                                <div class="modal__rates-interaction">
                                    <span class="modal__rates-text">Whas it helpful?</span>
                                    <span class="modal__rates-text modal__rates-text--yes-answer">Yes</span>
                                    <span class="modal__rates-text modal__rates-text--no-answer">No</span>
                                </div>
                                <div class="modal__rates-results modal__rates-text">
                                    <span>The article was helpful for <span class="modal__result-counter">2144 </span>users
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
    const footer = _createModalFooter(options.footerButtons, options);
    modalInstance.querySelector('.modal__container').append(footer);

    document.body.prepand(modalInstance);
    return modalInstance;
};

function _createModalFooter(buttons = [], options) {
    if (buttons.length === 0) {
        return document.createElement('div');
    }

    const footer = document.createElement('div');
    footer.classList.add('modal__footer');

    const footerTitle = document.createElement('h3');
    footerTitle.textContent = options.footerTitle;
    footerTitle.classList.add('modal__call-to-action');
    footer.prepend(footerTitle);

    buttons.forEach(btn => {
        const _button = document.createElement('button');
        _button.textContent = btn.text;
        _button.classList.add('footer__button');
        _button.onclick = btn.handler || testButton;
        footer.append(_button);
    });

    return footer;
}

function testButton() {
    alert('Any test function');
};