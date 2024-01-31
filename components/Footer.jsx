import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__addr">
                <h1 className="footer__logo">Something</h1>

                <p>&nbsp&nbsp Yammy Burger is not just a place to order food; it's a culinary journey where flavors come to
                    life.
                    Join us in savoring the extraordinary, one burger, drink, and chicken fry at a time. Place your
                    order today and embark on a gastronomic adventure with Yammy Burger!
                </p>

            </div>

            <ul className="footer__nav">
                <li className="nav__item">
                    <h2 className="nav__title">Latest Items</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="/food-gallery.html">Cheeseburgers</a>
                        </li>

                        <li>
                            <a href="/food-gallery.html">Ingredients</a>
                        </li>
                        <li>
                            <a href="/about.html">About us</a>
                        </li>
                    </ul>
                </li>


                <li className="nav__item">
                    <h2 className="nav__title">Useful Link</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="/about.html">About us</a>
                        </li>
                    </ul>
                </li>
                <li className="nav__item">
                    <h2 className="nav__title">Openning Hours</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="#">Monday : 08.00-5.00</a>
                        </li>

                        <li>
                            <a href="#">Saturday : 08.00-5.00</a>
                        </li>
                    </ul>
                </li>
            </ul>


        </footer >
    )
}

export default Footer