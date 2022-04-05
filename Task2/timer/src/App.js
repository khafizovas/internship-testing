import React from 'react';

import ButtonGroup from '@mui/material/ButtonGroup';

import Display from './Display';
import ResetButton from './ResetButton';
import StartPauseButton from './StartPauseButton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { timer: 0, paused: true };
	}

	tick = () => {
		this.setState({ timer: this.state.timer + 1 });
	};

	startTimer = () => {
		this.interval = setInterval(this.tick, 1000);
		this.setState({ paused: false });
	};

	stopTimer = () => {
		clearInterval(this.interval);
		this.setState({ paused: true });
	};

	reset = () => {
		this.setState({ timer: 0, paused: true });
		clearInterval(this.interval);
	};

	render() {
		return (
			<div>
				<Display time={this.state.timer} />

				<ButtonGroup>
					<StartPauseButton
						paused={this.state.paused}
						start={this.startTimer}
						stop={this.stopTimer}
					/>
					<ResetButton onClickReset={this.reset} />
				</ButtonGroup>
			</div>
		);
	}
}

export default App;
