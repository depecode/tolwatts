/**
 * Design System Constants - Premium Edition
 * Modern, sophisticated design tokens inspired by contemporary tech products
 * Centralized design tokens and configuration for the TolWatts application
 */

// ============================================================================
// BRAND COLORS - Professional Green Palette
// ============================================================================
export const BRAND_COLORS = {
  // Primary Green - Energy & Nature
  green: '#10B981', // Modern emerald (better contrast than #4CAF50)
  greenDark: '#047857', // Deep forest green
  greenLight: '#A7F3D0', // Light mint for backgrounds
  greenLighter: '#D1FAE5', // Very light mint
  
  // Supporting Colors
  charcoal: '#1F2937', // Modern dark gray (not pure black)
  yellow: '#FBBF24', // Warm amber (more sophisticated than #FBC02D)
  
  // Semantic additions
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
} as const;

// ============================================================================
// SEMANTIC COLORS - Light Mode (Premium Design)
// ============================================================================
export const COLORS_LIGHT = {
  // Surfaces
  background: '#FFFFFF',
  foreground: '#1F2937',
  card: '#FAFBFC',
  cardForeground: '#1F2937',
  
  // Primary - Brand Green
  primary: '#047857',
  primaryForeground: '#FFFFFF',
  
  // Secondary - Subtle Green Tint
  secondary: '#F0FDF4',
  secondaryForeground: '#047857',
  
  // Accent
  accent: '#10B981',
  accentForeground: '#FFFFFF',
  
  // Status Colors
  success: '#059669',
  successForeground: '#FFFFFF',
  warning: '#D97706',
  warningForeground: '#FFFFFF',
  destructive: '#DC2626',
  destructiveForeground: '#FFFFFF',
  
  // Neutral Grays
  muted: '#F3F4F6',
  mutedForeground: '#6B7280',
  muted2: '#E5E7EB',
  muted3: '#D1D5DB',
  
  // Borders & Inputs
  border: '#E5E7EB',
  input: '#FFFFFF',
  inputBackground: '#F9FAFB',
  inputBorder: '#E5E7EB',
  
  // Focus State
  ring: '#10B981',
  ringOffset: '#FFFFFF',
} as const;

// ============================================================================
// SEMANTIC COLORS - Dark Mode (Premium Design)
// ============================================================================
export const COLORS_DARK = {
  // Surfaces
  background: '#0F172A',
  foreground: '#F1F5F9',
  card: '#1E293B',
  cardForeground: '#F1F5F9',
  
  // Primary - Brand Green
  primary: '#10B981',
  primaryForeground: '#0F172A',
  
  // Secondary
  secondary: '#1E3A1F',
  secondaryForeground: '#D1FAE5',
  
  // Accent
  accent: '#34D399',
  accentForeground: '#0F172A',
  
  // Status Colors
  success: '#10B981',
  successForeground: '#0F172A',
  warning: '#FBBF24',
  warningForeground: '#1F2937',
  destructive: '#EF4444',
  destructiveForeground: '#0F172A',
  
  // Neutral Grays
  muted: '#334155',
  mutedForeground: '#CBD5E1',
  muted2: '#475569',
  muted3: '#64748B',
  
  // Borders & Inputs
  border: '#334155',
  input: '#1E293B',
  inputBackground: '#0F172A',
  inputBorder: '#334155',
  
  // Focus State
  ring: '#34D399',
  ringOffset: '#0F172A',
} as const;

// ============================================================================
// TYPOGRAPHY - Premium Hierarchy
// ============================================================================
export const TYPOGRAPHY = {
  fontSizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeights: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// ============================================================================
// SPACING - Refined 8px Base Unit System
// ============================================================================
export const SPACING = {
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  8: '2rem', // 32px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  32: '8rem', // 128px
} as const;

// ============================================================================
// BORDER RADIUS - Modern Aesthetic
// ============================================================================
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.25rem', // 4px
  base: '0.375rem', // 6px
  md: '0.5rem', // 8px
  lg: '0.75rem', // 12px
  xl: '1rem', // 16px
  '2xl': '1.5rem', // 24px
  '3xl': '2rem', // 32px
  full: '9999px',
} as const;

// ============================================================================
// SHADOWS - Sophisticated Depth
// ============================================================================
export const SHADOWS = {
  none: 'none',
  xs: '0 1px 1px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  // Colored shadows for depth
  greenSm: '0 2px 8px rgba(16, 185, 129, 0.1)',
  greenMd: '0 4px 12px rgba(16, 185, 129, 0.15)',
  greenLg: '0 8px 24px rgba(16, 185, 129, 0.2)',
} as const;

// ============================================================================
// BREAKPOINTS - Responsive Design
// ============================================================================
export const BREAKPOINTS = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================================================
// Z-INDEX SCALE - Semantic Layering
// ============================================================================
export const Z_INDEX = {
  hide: '-1',
  base: '0',
  docked: '10',
  dropdown: '1000',
  sticky: '1020',
  fixed: '1030',
  backdrop: '1040',
  offcanvas: '1050',
  modal: '1060',
  popover: '1070',
  tooltip: '1080',
} as const;

// ============================================================================
// COMPONENT-SPECIFIC TOKENS
// ============================================================================
export const COMPONENTS = {
  button: {
    padding: {
      sm: '0.5rem 1rem',
      base: '0.75rem 1.5rem',
      lg: '1rem 2rem',
    },
    height: {
      sm: '2rem',
      base: '2.5rem',
      lg: '3rem',
    },
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: 500,
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  input: {
    padding: '0.75rem 1rem',
    height: '2.5rem',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    border: '1px solid',
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  card: {
    padding: '1.5rem',
    borderRadius: '0.75rem',
    border: '1px solid',
    shadow: SHADOWS.base,
    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  badge: {
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: 600,
  },
} as const;

// ============================================================================
// NAVIGATION & CONFIGURATION
// ============================================================================
export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
] as const;

// ============================================================================
// CONTACT INFORMATION
// ============================================================================
export const CONTACT_INFO = {
  phone: '+234 706 895 2359',
  email: 'tolwattstech@gmail.com',
  location: 'Lagos, Nigeria',
} as const;

// ============================================================================
// ANIMATION - Polished Motion Design
// ============================================================================
export const ANIMATION_DURATIONS = {
  fastest: 100,
  fast: 150,
  base: 200,
  slow: 300,
  slower: 500,
  slowest: 700,
} as const;

export const ANIMATION_EASING = {
  linear: 'linear',
  // Expo
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Smooth
  smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  smoothIn: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  smoothOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  // Bounce
  bounceOut: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  bounceIn: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
  // Sharp (iOS style)
  sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1.0)',
} as const;

// ============================================================================
// COMPANY INFORMATION
// ============================================================================
export const COMPANY_INFO = {
  name: 'TolWatts',
  tagline: 'Powering Nigerian Homes & Businesses',
  description: 'Professional solar energy solutions for sustainable power in Nigeria',
  year: 2024,
} as const;
