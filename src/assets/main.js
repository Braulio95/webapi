const API = 'https://instagram-scraper-2022.p.rapidapi.com/ig/reels_posts/?id_user=55652833808'

const content =null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '67e607ee61msh6e78173358cf1d7p1ece02jsn648bfb41964b',
		'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
	}
};

async function fetchData(urlAPI){
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}

(async() =>{
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img crossorigin="anonymous" src="${video.media.image_versions2.candidates[0].url}" alt="" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                </h3>
                </div>
            </div>
        `).slice(0,4).join('')}
        `;
    

    content.innerHTML = view;
    }catch(error){
    console.log(error);
    }

})();

/*fetch('', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/