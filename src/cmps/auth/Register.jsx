import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks'
import { auth } from '../../controllers'

export const Register = () => {
   const { values, handleChange } = useForm({ username: '', email: '', password: '', })
   const navigate = useNavigate()
   const [err, setErr] = useState('')
   const handleSubmit = async (e) => {
      e.preventDefault()
      auth.register(values).then(() => {
         navigate('/login')
      }).catch((error) =>
         setErr(error.response.data.error)
      )
   }


   return (
      <div className="register">

         <h1>Register</h1>
         <form className='form' onSubmit={handleSubmit}>
            <div className="input">
               <label htmlFor="name">name</label>
               <input
                  id='name'
                  name='username'
                  value={values.username}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
               />
            </div>
            <div className="input">
               <label htmlFor="email">email</label>
               <input
                  id='email'
                  type="email"
                  name='email'
                  value={values.email}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
               />
            </div>
            <div className="input">
               <label htmlFor="password">password</label>
               <input
                  id='password'
                  name='password'
                  value={values.password}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
               />
            </div>
            <button className='btn success'>submit</button>
         </form>
         {/* <Link to='/login'>Login</Link> */}
         <h2>{err}</h2>
      </div>


   )
}
