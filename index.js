let productList = [
    { id: 1, title: 'Chair', image: 'src/images/1.jpg', tag: 'LIFESTYLE', price: '39$', date: 'Sep 22, 2020', info: "One of the basic pieces of furniture, a chair is a type of seat. Its primary features are two pieces of a durable material, attached as back and seat to one another at a 90° or slightly greater angle, with usually the four corners of the horizontal seat attached in turn to four legs—or other parts of the seat's underside attached to three legs or to a shaft about which a four- arm turnstile on rollers can turn" },
    { id: 2, title: 'Table', image: 'src/images/2.jpg', tag: 'HOME', price: '59$', date: 'Dec 22, 2020', info: "A table is an item of furniture with a flat top and one or more legs, used as a surface for working at, eating from or on which to place things.[1][2] Some common types of table are the dining room table, which is used for seated persons to eat meals; the coffee table, which is a low table used in living rooms to display items or serve refreshments; and the bedside table, which is used to place an alarm clock and a lamp." },
    { id: 3, title: 'Sofa', image: 'src/images/3.jpg', tag: 'INTERIOR', price: '189$', date: 'Oct 22, 2020', info: "This sofa is just a fraction of the cost of other top-rated styles. There are nine colors to choose from and plenty of coordinating pieces if you want more than just a full-sized sofa, including a sectional, loveseat, recliner, ottoman, and more." }
];

const infoModal = library.modal({
    heading: 'Model of Custom Item',
    closable: true,
    title: 'Basic information about the item',
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
                infoModal.close();
            },
        }
    ]
});

const cardToHTML = productList => `<article class="listing__card card">
<a class="card__header" href="#0">
    <img class="card__header-image" src="${productList.image}" alt="${productList.title}">
</a>
<div class="card__body">
    <div class="card__body-tag">
        <a class="card__tag-link" href="#0" class="card__tag-link">${productList.tag}</a>
    </div>
    <p class="card__body-info">
        By<span class="card__origin-info"> Demo Demo</span><span class="card__origin-date">${productList.date}</span></span><span class="card__price">${productList.price}</span>
    </p>
    <h2 class="card__title"><a class="card__title-link">${productList.title}</a></h2>
    <p class="card__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolor eius velit voluptates ratione quibusdam aliquid commodi officiis, ab nihil culpa eligendi ut veritatis repudiandae ad tenetur mollitia nostrum ullam?
    </p>
</div>
<div class="card__footer">
    <button class="card__button" data-product="info" data-id="${productList.id}">Read More
        <svg class="card__button-icon" viewBox="0 0 16 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 61.2 (89653) - https://sketch.com -->
            <title>Arrow Copy 13</title>
            <desc>Created with Sketch.</desc>
            <g id="Partner's-Calendar" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Calendar_One-day-view_tablet-(768)" transform="translate(-731.000000, -114.000000)" fill="#6A6A6A">
                    <g id="Group-3" transform="translate(20.000000, 108.000000)">
                        <g id="Group">
                            <g id="Arrow-Copy-13" transform="translate(713.000000, 20.142136) rotate(-45.000000) translate(-713.000000, -20.142136) translate(703.000000, 10.142136)">
                                <path d="M18,0 C19.1045695,-2.02906125e-16 20,0.8954305 20,2 L20,18 C20,19.1045695 19.1045695,20 18,20 L16,20 L16,20 L16,2 C16,0.8954305 16.8954305,2.02906125e-16 18,0 Z" id="Rectangle-5"></path>
                                <path d="M6,10 L10,10 L10,24 C10,25.1045695 9.1045695,26 8,26 C6.8954305,26 6,25.1045695 6,24 L6,10 L6,10 Z" id="Rectangle-5-Copy" transform="translate(8.000000, 18.000000) rotate(-270.000000) translate(-8.000000, -18.000000) "></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    </button>
    <button class="card__button" data-product="confirm" data-id="${productList.id}">Remove
        <svg class="card__button-icon" viewBox="0 0 16 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 61.2 (89653) - https://sketch.com -->
            <title>Arrow Copy 13</title>
            <desc>Created with Sketch.</desc>
            <g id="Partner's-Calendar" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Calendar_One-day-view_tablet-(768)" transform="translate(-731.000000, -114.000000)" fill="#6A6A6A">
                    <g id="Group-3" transform="translate(20.000000, 108.000000)">
                        <g id="Group">
                            <g id="Arrow-Copy-13" transform="translate(713.000000, 20.142136) rotate(-45.000000) translate(-713.000000, -20.142136) translate(703.000000, 10.142136)">
                                <path d="M18,0 C19.1045695,-2.02906125e-16 20,0.8954305 20,2 L20,18 C20,19.1045695 19.1045695,20 18,20 L16,20 L16,20 L16,2 C16,0.8954305 16.8954305,2.02906125e-16 18,0 Z" id="Rectangle-5"></path>
                                <path d="M6,10 L10,10 L10,24 C10,25.1045695 9.1045695,26 8,26 C6.8954305,26 6,25.1045695 6,24 L6,10 L6,10 Z" id="Rectangle-5-Copy" transform="translate(8.000000, 18.000000) rotate(-270.000000) translate(-8.000000, -18.000000) "></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    </button>
</div>
</article>                  
`;

function cardRender() {
    const cardsHTML = productList.map(product => cardToHTML(product)).join('');
    document.getElementById('products').innerHTML = cardsHTML;
}

cardRender();

const cardsListing = document.querySelector('.listing');
cardsListing.addEventListener('click', function (event) {
    const buttonType = event.target.dataset.product;
    const buttonId = +event.target.dataset.id;

    if (buttonType === "info") {

        infoModal.setContent(productList[buttonId - 1].info);
        infoModal.open();
    } else if (buttonType === "confirm") {
        library.confirm({
            title: 'Are you sure?',
        }).then(() => {
            productList = productList.filter(product => product.id !== buttonId);
            cardRender();
        }).catch(() => {
            console.log('Canceled');
        })
    };
});