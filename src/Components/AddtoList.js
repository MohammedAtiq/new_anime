import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { CgMoreR } from "react-icons/cg";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";



const AddtoList = () => {
    const { watchList, removeWatchList } = useContext(GlobalContext);
    return (
        <div className="col-md-10 col3">
            <div className="col-md-3 mt-3 mx-auto search">
                <h3 className="watchlist">My Watchlist</h3>
            </div>
            {watchList.length > 0 ? (
                <div className="row mt-3 gy-5">
                    {
                        watchList.map((anime, index) => {
                            return (
                                <div className="col-md-4" key={index} >
                                    <div className="card" >
                                        <img src={anime.images.jpg.large_image_url} className="img-fluid" alt="img" style={{ width: '100%', height: '300px' }} data-bs-toggle="modal" data-bs-target={`#modal_${index}`} />
                                        <div className="card-body">
                                            <div className="cardbtnn">


                                                <i onClick={() => removeWatchList(anime.mal_id)}><RiDeleteBin5Line className='wishlist-btn' /> </i>


                                                <i className='wishlist-btn me-2 ' data-bs-toggle="modal" data-bs-target={`#modal_${index}`}><CgMoreR /></i>

                                            </div>
                                            <div className="modal fade" id={`modal_${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable " >
                                                    <div className="modal-content bg-dark text-white">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="staticBackdropLabel">{anime.title}</h5>
                                                            
                                                            <i data-bs-dismiss="modal" aria-label="Close"><GiCancel/></i> 
                                                        </div>
                                                        <div className="modal-body">
                                                            <img src={anime.images.jpg.large_image_url} alt="img" style={{ width: '100%', height: '300px' }} />
                                                            <div className="mt-3">
                                                                <p style={{ fontSize: '13px' }}>  <span>About</span> : {anime.background}</p>
                                                                <p style={{ fontSize: '13px' }}>  <span>broadcast</span> : day:  {anime.broadcast.day}
                                                                    <br />
                                                                    string
                                                                    :  {anime.broadcast.string}
                                                                    <br />
                                                                    timezone
                                                                    :  {anime.broadcast.timezone
                                                                    }</p>

                                                                <p style={{ fontSize: '13px' }}>  <span>Rating</span> :  <i style={{ color: 'gold' }}><AiFillStar /></i> {anime.score}</p>

                                                                <p style={{ fontSize: '13px' }}>  <span>duration</span> : {anime.duration}</p>
                                                                <p style={{ fontSize: '13px' }}>  <span>episodes</span> : {anime.episodes}</p>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            ) : (<h2>No list in cart</h2>)}
        </div>
    )
}

export default AddtoList