import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contact-details.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function ContactDetails(supportContactDetails) {

    const fullName = supportContactDetails.name.split(' ');
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);

    return (
        <>
            <table className='tableContact'>
                <tr>
                    <td className='accountOverview'>
                        Account Overview
                    </td>
                    <td className='buttonLocation'>
                        <button className='button'><b>{initials.toUpperCase()}</b></button>
                    </td>
                    <td className='contactTdBackground'>
                        <b className='feefoSupport'>Your Feefo Support Contact</b>
                        <br />
                        <b className='infoText'>{supportContactDetails.name}</b>
                        <br />
                        <label className='infoText'><FontAwesomeIcon icon={faEnvelope} className='' /> {supportContactDetails.email}</label>
                    </td>
                </tr>
            </table>
        </>
    )
}