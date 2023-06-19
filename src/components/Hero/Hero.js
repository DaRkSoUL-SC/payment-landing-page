import React from 'react'
import './Hero.css'
import { motion } from "framer-motion";
import Image1 from '../assets/image2.png'
import Image2 from '../assets/about.png'
import Testimonial from '../assets/testimonialpng.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
        <p className='trail'>GET FREE 1 MONTH TRAIL</p>
        <h1 className='title'>Everpay <span className='title-color'>Easy Payment</span></h1>
        <h1 className='title'>Gateway Solution.</h1>
        <p className='para'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees. </p>
        <div className='started'>
        <button className='btn-started'>Get Started</button>
        <p className='more'>Learn more 
        <i class="fa-solid fa-angle-right" style={{paddingLeft:"6px"}}></i> </p>
        </div>
        <img className='img1' src={Image1}></img>
        </div>
        <div className='nums'>
        <div className='num1'>
          <h1>5000+</h1>
          <p>Users Active</p>
        </div>
        <div className='num2'>
          <h1>200+</h1>
          <p>Trusted Companies</p>
        </div>
        <div className='num3'>
          <h1>$100M+</h1>
          <p>Total Transactions</p>
        </div>
        <div className='num4'>
          <h1>100K+</h1>
          <p>Registered Investors</p>
        </div>
        </div>
    {/* Services */}
    
    <h1 className='headline'>Our Services</h1>
        <div className='services'>
        <h1 className='headline-mob'>Our Services</h1>
        <div className='service-h1'>
            <h1>Get World Class & Fastest Online Payment Services</h1>
        </div>
        <div className='service-desc'>
            <p style={{fontWeight:"300"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </div>
    </div>
      <div className='services-card-list' whileHover={{ scale: 1.2 }}>
      <div className='services-card'>
      <h3><i class="fa-solid fa-credit-card"></i> PAYMENT METHODS</h3>
      <p style={{paddingTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h5 className='more2'>Learn more 
        <i class="fa-solid fa-angle-right" style={{paddingLeft:"6px"}}></i> </h5>
      </div>

      <div className='services-card'>
      <h3><i class="fa-solid fa-boxes-packing"></i> SUBSCRIPTIONS</h3>
      <p style={{paddingTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h5 className='more2'>Learn more 
        <i class="fa-solid fa-angle-right" style={{paddingLeft:"6px"}}></i> </h5>
      </div>

      <div className='services-card'>
      <h3><i class="fa-solid fa-shield-halved"></i> SAFE & SECURE</h3>
      <p style={{paddingTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h5 className='more2'>Learn more 
        <i class="fa-solid fa-angle-right" style={{paddingLeft:"6px"}}></i> </h5>
      </div>
    
      <div className='services-card'>
      <h3><i class="fa-solid fa-money-check-dollar"></i> REQUEST A PAYMENT</h3>
      <p style={{paddingTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h5 className='more2'>Learn more 
        <i class="fa-solid fa-angle-right" style={{paddingLeft:"6px"}}></i> </h5>
      </div>

      <div className='services-card'>
      <h3><i class="fa-solid fa-file-invoice-dollar"></i> PAYMENT INVOICE</h3>
      <p style={{paddingTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h5 className='more2'>Learn more 
        <i class="fa-solid fa-angle-right"style={{paddingLeft:"6px"}}></i> </h5>
      </div>
      
      <div className='services-card'>
      <h3><i class="fa-solid fa-phone-volume"></i> LIVE SUPPORT</h3>
      <p style={{paddingTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h5 className='more2'>Learn more 
        <i class="fa-solid fa-angle-right" style={{paddingLeft:"6px"}}></i> </h5>
      </div>
      </div>

      <div className='about'>
      <img className='img2' src={Image2}></img>
      <div className='about-us'>
      <h1 className='headline2'>About Company</h1>
        <h1 style={{color:"#FFE569"}}>Help Every Phase of Your Business Growth</h1>
        <p style={{fontWeight:"300"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      </div>
      <div className='list1'>
        <ul>
          <li>Startups & Early</li>
          <li>Legal Notice</li>
          <li>Growing Business</li>
          <li>In-Store Payment</li>
        </ul>
      </div>
      <div className='list2'>
      <ul>
          <li>Merchant Refund</li>
          <li>Press Release</li>
          <li>Subscriptions</li>
          <li>Ticket Support</li>
        </ul>
      </div>
      <button className='info'>Know More</button>

{/* Testimonials */}
<h1 className='headline3'>Feedback</h1>  
      <div className='testimonials'>
        <div className='testimonial-h1'>
            <h1>Happy Customer, More Good Review</h1>
        </div>

      </div>
      <div className='testimonial-card-list'>
      <div className='testimonial-card'>
      <img className='testimonial-img' src={Testimonial} alt='review1'/>
      <p className="tname">Maria Kubow</p>
      <p>Customer</p>
      <p style={{paddingTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
     
      </div>

      <div className='testimonial-card'>
      <img className='testimonial-img' src={Testimonial} alt='review1'/>
      <p className="tname">Maria Kubow</p>
      <p>Customer</p>
      <p style={{paddingTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      </div>

      <div className='testimonial-card'>
      <img className='testimonial-img' src={Testimonial} alt='review1'/>
      <p className="tname">Maria Kubow</p>
      <p>Customer</p>
      <p style={{paddingTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      </div>
    
      <div className='testimonial-card'>
      <img className='testimonial-img' src={Testimonial} alt='review1'/>
      <p className="tname">Maria Kubow</p>
      <p>Customer</p>
      <p style={{paddingTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      </div>
{/* Contact */}

<div className='footer'>
  <div className='contact'>
    <div className="contactlogo">
    <h1 style={{color:"#FFE569"}}>LOGO</h1>
    <p className='contact-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    <div className='icons'>
      <i class="fa-brands fa-facebook-f" style={{padding:'7px'}}></i>
      <i class="fa-brands fa-twitter" style={{padding:'7px'}}></i>
      <i class="fa-brands fa-instagram" style={{padding:'7px'}}></i>
    </div>
    
    </div>
    <div className='links1'>
      <h1 style={{color:"#FFE569"}}>Company</h1>
      <p>About Us</p>
      <p>Leadership</p>
      <p>Blog & Articles</p>
      <p>Legal Notice</p>
    </div>
    <div className='links2'>
      <h1 style={{color:"#FFE569"}}>Featured</h1>
    <p>Payment Methods</p>
      <p>Subscriptions</p>
      <p>Online Payment</p>
      <p>Merchant Refund</p>
    </div>
    <div className='links3'>
      <h1 style={{color:"#FFE569"}}>Newsletter</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <input className='input' type='text' placeholder='E-mail Address'></input>
      <button className='subscribe'>Subscribe</button>
    </div>
  </div>
  <p style={{textAlign:"center"}}>Copyright @2023 DaRkSoUL</p>
</div>
    </div> 
    
     )
}

export default Hero