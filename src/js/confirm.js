library.confirm = function (options) {
    return new Promise((resolve, reject) => {
        const confirmModal = library.modal({
            heading: ' ',
            title: options.title,
            width: '400px',
            closableL: false,
            content: options.content,
            onClose() {
                confirmModal.destroy();
            },
            footerButtons: [
                {
                    text: 'Cancel', handler() {
                        confirmModal.close();
                        reject();
                    }
                },
                {
                    text: 'Remove', handler() {
                        confirmModal.close();
                        resolve();
                    }
                },
            ]
        });
        setTimeout(() => confirmModal.open(), 100);
    })
}