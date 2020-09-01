import React from 'react'

const Header = () => (
    <div className='header'>
        <div className='header__col'>
            <ul className='header__items'>
                <li className='header__item header__item--first'>
                    <span className="material-icons">wb_sunny</span>
                    <h2>25ºC</h2>
                </li>
                <li className='header__item'>
                    <span className="material-icons">wb_sunny</span>
                    <h2>TUE</h2>
                    <h2>25ºC</h2>
                </li>
                <li className='header__item'>
                    <span className="material-icons">grain</span>
                    <h2>WED</h2>
                    <h2>13ºC</h2>
                </li>
                <li className='header__item'>
                    <span className="material-icons">wb_sunny</span>
                    <h2>THU</h2>
                    <h2>22ºC</h2>
                </li>
            </ul>
        </div>
        <div className='header__col'>
            <ul className='header__items'>
                <li className='header__item header__item--day'>
                    <p>Monday</p>
                    <p>09 November</p>
                </li>
                <li className='header__item header__item--hour'>
                    <h2>11:32</h2>
                    <p>AM</p>
                </li>
            </ul>
        </div>
    </div>
)

export default Header