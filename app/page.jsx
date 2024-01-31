import Layout from '@/components/Layout'
import React from 'react'
import Image from 'next/image'
const Main = () => {

  return (
    <Layout>
          <>
        <div className="banner">
          <section className="banner__name">
            <h1>Wellcome to Yammy</h1>
            <a href="#section1" className="long-arrow"></a>
          </section>

        </div>
        <section className="banner__name1" id="section1">
          <h2>Yammy Speciality Fresh Burger</h2>
          <br></br>
          <div className="cards">
            <div className="card">
              <img src="images/buffalo-burgers.jpg" alt="Denim Jeans" />
              <h3>Buffalo Burgers</h3>
              <p>Buffalo burgers offer a leaner alternative to traditional beef, boasting a slightly sweeter and
                richer flavor profile.</p>
              <br></br>
              <div className="price__order">
                <p className="price">$20</p>

                <p><a href="/order-online.html"><button>ORDER ONLINE</button></a></p>
              </div>
            </div>
            <div className="card">
              <img src="images/knuckle-burger.jpg" alt="Denim Jeans" />
              <h3>Knuckle Burger</h3>
              <p>Knuckle burgers are a hearty delight, renowned for their generous portion of succulent, tender meat
                packed between perfectly toasted buns.</p>
              <br></br>
              <div className="price__order">
                <p className="price">$15</p>

                <p><a href="/order-online.html"><button>ORDER ONLINE</button></a></p>
              </div>
            </div>
            <div className="card">
              <img src="images/bean-burger.jpg" alt="Denim Jeans" />
              <h3>Bean Burger</h3>
              <p>

                A bean burger is a delicious and nutritious vegetarian option made from a mix of beans, vegetables,
                and spices.</p>
              <br></br>
              <div className="price__order">
                <p className="price">$20</p>

                <p><a href="/order-online.html"><button>ORDER ONLINE</button></a></p>
              </div>
            </div>
          </div>
          <br></br>
        </section>
        <section className="banner__name2">
          <br></br>
          <div id="burger-container" className="burger-container">
            <h2>Most Popular <br></br>Burger Items</h2>
            <br></br>
            {/* <label onlick="filterSelection('all')" className="one active" for="all">All</label>
            <label onclick="filterSelection('french')" className="one " for="french">French</label>
            <label onclick="filterSelection('american')" className="one " for="american">American</label>
            <label onclick="filterSelection('italian')" className="one" for="italian">Italian</label>
            <label onclick="filterSelection('bangla')" className="one" for="bangla">Bangla</label>
            <label onclick="filterSelection('chinese')" className="one " for="chinese">Chinese</label> */}
            <br></br>
            <ul className="list">
              <li className="list-item french">
                <div className="list-item-content">
                  <img className="avatar" src="images/bean-burger.jpg" alt="Customer Image" />
                  <div className="item-details">

                    <span className="">Buffalo Burgers</span>
                    <span className="secondary-text">$20</span>
                  </div>
                </div>
                <hr></hr>
              </li>
              <li className="list-item american">

                <div className="list-item-content">
                  <img className="avatar" src="images/bean-burger.jpg" alt="Customer Image" />
                  <div className="item-details">
                    <span className="primary">Knuckle Burger</span>
                    <span className="secondary-text">$20</span>
                  </div>
                </div>
                <hr></hr>
              </li>
              <li className="list-item italian">
                <div className="list-item-content">
                  <img className="avatar" src="images/bean-burger.jpg" alt="Customer Image" />
                  <div className="item-details">
                    <span className="primary">Bean Burger</span>
                    <span className="secondary-text">$20</span>
                  </div>
                </div>
                <hr></hr>
              </li>
              <li className="list-item bangla">
                <div className="list-item-content">
                  <img className="avatar" src="images/bean-burger.jpg" alt="Customer Image" />
                  <div className="item-details">

                    <span className="primary">Bistro Burger</span>
                    <span className="secondary-text">$20</span>
                  </div>
                </div>
                <hr></hr>
              </li>
              <li className="list-item chinese">
                <div className="list-item-content">
                  <img className="avatar" src="images/bean-burger.jpg" alt="Customer Image" />
                  <div className="item-details">
                    <span className="primary">Buzz Burgers</span>
                    <span className="secondary-text">$20</span>
                  </div>
                </div>
                <hr></hr>
              </li>
              <li className="list-item bangla">
                <div className="list-item-content">
                  <img className="avatar" src="images/bean-burger.jpg" alt="Customer Image" />
                  <div className="item-details">
                    <span className="primary">Smockin' Burgers</span>
                    <span className="secondary-text">$20</span>
                  </div>
                </div>
                <hr></hr>
              </li>
              <li className="list-item american">
                <div className="list-item-content">
                  <img className="avatar" src="images/bean-burger.jpg" alt="Customer Image" />
                  <div className="item-details">
                    <span className="primary">Cheeseburger</span>
                    <span className="secondary-text"> $20</span>
                  </div>
                </div>
                <hr></hr>
              </li>

            </ul>
          </div>

          <div className="gall">
            <h2>Our Signature Burger Is<br></br>The Star of The Show</h2>
            <br></br>
            <div className="gallery">
              <div className="image-container">
                <img src="images/4cf6fad20d9d4fd6a2aba4f22a20c6a5.webp" alt="Image 1" />
              </div>
              <div className="image-container">
                <img src="images/6cb60c2942454b3b8653148251ee6e39.webp" alt="Image 2" />
              </div>
              <div className="image-container">
                <img src="images/99a50215b5464774abba88c67b438900.webp" alt="Image 3" />
              </div>
              <div className="image-container">
                <img src="images/971cf2778e564064b27b8fc6344c258d.webp" alt="Image 4" />
              </div>
              <div className="image-container">
                <img src="images/85427a6bf6444316a718b38c1db61acd.webp" alt="Image 5" />
              </div>
              <div className="image-container">
                <img src="images/ac8880dfabea4818a066fb5c19d0ebb5.webp" alt="Image 6" />
              </div>
              <div className="image-container">
                <img src="images/nr50gYq7TqqnLlSaohec2Q.webp" alt="Image 7" />
              </div>
              <div className="image-container">
                <img src="images/qBPogzW8Rn63Auyb9HM28A.webp" alt="Image 8" />
              </div>
            </div>
            <br></br>
          </div>
        </section>
        <br></br>
        <section className="banner__name3">
          <div className="delivery">
            <h2>Food delivering <br></br> amazing experience</h2>
            <p className="secondary-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br> Amet numquam
              aspernatur!
              </p>
                <br></br>
                <p>
                  <a href="/order-online.html"><button>ORDER ONLINE</button></a>
                  </p>
              </div>
              <div className="home"><i className="fa fa-home"></i></div>
            </section>
            <br></br>
            <section className="banner__name4">

              <h2>Our News & Events</h2>
              <br></br>
              <section className="main_content">
                <div className="row">
                  <div className="blocks">
                    <a className="cart col-xs-12 col-md-6 col-lg-4"><img className="rest_img" src="images/knuckle-burger.jpg"
                      title="knuckle-burger" />
                      <figcaption>
                        <ul>
                          <li className="mid_str">
                            <pre><i className="fa fa-calendar" ></i>November 29, 2024<br></br><i className="fa fa-user"></i>by - Ericka Metz</pre>
                          </li>
                          <li className="top_str">Burger Ingredients Better Flavor</li>

                        </ul>
                      </figcaption>
                    </a>
                    <a className="cart col-xs-12 col-md-6 col-lg-4"><img className="rest_img" src="images/chicken.webp"
                      title="chicken" />
                      <figcaption>
                        <ul>
                          <li className="mid_str">
                            <pre><i className="fa fa-calendar" ></i>November 29, 2024<br></br><i className="fa fa-user"></i>by - Ericka Metz</pre>
                          </li>
                          <li className="top_str">Crispy wings tossed tantalising in <br></br>buttery goodness</li>

                        </ul>
                      </figcaption>
                    </a>
                    <a className="cart col-xs-12 col-md-6 col-lg-4"><img className="rest_img" src="images/wings.webp"
                      title="wings" />
                      <figcaption>
                        <ul>
                          <li className="mid_str">
                            <pre><i className="fa fa-calendar" ></i>November 29, 2024<br></br><i className="fa fa-user"></i>by - Ericka Metz</pre>
                          </li>
                          <li className="top_str">Crispy Chicken </li>

                        </ul>
                      </figcaption>
                    </a>
                  </div>
                </div>
              </section>
            </section>
          </>
        </Layout>

        )
}

        export default Main;