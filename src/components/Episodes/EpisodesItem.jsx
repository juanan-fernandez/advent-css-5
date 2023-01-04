import './EpisodesItem.css';

const EpisodesItem = ({ episode, onClickCheck }) => {
	const { id, title, done } = episode;

	const onChangeCheck = () => {
		onClickCheck(id);
	};

	const style = `list-item${done ? ' list-item--done' : ''}`;
	const img = (
		<img
			src={done ? '/images/checkbox--checked.svg' : '/images/checkbox--unchecked.svg'}
			alt=''
			onClick={onChangeCheck}
		/>
	);
	return (
		<div className={style}>
			<div>{img}</div>
			<div>
				{id} || {title}
			</div>
		</div>
	);
};

export default EpisodesItem;
