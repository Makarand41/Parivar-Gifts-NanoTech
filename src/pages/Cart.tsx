import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import EnquiryModal from '@/components/EnquiryModal';
import productsData from '@/data/products.json';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const getProductDetails = (id: string) => {
    return productsData.products.find(p => p.id === id);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container-custom section-padding">
          <div className="max-w-md mx-auto text-center">
            <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-16 h-16 text-muted-foreground" />
            </div>
            <h1 className="font-serif text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any products yet. 
              Browse our collection and find something special!
            </p>
            <Link to="/products">
              <Button className="btn-festive text-lg px-8 py-6 gap-2">
                Start Shopping
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-festive text-white py-12">
        <div className="container-custom">
          <h1 className="font-serif text-3xl md:text-4xl font-bold">Shopping Cart</h1>
          <p className="opacity-90 mt-2">{getCartCount()} items in your cart</p>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => {
              const productDetails = getProductDetails(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-card rounded-2xl p-4 md:p-6 shadow-card border border-border flex flex-col md:flex-row gap-4"
                >
                  {/* Image */}
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="flex-1 space-y-2">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-serif text-lg font-semibold hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    {productDetails && (
                      <p className="text-sm text-muted-foreground capitalize">
                        {productDetails.category.replace('-', ' & ')}
                      </p>
                    )}
                    <p className="text-xl font-bold text-primary">
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-4">
                    <div className="flex items-center border border-border rounded-full overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-semibold">{item.quantity || 1}</span>
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">
                        ₹{(item.price * (item.quantity || 1)).toLocaleString()}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-destructive hover:underline flex items-center gap-1 mt-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border sticky top-32">
              <h2 className="font-serif text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal ({getCartCount()} items)</span>
                  <span>₹{getCartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">₹{getCartTotal().toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">(Inclusive of all taxes)</p>
                </div>
              </div>

              {/* Enquiry Button */}
              <Button
                onClick={() => setIsEnquiryOpen(true)}
                className="w-full btn-festive text-lg py-6 gap-2"
              >
                <Gift className="w-5 h-5" />
                Add to Enquiry
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Submit an enquiry and our team will contact you 
                within 24 hours to confirm your order.
              </p>

              {/* Continue Shopping */}
              <Link to="/products" className="block mt-6">
                <Button variant="outline" className="w-full rounded-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </div>
  );
};

export default Cart;
