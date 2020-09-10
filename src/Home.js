import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container" >
                
                {/* banner */}
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="home__row">
                    {/* render product component 2 */}
                    <Product 
                        id={1}
                        title='The Lean Startup' 
                        price={29.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                        rating={3}
                    />
                    <Product 
                        id={2}
                        title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer'
                        price={239.4}
                        rating={4}
                        image="data:image/webp;base64,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"
                    />
                </div>

                <div className="home__row">
                    {/* render product component 3 */}
                    <Product 
                        id={3}
                        title='Grokking Deep Learning'
                        price={34.45}
                        rating={5}
                        image='https://m.media-amazon.com/images/I/61erwLHUDtL._AC_UX500_SY400_.jpg'
                    />
                    <Product 
                        id={4}
                        title='AmazonBasics High-Speed HDMI Cable, 6 Feet'
                        price={5}
                        rating={3}
                        image='https://m.media-amazon.com/images/I/41bCxnHksnL._AC_UX500_SY400_.jpg'
                    />
                    <Product 
                        id={5}
                        title='Callas Metal Mesh Desk Organizer, Black LD 708-05'
                        price={7}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51mytH7t-cL._AC_UX500_SY400_.jpg'
                    />
                </div>

                <div className="home__row">
                    {/* render product component 1 */}
                    <Product 
                        id={6}
                        title='Bean Bag White Fur XXXL Size Without Beans Very Attractive'
                        price={20}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/517JipWd3wL._AC_UX500_SY400_.jpg'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
