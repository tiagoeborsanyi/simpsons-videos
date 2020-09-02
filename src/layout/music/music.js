import React from 'react'

const Music = () => (
    <div className='musica'>
            <div className='music__col-1'>
                <span className="material-icons">music_note</span>
            </div>
            <div className='music__col-2'>
                <div className='musica__list'>
                    <div className='player'>
                        <div className='player__first'>
                            <img src={require('../../assets/images/music-with-you.jpg')} alt='ciggaro' className='player__image' />
                            <div className='player__title'>
                                <h2>I'm with you</h2>
                                <p>Red Hot chili Peppers</p>
                            </div>
                        </div>
                        <div className='player__second'>
                            <p>0:59</p>
                            <div className='player__second--line'>
                                <div className='player__second--line_one'></div>
                                <div className='player__second--line_second'></div>
                            </div>
                            <p>3:51</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='music__col-3'>
                <div className='musica__list'>
                    <ul className='musica__list--items'>
                        <li className='musica__list--item'>
                            <div className='musica__list--item_img first'>
                                <span className="material-icons">play_arrow</span>
                            </div>
                            <div className='musica__list--item_text'>
                                <p>I'm with...</p>
                            </div>
                        </li>
                        <li className='musica__list--item'>
                            <div className='musica__list--item_img second'>
                                <span className="material-icons">play_arrow</span>
                            </div>
                            <div className='musica__list--item_text'>
                                <p>Butter</p>
                            </div>
                        </li>
                        <li className='musica__list--item'>
                            <div className='musica__list--item_img third'>
                                <span className="material-icons">play_arrow</span>
                            </div>
                            <div className='musica__list--item_text'>
                                <p>Back To...</p>
                            </div>
                        </li>
                        <li className='musica__list--item'>
                            <div className='musica__list--item_img four'>
                                <span className="material-icons">play_arrow</span>
                            </div>
                            <div className='musica__list--item_text'>
                                <p>Unwirte</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
)

export default Music