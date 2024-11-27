import React from 'react'
import img1 from '../assets/imgs/home-1.jpg'
import img2 from '../assets/imgs/home-2.jpg'
import img3 from '../assets/imgs/home-3.jpeg'
import img4 from '../assets/imgs/home-4.jpeg'
import img5 from '../assets/imgs/home-5.jpeg'

const data = [
   {
      img: img1,
      h1: ' Welcome to WC Kollel',
      p: 'a vibrant center of Torah learning and community connection that welcomes people of all ages, backgrounds, and stages of life. Our kollel was founded to provide a space for meaningful engagement with Torah and Jewish values, empowering individuals to grow spiritually while balancing their personal and professional lives'
   },
   {
      img: img2,
      h1: 'Our Mission ',
      p: `we are dedicated to bringing the wisdom of Torah into daily life, inspiring both personal growth and a sense of community. Our mission is to make Torah study accessible to everyone, whether you're a full-time learner, a working professional, or someone seeking a deeper connection to Jewish learning. Through diverse programs and dynamic events, we aim to help each member of our community find their place in Torah and spirituality`
   },
   {
      img: img3,
      h1: 'Our Mission ',
      p: `we are dedicated to bringing the wisdom of Torah into daily life, inspiring both personal growth and a sense of community. Our mission is to make Torah study accessible to everyone, whether you're a full-time learner, a working professional, or someone seeking a deeper connection to Jewish learning. Through diverse programs and dynamic events, we aim to help each member of our community find their place in Torah and spirituality`
   },
   {
      img: img4,
      h1: 'What We Offer',
      p: `Flexible Learning Opportunities: Understanding the demands on working individuals, we offer flexible learning options, including evening and early morning classes, lunch-and-learn sessions, and online resources. This way, you can continue your growth in Torah study at times that fit your schedule`
   },
   {
      img: img5,
      h1: 'Career and Life Integration',
      p: 'Our kollel is uniquely attuned to the needs of working professionals. Our classes and programs are designed to address the challenges of integrating Torah values with modern career paths, family responsibilities, and everyday decisions'
   },
]

export const Home = () => {
   return (
      <main className='home main'>
         <div className="banner">
            <h1>WELCOME TO WOODMERE COMMUNITY KOLLEL</h1>
            <h2>Best Kollel ever</h2>
         </div>
         <div className="cards">
            {
               data.map(d =>
                  <div className="card">
                     <section>
                        <h1>{d.h1}</h1>
                        <p>{d.p}</p>
                     </section>
                     <section>
                        <img src={d.img} alt="" />
                     </section>
                  </div>
               )
            }
         </div>
      </main>
   )
}
