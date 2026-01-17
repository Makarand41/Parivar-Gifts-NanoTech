import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChefHat, Flame, Gift, Home, Star, Truck, Award, Users, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products.json';

const Index = () => {
  const featuredProducts = productsData.products.slice(0, 8);
  const categories = productsData.categories;

  const categoryIcons: Record<string, React.ReactNode> = {
    'kitchen-dining': <ChefHat className="w-8 h-8" />,
    'pooja-brass': <Flame className="w-8 h-8" />,
    'gift-items': <Gift className="w-8 h-8" />,
    'home-essentials': <Home className="w-8 h-8" />,
  };

  const whyChooseUs = [
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Premium Quality',
      description: 'Handpicked products from trusted manufacturers across India.',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Family Trusted',
      description: 'Serving families in Nashik for over 18 years with love.',
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: 'Genuine Products',
      description: '100% authentic brass, copper, and stainless steel items.',
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: 'Free Delivery',
      description: 'Complimentary delivery on orders above ₹999 in Nashik.',
    },
  ];


  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero pattern-overlay overflow-hidden">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left animate-slide-up">
              <span className="inline-block px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium">
                🎊 Festival Season Sale - Up to 25% Off!
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                One Stop Destination for{' '}
                <span className="text-gradient-festive">All Gifts</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Premium Gifts & Home Essentials Under One Roof. From festive hampers to 
                elegant brass items, find everything you need at Parivar Gifts, Nashik.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/products">
                  <Button className="btn-festive text-lg px-8 py-6 gap-2">
                    Explore Products
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
                    Visit Store
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
                <div className="text-center">
                  <p className="font-serif text-3xl font-bold text-primary">18+</p>
                  <p className="text-sm text-muted-foreground">Years Trusted</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="font-serif text-3xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-muted-foreground">Happy Families</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="font-serif text-3xl font-bold text-primary">5000+</p>
                  <p className="text-sm text-muted-foreground">Products</p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600"
                  alt="Premium Gift Hamper"
                  className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
              {/* Floating Elements */}
              <div className="absolute top-10 -left-4 bg-card p-4 rounded-2xl shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Gift className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold">Gift Wrapping</p>
                    <p className="text-xs text-muted-foreground">Complimentary</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-20 -right-4 bg-card p-4 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-sm mt-1">Rated 4.9/5 by customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12 animate-slide-up">
            <span className="text-secondary font-medium">BROWSE BY</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
              Shop by Category
            </h2>
            <div className="w-24 h-1 bg-gradient-gold rounded-full mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-card rounded-2xl overflow-hidden shadow-card card-hover border border-border aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="w-14 h-14 bg-secondary/90 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      {categoryIcons[category.id]}
                    </div>
                    <h3 className="font-serif text-lg font-semibold">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div className="animate-slide-up">
              <span className="text-secondary font-medium">CURATED FOR YOU</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Featured Products
              </h2>
              <div className="w-24 h-1 bg-gradient-gold rounded-full mt-4" />
            </div>
            <Link to="/products">
              <Button variant="outline" className="gap-2 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-hero pattern-overlay">
        <div className="container-custom">
          <div className="text-center mb-12 animate-slide-up">
            <span className="text-secondary font-medium">OUR PROMISE</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
              Why Choose Parivar Gifts?
            </h2>
            <div className="w-24 h-1 bg-gradient-gold rounded-full mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="bg-card p-8 rounded-2xl shadow-card text-center card-hover border border-border animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-secondary">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Presence */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <span className="text-secondary font-medium">VISIT OUR SHOWROOM</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Experience Parivar Gifts in Nashik
              </h2>
              <p className="text-lg opacity-90">
                Step into our multi-floor showroom at Mumbai Naka and explore thousands of 
                premium gifts and home essentials. Our expert staff will help you find the 
                perfect item for every occasion.
              </p>
              <ul className="space-y-3">
                {[
                  '📍 Landmark location at Mumbai Naka',
                  '🏢 Multi-floor premium showroom',
                  '👨‍👩‍👧‍👦 Family trusted since 2005',
                  '🎁 Festival & corporate gifting experts',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-lg">
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="btn-gold text-lg px-8 py-6 gap-2">
                  Get Directions
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600"
                alt="Parivar Gifts Showroom"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-lg">
                <p className="font-serif text-3xl font-bold">4.9★</p>
                <p className="text-sm">Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-festive text-white text-center">
        <div className="container-custom max-w-3xl animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Find the Perfect Gift?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Browse our collection of premium gifts or visit our Nashik showroom for a 
            personalized shopping experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/products">
              <Button className="btn-gold text-lg px-8 py-6 gap-2">
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-primary rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
