// Design tokens extraídos do Framer para a landing page /leads

export const LEADS_COLORS = {
  // Primary Colors
  deepBlue: '#0A2540',        // rgb(10, 37, 64) - Headings
  neutralGray: '#6B7280',     // rgb(107, 114, 128) - Body text
  brandBlue: '#1E6FE1',       // Primary CTA button
  
  // Backgrounds
  white: '#FFFFFF',
  lightGray: '#F4F6F8',       // rgb(244, 246, 248) - Alt sections
  secondaryBg: '#F5F5F5',
  
  // Accents
  border: '#E5E7EB',
  hoverBlue: '#1558B0',       // Button hover state
  black: '#000000',
} as const;

export const LEADS_TYPOGRAPHY = {
  // Font Family
  fontFamily: 'Inter Variable, Inter, sans-serif',
  
  // Desktop (1200px+)
  desktop: {
    h1: {
      fontSize: '40px',
      lineHeight: '40px',
      letterSpacing: '-1.6px',
      fontWeight: '400',
    },
    subheadline: {
      fontSize: '40px',
      lineHeight: '40px',
      letterSpacing: '-1.6px',
      fontWeight: '400',
    },
    sectionHeading: {
      fontSize: '24px',
      letterSpacing: '-0.48px',
      fontWeight: '400',
    },
    body: {
      fontSize: '21px',
      lineHeight: '1.2',
      fontWeight: '400',
    },
  },
  
  // Tablet/Mobile (< 1024px)
  mobile: {
    h1: {
      fontSize: '32px',
      lineHeight: '32px',
      letterSpacing: '-1.28px',
      fontWeight: '400',
    },
    subheadline: {
      fontSize: '32px',
      lineHeight: '32px',
      letterSpacing: '-1.28px',
      fontWeight: '400',
    },
    sectionHeading: {
      fontSize: '20px',
      letterSpacing: '-0.4px',
      fontWeight: '400',
    },
    body: {
      fontSize: '18px',
      lineHeight: '1.2',
      fontWeight: '400',
    },
  },
} as const;

export const LEADS_SPACING = {
  containerMaxWidth: '960px',
  sectionPadding: '80px', // py-20
  sectionPaddingLg: '112px', // lg:py-28
  cardPadding: '24px', // p-6
  cardPaddingLg: '32px', // lg:p-8
  gridGap: '32px', // gap-8
  gridGapLg: '48px', // lg:gap-12
  borderRadius: '8px',
} as const;
