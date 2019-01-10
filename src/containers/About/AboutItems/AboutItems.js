import React from 'react'
import AboutItem from './AboutItem/AboutItem'
import coffee from '../../../assets/images/landingGallery/about/coffee.jpg'
import waffles from '../../../assets/images/landingGallery/about/waffles.jpg'
import tea from '../../../assets/images/landingGallery/about/tea.png'
import lunch from '../../../assets/images/landingGallery/about/lunch.jpg'
import pastries from '../../../assets/images/landingGallery/about/pastry.jpg'
import events from '../../../assets/images/landingGallery/about/event.jpg'
import brews from '../../../assets/images/landingGallery/about/patio.jpg'
import patio from '../../../assets/images/landingGallery/about/patio.jpg'

import classes from './AboutItems.css'

const aboutItems = () => {
	const aboutList = [
		{title: "Darn Good Coffee", image: coffee, desc: "Indie is known for bold, flavor-rich beans.  Our lattes are always velvety, our cappucinnos always big and frothy.  Hand-made to order, professionally prepared every time. With organic and non-dairy options, you'll get it just how you want it"},
		{title: "Waffles", image: waffles, desc: "Oh, yes.  Waffles all day.  In 2015, Indie was featured on Wake Up with Al Roker for our waffles.  The Wisconsin State Journal called us a \"waffle wonderland.\"  Crisp on the outside, soft on the inside, our waffles are characterized with a little nutty flavor that many people have called \"the best I've ever had anywhere.\"  We invented the Red + White waffle, a homage to the Badgers.  It's topped with house-made strawberry sauce and home-made vanilla whipped cream. Order a house favorite, or build your own."},
		{title: "Indie Tea", image: tea, desc: "Choose from more than 40 loose leaf teas for sale by the cup, pot or ounce.  Check out our wide variety of blacks, greens and herbals, including an impressive list of organics.  "},
		{title: "Lunch", image: lunch, desc: "Again, all day.  You could have lunch for breakfast, and breakfast for lunch.  Or have either one for dinner.  (We recommend waffles for dinner at least once per week.)  The Capital Times says our kitchen is inhabited by a \special juju,\" so you really can't go wrong with either choice, right?  The Onion calls our sandwiches \"some of the most original sandwiches in town.\"  Madison Magazine calls our pesto omelet focaccia one of Madison's best breakfast sandwiches.  The Capital Times said of our honey fig and goat cheese sandwich:  \"It is a sweet-and-savory combination of ingredients that seem like they shouldn't go together, but combine for a lunch that manages to be sophisticated and upscale, while simultaneously indulging your inner sweet tooth.\"  Need gluten-free options?  We have awesome gluten-free bread and bagels you can sub in any sandwich.  So really, our whole lunch menu is available to you."},
		{title: "Pastries & Granola", image: pastries, desc: "Our Indie Ovens produce scratch biscotti, muffins, cowboy cookies, scones, granola, desserts and more.  We also welcome  tasty croissants, morning buns, rhubarb bars and assorted fresh-baked breads from local favorites Madison Sourdough and Grace Cheesecakes. "},
		{title: "Free Events", image: events, desc: "Every so often, you'll find film screenings, book readings, live music and meet-ups.  Events almost always start at 6 or 7 and are done by 8 or 9.  No waiting through multiple opening bands.  No need to stay up until 2 a.m.  You'll find a cozy, laid-back atmosphere that is intimate and memorable.  The Daily Cardinal says:  \"The cafe has displayed multiple national touring acts [such as] Jason Anderson, Eef Barzelay and Jason Mraz.\"   The Isthmus says:  \"I admire Indie's eclectic  evening programs of film, video, music and occasional reading events.\"  Go to our Events page for our current schedule.  This info. is also available on our Facebook page:  facebook.com/indiecoffee."},
		{title: "Microbrews & Spirits. ", image: brews, desc: "Most of our microbrews are from Wisconsin, and we have spirits such as Jameson whiskey, Kahlua and Baily's to add to your favorite coffee drink.  You'll never again get an Irish coffee at a bar (think: open-topped coffee pot sitting on a hot plate) after trying ours.  Or try a real fruit smoothie with a shot of rum.  That's three servings of fruit...with a little something extra you can't get at a smoothie shop!  "},
		{title: "Zen Patio", image: patio, desc: "In back, well away from the buzz of Regent, you'll find our peaceful patio.  Sit down and relax.  Pretend you're on vacation!  We'll bring your order out to you.  Open when the weather's nice."},
	]

	const aboutListShort = [
		{title: "Darn Good Coffee", image: coffee, desc: "Indie is known for bold, flavor-rich beans.  Our lattes are always velvety, our cappucinnos always big and frothy.  Hand-made to order, professionally prepared every time. With organic and non-dairy options, you'll get it just how you want it."},
		{title: "Waffles", image: waffles, desc: "Oh, yes.  Waffles all day.  In 2015, Indie was featured on Wake Up with Al Roker for our waffles and the Wisconsin State Journal has called us a \"waffle wonderland.\"  Crisp on the outside and soft on the inside, our waffles are characterized with a little nutty flavor that many people have called \"the best I've ever had anywhere.\" Order a house favorite, or build your own."},
		{title: "Indie Tea", image: tea, desc: "Choose from more than 40 loose leaf teas for sale by the cup, pot or ounce.  Check out our wide variety of blacks, greens and herbals, including an impressive list of organics.  "},
		{title: "Lunch", image: lunch, desc: "Madison Magazine calls our pesto omelet focaccia one of Madison's best breakfast sandwiches.  Our honey fig and goat cheese sandwich “is a sweet-and-savory combination of ingredients that seem like they shouldn't go together, but combine for a lunch that manages to be sophisticated and upscale, while simultaneously indulging your inner sweet tooth.\""},
		{title: "Pastries & Granola", image: pastries, desc: "Our Indie Ovens produce scratch biscotti, muffins, cowboy cookies, scones, granola, desserts and more.  We also welcome  tasty croissants, morning buns, rhubarb bars and assorted fresh-baked breads from local favorites Madison Sourdough and Grace Cheesecakes. "},
		{title: "Free Events", image: events, desc: "Every so often, you'll find film screenings, book readings, live music and meet-ups. You'll find a cozy, laid-back atmosphere that is intimate and memorable. The cafe has displayed multiple national touring acts such as Jason Anderson, Eef Barzelay and Jason Mraz. Go to our Events page for our current schedule."},
		{title: "Microbrews & Spirits. ", image: brews, desc: "Most of our microbrews are from Wisconsin, and we have spirits such as Jameson whiskey, Kahlua and Baily's to add to your favorite coffee drink.  You'll never again get an Irish coffee at a bar after trying ours.  Or try a real fruit smoothie with a shot of rum – that's three servings of fruit...with a little something extra you can't get at a smoothie shop!"},
		{title: "Zen Patio", image: patio, desc: "When the weather is nice, sit down and relax on our peaceful patio out back, well away from the buzz of Regent Street. Pretend you’re on a vacation! We’ll even bring your order out to you!"},
	]

	return (
		<div className={classes.AboutItems}>
		{
			aboutListShort.map( item => {
				return <AboutItem title={item.title} img={item.image} desc={item.desc} />
			})
		}
		</div>
	)

}

export default aboutItems