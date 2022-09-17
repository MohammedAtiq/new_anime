import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'



const AddtoList = () => {
    const { watchList, removeWatchList } = useContext(GlobalContext);
    console.log("watch list", watchList);
    return (
        <div className="col-md-10 col3">
            <div className="col-md-3 mt-3 mx-auto search">
                <h3 className="text-white" style={{width:'200px'}}>MY watchLIst</h3>
            </div>
            {watchList.length > 0 ? (
                <div className="row mt-3 gy-5">
                    {
                        watchList.map((anime, index) => {
                            return (
                                <div className="col-md-4" >
                                    <div className="card" style={{ width: "14rem", margin: 'auto', height: '450px' }} key={index} >
                                        <img src={anime.images.jpg.large_image_url} className="card-img-top" alt="img" />
                                        <div className="card-body">
                                            <p className="card-title" style={{ fontSize: "15px" }}>{anime.title}</p>
                                            <div className="cardbtnn">
                                                <div className='d-flex'>
                                                <button className="btn btn-success"
                                                    onClick={() => removeWatchList(anime.mal_id)}
                                                >delete list</button>

                                                <button type="button" class="btn btn-primary me-5" data-bs-toggle="modal" data-bs-target={`#modal_${index}`}>
                                                    modal
                                                </button>
                                                    </div>
                                            </div>
                                            <div class="modal fade" id={`modal_${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                                                    <div class="modal-content bg-dark text-white">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="staticBackdropLabel">{anime.title}</h5>
                                                            <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <img src={anime.images.jpg.large_image_url} alt="" />
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-primary">Understood</button>
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