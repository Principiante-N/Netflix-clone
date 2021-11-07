import React , { useEffect,useState}from 'react'
import "../Row/Row.css"
import axios from '../../axios'
import {imageUrl , API_KEY} from '../../constants/constants'
import Youtube from 'react-youtube'

function Row(props) {
    const [mov, setMov] = useState([])
    const [urlId,setUrlId] = useState('')

    useEffect(() => {
       axios.get(props.url).then(response=>{
            setMov(response.data.results)
            
       })
    }, [])

    const opts ={
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:1,
        },
    };

    const handleMovie = (id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }else{
                console.log('empty')
            }
        })
    }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="movies">

                {mov.map((obj) => 
                        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallMovie" : "movie"} src={`${imageUrl + obj.backdrop_path}`} alt="movie" />
                        

                    )}

            </div>
           { urlId && <Youtube opts={opts} videoId={urlId.key} />}

            
        </div>
    )
}

export default Row
