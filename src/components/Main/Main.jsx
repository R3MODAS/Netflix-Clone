import React from 'react'
import "./Main.scss"
import { AiOutlineRight } from "react-icons/ai"
// import Footer from '../Footer/Footer'

const Main = () => {
     return (
          <div>
               <main className='main-section'>
                    <div className="img-section">
                         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/f1ac72e1-5adc-4caf-bceb-e8ec775414ac/IN-en-20230213-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bgimg" />
                         <div className="img-gradient"></div>
                    </div>
                    <div className="text-section">
                         <h1>Unlimited movies, TV shows and more.</h1>
                         <span>Watch anywhere. Cancel anytime.</span>
                         <div>Ready to watch? Enter your email to create or restart your membership.</div>
                         <form className="form">
                              <input type="email" placeholder='Email Address' />
                              <button>Get Started <AiOutlineRight /> </button>
                         </form>
                    </div>
               </main>

               <section className="promo__section">
                    <div className="text__content">
                         <h2>Enjoy on your TV.</h2>
                         <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div className="img_video__content">
                         <div className="img-overlay">
                              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="img" />
                         </div>
                         <div className="video-overlay">
                              <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" muted autoPlay loop playsInline></video>
                         </div>
                    </div>
               </section>

               <section className="promo__section2">
                    <div className="img__content">
                         <div className="img-overlay">
                              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="img" />
                              <div className="img-card">
                                   <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="img" />
                                   <div className="img-card-text">
                                        <div>Stranger Things</div>
                                        <span>Downloading...</span>
                                   </div>
                                   <div className="download-animation"></div>
                              </div>
                         </div>
                    </div>

                    <div className="text__content">
                         <h2>Download your shows to watch offline.</h2>
                         <p>Save your favourites easily and always have something to watch.</p>
                    </div>

               </section>

               <section className="promo__section3">
                    <div className="text__content">
                         <h2>Watch everywhere.</h2>
                         <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className="img_video__content">
                         <div className="img-overlay">
                              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="img" />
                         </div>
                         <div className="video-overlay">
                              <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" muted autoPlay loop playsInline></video>
                         </div>
                    </div>
               </section>

               <section className="promo__section4">
                    <div className="img__content">
                         <img src="https://occ-0-2232-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420" alt="img" />
                    </div>
                    <div className="text__content">
                         <h2>Create profiles for children.</h2>
                         <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                    </div>
               </section>

               {/* <section className='faq'>

               </section> */}

               {/* <Footer/> */}

          </div>
     )
}

export default Main