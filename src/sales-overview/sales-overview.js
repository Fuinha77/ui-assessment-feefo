import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import './sales-overview.css';

export function SalesOverview(salesOverview) {
    const lastUploadDate = new Date(salesOverview.lastUploadDate).toLocaleString('sv');
    const toolTip = "Last Upload: " + lastUploadDate;

    return (
        <>
            <table className='table'>
                <tr>
                    <td>
                       <FontAwesomeIcon icon={faUpload} className='uploadIcon' /> <b className='saleTitle'> Sales</b>
                        <br /><br />
                        <label className='salesOverview' >You had <b>{salesOverview.successfullUploads} uploads</b> and <b>{salesOverview.linesSaved}</b> lines added.</label>
                    </td>
                    <td>
                        <FontAwesomeIcon icon={faInfoCircle} className='infoCircleIcon' title={toolTip}/>
                    </td>
                </tr>
                <tr className='trLine'>
                    {GetUploadSuccess(salesOverview)}
                    {GetLinesSavedSuccessfully(salesOverview)}
                </tr>
            </table>
        </>
    )
}

export function GetUploadSuccess(data) {
    return (
        <>
            <td className='tdBackground'>
                <label className='percentageValue'>{GetPercentage(data.uploads, data.successfullUploads)} %</label><br />
                <b className='successLabels'>UPLOAD SUCCESS</b>
            </td>
        </>
    )
}

export function GetLinesSavedSuccessfully(data) {
    return (
        <>
            <td className='tdBackground'>
                <label className='percentageValue'>{GetPercentage(data.linesAttempted, data.linesSaved)} %</label><br />
                <b className='successLabels'>LINES SAVED</b>
            </td>

        </>
    )
}

export function GetPercentage(total, otherQuantity) {
    return (otherQuantity * 100) / total;
}
