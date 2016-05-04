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
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Alert</h4>
                            </div>
                            <div className="modal-body">
                                <p>Your session has timed out.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Header;