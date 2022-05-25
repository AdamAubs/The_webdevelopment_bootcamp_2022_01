// const btn = document.querySelector('#btn');
// 
// const addNewJoke = async () => {
//     const jokeText = await getDadJoke()
//     const newLI = document.createElement('li');
//     newLI.append(jokeText);
//     jokes.append(newLI)
// }
// 
// const jokes = document.querySelector('#jokes')
// 
// const getDadJoke = async () => {
//     const config = { headers: { Accept:'application/json'} }
//     const res = await axios.get("https://icanhazdadjoke.com/", config)
//     return res.data.joke
// }
// 
// btn.addEventListener('click', addNewJoke)

const form = document.querySelector('#searchForm')
const btn = document.querySelector('#btn')

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchType = form.elements.query.value
    const config = { params: { q: searchType } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for(let result of shows ){
        if(result.show.image){
            let img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}
