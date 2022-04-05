import Button from '@mui/material/Button';

const StartPauseButton = (props) => {
	const onClickHandler = () => {
		if (props.paused) {
			props.start();
		} else {
			props.stop();
		}
	};

	return (
		<Button onClick={onClickHandler}>{props.paused ? 'Start' : 'Pause'}</Button>
	);
};

export default StartPauseButton;
