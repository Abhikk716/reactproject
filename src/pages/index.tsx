import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bootstrap with Next.js</title>      
      </Head>
      <section className="hero-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="hero-heading">
                        <h1>Clean air initiative</h1>
                        <p>Despite the fact that the recommendations are neither standards.</p>
                        <a className="page-btn" href="#"><img src="./img/btn-icon.png" alt=""/> Contribute now</a>
                    </div>
                </div>
                <div className="col-lg-6"></div>
            </div>
        </div>
    </section>
    <section className="key-sec-heading">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="key-heading">
                        <h2>Key highlights</h2>
                        <h3>of the initiative</h3>
                    </div>
                </div>
                <div className="col-lg-6"></div>
            </div>
        </div>
    </section>
    <section className="key-sec-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="key-highlight">
                        <ul>
                            <li>
                                <img src="./img/data-on-your-fingertips.png" alt="" />
                                <h4>Data on your <br />
                                    <span>fingertips</span>
                                </h4>
                            </li>
                            <li>
                                <img src="./img/9-real-time-parameters.png" alt="" />
                                <h4>9 real-time <br />
                                    <span>parameters</span>
                                </h4>
                            </li>
                            <li>
                                <img src="./img/1-min-refresh-rate.png" alt="" />
                                <h4>1 min <br />
                                    <span>refresh rate</span>
                                </h4>
                            </li>
                            <li>
                                <img src="./img/96-signal-accuracy.png" alt="" />
                                <h4>96% signal <br />
                                    <span>accuracy</span>
                                </h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="contribute-sec">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="contribute-heading">
                        <h2>Contribute to a <span> world of clean air</span></h2>
                        <p><strong>Every breath matters.</strong> Join the mission to make air breathable for everyone.
                        </p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="contri-box">
                        <img src="./img/know-and-share.webp" alt="" />
                        <div className="contri-bx-txt">
                            <h3>Know and share</h3>
                            <p>Understand what you are breathing and share it with the world.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="contri-box">
                        <img src="./img/create-an-impact.webp" alt="" />
                        <div className="contri-bx-txt">
                            <h3>Create an impact</h3>
                            <p>Help your community prioritise public health and make the air clean for everyone. </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="contri-box">
                        <img src="./img/fill-the-data-gaps.webp" alt="" />
                        <div className="contri-bx-txt">
                            <h3>Fill the data gaps</h3>
                            <p>Many areas lack air quality monitors, leaving pollution unseen. Be the change by showing
                                live data to everyone.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="contri-box">
                        <img src="./img/pollution-hotspots.webp" alt="" />
                        <div className="contri-bx-txt">
                            <h3>Easy identifications of pollution hotspots</h3>
                            <p>Monitors installed in different locations can create hyperlocal air quality monitoring.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="why-join-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="why-heading">
                        <h2><span>Why join the</span> clean air initiative</h2>
                        <p>Be a part of a global movement for cleaner air and healthier communities.</p>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="why-bg-box">
                        <h3>Empowering Communities</h3>
                        <p>We focus on underprivileged areas, helping improve their air quality by checking smoke, odour
                            and
                            other levels. </p>
                    </div>
                    <div className="why-bg-box light-bg">
                        <h3>Fight for Justice</h3>
                        <p>Clean air is a right, not a privilege. Address environmental and climate inequities by
                            championing the right to clean air for everyone. </p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="air-quality-monitor-img">
                        <img src="./img/install-an-air-quality-monitor.webp" alt="" />
                        <div className="free-txt">
                            <h4>It’s Free! </h4>
                            <p>Yes, install an air quality monitor at no cost (shipping charges may apply) and
                                contribute
                                effortlessly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="live-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="check-live-heading">
                        <h2>Check <span>Live</span>
                            <br />
                            Air quality conditions in your area
                        </h2>
                        <p>AQI maps with governmentally authorised monitors and with Crowd initiative monitors.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="tab-box">
                        <div className="tab-buttons">
                            <button className="tab-btn active" data-tab="tab1">Govt. Data</button>
                            <button className="tab-btn" data-tab="tab2">Cloud</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="map-area">
                        <div className="tab-contents">
                            <div id="tab1" className="tab-content active"><img src="./img/aqi-maps.webp" alt="" /></div>
                            <div id="tab2" className="tab-content">New Map</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="contri-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="contri-heading">
                        <h2>Contribute to a
                            <span> world of clean air</span>
                        </h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="its-free-heaidng">
                        <h3>It’s Free!</h3>
                        <p>Yes, install an air quality monitor at no cost
                            <strong>(shipping charges may apply)</strong> and contribute effortlessly.
                        </p>
                        <a className="page-btn" href="#"><img src="./img/btn-icon.png" alt="" /> Contribute now</a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="its-free-img">
                        <img src="./img/air-quality-monitor-install-free.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="feature-heading">
                        <h3>Monitor Features</h3>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="track-key">
                        <h4>Tracks Key Pollutants</h4>
                        <ul>
                            <li><img src="./img/tvoc-icon.png" alt="" />Total Volatile
                                Compounds (TVOC)</li>
                            <li><img src="./img/tvoc-icon.png" alt="" />Air Quality Index
                                (AQI)</li>
                            <li><img src="./img/tvoc-icon.png" alt="" />Particulate Matter
                                (PM1)</li>
                            <li><img src="./img/tvoc-icon.png" alt="" />Particulate Matter
                                (PM2.5)</li>
                            <li><img src="./img/tvoc-icon.png" alt="" />Particulate Matter
                                (PM10)</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="built-outdoor">
                        <h4>Built for the Outdoors</h4>
                        <p>We focus on underprivileged areas, helping improve their air quality by checking smoke, odour
                            and other levels. </p>
                        <ul>
                            <li><img src="./img/mark-iocn.png" alt="" />Weatherproof housing</li>
                            <li><img src="./img/mark-iocn.png" alt="" />Compact</li>
                            <li><img src="./img/mark-iocn.png" alt="" />Wall-mountable</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="connect-heading">
                        <h2>Connectivity</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="connect-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="wifi-img">
                        <ul>
                            <li><img src="./img/wifi-2-4-ghz.webp" alt="" /></li>
                            <li>
                                <h3>WiFi 2.4GHz</h3>
                                <p>Yes, install an air quality monitor at no cost <strong>(shipping charges may
                                        apply)</strong> and contribute effortlessly.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="wifi-img mob-img">
                        <ul>
                            <li><img src="./img/mobile-app-access.webp" alt="" /></li>
                            <li>
                                <h3>Mobile app access</h3>
                                <p>Yes, install an air quality monitor at no cost <strong>(shipping charges may
                                        apply)</strong> and contribute effortlessly.</p>
                                <a href="#">Learn more <img src="./img/btn-icon.png" alt="" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="better-data-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="better-data-heading">
                        <h2>Better data access</h2>
                        <p>We focus on underprivileged areas, helping improve their air quality by checking smoke, odour
                            and other levels. </p>
                    </div>
                    <div className="bd-img">
                        <img src="./img/better-data-access.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="join-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="join-heading">
                        <h2>How to Join the Initiative?</h2>
                        <p>Join the innovation now to</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="join-btn">
                        <a className="page-btn" href="#"><img src="./img/btn-icon.png" alt="" /> Contribute now</a>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="how-join-box">
                        <ul>
                            <li>
                                <h3>01</h3>
                                <div className="join-txt">
                                    <div className="join-img">
                                        <img src="./img/get-the-monitor.webp" alt="" />
                                    </div>
                                    <h4>Get the monitor</h4>
                                    <p>Enroll yourself and order your air quality monitor to join the initiative. </p>
                                </div>
                            </li>
                            <li>
                                <h3>02</h3>
                                <div className="join-txt">
                                    <div className="join-img">
                                        <img src="./img/plug-and-play.webp" alt="" />
                                    </div>
                                    <h4>Plug and Play</h4>
                                    <p>Set up your monitor effortlessly just plug and play the device. </p>
                                </div>
                            </li>
                            <li>
                                <h3>03</h3>
                                <div className="join-txt">
                                    <div className="join-img">
                                        <img src="./img/access-data.webp" alt="" />
                                    </div>
                                    <h4>Access Data</h4>
                                    <p>View real-time data on your phone or other devices with WiFi connectivity. </p>
                                </div>
                            </li>
                            <li>
                                <h3>04</h3>
                                <div className="join-txt">
                                    <div className="join-img">
                                        <img src="./img/join-the-community.webp" alt="" />
                                    </div>
                                    <h4>Join the Community</h4>
                                    <p>Collaborate with others to make a tangible
                                        <br />
                                        difference.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="become-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="become-heading">
                        <h2>Become a Contributor</h2>
                        <p>Understand what you are breathing and share it with the world.</p>
                        <a className="page-btn" href="#"><img src="./img/become-btn.png" alt="" /> Contribute now</a>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="become-img">
                        <img src="./img/become-contributor.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="faq-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="faq-heading">
                        <h2>Frequently asked questions</h2>
                    </div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <span>01</span> Alright, but what exactly do you do?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>As a creative agency we work with you to develop solutions to address your brand
                                        needs. That includes various aspects of brand planning and strategy, marketing
                                        and design.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <span>02</span> Alright, but what exactly do you do?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>As a creative agency we work with you to develop solutions to address your brand
                                        needs. That includes various aspects of brand planning and strategy, marketing
                                        and design.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <span>03</span> Alright, but what exactly do you do?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>As a creative agency we work with you to develop solutions to address your brand
                                        needs. That includes various aspects of brand planning and strategy, marketing
                                        and design.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  );
}
