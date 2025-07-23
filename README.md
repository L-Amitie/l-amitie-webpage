# L'Amitié Website

A modern, responsive website for L'Amitié, a French-inspired breakfast and lunch bistro located in downtown Denton, Texas.

## 🚀 Features

- **Modern Design**: Clean, responsive interface built with Next.js 14 and Tailwind CSS
- **Performance Optimized**: Optimized images, fonts, and assets for fast loading
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Interactive Components**: Dynamic navigation, mobile-friendly menus, and smooth transitions
- **SEO Friendly**: Optimized meta tags and semantic structure
- **Analytics Integration**: Built-in Vercel Analytics for performance monitoring

## 📋 Pages

- **Home**: Welcome section with hero image and featured content
- **Our Story**: Restaurant history and values
- **Menus**:
  - Breakfast & Lunch
  - Coffee Bar
  - Dinner (Coming Soon)
- **Location & Hours**: Address and operating hours
- **Reservations**: Table booking system
- **Order Online**: Food ordering interface
- **Events**: Special events and private dining
- **Contact**: Contact information and form

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Fonts**:
  - Alice (Google Fonts)
  - Edwardian Script ITC (Local)
- **Analytics**: Vercel Analytics
- **Performance Monitoring**: Vercel Speed Insights

## 🚦 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/l-amitie-webpage.git
   cd l-amitie-webpage
   ```
2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```
3. Create a `.env.local` file in the root directory and add any necessary environment variables:

   ```env
   # Example environment variables
   NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
   ```
4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
l-amitie-webpage/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # React components
│   │   ├── home-page/      # Homepage specific components
│   │   ├── shared/         # Shared components
│   │   └── ui/             # UI components (shadcn/ui)
│   ├── fonts/              # Local font files
│   └── lib/                # Utility functions
├── public/                 # Static assets
└── ...config files
```

## 🎨 Color Palette

- Primary Green: `#2b3a2d`
- Cream: `#f8f3dc`
- Accent Green: `#8ab17d`
- Text Colors:
  - Dark: `#2b3a2d`
  - Light: `#f8f3dc`
  - Hover: `#8ab17d`
