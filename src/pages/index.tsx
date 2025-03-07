import Aos from "aos";
import Head from "next/head";
import { useEffect } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";

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

interface Product {
  id: number;
  name: string;
  price: string;
  permalink: string;
  images: { src: string }[];
}

interface HomeProps {
  posts: BlogPost[];
  products: Product[];
}

export default function Home({ posts, products }: HomeProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Bootstrap with Next.js</title>
      </Head>
      
      {/* Blog Section */}
      <section className="blog-sec py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Latest Blog Posts</h2>
          <div className="row">
            {posts.map((post) => (
              <div key={post.id} className="col-md-4">
                <div className="card shadow-sm">
                  {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                    <img
                      src={post._embedded["wp:featuredmedia"][0].source_url}
                      className="card-img-top"
                      alt="Blog Thumbnail"
                    />
                  )}
                  <div className="card-body">
                    <h5
                      className="card-title"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <p className="text-muted small">
                      <strong>Author:</strong> {post._embedded?.author?.[0]?.name || "Author"} |
                      <strong> Date:</strong> {new Date(post.date).toLocaleDateString("en-GB")}
                    </p>
                    <p
                      className="card-text"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    />
                    <a
                      href={post.link}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
      <section className="products-sec py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4">Latest Products</h2>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4">
                <div className="card shadow-sm">
                  {product.images?.[0]?.src && (
                    <img
                      src={product.images[0].src}
                      className="card-img-top"
                      alt={product.name}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price: ${product.price}</p>
                    <a
                      href={product.permalink}
                      className="btn btn-success"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Product
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

export const getStaticProps: GetStaticProps = async () => {
  const postsRes = await fetch(
    `https://pranaair.com/wp-json/wp/v2/posts?_embed&t=${Date.now()}`
  );
  const productsRes = await fetch(
    `https://pranaair.com/wp-json/wc/v3/products?consumer_key=${process.env.WOOCOMMERCE_CONSUMER_KEY}&consumer_secret=${process.env.WOOCOMMERCE_CONSUMER_SECRET}`
  );

  const posts: BlogPost[] = await postsRes.json();
  const products: Product[] = await productsRes.json();

  return {
    props: { posts, products },
    revalidate: 10,
  };
};