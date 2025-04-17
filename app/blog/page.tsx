import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trowbridge Journal | Art Blog | Expert Insights & Artist Interviews",
  description: "Explore the Trowbridge Gallery Journal for expert insights, artist interviews, collecting guides, and the latest trends in contemporary art. Discover articles on interior design, textile art, and collecting tips from London's premier fine art gallery.",
  keywords: "art blog, contemporary art insights, artist interviews, art collecting guide, interior design with art, textile art trends, fine art journal, Trowbridge Gallery blog, art world news",
}

export default function BlogPage() {
  // Placeholder blog data - this would typically come from a CMS or database
  const blogPosts = [
    {
      id: "1",
      title: "Emerging Artists to Watch in 2025",
      excerpt: "Discover the rising stars making waves in contemporary art this year.",
      coverImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Elizabeth Sutton",
      publishedAt: "April 15, 2025",
    },
    {
      id: "2",
      title: "The Art of Curation: Creating Balance in Interior Design",
      excerpt: "Expert advice on selecting and arranging artwork to enhance your interior spaces.",
      coverImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "James Anderson",
      publishedAt: "March 28, 2025",
    },
    {
      id: "3",
      title: "Behind the Scenes: A Day in Our Print Studio",
      excerpt: "Take a virtual tour of our artisan print workshop and discover our specialized techniques.",
      coverImage: "https://static.trowbridgegallery.com/lib/static/VirtualGallery/homepage_squares/whatsnew.jpg",
      author: "Maria Chen",
      publishedAt: "February 14, 2025",
    },
    {
      id: "4",
      title: "The Evolution of Textile Art in Contemporary Spaces",
      excerpt: "How textile art has transformed from traditional craft to cutting-edge contemporary expression.",
      coverImage: "https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Rebecca Taylor",
      publishedAt: "May 2, 2025",
    },
    {
      id: "5",
      title: "Collecting Art: A Guide for First-Time Buyers",
      excerpt: "Essential advice for navigating the art market and building a collection you'll treasure.",
      coverImage: "https://images.unsplash.com/photo-1577720643272-265f09367456?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Thomas Wright",
      publishedAt: "April 30, 2025",
    },
    {
      id: "6",
      title: "Artist Spotlight: In Conversation with Emma Thompson",
      excerpt: "An exclusive interview with the botanical artist whose detailed studies have captivated collectors worldwide.",
      coverImage: "https://images.unsplash.com/photo-1602615576820-ea14cf3e476a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Daniel Foster",
      publishedAt: "April 22, 2025",
    },
  ]

  return (
    <div className="container py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Trowbridge Journal</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore articles, interviews, and insights from the art world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">{post.publishedAt} • By {post.author}</p>
                <h2 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Explore more articles in our archive or subscribe to our newsletter for the latest updates.
          </p>
        </div>
      </div>
    </div>
  )
}