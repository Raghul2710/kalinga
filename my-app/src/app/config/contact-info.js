// Global contact information configuration
// Update this file to change contact details across the entire application

// Helper function to convert phone number to href format
const phoneToHref = (phone) => `tel:${phone.replace(/[-\s]/g, '')}`;

// Helper function to convert email to href format
const emailToHref = (email) => `mailto:${email}`;

export const contactInfo = {
  // Phone numbers - single source of truth
  phone: {
    admissions: '+91-9907252100',
    general: '+91-9907252100',
    help: '+91-9907252100',
    primary: '+91-9907-252-100', // Default/primary number
  },

  // Email addresses - single source of truth
  email: {
    admissions: 'admissions@kalingauniversity.ac.in',
    general: 'info@kalingauniversity.ac.in',
    help: 'help@kalingauniversity.ac.in',
    primary: 'admissions@kalingauniversity.ac.in', // Default/primary email
  },

  // Address - single source of truth
  address: {
    line1: 'Kalinga University',
    line2: 'Raipur',
    city: 'Raipur',
    state: 'Chhattisgarh',
    country: 'India',
    pincode: '492001',
    // Full address is generated from components
  },

  // Social media links
  social: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    instagram: '#',
  },

  // Quick links (for top bar)
  quickLinks: {
    campusWifi: '#',
    international: '#',
    nirf: '#',
    naac: '#',
    nba: '#',
    erpLogin: '#',
    contactUs: '/contact',
  },
};

export const logos = {
  primary: {
    src: '/kalingalogo.svg',
    alt: 'Kalinga University',

  },
  secondary: {
    src: '/kalingacolorlogo.svg',
    alt: 'Kalinga University'
  },
  ctcd: {
    src: 'https://cdn.kalingauniversity.ac.in/ccrc/logo-ctcd.svg',
    alt: 'CTCD - Corporate Training and Consultancy Division'
  },
};

// Helper functions for phone numbers
export const getPhone = (type = 'primary') => {
  const phone = contactInfo.phone[type] || contactInfo.phone.primary;
  return {
    display: phone,
    href: phoneToHref(phone),
  };
};

// Helper functions for email addresses
export const getEmail = (type = 'primary') => {
  const email = contactInfo.email[type] || contactInfo.email.primary;
  return {
    display: email,
    href: emailToHref(email),
  };
};


// Helper function for address
export const getAddress = (format = 'full') => {
  const addr = contactInfo.address;

  switch (format) {
    case 'full':
      return `${addr.line1}, ${addr.line2}, ${addr.city}, ${addr.state} ${addr.pincode}, ${addr.country}`;
    case 'short':
      return `${addr.city}, ${addr.state}, ${addr.country}`;
    case 'line1':
      return addr.line1;
    case 'line2':
      return addr.line2;
    case 'city':
      return addr.city;
    case 'state':
      return addr.state;
    case 'country':
      return addr.country;
    default:
      return `${addr.line1}, ${addr.line2}, ${addr.city}, ${addr.state} ${addr.pincode}, ${addr.country}`;
  }
};

export const getLogo = (type = 'primary') => {
  return logos[type];
};

// Legacy helper functions for backward compatibility
export const getPhoneHref = (type = 'primary') => getPhone(type).href;
export const getPhoneDisplay = (type = 'primary') => getPhone(type).display;
export const getEmailHref = (type = 'primary') => getEmail(type).href;
export const getEmailDisplay = (type = 'primary') => getEmail(type).display;
export const getLogoSrc = (type = 'primary') => getLogo(type).src;
export const getLogoAlt = (type = 'primary') => getLogo(type).alt;

