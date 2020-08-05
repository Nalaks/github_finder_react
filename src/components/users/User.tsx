import React, { useEffect, Fragment } from 'react';
import { SingleUserProps } from '../../interfaces/types';
import Spinner from '../spinner/Spinner';
import { Link } from 'react-router-dom';

const User: React.FC<SingleUserProps> = ({ user, getUser, loading, getRepos, props, repos }) => {
	useEffect(() => {
		getUser(props.match.params.login);
		getRepos(props.match.params.login);
	}, []);

	return (
		<Fragment>
			{loading ? <Spinner /> : null}
			{user !== null ? (
				<Fragment>
					<Link to='/' className='btn btn-light'>
						Back To Search
					</Link>
					Hireable:{' '}
					{user.hireable ? (
						<i className='fas fa-check text-success'></i>
					) : (
						<i className='fas fa-times-circle text-danger'></i>
					)}
					<div className='card grid-2'>
						<div className='all-center'>
							<img
								src={user.avatar_url}
								alt='image_user'
								className='round-img'
								style={{ width: '150px' }}
							/>
							<h1>{user.name}</h1>
							<p>Location: {user.location}</p>
						</div>
						<div>
							{user.bio && (
								<Fragment>
									<h3>Bio</h3>
									<p>{user.bio}</p>
								</Fragment>
							)}
							<a
								href={user.html_url}
								target='_blank'
								rel='noopener noreferrer'
								className='btn btn-dark my-1'
							>
								Github Profile
							</a>
							<ul>
								<li>
									<strong>Username:</strong> {user.login}
								</li>
								<li>
									<strong>Company:</strong> {user.company}
								</li>
								<li>
									<strong>Website:</strong> {user.blog}
								</li>
							</ul>
						</div>
					</div>
					<div className='card text-center'>
						<div className='badge badge-primary'>Followers: {user.followers}</div>
						<div className='badge badge-success'>Following: {user.following}</div>
						<div className='badge badge-light'>Public Repos: {user.public_repos}</div>
						<div className='badge badge-dark'>Public Gists: {user.public_gists}</div>
					</div>
					{repos.map((repo) => 
						<div className='card' key={repo.name}>
							<h3>
								<a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
									{repo.name}
								</a>
							</h3>
						</div>
          )}
				</Fragment>
			) : null}
		</Fragment>
	);
};

export default User;
