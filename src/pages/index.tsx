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
      <section className="hero-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div data-aos="fade-up" className="hero-heading">
                <h1>
                  Monitor the air you <br /> are breathing
                </h1>
                <p>
                  Own an air quality monitor to now the air quality around you.{" "}
                </p>
                <a className="page-btn" href="#">
                  <img src="./img/grow-btn.png" alt="" /> Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>
      <section className="air-quality-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div data-aos="fade-up" className="air-quality-heading">
                <h2>
                  {" "}
                  <span> What is </span>
                  <br /> air quality monitoring?
                </h2>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
        <section className="air-quality-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div data-aos="fade-up" className="air-quality-sub-heading">
                  <h2>Air Quality</h2>
                  <p>
                    air quality is more worse than outdoor. Keep an eye on your
                    indoor air quality in real-time. Don't take risk on your
                    health. Understanding the air quality is the first step to
                    protect yourself from pollution Data comparison of Prana
                    Air’s PM2.5 monitor with a high-end air quality monitoring
                    device. Our low-cost monitors and sensors are as accurate as
                    a high-end device.{" "}
                  </p>
                </div>
                <div className="aqi-calculated">
                  <div className="calcu-btn">
                    <img src="./img/aqi-calcu-btn.png" alt="" />
                  </div>
                  <ul>
                    <li>
                      <img src="./img/9-real-time-parameters.png" alt="" />
                      <span> How AQI is calculated?</span>
                    </li>
                    <li>
                      <img src="./img/aqi-calculated.png" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="protect-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="tabs">
                <div className="tab-btn">
                  <button className="tab-button active" data-tab="tab1">
                    <ul>
                      <li>
                        <h4>Indoor</h4>
                        <span>Indoor pollutants</span>
                      </li>
                      <li>
                        <img src="./img/aqi-calcu-btn.png" alt="" />
                      </li>
                    </ul>
                  </button>
                  <button className="tab-button" data-tab="tab2">
                    <ul>
                      <li>
                        <h4>Outdoor</h4>
                        <span>Outdoor pollutants</span>
                      </li>
                      <li>
                        <img src="./img/aqi-calcu-btn.png" alt="" />
                      </li>
                    </ul>
                  </button>
                </div>
                <div
                  data-aos="fade-up"
                  id="content2-tab1"
                  className="tab-content tab-content-para"
                >
                  <h4>Protect your health from Indoor Pollution</h4>
                  <p>
                    Indoor air quality is more worse than outdoor. Keep an eye
                    on your indoor air quality in real-time. Don't take risk on
                    your health. Unstanding the air quality is the first step to
                    protect yourself from pollution.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  id="content2-tab2"
                  className="tab-content tab-content-para hidden"
                >
                  <h4>Protect your health from Outdoor Pollution</h4>
                  <p>
                    Indoor air quality is more worse than outdoor. Keep an eye
                    on your indoor air quality in real-time. Don't take risk on
                    your health. Unstanding the air quality is the first step to
                    protect yourself from pollution.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="img-box">
                <div id="content1-tab1" className="tab-content indoor-box">
                  <ul>
                    <li>
                      <img src="./img/co2.webp" alt="" />
                    </li>
                    <li>
                      <img src="./img/pm2.5.png" alt="" />
                    </li>
                    <li>
                      <img src="./img/pm2.5.png" alt="" />
                    </li>
                  </ul>
                </div>
                <div
                  id="content1-tab2"
                  className="tab-content hidden indoor-box outdoor-box"
                >
                  <ul>
                    <li>
                      <img src="./img/co2.webp" alt="" />
                    </li>
                    <li>
                      <img src="./img/pm2.5.png" alt="" />
                    </li>
                    <li>
                      <img src="./img/no2.webp" alt="" />
                    </li>
                    <li>
                      <img src="./img/co.webp" alt="" />
                    </li>
                    <li>
                      <img src="./img/tvoc.webp" alt="" />
                    </li>
                    <li>
                      <img src="./img/hcho.webp" alt="" />
                    </li>
                    <li>
                      <img src="./img/so2.webp" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="data-accuracy-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div data-aos="fade-up" className="data-accuracy-heading">
                <h2>
                  <span>Data Accuracy Level</span>
                  Comparison Chart With BAM
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div data-aos="fade-up" className="data-accuracy-para">
                <p>
                  Data comparison of Prana Air’s PM2.5 monitor with a high-end
                  air quality monitoring device. Our low-cost monitors and
                  sensors are as accurate as a high-end device.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="data-accuracy-img">
                <img src="./img/data-accuracy-level.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="world-map-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div data-aos="fade-up" className="world-map-heading">
                <h2>
                  We consume 1 million breaths of air every month without
                  knowing how the air quality affects our bodies, mind and
                  comfort.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <section className="who-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div data-aos="fade-up" className="according-who">
                  <h3>
                    <strong>92%</strong> of the world population is exposed to
                    harmful levels of air pollution.
                  </h3>
                  <h4>
                    According to <strong>WHO</strong>
                  </h4>
                </div>
              </div>
              <div className="col-lg-6">
                <div data-aos="fade-up" className="according-who agency">
                  <h3>
                    The indoors air quality we breathe is{" "}
                    <strong>2 to 5 times worse</strong> than outdoors.
                  </h3>
                  <h4>
                    According to{" "}
                    <strong>Environmental Protection Agency</strong>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="major-pollution-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div data-aos="fade-up" className="major-pollution-heading">
                <h2>
                  <span>Major pollutants in</span>
                  indoor and outdoor?
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div data-aos="fade-up" className="pocket-pm-box">
                <div className="btn-img">
                  <a href="#">
                    <img src="./img/pranaair-btn.webp" alt="" />
                  </a>
                </div>
                <div className="pocket-monitor-img">
                  <img src="./img/pocket-pm-monitor.webp" alt="" />
                </div>
                <div className="pockect-txt">
                  <h3>Pocket PM</h3>
                  <p>
                    Indoor air quality is more worse than outdoor. Keep an eye
                    on your indoor air quality in real-time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div data-aos="fade-up" className="pocket-pm-box">
                <div className="btn-img">
                  <a href="#">
                    <img src="./img/pranaair-btn.webp" alt="" />
                  </a>
                </div>
                <div className="pocket-monitor-img">
                  <img src="./img/indoor-monitor-cair.webp" alt="" />
                </div>
                <div className="pockect-txt">
                  <h3>CAir+</h3>
                  <p>
                    Indoor air quality is more worse than outdoor. Keep an eye
                    on your indoor air quality in real-time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div data-aos="fade-up" className="outdoor-box">
                <div className="btn-img">
                  <a href="#">
                    <img src="./img/pranaair-btn.webp" alt="" />
                  </a>
                </div>
                <div className="pocket-monitor-img">
                  <img src="./img/outdoor-monitor.webp" alt="" />
                </div>
                <div className="outdoor-txt">
                  <h3>Outdoor Monitor</h3>
                  <p>
                    Indoor air quality is more worse than outdoor. Keep an eye
                    on your indoor air quality in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="qoute-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="quote-img">
                <img src="./img/quote-icon.png" alt="" />
              </div>
              <div data-aos="fade-up" className="quote-para">
                <p>
                  We consume 1 million breaths of air every month without
                  knowing how the air quality affects our bodies, mind and
                  comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="air-quality-product-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>
                <span>Air quality</span> products
              </h2>
            </div>
          </div>
          <div className="row dashboard">
            <div className="aqi-btn">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="./img/aqi-calcu-btn.png" alt="" />
              </a>
            </div>
            <div className="col-lg-4">
              <div data-aos="fade-up" className="dashboard-box">
                <h3>AQI Dashboard</h3>
                <h4>Protect your health from </h4>
                <p>
                  Indoor air quality is more worse than outdoor. Keep an eye on
                  your indoor{" "}
                </p>
                <a className="page-btn" href="#">
                  <img src="./img/grow-btn.png" alt="" /> See More
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="dashboard-img">
                <img src="./img/aqi-dashboard.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div data-aos="fade-up" className="aqi-app">
                <div className="aqi-btn">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src="./img/aqi-calcu-btn.png" alt="" />
                  </a>
                </div>
                <h3>AQI App </h3>
                <h4>Protect your health from </h4>
                <p>
                  Indoor air quality is more worse than outdoor. Keep an eye on
                  your indoor
                </p>
                <img src="./img/aqi-mobile-app.webp" alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div data-aos="fade-up" className="aqi-app aqi-tv-app">
                <div className="aqi-btn">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src="./img/aqi-calcu-btn.png" alt="" />
                  </a>
                </div>
                <h3>AQI TV app </h3>
                <h4>Protect your health from </h4>
                <p>
                  Indoor air quality is more worse than outdoor. Keep an eye on
                  your indoor
                </p>
                <img src="./img/aqi-tv-app.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-clinet-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div data-aos="fade-up" className="our-clinet-heading">
                <h2>
                  <span>Our</span> Clintele
                </h2>
                <h3>Pleasure to work with</h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div data-aos="fade-up" className="our-clinet-heading">
                <p>
                  We proudly serve businesses and individuals who prioritize
                  clean air solutions to create a healthier environment for
                  everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="marquee">
                <div className="marquee-inner">
                  <div className="marquee-img-box">
                    <img src="./img/zeco.webp" alt="" />
                    <img src="./img/university of chicago.webp" alt="" />
                    <img src="./img/omaxe.webp" alt="" />
                    <img src="./img/novotel.webp" alt="" />
                    <img src="./img/lt.webp" alt="" />
                    <img src="./img/gmda.webp" alt="" />
                    <img src="./img/daimler.webp" alt="" />
                    <img src="./img/emaar.webp" alt="" />
                    <img src="./img/asianpaints.webp" alt="" />
                  </div>

                  <div className="marquee-img-box">
                    <img src="./img/zeco.webp" alt="" />
                    <img src="./img/university of chicago.webp" alt="" />
                    <img src="./img/omaxe.webp" alt="" />
                    <img src="./img/novotel.webp" alt="" />
                    <img src="./img/lt.webp" alt="" />
                    <img src="./img/gmda.webp" alt="" />
                    <img src="./img/daimler.webp" alt="" />
                    <img src="./img/emaar.webp" alt="" />
                    <img src="./img/asianpaints.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="marquee">
                <div className="marquee-inner left-slid">
                  <div className="marquee-img-box">
                    <img src="./img/zeco.webp" alt="" />
                    <img src="./img/university of chicago.webp" alt="" />
                    <img src="./img/omaxe.webp" alt="" />
                    <img src="./img/novotel.webp" alt="" />
                    <img src="./img/lt.webp" alt="" />
                    <img src="./img/gmda.webp" alt="" />
                    <img src="./img/daimler.webp" alt="" />
                    <img src="./img/emaar.webp" alt="" />
                    <img src="./img/asianpaints.webp" alt="" />
                  </div>

                  <div className="marquee-img-box">
                    <img src="./img/zeco.webp" alt="" />
                    <img src="./img/university of chicago.webp" alt="" />
                    <img src="./img/omaxe.webp" alt="" />
                    <img src="./img/novotel.webp" alt="" />
                    <img src="./img/lt.webp" alt="" />
                    <img src="./img/gmda.webp" alt="" />
                    <img src="./img/daimler.webp" alt="" />
                    <img src="./img/emaar.webp" alt="" />
                    <img src="./img/asianpaints.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="app-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div data-aos="fade-up" className="app-heading">
                <h2>
                  <span>Air quality monitor</span> applications
                </h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="construct-img">
                <img src="./img/construction-site.webp" alt="" />
                <div data-aos="fade-up" className="app-title">
                  <h3>Constructions Sites</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="app-box construct-img">
                <img src="./img/school.webp" alt="" />
                <div data-aos="fade-up" className="app-title">
                  <h3>Schools</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="app-box construct-img">
                <img src="./img/real-estate.webp" alt="" />
                <div data-aos="fade-up" className="app-title">
                  <h3>Real-estate</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="app-box construct-img">
                <img src="./img/smart-homes.webp" alt="" />
                <div data-aos="fade-up" className="app-title">
                  <h3>Smart Homes</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="app-box construct-img">
                <img src="./img/hospital-health-care.webp" alt="" />
                <div data-aos="fade-up" className="app-title">
                  <h3>Hospital and health care</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="lets-talk">
                <h2 data-aos="fade-up">Let’s Talk</h2>
                <p data-aos="fade-up">
                  Have some big idea or brand to develop and need help? Then
                  reach out we'd love to hear about your project and provide
                  help
                </p>
                <ul>
                  <li>
                    <span>Mail Us</span>
                    <a href="#">Info@purelogic.in</a>
                  </li>
                  <li>
                    <span>Call Us</span>
                    <a href="#">+91 73918 73918</a>
                  </li>
                  <li>
                    <span>Address</span>
                    <a href="#">
                      Crown Heights, 7th Floor, 706, Rohini Sector - 10, New
                      Delhi - 110085, India
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>
      <section className="faq-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div data-aos="fade-up" className="faq-heading">
                <h2>Frequently asked questions</h2>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span>01</span> Alright, but what exactly do you do?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        As a creative agency we work with you to develop
                        solutions to address your brand needs. That includes
                        various aspects of brand planning and strategy,
                        marketing and design.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span>02</span> Alright, but what exactly do you do?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        As a creative agency we work with you to develop
                        solutions to address your brand needs. That includes
                        various aspects of brand planning and strategy,
                        marketing and design.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span>03</span> Alright, but what exactly do you do?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        As a creative agency we work with you to develop
                        solutions to address your brand needs. That includes
                        various aspects of brand planning and strategy,
                        marketing and design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
