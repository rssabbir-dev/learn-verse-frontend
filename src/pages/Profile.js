import React, { useContext,  useRef, useState } from 'react';
import { FaRegTimesCircle, FaUserEdit } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Profile = () => {
	const { user, updateUserProfile } = useContext(AuthContext);
	const [edit, setEdit] = useState(false);
	const userNameRef = useRef(user.displayName);
	const userPhotoURLRef = useRef(user.photoURL);

	const [userName, setUserName] = useState(user.displayName);
	const [userPhoto, setUserPhoto] = useState(user.photoURL);
	const handleSubmit = (event) => {
		event.preventDefault();
		const name = userNameRef.current.value;
		const photoURL = userPhotoURLRef.current.value;
		handleUpdateUserProfile(name, photoURL);
	};

	const handleUpdateUserProfile = (name, photoURL) => {
		const profileData = { displayName: name, photoURL: photoURL };
		updateUserProfile(profileData)
			.then(() => {
				toast.success('Profile Updated');
				setUserName(user.displayName);
				setUserPhoto(user.photoURL);
				setEdit(false);
			})
			.catch((error) => {
				toast.error(error.message);
				console.log(error);
			});
	};
	const handleEdit = () => {
		setEdit(!edit);
		userNameRef.current.value = user.displayName;
		userPhoto.current.value = user.photoURL;
	};
	return (
		<div className='hero h-5/6'>
			<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
				<form onSubmit={handleSubmit} className='card-body'>
					<div className='flex justify-end'>
						{edit ? (
							<div
								onClick={handleEdit}
								className='text-xl cursor-pointer text-red-500 flex justify-center items-center space-x-1'
							>
								<span>Cancel</span>
								<FaRegTimesCircle />
							</div>
						) : (
							<div
								onClick={handleEdit}
								className='text-xl cursor-pointer hover:text-red-500 flex justify-center items-center space-x-1'
							>
								<span>Edit</span>
								<FaUserEdit />
							</div>
						)}
					</div>
					<div className='flex flex-col items-center w-full'>
						<img
							className='rounded-full w-32'
							src={userPhoto}
							alt=''
						/>
						<h4 className='text-xl'>{userName}</h4>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Email</span>
						</label>
						<input
							type='email'
							placeholder='email'
							className='input input-bordered'
							name='email'
							required
							disabled
							defaultValue={user?.email}
						/>
						<label className='label'>
							<span className='label-text-alt text-gray-500'>
								You Can't Change Email
							</span>
						</label>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='Enter Your Full Name'
							className='input input-bordered'
							name='name'
							required
							defaultValue={userName}
							disabled={!edit}
							ref={userNameRef}
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Photo URL</span>
						</label>
						<input
							type='text'
							placeholder='Set Photo URL'
							className='input input-bordered'
							name='photoURL'
							required
							defaultValue={userPhoto}
							disabled={!edit}
							ref={userPhotoURLRef}
						/>
					</div>
					{edit && (
						<div className='form-control mt-6'>
							<button className='btn btn-primary'>
								Save Change
							</button>
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default Profile;
