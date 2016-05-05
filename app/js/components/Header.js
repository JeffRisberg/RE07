import React from 'react';
import ReactDOM from 'react-dom';

const socket = io();

/**
 * @author Jeff Risberg
 * @since May 2016
 */
class Header extends React.Component {

    constructor() {
        super();

        socket.on('expire event', (newExpireState) => this.handleStateChange(newExpireState));
    }

    handleStateChange(newExpireState) {
        $('#sessionExpiredModal').modal();
    }

    render() {
        return (
            <div style={{width: '600px', background: '#ddd'}}>
                Header

                <div id="sessionExpiredModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header" style={{color: 'white', background: '#AE2573'}}>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title" style={{textAlign: 'center'}}>Attention</h4>
                            </div>
                            <div className="modal-body">
                                <p>Your session will end soon and you will be Signed Off. Would you like to continue your session?</p>
                            </div>
                            <div className="modal-footer" style={{textAlign: 'center'}}>
                                <button type="button" className="btn btn-default" data-dismiss="modal"
                                        style={{color: 'white', background: '#AE2573'}}>
                                    Continue
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="sessionExpiredModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header" style={{background: '#AE2573'}}>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Attention</h4>
                            </div>
                            <div className="modal-body">
                                <p>Your session is no longer active</p>.
                                <p>Please <a>sign on</a> again to view your account.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Header;