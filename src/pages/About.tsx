import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Gift, Store, Heart, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const milestones = [
    { year: '2005', title: 'Founded', description: 'Started as a small gift shop in Nashik' },
    { year: '2010', title: 'Expansion', description: 'Moved to a larger multi-floor showroom' },
    { year: '2015', title: 'Diversification', description: 'Added home essentials & kitchenware' },
    { year: '2020', title: '10K+ Families', description: 'Crossed 10,000 happy customers' },
    { year: '2024', title: 'Digital Presence', description: 'Launched online catalog & enquiry system' },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Family Values',
      description: 'We believe in building lasting relationships with our customers, just like family.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality First',
      description: 'Every product is handpicked to ensure the highest quality standards.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Care',
      description: 'Our dedicated team ensures personalized shopping experience for everyone.',
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Festive Experts',
      description: 'Specialists in festival, wedding, and corporate gifting solutions.',
    },
  ];

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative bg-gradient-festive text-white py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              About Parivar Gifts
            </h1>
            <p className="text-xl opacity-90">
              A legacy of trust, quality, and celebration since 2005. 
              We are Nashik's premier destination for premium gifts and home essentials.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-secondary font-medium">WHO WE ARE</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Your Trusted Gift Partner in Nashik
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Parivar Gifts</strong> started as a humble gift shop 
                  in 2005 with a simple vision – to help families celebrate their special moments with 
                  beautiful, quality products.
                </p>
                <p>
                  Today, we have grown into a multi-floor premium showroom at Mumbai Naka, Nashik, 
                  offering thousands of products across categories like kitchenware, brass & copper 
                  items, pooja essentials, home décor, and curated gift hampers.
                </p>
                <p>
                  Our strength lies in understanding what Indian families need – be it for daily use, 
                  festivals, weddings, or corporate gifting. We combine traditional values with modern 
                  convenience to deliver an unmatched shopping experience.
                </p>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="font-serif text-4xl font-bold text-primary">18+</p>
                  <p className="text-sm text-muted-foreground">Years of Trust</p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-muted-foreground">Happy Families</p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-bold text-primary">5000+</p>
                  <p className="text-sm text-muted-foreground">Products</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600"
                alt="Parivar Gifts Showroom"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="font-semibold mt-1">4.9 Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-medium">OUR VALUES</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
              What We Stand For
            </h2>
            <div className="w-24 h-1 bg-gradient-gold rounded-full mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card p-8 rounded-2xl shadow-card text-center card-hover border border-border"
              >
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-secondary">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-medium">OUR JOURNEY</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
              Milestones We're Proud Of
            </h2>
            <div className="w-24 h-1 bg-gradient-gold rounded-full mx-auto mt-4" />
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-card p-6 rounded-2xl shadow-card border border-border inline-block">
                      <span className="text-secondary font-bold text-2xl">{milestone.year}</span>
                      <h3 className="font-serif text-xl font-semibold mt-1">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-secondary rounded-full border-4 border-background shadow-lg z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600"
                alt="Store Interior"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6">
              <Store className="w-12 h-12 text-secondary" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Visit Our Showroom
              </h2>
              <p className="text-lg opacity-90">
                Experience the magic of Parivar Gifts in person! Our multi-floor showroom 
                at Mumbai Naka offers an immersive shopping experience with thousands of 
                products to explore.
              </p>
              <ul className="space-y-3">
                {[
                  '📍 Prime location at Mumbai Naka, behind KIMS Hospital',
                  '🏢 Spacious multi-floor premium showroom',
                  '👨‍👩‍👧‍👦 Friendly staff for personalized assistance',
                  '🎁 Gift wrapping services available',
                  '🚗 Easy parking facility',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2">{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/contact">
                  <Button className="btn-gold text-lg px-8 py-6 gap-2">
                    Get Directions
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-primary rounded-full">
                    Browse Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-hero pattern-overlay text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Have Questions? We're Here to Help!
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you need help choosing the perfect gift or want to discuss 
            bulk orders, our team is ready to assist you.
          </p>
          <Link to="/contact">
            <Button className="btn-festive text-lg px-8 py-6 gap-2">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
