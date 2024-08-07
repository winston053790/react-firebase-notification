interface Config {
  [key: string]: {
    apiUrl: string
    verifyUrl: string
    bookingUrl: string
    debug?: boolean
    gtmId?: string
  }
}

const CONFIG_MAP: Config = {
  development: {
    apiUrl: 'https://api.development.w-sports.click',
    verifyUrl: 'https://verify.development.w-sports.click',
    bookingUrl: 'https://booking.development.w-sports.click',
    gtmId: 'GTM-KRQBNC7',
  },

  staging: {
    apiUrl: 'https://api.test.w-sports.click',
    verifyUrl: 'https://verify.test.w-sports.click',
    bookingUrl: 'https://booking.test.w-sports.click',
    gtmId: 'GTM-KMB4PJN',
  },

  production: {
    apiUrl: 'https://api.w-sports.click',
    verifyUrl: 'https://verify.w-sports.click',
    bookingUrl: 'https://booking.w-sports.click',
    gtmId: 'GTM-NQRCMSM',
  },
}

CONFIG_MAP.local = {
  ...CONFIG_MAP.development,
  debug: true,
}

const env = process.env.REACT_APP_ENV || 'development'

const CONFIG = CONFIG_MAP[env] || CONFIG_MAP.development

export default CONFIG
