import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingCart, Share2, Minus, Plus, Star, Truck, ShieldCheck, RotateCcw, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products.json';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  const product = productsData.products.find(p => p.id === id);
  const relatedProducts = productsData.products
    .filter(p => p.category === product?.category && p.id !== id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
    toast.success(`${quantity} x ${product.name} added to cart!`);
  };

  const handleWhatsAppShare = () => {
    const message = `Check out this amazing product from Parivar Gifts!\n\n${product.name}\nPrice: ₹${product.price.toLocaleString()}\n\nVisit: ${window.location.href}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom section-padding">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary">Products</Link>
          <span>/</span>
          <Link to={`/products?category=${product.category}`} className="hover:text-primary capitalize">
            {product.category.replace('-', ' & ')}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Back Button */}
        <Link to="/products" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-muted shadow-card">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.badge && (
                <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full shadow-lg">
                  {product.badge}
                </span>
              )}
              {discount > 0 && (
                <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-lg">
                  -{discount}% OFF
                </span>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-secondary font-medium uppercase tracking-wide mb-2">
                {product.category.replace('-', ' & ')}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i <= Math.floor(product.rating)
                          ? 'fill-secondary text-secondary'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-primary">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                    Save ₹{(product.originalPrice - product.price).toLocaleString()}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <label className="font-medium">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-full overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <span className="text-muted-foreground">
                  Total: ₹{(product.price * quantity).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={handleAddToCart}
                className="flex-1 btn-festive text-lg py-6 gap-2"
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
              <Button
                onClick={() => {
                  toggleWishlist(product.id);
                  toast.success(
                    isInWishlist(product.id)
                      ? 'Removed from wishlist'
                      : 'Added to wishlist!'
                  );
                }}
                variant="outline"
                className={`px-6 py-6 rounded-full border-2 ${
                  isInWishlist(product.id)
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border'
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-primary' : ''}`}
                />
              </Button>
              <Button
                onClick={handleWhatsAppShare}
                variant="outline"
                className="px-6 py-6 rounded-full border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
              >
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <p className="text-xs text-muted-foreground">Free Delivery<br />Above ₹999</p>
              </div>
              <div className="text-center">
                <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <p className="text-xs text-muted-foreground">Genuine<br />Products</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <p className="text-xs text-muted-foreground">Easy<br />Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="pt-12 border-t border-border">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(prod => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
