import React from 'react'

//Images
import brand1 from '../../assets/images/3.svg'
import brand2 from '../../assets/images/Landing-Pages.svg'
import brand3 from '../../assets/images/Page-2.svg'
import brand4 from '../../assets/images/Page-3.svg'
import brand5 from '../../assets/images/Page-1.svg'

import imgBackgroundsLinesRight from '../../assets/images/background-lines-right.svg'
import logotypeWhite from '../../assets/images/logotype-white.svg'

const Footer = ({title, url}) => {

  return (
    <footer>
    <div className="img-advertising-footer">
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <img src={brand5} alt="" />
    </div>
    
    <div className="footer-top">
        <img className="background-lines-right" src={imgBackgroundsLinesRight} alt="" />
        <div className="container">
            <div className="box box-1">
                <img src={logotypeWhite} alt="Logotype" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>
            <div className="box box-2">
                <h4>company</h4>
                <a href="#">about</a>
                <a href="#">features</a>
                <a href="#">works</a>
                <a href="#">career</a>
            </div>
            <div className="box box-3">
                <h4>help</h4>
                <a href="#">customer support</a>
                <a href="#">delivery details</a>
                <a href="#">terms & conditions</a>
                <a href="#">privacy policy</a>
            </div>
            <div className="box box-4">
                <h4>Resources</h4>
                <a href="#">Free eBooks</a>
                <a href="#">Development Tutorial</a>
                <a href="#">How to - Blog</a>
                <a href="#">Youtube Playlist</a>
            </div>
            <div className="box box-5">
                <h4>Link</h4>
                <a href="#">Free eBooks</a>
                <a href="#">Development Tutorial</a>
                <a href="#">How to - Blog</a>
                <a href="#">Youtube Playlist</a>
            </div>
        </div>
    </div>

    <div className="bottom">
        <p className="footer-txt">&copy; 2023 crito - consulting company inc. all right reserved.</p>
        <div className="social-media-footer">
            <a href="https://facebook.com" target="_blank">
                <i className="social-media-icon fa-brands fa-facebook"></i>
            </a>
            <a href="#https://twitter.com/" target="_blank">
                <i className="social-media-icon fa-brands fa-twitter"></i>
            </a>
            <a href="https://instagram.com/" target="_blank">
                <i className="social-media-icon fa-brands fa-instagram"></i>
            </a>
            <a href="https://linkein.com/" target="_blank">
                <i className="social-media-icon fa-brands fa-linkedin"></i>
            </a>
        </div>
    </div>
</footer>
  )
}

export default Footer