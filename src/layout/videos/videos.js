import React from 'react'

const Videos = () => {
    return (
        <div className='videos'>
            <div className='col-1'>
                <span className="material-icons">desktop_windows</span>
            </div>
            <div className='col-2'>
                <div className='videos__menu'>
                    <ul className='videos__menu--items'>
                        <li className='videos__menu--item active'>
                            <span>FOX</span>
                        </li>
                        <li className='videos__menu--item'>
                            <span>abc</span>
                        </li>
                        <li className='videos__menu--item'>
                            <span>National Geiographic</span>
                        </li>
                        <li className='videos__menu--item'>
                            <span>CNN</span>
                        </li>
                        <li className='videos__menu--item'>
                            <span>Nickelodeon</span>
                        </li>
                    </ul>
                </div>
                <div className='videos__list'>
                    <ul className='videos__list--items'>
                        <li className='videos__list--item'>
                            <div className='videos__list--item_img first'>
                                <span className="material-icons">play_arrow</span>
                            </div>
                            <div className='videos__list--item_text'>
                                <p>6:00 AM - 12:00 PM</p>
                                <p>Local Programming</p>
                            </div>
                        </li>
                        <li className='videos__list--item'>
                            <div className='videos__list--item_img second'>
                                <span className="material-icons">play_arrow</span>
                            </div>
                            <div className='videos__list--item_text'>
                                <p>12:00 PM - 13:00 PM</p>
                                <p>Family Guy</p>
                            </div>
                        </li>
                        <li className='videos__list--item'>
                            <div className='videos__list--item_img third'>
                                <span className="material-icons">play_arrow</span>
                            </div>
                            <div className='videos__list--item_text'>
                                <p>13:00 PM - 15:00 PM</p>
                                <p>The Simpsons</p>
                            </div>
                        </li>
                        <li className='videos__list--item'>
                            <div className='videos__list--item_img four'>
                                <span className="material-icons">play_arrow</span>
                            </div>
                            <div className='videos__list--item_text'>
                                <p>15:00 PM - 17:00 PM</p>
                                <p>Futurama</p>
                            </div>
                        </li>
                        <li className='videos__list--item'>
                            <div className='videos__list--item_img five'>
                                <span className="material-icons">play_arrow</span>
                            </div>
                            <div className='videos__list--item_text'>
                                <p>17:00 PM - 12:00 PM</p>
                                <p>American</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Videos