# ESTA Landing Page

High-converting ESTA application landing page built with Next.js 14+, TypeScript, and Tailwind CSS 4.

## ✨ Features

- **Government-Inspired Design**: Official U.S. government aesthetics for trust and credibility
- **Conversion Optimized**: CRO best practices with clear CTAs and psychological triggers
- **SEO Optimized**: Comprehensive metadata, Open Graph tags, and JSON-LD schema markup
- **Mobile-First**: Fully responsive design optimized for all devices
- **Accessible**: WCAG 2.1 AA compliant
- **Performance**: Optimized for Core Web Vitals
- **Analytics Ready**: Google Analytics 4 integration with custom event tracking

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
app/
├── components/
│   ├── ui/                   # Reusable UI components
│   │   ├── Button.tsx        # CTA buttons with analytics
│   │   ├── Section.tsx       # Section wrapper
│   │   └── Container.tsx     # Content container
│   └── sections/             # Landing page sections
│       ├── Hero.tsx          # Above-the-fold hero
│       ├── TrustBar.tsx      # Trust indicators
│       ├── ValueProposition.tsx
│       ├── HowItWorks.tsx    # 3-step process
│       ├── Requirements.tsx  # Eligibility checklist
│       ├── Pricing.tsx       # Transparent pricing
│       ├── FAQ.tsx           # With JSON-LD schema
│       ├── Testimonials.tsx  # Social proof
│       ├── FinalCTA.tsx      # Final conversion
│       └── Footer.tsx        # Legal disclaimer
├── lib/
│   └── analytics.ts          # Analytics tracking
├── globals.css               # Tailwind config + design system
├── layout.tsx                # SEO metadata
└── page.tsx                  # Main landing page
```

## ⚙️ Configuration

### 1. Update Site Information

Edit `app/layout.tsx`:

```typescript
const SITE_URL = "https://yoursite.com"; // Your actual domain
// Replace Google Analytics ID: G-XXXXXXXXXX
// Add Google Search Console verification
```

### 2. Update Pricing

Edit `app/components/sections/Pricing.tsx`:

```typescript
const OFFICIAL_ESTA_FEE = 40.00;  // Official U.S. fee
const SERVICE_FEE = 49.00;         // Your service fee
```

### 3. Add Images

Create these images in `public/`:

- `/og-image.jpg` (1200x630px) - Social sharing image
- `/images/hero.jpg` - Hero section image (happy traveler/Statue of Liberty)

### 4. Update CTA Destinations

In section components, update button click handlers:

```typescript
// app/components/sections/Hero.tsx
const handleCTAClick = () => {
  trackCTAClick('hero');
  window.location.href = '/application/start'; // Update this URL
};
```

## 🎨 Design System

### Colors (Government-Inspired)

```css
--color-gov-blue: #112e51;        /* Primary navy */
--color-gov-blue-light: #205493;  /* Links, accents */
--color-gov-red: #cd2026;         /* CTA buttons */
--color-success-green: #2e8540;   /* Success indicators */
--color-warning-gold: #fdb81e;    /* Urgency */
```

Customize in `app/globals.css` under `@theme inline`.

### Typography

- System fonts for optimal performance
- Mobile-first responsive sizing with `clamp()`
- Accessible color contrast ratios

## 📊 Analytics & Tracking

### Event Tracking

The landing page tracks:

- **CTA Clicks**: `trackCTAClick(location)`
- **Section Views**: `trackSectionView(name)`
- **FAQ Opens**: `trackFAQInteraction(question)`
- **External Links**: `trackExternalClick(url)`

All in `app/lib/analytics.ts`.

### Setup Google Analytics

1. Create a GA4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Update in `app/layout.tsx`

## 🔍 SEO Features

### Metadata

- Comprehensive title and description
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URLs
- Robots directives

### Schema Markup

FAQ schema auto-generated for rich snippets:

```typescript
// app/components/sections/FAQ.tsx
export const generateFAQSchema = () => { ... }
```

Test with [Google Rich Results Test](https://search.google.com/test/rich-results)

### Performance Targets

- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

## ♿ Accessibility

Meets WCAG 2.1 AA standards:

- Semantic HTML5
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation
- Focus indicators
- Sufficient color contrast
- ARIA labels

## 📝 Customization Guide

### Update Content

1. **FAQ**: Edit `app/components/sections/FAQ.tsx`
2. **Testimonials**: Edit `app/components/sections/Testimonials.tsx`
3. **Stats**: Edit `app/components/sections/TrustBar.tsx`
4. **Benefits**: Edit `app/components/sections/ValueProposition.tsx`

### Update Colors

All colors in `app/globals.css`:

```css
@theme inline {
  --color-gov-blue: #112e51;
  --color-accent: #cd2026;
  /* ... */
}
```

### A/B Testing Elements

Test these for optimization:

- Headline variations
- CTA button text/color
- Pricing display format
- Trust indicators
- Hero images

Use Google Optimize, Optimizely, or VWO.

## ⚖️ Legal Compliance

### Required Disclaimers

The landing page includes:

1. **Footer**: Clear statement this is NOT the official U.S. government site
2. **Pricing**: Transparent breakdown of fees
3. **Official Link**: Link to esta.cbp.dhs.gov

### Create These Pages

For full compliance:

- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/refund` - Refund Policy

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Auto-deploys on push

### Other Platforms

Works on any Node.js host:

- Netlify
- AWS Amplify
- DigitalOcean
- Railway

## ✅ Pre-Launch Checklist

- [ ] Update `SITE_URL` in layout.tsx
- [ ] Add Google Analytics ID
- [ ] Add hero image (`/images/hero.jpg`)
- [ ] Add OG image (`/og-image.jpg`)
- [ ] Update pricing values
- [ ] Verify all CTAs work
- [ ] Test FAQ content
- [ ] Create Privacy Policy page
- [ ] Create Terms of Service page
- [ ] Test on mobile devices
- [ ] Run PageSpeed Insights
- [ ] Verify all links work
- [ ] Test schema markup
- [ ] Set up Google Search Console
- [ ] Configure SSL certificate

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel
- **Analytics**: Google Analytics 4

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS 4](https://tailwindcss.com/docs)
- [Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4)

## 📄 License

Update with your license information.

---

**Built with Next.js 14+ and Tailwind CSS 4**
Optimized for conversions, SEO, and user experience.
