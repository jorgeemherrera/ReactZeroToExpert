const getImage = async() => {
  try {
    const apiKey = '95cQYD6egVSP3phbirwnH6E68Oqmv0Nk';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
  
    document.body.append(img)
  } catch(error){
    // manejo del error
  }
}

getImage();