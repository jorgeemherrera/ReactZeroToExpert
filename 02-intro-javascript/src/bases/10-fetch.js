const apiKey = '95cQYD6egVSP3phbirwnH6E68Oqmv0Nk';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then(resp => {
//   resp.json().then(data =>{
//     console.log(data)
//   });
// })
// .catch(console.error);

// Encadenar promesas
peticion
  .then( resp => resp.json() )
  .then( ({data}) => {
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img)
  })
  .catch(console.error)
