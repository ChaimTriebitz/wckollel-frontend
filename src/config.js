const BASE_URL = process.env.REACT_APP_BASE_URL
const USER_LOCAL_STORAGE = process.env.REACT_APP_USER_LOCAL_STORAGE
const FLUIDPAY_PUBLIC_KEY = process.env.REACT_APP_FLUIDPAY_PUBLIC_KEY

export const ls = {
   user: USER_LOCAL_STORAGE
}

export const apikeys = {
   fluidpay_public: FLUIDPAY_PUBLIC_KEY
}

export const urls = {
   auth: {
      register: `${BASE_URL}/api/auth/register`,
      login: `${BASE_URL}/api/auth/login`
   },
   private: {
      get: `${BASE_URL}/api/private`
   },
   schedules: {
      create: `${BASE_URL}/api/schedules/create`,
      get: `${BASE_URL}/api/schedules`,
      remove: `${BASE_URL}/api/schedules/remove`,
      update: `${BASE_URL}/api/schedules/update`
   },
   donations: {
      donate: `${BASE_URL}/api/donations/donate`
   },
   fluidpay: {
      tokenizer: 'https://app.fluidpay.com/tokenizer/tokenizer.js'
   }
}

