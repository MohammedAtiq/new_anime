import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { MdBookmarkAdd } from "react-icons/md";

const SingleCart = ({ animeData }) => {
    const { addToWatchList } = useContext(GlobalContext)

    return (
        <>
            {
                animeData ? (
                    animeData.map((anime, index) => {
                        console.log(anime);
                        return (
                            <div className="col-md-4" >
                                <div className="card" style={{  margin: 'auto', height: '650px' }} key={index} >
                                    <img src={anime.images.jpg.large_image_url} className="card-img-top" alt="img" />
                                    <div className="card-body">
                                        <p className="card-title">{anime.title}</p>
                                        <div className="cardbtnn">
                                            {/* <button className="btn btn-success"
                                                onClick={() => addToWatchList(anime)}>ADD lIST</button> */}
                                                <i onClick={() => addToWatchList(anime)}><MdBookmarkAdd className='wishlist-btn'/> </i>

                                            <button type="button" class="btn btn-primary "  data-bs-toggle="modal" data-bs-target={`#modal_${index}`}>
                                            More details
                                            </button>
                                        </div>
                                        <div class="modal fade" id={`modal_${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                                                <div class="modal-content bg-dark text-white">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="staticBackdropLabel">{anime.title}</h5>
                                                        <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <img src={anime.images.jpg.large_image_url} alt="img" />
                                                        <p>{anime.synopsis}</p>
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
                ) : 'not found'
            }
        </>
    )
}

export default SingleCart

