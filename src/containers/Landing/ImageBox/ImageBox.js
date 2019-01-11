import React from 'react'
import classes from './ImageBox.css'
import BottomImage from './BottomImage/BottomImage'
// import topImg from '../../../assets/images/landingGallery/landing/top.jpg'
import topImg from '../../../assets/images/landingGallery/landing/bottom_left.jpg'
// import leftImg from '../../../assets/images/landingGallery/landing/bottom_left.jpg'

import leftImg from '../../../assets/images/landingGallery/waffles/waffles.jpg'

// import middleImg from '../../../assets/images/landingGallery/landing/bottom_mid.jpg'
import middleImg from '../../../assets/images/landingGallery/house/indie_front2.jpg'
import rightImg from '../../../assets/images/landingGallery/landing/bottom_right.jpg'

const imageBox = () => {
	const bottomImageList = [
		{src: leftImg, alt: ""},
		{src: middleImg, alt: ""},
		{src: rightImg, alt: ""}
	]

	return (
		<div className={classes.imageBox}>

			<div className={classes.topImage}>
				<img src={topImg} alt="" />
			</div>

			<div className={classes.bottomImages}>
				{
					bottomImageList.map( image => {
						return <BottomImage src={image.src} alt={image.alt} />
					})
				}
			</div>

		</div>
	)
}

export default imageBox