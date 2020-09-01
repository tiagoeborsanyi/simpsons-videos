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
                            <img src={require('../../assets/images/video-local-programming.jpg')} alt='video' />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Videos