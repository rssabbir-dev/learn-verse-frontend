import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
	const auth = getAuth(app);
	const [user, setUser] = useState(null);
	//Website loading state
	const [loading, setLoading] = useState(true);

	//CreateUser With Email and Password
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	//Login User With Email and Password
	const loginUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	//Update User Profile
	const updateUserProfile = (profileData) => {
		return updateProfile(auth.currentUser, profileData);
	};
	//Send Email Verification code after create User
	const sendVerifyEmailCode = () => {
		setLoading(true);
		return sendEmailVerification(auth.currentUser);
	};
	//LogOut User
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};
	//CreateUser and Login User With Provider
	const signInWithProvider = (provider) => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};

	//get LoggedIn User Data
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (
				currentUser === null ||
				currentUser.emailVerified ||
				currentUser.providerData[0].providerId === 'github.com'
			) {
				setUser(currentUser);
			}
			setLoading(false);
			return () => {
				unsubscribe();
			};
		});
	}, [auth]);

	const authInfo = {
		user,
		loading,
		setLoading,
		createUser,
		loginUser,
		updateUserProfile,
		sendVerifyEmailCode,
		logOut,
		signInWithProvider,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
