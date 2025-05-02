const services = [
    {
        title: 'Graphic designing',
        img: ''
    },
    {
        title: "Banners",
        img: ''
    },
    {
        title: 'Branding',
        img: ''
    },
    {
        title: 'Business cards',
        img: 'images/Business Cards.jpeg'
    },
    {
        title: 'Booklets',
        img: ''
    },
    {
        title: 'Calendars',
        img: 'images/Calendars.jpeg'
    },
    {
        title: 'Cards',
        img: ''
    },
    {
        title: 'Flyers',
        img: 'images/Flyers.jpeg'
    },
    {
        title: 'Printing on mugs',
        img: ''
    },
    {
        title: 'Funeral printing',
        img: ''
    },
    {
        title: 'General typing',
        img: ''
    },
    {
        title: 'Invites',
        img: ''
    },
    {
        title: 'Laminating',
        img: ''
    },
    {
        title: 'Letter heads',
        img: ''
    },
    {
        title: 'Pads',
        img: ''
    },
    {
        title: 'NCR Books',
        img: ''
    },
    {
        title: 'Rubber stamps',
        img: ''
    },
    {
        title: 'Posters',
        img: ''
    },
    {
        title: 'Book binding',
        img: ''
    },
    {
        title: 'Envelope printing',
        img: ''
    },
    {
        title: 'Scan/email',
        img: 'images/Scan.jpeg'
    },
    {
        title: 'Stickers',
        img: ''
    },
    {
        title: 'Signage',
        img: '' 
    },
    {
        title: 'Tickets',
        img: ''
    },
    {
        title: 'T-shirt printing(only on white and must be 100% polyester)',
        img: ''
    },
    {
        title: 'Vinyl',
        img: '' 
    },
    {
        title: 'Correx boards',
        img: ''
    }
];

document.getElementById('content');

services.map((x)=> {
    let {title, img} = x;

    content.innerHTML += `
        <div>
            <h3>${title}</h3>
            ${img ? `<img src="${img}" alt="${title}" width="150"` : ''}
        </div>
    `;
});