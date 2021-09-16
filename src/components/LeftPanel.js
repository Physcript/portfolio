import { Image , Label} from 'semantic-ui-react'

import {Link} from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import '../App.css'

const LeftPanel = () => {
	return(
		<div className = "left-panel">
			<Image className = "profile" src= "https://i.im.ge/2021/09/15/TwYuOr.jpg"  circular />
			<Label>John Batino</Label>

			<section className = "menu">
				<Label as = {Link} to = '/'>Home</Label>
				<Label as = {Link} to = '/mywork'>My Work</Label>
				<Label as = {Link}>Contact me</Label>
			</section>

			<section className = "menu-link">
				<Image src = "https://i.im.ge/2021/09/15/TwY7ya.png" /> 
				<Image src="https://i.im.ge/2021/09/15/TwY5hF.png" />
				<Image src="https://i.im.ge/2021/09/15/TwYjB9.png" />
			</section>
		</div>

	)
}

export default LeftPanel