import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import MovieDetail from '../components/MovieDetail';

function Detail() {
    const { id } = useParams(); // app.jsx :id부분

    const [loading, setLoading] = useState(true)

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false)
        console.log(json)
    };
    useEffect(() => {
        getMovie();
    }, []);

    
    return (
        <div>
            <h1>Detail</h1>
            {loading ? <h2>loading...</h2> :
                <div>
                    <MovieDetail/>
                </div>}
        </div>
    )
}

export default Detail;