// Allow for smooth transitions on page load

const navigateTo = (url)=>{
    document.body.classList.add('fade-out');
    setTimeout(()=>{
        window.location.href = url;
    }, 300); // match transition duration
}

// Buttons for redirecting to contact form & homepage 

document.getElementById('emailFormBtn').addEventListener('click', ()=> {
    navigateTo('contact-form.html');
});

document.getElementById('emailFormBtn2').addEventListener('click', ()=> {
    navigateTo('contact-form.html');
});

// Fade in when page loads
window.addEventListener('DOMContentLoaded', ()=>{
    document.body.classList.add('fade-in');
});

document.getElementById('about-btn').addEventListener('click', ()=> {
    document.getElementById('about').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('contact-btn').addEventListener('click', ()=> {
    document.getElementById('contact-list').scrollIntoView({behavior: 'smooth'});
});

// Assign services as objects in an array for DOM insertion

const services = [
    {
        img: 'images/graphic design.jpeg',
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
        title: 'Pads'
    },
    {
        img: 'images/Calendars.jpeg',
        title: 'Calendars'
    },
    {
        img: 'images/Flyers.jpeg',
        title: 'Flyers'
    },
    {
        img: 'images/printing_on_cups.jpeg',
        title: 'Printing on mugs'
    },
    {
        img: 'images/funeral.jpg',
        title: 'Funeral printing'
    },
    {
        img: 'images/Lamination.jpeg',
        title: 'Laminating'
    },
    {
        img: 'images/NCR books.jpeg',
        title: 'NCR Books'
    },
    {
        img: 'images/Scan.jpeg',
        title: 'Rubber stamps'
    },
    {
        img: 'images/Book Binding.jpeg',
        title: 'Book binding'
    },
    {
        img: 'images/envelope.jpeg',
        title: 'Envelope printing'
    },
    {
        img: 'images/stickers.jpeg',
        title: 'Stickers'
    },
    {
        img: 'images/vinyl.jpeg',
        title: 'Vinyls'
    },
    {
        img: 'images/A frames.jpeg',
        title: 'A frames'
    },
    {
        img: 'images/t_shirt_printing.jpeg',
        title: 'T-Shirt printing',
        desc: '(only on white and must be 100% polyester material)'
    },
    {
        img: 'images/posters.jpeg',
        title: 'Posters'
    }
];

// Generate Service content into the DOM
let id = 1;

services.forEach((x)=> {
    let {img, title, desc} = x;

    document.getElementById('content').innerHTML += `
        <div>
            <div id='serviceDiv${id}' class='hidden'>
                ${img ? `<img id='service${id}' src="${img}" alt="${title}" width="150"/>` : ''}
            </div>
            <h3>${title}</h3>
            ${desc ? `<p>${desc}</p>` : ''}
        </div>
        `;
    id += 1;
});

// Apply lazy loading to images below the fold
document.addEventListener('DOMContentLoaded', ()=>{
    const images = document.querySelectorAll('img:not([loaded])');
    images.forEach(img=>{
        img.setAttribute('loading', 'lazy');
    });
});

// Observer code for content to fade in as we scroll into view

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element)=> observer.observe(element));

const topBtn = document.getElementById('topBtn');

topBtn.addEventListener('click', ()=>{
    document.getElementById('header').scrollIntoView({behavior: 'smooth'});
});

// Show scroll to top button at the bottom of the page
window.onscroll = ()=>{
    const scrollY = window.scrollY || 
    document.documentElement.scrollTop;
    const triggerHeight = window.innerHeight * 10; // show after 2 fullscreens

    if (scrollY > triggerHeight) {
        topBtn.classList.remove('hide-btn');
    } else {
        topBtn.classList.add('hide-btn');
    }
};


