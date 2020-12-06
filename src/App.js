import './App.css';
import drawing1 from './assets/drawing1.png'
import drawing2 from './assets/drawing2.png'
import drawing3 from './assets/drawing3.png'
import drawing4 from './assets/drawing4.png'

import { Row, Col } from 'antd';

function App() {
	return (
		<div className="page">
			<div className="header" style={{ marginBottom: 50 }}>
				<img className="logo" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Hochschule_Rhein-Waal-logo.svg/2000px-Hochschule_Rhein-Waal-logo.svg.png'} alt="logo" />
			</div>
			
			<p className="text">Dear <strong>Prof. Dr. -Ing. Stéphane Danjou</strong></p>
			
			<p className="text">My name is Timur Sabet (Student ID: 22343) and I am SE student, who took your <strong>Engineering Drawing and Design Attestation</strong> this winter semester. </p>
			
			<p className="text">Although I had some SolidWorks experience before , I wanted to take this semester seriously and started practicing a few weeks before the first assignment by doing small and easy exercises from the YouTube. (<a href="https://www.youtube.com/c/CADCAMTUTORIAL/videos">link</a>)</p>
			
			<div className="row text-image">
				<div className="col">
					<p className="text">On my first assignment, I got 68%, which is very reasonable, because I misunderstood small detail in a drawing that lead to different answers. However, after seeing the second assignment, I realized that I have already made this exact drawing a few weeks before and that I still remember the answers. </p>
				</div>
				<div className="drawingContainer">
					<img className="drawing" src={drawing1} alt="drawing" />
					<span className="description">Made by Timur Sabet on 10.11.2020</span>
				</div>
			</div>
			
			<p className="text">Of course, I wouldn't just submit the answer, so I started doing the task, but in the end my final answer was different again, but after several checks with the drawing, I couldn't find my mistake. Due to low time remaining and nervousness, and because I have already made a mistake on my first assignment, I wanted to get the maximum score so I decided to submit my current part with the "correct" answer. Only after submission, I realized, that I should have submitted the answer that I got and not the "correct" answer that I remember.</p>
			
			<div className="row text-image">
				<div className="col">
					<p className="text"><i>I fully understand that what I did looks like cheating, and just because I have done this exact drawing before, I should not submit the answers that are different from my current drawing. </i></p>
				</div>
				<div className="drawingContainer">
					<img className="drawing" src={drawing2} alt="drawing" />
					<span className="description">Made by Timur Sabet on 13.11.2020</span>
				</div>
			</div>	
			
			<p className="text">I sincerely ask you to review your final decision and also ask you to give a second chance to pass EDAD Attestation this semester (I have already passed the exam), even if it would require to do more exercises. I thank you for your understanding and I would appreciate any opportunitues! </p>

			<div className="row">
				<div className="drawingContainer" style={{ margin: "0px 50px" }}>
					<img className="drawing" src={drawing3} alt="drawing" />
					<span className="description">Made by Timur Sabet on 05.11.2020</span>
				</div>
				<div className="drawingContainer" style={{ margin: "0px 50px" }}>
					<img className="drawing" src={drawing4} alt="drawing" />
					<span className="description">Made by Timur Sabet on 07.11.2020</span>
				</div>
			</div>

			<div className="footer">
				<span className="small-text"><strong>by Timur Sabet (timur.sabet@hsrw.org)</strong></span>
			</div>
		</div>
	);
}

export default App;
