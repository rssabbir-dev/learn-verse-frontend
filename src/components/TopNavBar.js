import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import missingUserImg from '../assets/img/missing-user-img.png';
import { TbSun } from 'react-icons/tb';
import { MdOutlineDarkMode } from 'react-icons/md';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

const TopNavBar = () => {
	// website theme change observer
	useEffect(() => {
		themeChange(false);
		// 👆 false parameter is required for react project
	}, []);
	const { user, logOut } = useContext(AuthContext);
	//Handle User log out
	const handleLogOut = () => {
		logOut()
			.then(() => {
				console.log('logout');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	let activeStyle = {};

	return (
		<div className='navbar bg-base-100 sticky top-0 z-10'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
					>
						<li>
							<Link className='active:bg-customPrimary' to='/'>
								Home
							</Link>
						</li>
						<li>
							<NavLink
								style={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
								className='active:bg-customPrimary'
								to='/courses/all'
							>
								Courses
							</NavLink>
						</li>
						<li>
							<NavLink
								style={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
								className='active:bg-customPrimary'
								to='/blog'
							>
								Blog
							</NavLink>
						</li>
						<li>
							<NavLink
								style={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
								className='active:bg-customPrimary'
								to='/faq'
							>
								FAQ
							</NavLink>
						</li>

						<li>
							<NavLink
								style={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
								className='active:bg-customPrimary'
								to='/contact'
							>
								Contact Us
							</NavLink>
						</li>
					</ul>
				</div>
				<Link to='/' className='btn btn-ghost normal-case text-xl'>
					LearnVerse
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal p-0 gap-2'>
					<li>
						<Link className='active:bg-customPrimary' to='/'>
							Home
						</Link>
					</li>
					<li>
						<NavLink
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
							className='active:bg-primary'
							to='/courses/all'
						>
							Courses
						</NavLink>
					</li>
					<li>
						<NavLink
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
							className='active:bg-customPrimary'
							to='/blog'
						>
							Blog
						</NavLink>
					</li>
					<li>
						<NavLink
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
							className='active:bg-customPrimary'
							to='/faq'
						>
							FAQ
						</NavLink>
					</li>
					<li>
						<NavLink
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
							className='active:bg-customPrimary'
							to='/contact'
						>
							Contact Us
						</NavLink>
					</li>
				</ul>
			</div>
			<div className='navbar-end gap-4'>
				<button
					data-set-theme='dark'
					data-act-class='hidden'
					className='flex items-center gap-1 btn-xs btn'
				>
					Dark
					<MdOutlineDarkMode className='text-sm' />
				</button>
				<button
					data-set-theme='light'
					data-act-class='hidden'
					className='flex items-center gap-1 btn-xs btn'
				>
					Light
					<TbSun className='text-sm' />
				</button>
				{user?.uid ? (
					<div className='dropdown dropdown-end'>
						<label
							tabIndex={0}
							className='btn btn-ghost btn-circle avatar tooltip tooltip-left'
							data-tip={user?.displayName}
						>
							<div className='w-10 rounded-full'>
								<img
									src={
										user?.photoURL
											? user?.photoURL
											: missingUserImg
									}
									alt=''
								/>
							</div>
						</label>
						<ul
							tabIndex={0}
							className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
						>
							<li>
								<span className='text-lg'>
									{user?.displayName}
								</span>
							</li>
							<li>
								<Link to='/profile' className='justify-between'>
									Profile
									<span className='badge'>New</span>
								</Link>
							</li>
							<li>
								<button onClick={handleLogOut}>Logout</button>
							</li>
						</ul>
					</div>
				) : (
					<Link to='login' className='btn btn-primary'>
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default TopNavBar;
