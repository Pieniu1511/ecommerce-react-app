import React from 'react'
import classes from './HomePage.module.css'
import Product from '../../components/Products/Products'

function HomePage() {
	return (
		<>
			<section className={classes.home}>
				<div className={`${classes.homeContainer} container`}>
					<div className={classes.top}>
						<div className={classes.topLeft}>
							<div className={classes.mainBannerTxt}>
								<p className={classes.mainBannerTop}>SUPERCHARGED FOR PROS.</p>
								<h2>Special Sale</h2>
								<p className={classes.mainBannerBottom}>From $999.00 or $41.00/mo. for 24/mo.</p>
							</div>
							<img
								src='/images/main-banner.jpg'
								alt='Woman listening to music with headphones'
								className={classes.mainBanner}
							/>
						</div>
						<div className={classes.topRight}>
							<div className={classes.banner}>
								<img src='/images/catbanner-01.jpg' alt='laptop' className={classes.bannerImg} />
								<div className={classes.bannerTxt}>
									<p className={classes.bannerTop}>Best sale</p>
									<p className={classes.bannerTittle}>Laptops Max</p>
									<p className={classes.bannerBottom}>From $1699.00 or $64.62/mo.</p>
								</div>
							</div>
							<div className={classes.banner}>
								<div className={classes.bannerTxt}>
									<p className={classes.bannerTop}>New arrival</p>
									<p className={classes.bannerTittle}>Buy IPad Air</p>
									<p className={classes.bannerBottom}>From $599.00 or $49.91/mo.</p>
								</div>
								<img src='/images/catbanner-03.jpg' alt='ipad' className={classes.bannerImg} />
							</div>
							<div className={classes.banner}>
								<div className={classes.bannerTxt}>
									<p className={classes.bannerTop}>15% off</p>
									<p className={classes.bannerTittle}>Smarwatch 7</p>
									<p className={classes.bannerBottom}>Shop the lates band styles and colors.</p>
								</div>
								<img src='/images/catbanner-02.jpg' alt='laptop' className={classes.bannerImg} />
							</div>
							<div className={classes.banner}>
								<div className={classes.bannerTxt}>
									<p className={classes.bannerTop}>Free Engraving</p>
									<p className={classes.bannerTittle}>AirPods Max</p>
									<p className={classes.bannerBottom}>High-fidelity playback & ultra-low distortion</p>
								</div>
								<img src='/images/catbanner-04.jpg' alt='laptop' className={classes.bannerImg} />
							</div>
						</div>
					</div>
				</div>
			</section>
			<Product />
		</>
	)
}

export default HomePage
