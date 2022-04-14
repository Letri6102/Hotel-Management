import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormattedMessage} from 'react-intl';



class Footer extends Component {

    render() {
        return (
           <div className='home-footer'>
                <p>&copy; Copyright 2022 by TriLe. <a href='#'>More information. &#8594; Click here! &#8592; </a></p>

           </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
