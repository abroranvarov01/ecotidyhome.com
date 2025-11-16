import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Sparkles, Leaf, Moon, Heart, ShoppingBag, Star, CheckCircle2, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">EcoTidyHome</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="#shop" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Shop
            </Link>
            <Link href="#benefits" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Benefits
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              About
            </Link>
            <Link href="#reviews" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Reviews
            </Link>
          </div>
          <Button size="sm" className="gap-2">
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">Cart (0)</span>
          </Button>
        </nav>
      </header>

      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-secondary/30 px-4 py-20 md:py-32">
        <div className="container mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit gap-1.5">
                <Sparkles className="h-3 w-3" />
                Natural Sleep Solutions
              </Badge>
              <h1 className="font-serif text-4xl font-bold leading-tight text-balance text-foreground md:text-6xl">
                Transform Your Sleep with Aromatherapy
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                Discover our curated collection of natural sleep and relaxation products. Infused with pure essential oils to help you unwind, relax, and achieve deeper, more restorative sleep.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  Shop Collection
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl bg-muted md:h-[500px]">
              <img
                src="/aromatherapy-diffuser-with-essential-oils-and-lave.jpg"
                alt="Aromatherapy sleep products"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Brand Story */}
      <section id="about" className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Sleep Better, Live Better
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground text-pretty">
              At EcoTidyHome, we believe quality sleep is the foundation of a healthy life. Our carefully crafted aromatherapy products combine ancient wisdom with modern science, using only the purest natural ingredients to create your perfect sleep sanctuary.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">100% Natural</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Pure essential oils with no synthetic additives
                </p>
              </div>
              <div className="space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Ethically Sourced</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Supporting sustainable farming practices
                </p>
              </div>
              <div className="space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Moon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Sleep Tested</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Formulated to promote restful sleep
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Product Categories */}
      <section id="shop" className="bg-secondary/30 px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Shop by Category
            </h2>
            <p className="text-muted-foreground">
              Find the perfect products for your sleep routine
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/essential-oil-bottles-with-lavender-and-chamomile.jpg"
                  alt="Essential Oils"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">Essential Oils</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Premium therapeutic-grade oils for diffusion and relaxation
                </p>
                <Button variant="outline" className="w-full">
                  Explore Oils
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/elegant-aromatherapy-diffuser-with-mist-in-modern-.jpg"
                  alt="Diffusers"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">Diffusers</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Beautifully designed diffusers that create the perfect ambiance
                </p>
                <Button variant="outline" className="w-full">
                  Shop Diffusers
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/silk-sleep-mask-and-pillow-spray-on-bed-with-laven.jpg"
                  alt="Sleep Accessories"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">Sleep Accessories</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Pillow sprays, sleep masks, and more for ultimate comfort
                </p>
                <Button variant="outline" className="w-full">
                  View Accessories
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Products */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Customer favorites for better sleep
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'Lavender Dreams Oil',
                price: '$24.99',
                rating: 4.9,
                image: 'https://static.vecteezy.com/system/resources/thumbnails/062/265/919/small_2x/small-glass-bottle-of-lavender-essential-oil-with-cork-and-dropper-cap-surrounded-by-fresh-lavender-flowers-on-a-light-wooden-surface-symbolizing-natural-wellness-aromatherapy-calm-video.jpg'
              },
              {
                name: 'Ceramic Diffuser',
                price: '$49.99',
                rating: 4.8,
                image: 'https://m.media-amazon.com/images/I/61Z8SUrKHpL._AC_UF894,1000_QL80_.jpg'
              },
              {
                name: 'Pillow Spray',
                price: '$18.99',
                rating: 4.9,
                image: 'https://slumbar.co.uk/wp-content/uploads/2022/06/Sleep-Spray-Lifestyle-3-300x300.jpg'
              },
              {
                name: 'Silk Sleep Mask',
                price: '$29.99',
                rating: 5.0,
                image: 'https://m.media-amazon.com/images/I/71jyX9XIpCL._AC_UF1000,1000_QL80_.jpg'
              }
            ].map((product, idx) => (
              <Card key={idx} className="group overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48 overflow-hidden bg-secondary/50">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <Badge className="absolute right-3 top-3 gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    {product.rating}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-1 font-semibold text-foreground">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    
                    <Button size="sm" variant="outline">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Aromatherapy Benefits */}
      <section id="benefits" className="bg-secondary/30 px-4 py-20">
        <div className="container mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[400px] rounded-2xl lg:h-[500px]">
              <img
                src="/person-relaxing-in-bed-with-aromatherapy-diffuser-.jpg"
                alt="Aromatherapy benefits"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                The Science of Better Sleep
              </h2>
              <p className="leading-relaxed text-muted-foreground text-pretty">
                Aromatherapy has been used for centuries to promote relaxation and improve sleep quality. Modern research confirms what ancient healers knew: natural scents can profoundly impact our wellbeing.
              </p>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle2, title: 'Reduces Stress & Anxiety', desc: 'Essential oils activate the limbic system, naturally calming your mind' },
                  { icon: CheckCircle2, title: 'Improves Sleep Quality', desc: 'Studies show lavender increases deep sleep by up to 20%' },
                  { icon: CheckCircle2, title: 'Natural & Safe', desc: 'No side effects or dependencies unlike sleep medications' },
                  { icon: CheckCircle2, title: 'Creates Sleep Rituals', desc: 'Scent triggers help train your brain for bedtime' }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-foreground">{benefit.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Your Journey to Better Sleep
            </h2>
            <p className="text-muted-foreground">
              Getting started is simple
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Choose Your Products',
                desc: 'Select from our curated collection of essential oils, diffusers, and sleep accessories',
                image: 'https://m.media-amazon.com/images/I/71+Rv5eDdLL.jpg'
              },
              {
                step: '02',
                title: 'Create Your Ritual',
                desc: 'Use your diffuser or pillow spray 30 minutes before bed to signal relaxation time',
                image: 'https://www.health.com/thmb/xcZygDVhJgDdCL1mizt5sPtDIxc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-537015415-2000-1599d6baef444473a233a4c0afe89f1d.jpg'
              },
              {
                step: '03',
                title: 'Sleep Peacefully',
                desc: 'Drift off naturally as calming aromas create the perfect environment for rest',
                image: 'https://thumbs.dreamstime.com/b/image-captures-peacefulness-person-sleeping-cozy-bed-soft-sunlight-creates-warm-atmosphere-perfect-themes-333027893.jpg'
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="mb-6 aspect-square overflow-hidden rounded-2xl bg-secondary/50">
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mb-2 font-serif text-4xl font-bold text-primary/30">{step.step}</div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="leading-relaxed text-muted-foreground text-pretty">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Testimonials */}
      <section id="reviews" className="bg-secondary/30 px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground">
              Join thousands who have transformed their sleep
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Jessica Thompson',
                role: 'Busy Mom of Three',
                text: 'The Lavender Dreams oil has completely changed my nighttime routine. I fall asleep faster and wake up feeling truly refreshed.',
                rating: 5
              },
              {
                name: 'Michael Anderson',
                role: 'Corporate Executive',
                text: 'As someone who struggled with insomnia, these products have been life-changing. The diffuser creates the perfect calming atmosphere.',
                rating: 5
              },
              {
                name: 'Olivia Parker',
                role: 'Holistic Therapist',
                text: 'I love that everything is natural and ethically sourced. The quality is exceptional and the scents are divine!',
                rating: 5
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-6 leading-relaxed text-muted-foreground text-pretty">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Newsletter */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <Card className="overflow-hidden bg-primary text-primary-foreground">
            <CardContent className="p-12">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl text-balance">
                  Get 15% Off Your First Order
                </h2>
                <p className="mb-8 text-lg text-primary-foreground/90 text-pretty">
                  Subscribe to our newsletter for exclusive offers, sleep tips, and new product launches.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 sm:w-80"
                  />
                  <Button size="lg" variant="secondary" className="gap-2">
                    Subscribe
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <p className="mt-4 text-sm text-primary-foreground/70">
                  Join 10,000+ subscribers. Unsubscribe anytime.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 9: Footer */}
      <footer className="border-t border-border bg-secondary/30 px-4 py-12">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <Leaf className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="font-serif text-xl font-semibold text-foreground">EcoTidyHome</span>
              </Link>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Natural sleep and relaxation products with aromatherapy to transform your wellbeing.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-foreground">Shop</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="transition-colors hover:text-foreground">Essential Oils</Link></li>
                <li><Link href="#" className="transition-colors hover:text-foreground">Diffusers</Link></li>
                <li><Link href="#" className="transition-colors hover:text-foreground">Sleep Accessories</Link></li>
                <li><Link href="#" className="transition-colors hover:text-foreground">Gift Sets</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-foreground">Learn</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="transition-colors hover:text-foreground">Sleep Guide</Link></li>
                <li><Link href="#" className="transition-colors hover:text-foreground">Aromatherapy 101</Link></li>
                <li><Link href="#" className="transition-colors hover:text-foreground">Blog</Link></li>
                <li><Link href="#" className="transition-colors hover:text-foreground">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-foreground">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="transition-colors hover:text-foreground">About Us</Link></li>
                <li><Link href="#" className="transition-colors hover:text-foreground">Contact</Link></li>
                <li><Link href="#" className="transition-colors hover:text-foreground">Sustainability</Link></li>
                <li><Link href="#" className="transition-colors hover:text-foreground">Shipping & Returns</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 EcoTidyHome. All rights reserved. Crafted with care for your wellbeing.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
