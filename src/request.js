const Api_key="3f6dc8986c1c5a0a75bc5285dae5cf9a"

const requests={
    fetchTranding:'/trending/all/day?api_key=3f6dc8986c1c5a0a75bc5285dae5cf9a&language=en-US',
    fetchNtflixOrgnal:'/discover/tv?api_key=3f6dc8986c1c5a0a75bc5285dae5cf9a&with_networks=213',
    fetchTopRateMovies:"/movie/top_rated?api_key=3f6dc8986c1c5a0a75bc5285dae5cf9a&language=en-us",
    fetchActionMovie:"/discover/movie?api_key=3f6dc8986c1c5a0a75bc5285dae5cf9a&with_genres=28",
    fetchComedyMovie:"/discover/movie?api_key=3f6dc8986c1c5a0a75bc5285dae5cf9a&with_genres=35",
    fetchHorrorMovie:"/discover/movie?api_key=3f6dc8986c1c5a0a75bc5285dae5cf9a&with_genres=27",
    fetchRomanceMovie:"/discover/movie?api_key=3f6dc8986c1c5a0a75bc5285dae5cf9a&with_genres=10749",
    fetchDocumentaryMovie:"/discover/movie?api_key=3f6dc8986c1c5a0a75bc5285dae5cf9a&with_genres=99"

}

export default requests;