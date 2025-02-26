import { useEffect, useRef, useState } from "react"
import { FIELDS } from '../../data'
import { useForm, useGlobalState } from '../../hooks'
import { apikeys, urls } from '../../config'
import { Inputs } from '..'
import { create } from '../../controllers'
import { events, objects } from '../../functions'
import { useNavigate } from 'react-router-dom'
import { svgs } from '../../assets/svgs'


export const DonationForm = () => {
   const navigate = useNavigate()
   const formValuesRef = useRef(null)
   const [tokenizer, setTokenizer] = useState(null)
   const { values, handleChange } = useForm(objects.filterFields({}, FIELDS.donations.fields))
   const [message, setMessage] = useState('')
   const [isLoading, setIsLoading] = useState(false)
   const { dispatch, donation } = useGlobalState()

   useEffect(() => {
      formValuesRef.current = { ...values, amount: donation.amount }
   }, [values, donation.amount])

   useEffect(() => {
      const script = document.createElement("script")
      script.src = urls.fluidpay.tokenizer
      script.async = true
      script.onload = () => {
         const instance = new window.Tokenizer({
            apikey: apikeys.fluidpay_public,
            container: "#card-container",
            submission: submitDonation,
            settings: {
               styles: {
                  'body': {
                     'color': '#ffffff',
                  },
                  'input': {
                     'font-size': '1.5em',
                     'color': '#ffffff',
                     'border-radius': '15px',
                     'background-color': '#30475E',
                     'border': 'none',
                     'padding-top': '0.25em',
                     'padding': '5px 10px',
                     'min-height': '35px'
                  },
                  '.fieldset.cc': {
                     'margin-bottom': '10px'
                  },
                  '.card .cc .cc-icon': {
                     'margin-left': '10px'
                  },
                  '.payment .cvv input': {
                     // 'border': 'solid 1px #ffffff',
                  },
                  '.card .cc input': {
                     'padding': '6px 6px 6px 50px'
                  }
               }
            },
            onload: (onLoad) => {
            },
            onPaymentChange: (type) => {
            },
            validCard: (card) => {
            },
            validExpiration: (ex) => {
            },
            validCVV: (cvv) => {
            },
         })
         setTokenizer(instance)
      }

      document.body.appendChild(script)
      return () => {
         document.body.removeChild(script)
      }
   }, [])

   const submitDonation = async (res) => {
      setIsLoading(true)
      if (res?.token) {
         setMessage("")
         formValuesRef.current = { ...formValuesRef.current, token: res.token }
         create.donation(formValuesRef.current)
            .then((res) => {
               if (res.data.response === 'approved') {
                  navigate("/donations/thank-you", { state: { donor: formValuesRef.current } })
               } else {
                  setMessage('Your card has been declined, please try a diffarent one')
               }
            })
            .catch((err) => {
               tokenizer?.reset?.()
               events.showMsg.warning(err.response.data.error.msg)
               setMessage(err.response.data.error.msg)
            })
            .finally(() => setIsLoading(false))
      } else {
         setTimeout(() => {
            tokenizer?.reset?.()
            setIsLoading(false)
            setMessage("Wrong Card Details Try Again")
            events.showMsg.warning("Wrong Card Details Try Again")
         }, 2000)
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      if (tokenizer) tokenizer.submit()
      else setMessage("Payment system is not initialized yet.")
   }

   return (
      <form className={`form donation ${donation.amount > 0 ? 'open' : ''}`} onSubmit={handleSubmit}>
         {isLoading && <div className="overlay">
            <h2>processing...</h2>
            <div className='loader' id="money">
            </div>
         </div>}
         <h4>Contact Details</h4>
         {
            FIELDS.donations.contact.map((field) =>
               <Inputs
                  value={values[field.internal_name]}
                  field={field}
                  handleChange={handleChange}
                  key={field.internal_name}
               />
            )
         }

         <h4>Card Details</h4>

         <div id="card-container" style={{ overflow: 'hidden' }} />

         <button className='btn success' type="submit">Donate</button>
         <p className='error'>{message && svgs.warning} {message}</p>
      </form>
   )
}
