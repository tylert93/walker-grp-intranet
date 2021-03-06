import React from 'react';
import {Link} from '@reach/router';
import './ToolIcon.css';

class ToolIcon extends React.Component {
    render() {
        return (
            <div className="col-2">
                <div className="d-flex justify-content-center">
                    <Link className="d-block" to={this.props.to}>
                        <div className={`rounded-circle p-4 ${this.props.colour}`}> 
                            <i className={`icon fa-fw ${this.props.iconName}`} alt={this.props.Alt} ></i>
                        </div>
                    </Link>
                </div>
                <h6 className="text-center mt-2">{this.props.title}</h6>
            </div>
        )
    }
}

export default ToolIcon