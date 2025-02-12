import React from 'react'
import img1 from '../assets/imgs/home-1.jpg'
import img2 from '../assets/imgs/home-2.jpg'
import img3 from '../assets/imgs/home-3.png'
import img4 from '../assets/imgs/home-4.png'
import img5 from '../assets/imgs/home-5.png'
import img6 from '../assets/imgs/home.jpg'

const data = [
   {
      img: img1,
      h2: ' Welcome to WC Kollel',
      p: 'a vibrant center of Torah learning and community connection that welcomes people of all ages, backgrounds, and stages of life. Our kollel was founded to provide a space for meaningful engagement with Torah and Jewish values, empowering individuals to grow spiritually while balancing their personal and professional lives'
   },
   {
      img: img2,
      h2: 'Our Mission ',
      p: `we are dedicated to bringing the wisdom of Torah into daily life, inspiring both personal growth and a sense of community. Our mission is to make Torah study accessible to everyone, whether you're a full-time learner, a working professional, or someone seeking a deeper connection to Jewish learning. Through diverse programs and dynamic events, we aim to help each member of our community find their place in Torah and spirituality`
   },
   {
      img: img3,
      h2: 'What We Offer',
      p: `Flexible Learning Opportunities: Understanding the demands on working individuals, we offer flexible learning options, including evening and early morning classes, lunch-and-learn sessions, and online resources. This way, you can continue your growth in Torah study at times that fit your schedule`
   },
   {
      img: img4,
      h2: 'Career and Life Integration',
      p: 'Our kollel is uniquely attuned to the needs of working professionals. Our classes and programs are designed to address the challenges of integrating Torah values with modern career paths, family responsibilities, and everyday decisions'
   },
   {
      img: img5,
      h2: 'Community and Networking Events',
      p: 'In addition to our learning programs, we host events where community members can connect, network, and socialize. From holiday gatherings to guest lectures and family-friendly events, we provide opportunities for everyone to feel part of a welcoming community',
   },
   {
      img: img6,
      h2: 'Join Us',
      p: 'We invite you to be part of the wcKollel family, a space where Torah study and community go hand-in-hand. Our kollel is here to support you on your journey, regardless of your professional commitments, helping you connect with Jewish learning and values in a meaningful and balanced way.',
   },
]

export const Home = () => {
   return (
      <main className='home main'>
         <div className="banner">
            <h1>WELCOME TO WOODMERE COMMUNITY KOLLEL</h1>
            <h2>A place for Torah and Achdus</h2>
         </div>
         <div className="cards">
            {
               data.map(d =>
                  <div key={d.h2} className="card">
                     <section>
                        <h2>{d.h2}</h2>
                        <p>{d.p}</p>
                     </section>
                     <img src={d.img} alt="" />
                  </div>
               )
            }
         </div>
      </main>
   )
}
