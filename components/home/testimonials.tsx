export function Testimonials() {
  const testimonials = [
    {
      quote: "Trowbridge Gallery has transformed our office space with their curated collection. The art consultancy service was exceptional in helping us select pieces that reflect our brand values.",
      author: "James Anderson",
      role: "Creative Director, DesignWorks Studio"
    },
    {
      quote: "As an interior designer, I consistently rely on Trowbridge Gallery for their exceptional quality and diverse range of artwork. Their team's expertise has been invaluable for my clients.",
      author: "Emma Thompson",
      role: "Principal Designer, Thompson Interiors"
    },
    {
      quote: "The virtual exhibition feature allowed me to visualise exactly how the artwork would look in my home before purchasing. A truly innovative approach to art buying.",
      author: "Michael Chen",
      role: "Art Collector"
    }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">What Our Clients Say</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            From private collectors to interior designers and corporate spaces, discover why clients choose Trowbridge Gallery
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i} 
              className="border rounded-lg p-6 bg-card shadow-sm"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <blockquote className="text-card-foreground mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}