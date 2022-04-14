import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormattedMessage} from 'react-intl';

import Slider from "react-slick";

class Specialty extends Component {

    render() {
        return (
           <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Các hạng phòng</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                    <Slider {...this.props.settings}>
                        <div className='section-customize'>
                            <div className='bg-image section-specialty'/>
                            <div>Phòng đôi</div>
                        </div>
                        <div className='section-customize'>
                            <div className='bg-image section-specialty'/>
                            <div>Phòng đôi</div>
                        </div>
                        <div className='section-customize'>
                            <div className='bg-image section-specialty'/>
                            <div>Phòng đôi</div>
                        </div>
                        <div className='section-customize'>
                            <div className='bg-image section-specialty'/>
                            <div>Phòng đôi</div>
                        </div>
                        <div className='section-customize'>
                            <div className='bg-image section-specialty'/>
                            <div>Phòng đôi</div>
                        </div>
                        <div className='section-customize'>
                            <div className='bg-image section-specialty'/>
                            <div>Phòng đôi</div>
                        </div>
                        <div className='section-customize'>
                            <div className='bg-image section-specialty'/>
                            <div>Phòng đôi</div>
                        </div>
                    </Slider>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
