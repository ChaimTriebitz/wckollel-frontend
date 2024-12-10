import { svgs } from '../assets/svgs'


export const Footer = () => {
   return (
      <footer className='footer'>
         <h4>For more information</h4>
         <h5>contact Wckollel</h5>
         <div className='contact-us'>
            {/* <a className="item"
               href={`tel:972544204235`}
               title={'call me'}
            >
               {svgs.phone}
               <p>972-54-420-4235</p>
               <span>|</span>
            </a> */}
            {/* <a className="item"
               href="https://wa.me/972544204235"
               title={'message me'}
               target='_blank'
            >
               {svgs.whatsapp}
               <p>+972 544 978899</p>
               <span>|</span>
            </a> */}
            <a
               className="item btn"
               href={`mailto:wckollel@gmail.com`}
               title={'mail me'}
            >
               {svgs.email}
               <p>wckollel@gmail.com</p>
            </a>
         </div>
      </footer>
   )
}

