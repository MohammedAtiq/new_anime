import React, { useEffect, useState } from 'react'
import SingleCart from './SingleCart'


const MainCart = () => {

    const [search, setSearch] = useState('')
    const [animeData, setAnimeData] = useState()


    const getData = async () => {
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=21`)
        const resData = await res.json();
        setAnimeData(resData.data)
    }

    useEffect(() => {
        getData()
    }, [search]) // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="col-md-10 col2">
            <div className="col-md-3 mt-3 mx-auto search">
                <input type="search" placeholder='Search Anime' onChange={(e) => setSearch(e.target.value)} />

            </div>
            <div className="row mt-3 gy-5">
                <SingleCart animeData={animeData} />
            </div>
        </div>
    )
}

export default MainCart