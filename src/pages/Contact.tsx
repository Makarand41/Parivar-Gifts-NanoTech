import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      lines: [
        'Mumbai Naka, behind KIMS Hospital',
        'Nashik – 422001, Maharashtra, India',
      ],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      lines: ['+91 98765 43210', '+91 0253 2345678'],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      lines: ['info@parivargifts.com', 'orders@parivargifts.com'],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      lines: ['Monday - Sunday', '10:00 AM - 9:00 PM'],
    },
  ];

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-festive text-white py-16">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">
            We'd love to hear from you. Visit our showroom or get in touch!
          </p>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                Get in Touch
              </h2>
              <p className="text-muted-foreground">
                Have questions about our products or need help with a bulk order? 
                Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(info => (
                <div key={info.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0 text-secondary">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{info.title}</h3>
                    {info.lines.map(line => (
                      <p key={line} className="text-muted-foreground text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-hero rounded-2xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-green-500/10 rounded-xl text-green-700 hover:bg-green-500/20 transition-colors"
                >
                  <span className="text-xl">📱</span>
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 p-3 bg-primary/10 rounded-xl text-primary hover:bg-primary/20 transition-colors"
                >
                  <span className="text-xl">📞</span>
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select a topic</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="bulk-order">Bulk / Corporate Order</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-festive text-lg py-6 gap-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
            Find Us on Map
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-card border border-border h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0234567890123!2d73.7898765!3d19.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzE1LjYiTiA3M8KwNDcnMjMuNiJF!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Parivar Gifts Location"
            />
          </div>
          <p className="text-center text-muted-foreground mt-4">
            📍 Mumbai Naka, behind KIMS Hospital, Nashik – 422001, Maharashtra, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
