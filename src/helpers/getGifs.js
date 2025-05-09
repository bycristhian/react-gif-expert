
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=AiFVm6yLTWQN3U6gZZdBOXMZmzWTvB1D&q=${ category }&limit=5`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));
    return gifs;

}