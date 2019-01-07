import React from 'react'
import classes from './Footer.css'

const footer = () => (
	<div className={classes.Footer}>
		<span className={classes.Footersocial}>
		  <iframe class="github-btn" src="https://ghbtns.com/github-btn.html?user=philipwalton&repo=solved-by-flexbox&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="109px" height="20px"></iframe>
		</span>
		<div className={classes.Footercredits}>
		  <span className={classes.Footercredit}>Created and maintained by <a href="https://philipwalton.com">Philip Walton</a>.</span>

		  <span className={classes.Footercredit}>Source code and examples released under the <a href="https://github.com/philipwalton/solved-by-flexbox/blob/master/LICENSE">MIT</a> license.</span>

		  <span className={classes.Footercredit}>Website and documentation licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.</span>
		</div>
	</div>
)

export default footer

	// <span class="Footer-social">
	//   <iframe class="github-btn" src="https://ghbtns.com/github-btn.html?user=philipwalton&repo=solved-by-flexbox&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="109px" height="20px"></iframe>
	//   <a href="https://twitter.com/philwalton" class="twitter-follow-button" data-show-count="true" data-lang="en">@philwalton</a>
	//   <a href="https://twitter.com/share" class="twitter-share-button" data-text="A showcase of traditionally hard CSS problems, easily solved using flexbox." data-url="https://philipwalton.github.io/solved-by-flexbox/" data-count="horizontal" data-via="philwalton" data-related="philwalton:Creator of Solved by Flexbox">Tweet</a>
	// </span>
	// <div class="Footer-credits">
	//   <span class="Footer-credit">Created and maintained by <a href="/">Philip Walton</a>.</span>

	//   <span class="Footer-credit">Source code and examples released under the <a href="/">MIT</a> license.</span>

	//   <span class="Footer-credit">Website and documentation licensed under <a href="/">CC BY 4.0</a>.</span>
	// </div>