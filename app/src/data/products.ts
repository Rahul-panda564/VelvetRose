import type { Product, Category, Testimonial, BlogPost } from '@/types';
import { assetPath } from '@/lib/utils';

export const categories: Category[] = [
  {
    id: 'roses',
    name: 'Roses',
    image: assetPath('category-roses.jpg'),
    description: 'Timeless symbols of love and passion',
  },
  {
    id: 'peonies',
    name: 'Peonies',
    image: assetPath('category-peonies.jpg'),
    description: 'Lush blooms of romance and prosperity',
  },
  {
    id: 'tulips',
    name: 'Tulips',
    image: assetPath('category-tulips.jpg'),
    description: 'Cheerful harbingers of spring',
  },
  {
    id: 'ranunculus',
    name: 'Ranunculus',
    image: assetPath('category-ranunculus.jpg'),
    description: 'Delicate layers of ethereal beauty',
  },
];

export const products: Product[] = [
  {
    id: 'white-rose-elegance',
    name: 'White Rose Elegance',
    price: 1099,
    image: assetPath('product-white-roses.jpg'),
    category: 'roses',
    description: 'A pristine bouquet of pure white roses, symbolizing innocence and grace.',
  },
  {
    id: 'blush-peony-dream',
    name: 'Blush Peony Dream',
    price: 999,
    image: assetPath('product-pink-peonies.jpg'),
    category: 'peonies',
    description: 'Luxurious pink peonies that embody romance and feminine elegance.',
  },
  {
    id: 'coral-rose-garden',
    name: 'Coral Rose Garden',
    price: 949,
    image: assetPath('product-coral-roses.jpg'),
    category: 'roses',
    description: 'Warm coral garden roses that bring sunshine and joy to any room.',
  },
  {
    id: 'wildflower-meadow',
    name: 'Wildflower Meadow',
    price: 849,
    image: assetPath('product-wildflowers.jpg'),
    category: 'mixed',
    description: 'A whimsical arrangement of seasonal wildflowers in soft hues.',
  },
  {
    id: 'single-stem-rose',
    name: 'Single Stem Rose',
    price: 299,
    image: assetPath('product-single-rose.jpg'),
    category: 'roses',
    description: 'One perfect garden rose, a simple gesture of love and appreciation.',
  },
  {
    id: 'bridal-white-collection',
    name: 'Bridal White Collection',
    price: 1999,
    image: assetPath('product-bridal.jpg'),
    category: 'arrangements',
    description: 'An exquisite bridal bouquet featuring white roses, peonies, and eucalyptus.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Mohanty',
    avatar: assetPath('customer-1.jpg'),
    text: 'Velvet Rose made my wedding mandap look absolutely divine! The marigold and rose arrangements were breathtaking — every guest kept asking where we got the flowers. Truly the best florist in Odisha.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Ananya Sharma',
    avatar: assetPath('customer-2.jpg'),
    text: 'I order from Velvet Rose for every festival — Diwali, Durga Puja, Holi — and they never disappoint. The flowers arrive fresh and the bouquets are so beautifully arranged. Same-day delivery in Berhampur is a blessing!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Sneha Pattnaik',
    avatar: assetPath('customer-3.jpg'),
    text: 'I surprised my mother on her birthday with a rajnigandha and rose bouquet from Velvet Rose. She was in tears! The fragrance filled our entire home. Their attention to detail and love for flowers really shows.',
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Arranging: A Beginner\'s Guide',
    image: assetPath('blog-arranging.jpg'),
    excerpt: 'Discover the secrets to creating beautiful floral arrangements at home with our step-by-step guide.',
    date: 'Jan 12, 2026',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'Spring Wedding Flower Trends',
    image: assetPath('blog-wedding.jpg'),
    excerpt: 'From garden roses to ranunculus, explore the most enchanting blooms for your spring celebration.',
    date: 'Jan 8, 2026',
    readTime: '4 min read',
  },
  {
    id: '3',
    title: 'Caring for Your Fresh Flowers',
    image: assetPath('blog-arrangement.jpg'),
    excerpt: 'Learn simple tips to extend the life of your beautiful blooms and keep them looking fresh longer.',
    date: 'Jan 5, 2026',
    readTime: '3 min read',
  },
];

export const features = [
  {
    icon: 'Sparkles',
    title: 'Handcrafted Bouquets',
    description: 'Each arrangement is thoughtfully designed by our expert florists with the freshest seasonal blooms.',
  },
  {
    icon: 'Leaf',
    title: 'Freshness Guaranteed',
    description: 'We source our flowers daily from local growers to ensure the highest quality and longevity.',
  },
  {
    icon: 'Truck',
    title: 'Same-Day Delivery',
    description: 'Order before 2pm for same-day delivery across the city. Perfect for last-minute surprises.',
  },
];
