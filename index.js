let modalWindow = library.modal({
    heading: 'Model of Custom Item',
    closable: true,
    title: 'Basic information about the item',
    content: "Furniture can be a product of design and is considered a form of decorative art. In addition to furniture's functional role, it can serve a symbolic or religious purpose. It can be made from many materials, including metal, plastic, and wood. Furniture can be made using a variety of woodworking joints which often reflect the local culture.",
    width: '707px',
    footerTitle: 'Order this item now',
    footerButtons: [
        {
            text: 'Order Now',
            handler() {
                alert('Ordered!');
            },

        },

        {
            text: 'Cancel',
            handler() {
                modalFunctionality.close();
            },
        }
    ]
});