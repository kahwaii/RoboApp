import React from 'react';

const Card = ({name, email, id, website}) => {
	return (
		<div className='bg-light-blue dib br3 pa3 ma2 grow shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div className="tc">
				<h2>{name}</h2>
				<p>{email}</p>
				<p>{website}</p>
			</div>
		</div>
		);
}

export default Card;