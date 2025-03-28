export enum SearchType {
    all ='',
    movie = 'movie',
    series =' series',
    episode = 'episode',
}

export interface SearchResult {
    Title: string
    Year: string
    Poster: string
    imdbID: string
    Type: string;
}

export interface SearchError {
    Response: string
    Error: string
}

export interface DetailsResult {
    Genre: string
    Title: string
    Year: string
    Poster: string
    Plot:string
    imdbRating: string
    Director: string
    Actors: string
    Website: string
    Awards: string
}

export const useApi = () => { 
    let url = 'http://www.omdbapi.com/'
    let apiKey= '15da915c'

    const searchData = async(
        title: string, 
        type: SearchType
    ): Promise<SearchResult[] | SearchError> => {
        const result = await fetch(
            `${url}?s=${encodeURI(title)}&type=${type}&apikey=${apiKey}`,
        )
        return result.json()
    }

    const getDetails = async (id: string): Promise<DetailsResult> => {
        const result = await fetch(`${url}?i=${id}&plot=full&apikey=${apiKey}`)
        return result.json()
    }
    return {
        searchData,
        getDetails,
    }
}

export default useApi