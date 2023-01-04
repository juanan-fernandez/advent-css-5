import { useState } from 'react';
import { episodes } from '../../data/data';
import './EpisodesList.css';
import EpisodesItem from './EpisodesItem';

const EpisodesList = () => {
	const [playList, setPlayList] = useState(episodes);

	const onClickCheck = id => {
		setPlayList(list => {
			return list.map(itm => {
				if (itm.id === id) {
					return { ...itm, done: !itm.done };
				}
				return itm;
			});
		});
	};

	const playListInfo = (
		<div className='list'>
			<p>LISTEN TO ALL THE COMPRESSED.FM EPISODES</p>
			<ul>
				{playList.map(itm => {
					return (
						<li key={itm.id}>
							<EpisodesItem episode={itm} onClickCheck={onClickCheck} />
						</li>
					);
				})}
			</ul>
		</div>
	);
	return (
		<div className='container'>
			<img className='cover' src='./images/podcast-cover.png' alt='logo' />
			<div className='listAndImg-container'>
				<div>{playListInfo}</div>
			</div>
		</div>
	);
};

export default EpisodesList;
