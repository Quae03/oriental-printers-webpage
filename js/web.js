const tiers = [
    {
        id: 1,
        title: '1-5 Page Website',
        desc: `Create a personal webpage or 
        advertise your brand`,
        feats: `Contact form for client engagement 
        directly to your email address`,
        price: 800,
        video: 'webpage-demo2.mp4'
    },
    {
        id: 2,
        title: '5+ Page Website',
        desc: `Create a personal webpage,
        advertise your brand and expand your business to a wider audience`,
        feats: `Contact form for client engagement 
        directly to your email address`,
        price: 1300,
        video: 'webpage-demo.mp4'
    },
];

tiers.forEach((x)=> {
    let {id, title, desc, feats, price, video} = x;

    document.getElementById('tier-section').innerHTML += `
        <div class="tier">
            <h3 class="tier-name">${title}</h3>
            <div class="web-preview">
                <video muted autoplay loop src="${video}"></video>
            </div>
            <p class="desc">
                ${desc}
            </p>
            <p class="feats">
                ${feats}
            </p>
            <p class="price">R${price}</p>
        </div>
        `;
});

document.querySelectorAll('video').forEach((x) => {
    x.play()
});