import Aos from "aos";
import Head from "next/head";
import { useEffect, useState } from "react";
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
interface HomeProps {
  posts: BlogPost[];
}

export default function Home({ posts }: HomeProps) {
  useEffect(() => {
    // Load Bootstrap's JS on the client side
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
                      <strong>Author:</strong>{" "}
                      {post._embedded?.author?.[0]?.name || "authore"} |
                      <strong> Date:</strong>{" "}
                      {new Date(post.date).toLocaleDateString("en-GB")}
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
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `https:pranaair.com/wp-json/wp/v2/posts?_embed&t=${Date.now()}`
  );
  const posts: BlogPost[] = await res.json();
  return {
    props: { posts },
    revalidate: 10,
  };
};
