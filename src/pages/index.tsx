import Aos from "aos";
import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";

// BlogPost Interface
interface BlogPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  date: string;
  _embedded?: { 
    "wp:featuredmedia"?: [{ source_url: string }];
    author?: [{ name: string }];
  };
}

// WooCommerce Product Interface
interface Product {
  id: number;
  name: string;
  price: string;
  permalink: string;
  images: [{ src: string }];
}

export default function Home() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });

    // Fetch Blog Posts
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/posts?_embed`);
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    // Fetch WooCommerce Products
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wc/v3/products?consumer_key=${process.env.NEXT_PUBLIC_WC_CONSUMER_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET}`
        );
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchPosts();
    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Blogs & Products</title>
      </Head>

      {/* Blog Section */}
      <section className="blog-sec py-5">
        <div className="container">
          <h2 className="text-center mb-4">Latest Blog Posts</h2>
          <div className="row">
            {posts.map((post) => (
              <div className="col-lg-4 col-md-6 mb-4" key={post.id}>
                <div className="card shadow-sm h-100" data-aos="fade-up">
                  {/* Blog Image */}
                  {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                    <Image
                      src={post._embedded["wp:featuredmedia"][0].source_url}
                      alt="Blog Thumbnail"
                      width={350}
                      height={200}
                      className="card-img-top"
                      style={{ objectFit: "cover" }}
                    />
                  )}

                  <div className="card-body">
                    {/* Blog Title */}
                    <h5 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

                    {/* Author & Date */}
                    <p className="text-muted">
                      <strong>Author:</strong> {post._embedded?.author?.[0]?.name || "Unknown"} <br />
                      <strong>Date:</strong> {new Date(post.date).toLocaleDateString("en-GB")}
                    </p>

                    {/* Blog Excerpt */}
                    <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />

                    {/* Read More Button */}
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="product-sec py-5">
        <div className="container">
          <h2 className="text-center mb-4">Latest Products</h2>
          <div className="row">
            {products.map((product) => (
              <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
                <div className="card shadow-sm h-100" data-aos="fade-up">
                  {/* Product Image */}
                  {product.images[0]?.src && (
                    <Image
                      src={product.images[0].src}
                      alt={product.name}
                      width={350}
                      height={200}
                      className="card-img-top"
                      style={{ objectFit: "cover" }}
                    />
                  )}

                  <div className="card-body">
                    {/* Product Name */}
                    <h5 className="card-title">{product.name}</h5>

                    {/* Product Price */}
                    <p className="text-muted">
                      <strong>Price:</strong> ${product.price}
                    </p>

                    {/* Buy Now Button */}
                    <a href={product.permalink} target="_blank" rel="noopener noreferrer" className="btn btn-success">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
