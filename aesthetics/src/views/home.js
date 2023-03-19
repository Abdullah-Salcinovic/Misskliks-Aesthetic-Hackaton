import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import IconContainer from '../components/icon-container'
import './home.css'
import HomeIcon from '../logoFinalNoBo.png'
import Calculator from './CalculatePrice'
import { useHistory, BrowserRouter } from 'react-router-dom';

const Home = (props) => {

  const history = useHistory();

  const handleClick = () => {
    history.push('/CalculatePrice');
  };
  return (
    <div className="home-container">
      <Helmet>
        <title>Aesthetic</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <section className="home-hero">
        <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
        <header data-thq="thq-navbar" className="home-navbar">
          
              <img alt="image" src={HomeIcon} className="home-icon" />
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container1">
                <img
                  alt="image"
                  src="/playground_assets/logo.svg"
                  className="home-image"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon01">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <span className="home-text">About</span>
                <span className="home-text01">Features</span>
                <span className="home-text02">Pricing</span>
                <span className="home-text03">Team</span>
                <span className="home-text04">Blog</span>
              </nav>
              <div className="home-container2">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon03">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon05">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon07">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-hero-content">
          <div className="home-header-container">
            <div className="home-header">
              <h1 className="home-heading">
                <span>
                  Face-to-face with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text06">Cheap</span> Automation <span className="home-text06"><span/>Solutions</span>
                <br></br>
              </h1>
            </div>
            <p className="home-caption">
              Nudimo vam najbolje i najkvalitetnije usluge u oblasti automatizacije i jeftinijeg načina života
            </p>
          </div>
          <button className="button home-button">
            <span>
              <span>Naša ponuda pametnih uređaja</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-note">
        <h2 className="home-caption01">
        </h2>
      </section>
      <section className="home-statistics">
        <div className="home-content">
          <div className="home-stat">
            <h3 className="home-header01">10.000 KM</h3>
            <span className="home-caption02">
              Profita
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="home-stat1">
            <h3 className="home-header02">BiH</h3>
            <span className="home-caption03">Nudimo usluge za čitavu BiH</span>
          </div>
          <div className="home-stat2">
            <h3 className="home-header03">500</h3>
            <span className="home-caption04">Zadovoljenih kupaca</span>
          </div>
        </div>
      </section>
      <section className="home-slider">
        <div className="home-header04">
          <h2 className="home-heading1">
          </h2>
        </div>
      </section>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
      <section className="home-growth">
        <div className="home-content02">
          <div className="home-header06">
            <div className="home-header07">
              <h2 className="home-heading3">
                <span>Uštedite svoj novac</span>
                <br></br>
              </h2>
            </div>
            <p className="home-caption07">
              Pronađite pametne uređaje koji štede vaš novac uz naše partnere na ovom linku
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <a href='https://sts.hr/pametni-uredaji-za-kucnu-uporabu/' className="home-caption08">
              https://sts.hr/pametni-uredaji-za-kucnu-uporabu/
            </a>
          </div>
        </div>
        <div className="home-images">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1518183214770-9cffbec72538?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDcyfHxzYXZpbmclMjBtb25leXxlbnwwfHx8fDE2NzkxOTU2OTY&amp;ixlib=rb-4.0.3&amp;w=1400"
            className="home-image2"
          />
          <div className="home-square"></div>
        </div>
      </section>
      <section className="home-experience">
        <div className="home-images1">
          <div className="home-square1"></div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1536662788222-6927ce05daea?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMwfHxzYXZpbmdzfGVufDB8fHx8MTY3OTE5NTYwOQ&amp;ixlib=rb-4.0.3&amp;w=1400"
            className="home-image3"
          />
        </div>
        <div className="home-content04">
          <div className="home-header08">
            <div className="home-header-container2">
              <div className="home-header09">
                <h2 className="home-heading4">Uštedite svoje vrijeme</h2>
              </div>
            </div>
            <div className="home-checkmarks">
              <div className="home-check">
                <div className="home-mark">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text30">
                  Brza dostava
                </span>
              </div>
              <div className="home-check1">
                <div className="home-mark1">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text31">Povoljne cijene</span>
              </div>
              <div className="home-check2">
                <div className="home-mark2">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text32">
                  Jednostavna instalacija
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-create">
        <div className="home-content06">
          <div className="home-header10">
            <h2 className="home-heading5">
              <span>Izračunajte uštedu po svojoj mjeri ovdje</span>
              <br></br>
            </h2>
          </div>
          <button className="home-button3 button" onClick={handleClick}>
            <span className="home-text38">
              <span>Kalkulator uštede</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <div>
        <DangerousHTML
          html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
        ></DangerousHTML>
      </div>
      <div className="home-container3"></div>
    </div>
  )
}

export default Home
