import React from 'react';
import styled from 'styled-components';
import { ContactDetails } from './support-contact-details/contact-details';
import { SalesOverview } from './sales-overview/sales-overview';
import './account-overview.css';

export const AccountOverview = ({ data }) => {
	console.log(data);
	const supportContact = data.supportContact;
	const salesOverview = data.salesOverview;
	return (
		<div className="AccountOverview">
			{ContactDetails(supportContact)}
			<br />
			{SalesOverview(salesOverview)}
		</div>
	)
}

export default AccountOverview;


