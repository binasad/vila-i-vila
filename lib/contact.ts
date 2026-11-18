export const BRAND = 'One Way Shawarma'
export const OWNER = 'Imran Haider'
export const PHONE_DISPLAY = '0300 2189122'
export const PHONE_TEL = '+923002189122'
// WhatsApp needs the international format without "+" or leading 0
export const WHATSAPP_NUMBER = '923002189122'

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
