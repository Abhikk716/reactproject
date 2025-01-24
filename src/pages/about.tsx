// pages/about.tsx
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <section className="hero-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="hero-heading">
                        <h1>Monitor the air you <br /> are breathing</h1>
                        <p>Own an air quality monitor to now the air quality around you. </p>
                        <a className="page-btn" href="#"><img src="./img/grow-btn.png" alt="" /> Learn More</a>
                    </div>
                </div>
                <div className="col-lg-6"></div>
            </div>
        </div>
    </section>
    <style jsx>{`
        .hero-sec {
        background: url(/img/prana-air-cair-monitor.webp);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 800px;
        position: relative;
    }

    .hero-sec:before {
        position: absolute;
        content: "";
        background-image: linear-gradient(90deg, #101010, #101010d6, transparent);
        width: 50%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 0;
    }

    .hero-heading p {
        color: #F9FAFF;
        font-size: 20px;
        font-weight: 300;
        width: 60%;
        line-height: 27px;
        padding: 5px 0 20px;
    }

    .page-btn {
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 20px;
        width: 33%;
        padding: 5px;
        border-radius: 50px;
        transition: .2s linear;
        background: #4BA9FF;
    }

    .page-btn img {
        width: 40px;
    }

    .hero-heading {
        padding-top: 300px;
        position: relative;
    }

    .page-btn:hover {
        background: #ffffff00;
        border: 1px solid #fff;
    }

      `}</style>
    </>
  );
}
