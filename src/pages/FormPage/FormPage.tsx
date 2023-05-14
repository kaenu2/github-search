import React from "react";

import "./FormPage.scss"

import { Form } from "../../components/Form/Form";
import { ListUsers } from "../../components/ListUsers/ListUsers";



export const FormPage = () => {
	return (
		<section className="page__form-search form-search">
			<h1>Github search users</h1>
			<Form />
			<ListUsers />
		</section>
	)
}