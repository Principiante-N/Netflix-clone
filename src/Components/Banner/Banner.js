import React, { useEffect, useState } from 'react'
import '../Banner/Banner.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import Youtube from 'react-youtube'

function Banner() {

    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {

            setMovie(response.data.results[5])
        })

    }, [])


    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };


    const handleMovie = (id) => {
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length !== 5) {
                setMovie(response.data.results[5])
            } else {
                console.log('empty')
            }
        })
    }
    return (
        <div>
            <div className="banner" style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}>
                <div className="content">
                    <h1 className="title">{movie ? movie.title : ""}</h1>
                    <h4>
                        <span>{movie ? movie.release_date : ""}</span>
                        <span><i>12+</i></span>
                        <span>{movie ? movie.vote_average : ""}</span>
                        <span>{movie ? movie.original_language : ""}</span>
                    </h4>
                    <p>{movie ? movie.overview : ""}</p>
                    <div className="banner-buttons">
                        <button onClick={() => handleMovie(movie.id)} className="button"><i className="fa fa-play"></i> Play</button>
                        <button className="button"><i className="fa fa-plus"></i> My List</button>

                    </div>

                </div>

            </div>
            <div>
                {movie && <Youtube opts={opts} videoId={movie.key} />}
            </div>

        </div>
    )
}

export default Banner
