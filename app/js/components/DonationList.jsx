import React from 'react';
import ReactDOM from 'react-dom';
import Donation from './Donation.jsx';

const socket = io();

/**
 * @author Jeff Risberg
 * @since May 2016
 */
class DonationList extends React.Component {

    constructor() {
        super();
        this.state = {donations: []}

        socket.on('donation event', (newDonationState) => this.handleStateChange(newDonationState));
    }

    handleStateChange(newDonationState) {
        let isNew = true;

        let donations = this.state.donations.map((donation) => {
            if (donation.id === newDonationState.id) {
                // This is the updated donation.
                isNew = false;
                return newDonationState;
            } else {
                // This is an unchanged donation.
                return donation;
            }
        });

        if (isNew) {
            donations.push(newDonationState);
        }

        this.setState({donations});
    }

    render() {
        let donations = this.state.donations.map((donation, index) => {
            return (
                <Donation key={index}
                           id={donation.id}
                           date={donation.date}
                           amount={donation.amount}
                           status={donation.status}/>
            )
        });

        return (
            <div className="donationList">
                <h1>Donations</h1>

                <table className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {donations}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DonationList;
