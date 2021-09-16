import {Grid,Label} from 'semantic-ui-react'

import LeftPanel from  '../components/LeftPanel'
import RightPanel from '../components/RightPanel'

import 'semantic-ui-css/semantic.min.css'
import './home.css'

const Home = () => {
	return(
		<>
			<Grid columns = {2} divided>
				<Grid.Row>
					<Grid.Column width = {6} className = "grid-middle" >
						<Label size = 'big'>Skills</Label><br /> 
						<Label size = ''  className = 'title'>Frontend</Label>
						<section className = "skills">
							<Label>Html</Label>
							<Label>Css</Label>
							<Label>Javascript</Label>
							<Label>React</Label>
							<Label>Redux</Label>
							<Label>Apollo Client</Label>
						</section>
						<Label size = '' className = 'title'>Backend</Label>
						<section className = "skills">
							<Label>Node JS</Label>
							<Label>Apollo Server </Label>
							<Label>Graphql</Label>
							<Label>Express</Label>
							<Label>Mongodb</Label>
							<Label>Graphql</Label>
						</section>

		

					</Grid.Column>
					<Grid.Column width = {10} >
						<Grid columns = {1} className = "about" >
							<Grid.Row>
								<Grid.Column>
									<Label size = 'big'>About me</Label> <br /> <br/>
									<Label> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </Label>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Label> Contact me </Label><br /> <br />
									<Label> Email: Physcript@gmail.com</Label> <br />
									<Label> #: 0917 123 1234 </Label>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</>
	)
}
export default Home