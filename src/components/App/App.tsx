import React from "react";
import { Routes, Route } from "react-router-dom";


import { FormPage } from "../../pages/FormPage/FormPage";
import { UserPage } from "../../pages/UserPage/UserPage";

export const App = () => {
	return (
		<main className="page">
			<Routes>
				<Route path="/" element={<FormPage />} />
				<Route path="/user/:login" element={<UserPage />} />
			</Routes>
		</main>
	)
}