const services = [
    {
        img: 'images/andy-brown-4cOaHsfIBKQ-unsplash.jpg',
        title: 'Graphic design',
    },
    {
        img: 'images/Certificates.jpeg',
        title: 'Certificates'
    },
    {
        img: 'images/banners.jpg',
        title: 'Banners'
    },
    {
        img: 'images/2h-media-NmSPbe0bDtc-unsplash.jpg',
        title: 'Branding'
    },
    {
        img: 'images/Business Cards.jpeg',
        title: 'Business cards'
    },
    {
        img: 'images/booklets.jpeg',
        title: 'Booklets'
    },
    {
        img: 'images/Calendars.jpeg',
        title: 'Calendars'
    },
    // {
    //     img: '',
    //     title: 'Cards'
    // },
    {
        img: 'images/Flyers.jpeg',
        title: 'Flyers'
    },
    {
        img: 'images/printing on mugs.jpg',
        title: 'Printing on mugs'
    },
    {
        img: 'images/funeral.jpg',
        title: 'Funeral printing'
    },
    // {
    //     img: '',
    //     title: 'General typing'
    // },
    // {
    //     img: '',
    //     title: 'Invites'
    // },
    {
        img: 'images/Lamination.jpeg',
        title: 'Laminating'
    },
    // {
    //     img: '',
    //     title: 'Letter heads'
    // },
    // {
    //     img: '',
    //     title: 'Pads'
    // },
    {
        img: 'images/NCR books.jpeg',
        title: 'NCR Books'
    },
    {
        img: 'images/Scan.jpeg',
        title: 'Rubber stamps'
    },
    // {
    //     img: '',
    //     title: 'Posters'
    // },
    {
        img: 'images/Book Binding.jpeg',
        title: 'Book binding'
    },
    {
        img: 'images/envelope.jpg',
        title: 'Envelope printing'
    },
    // {
    //     img: '',
    //     title: 'Scan/email'
    // },
    {
        img: 'images/stickers.jpg',
        title: 'Stickers'
    },
    // {
    //     img: '',
    //     title: 'Signage' 
    // },
    // {
    //     img: '',
    //     title: 'Tickets'
    // },
    // {
    //     img: '',
    //     title: 'T-shirt printing(only on white and must be 100% polyester)'
    // },
    {
        img: 'images/vinyl.jpg',
        title: 'Vinyl'
    },
    // {
    //     img: '',
    //     title: 'Correx boards'
    // },
    {
        img: 'images/A frames.jpeg',
        title: 'A frames'
    }
];

document.getElementById('content');

services.map((x)=> {
    let {img, title} = x;

    content.innerHTML += `
        <div>
            ${img ? `<img src="${img}" alt="${title}" width="150"/>` : ''}
            <h3>${title}</h3>
        </div>
    `;
});

document.getElementById('about-btn').addEventListener('click', ()=> {
    document.getElementById('about').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('contact-btn').addEventListener('click', ()=> {
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
});