import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormattedMessage} from 'react-intl';

import Slider from "react-slick";

class HotelBranch extends Component {

    render() {
        return (
           <div className='section-share section-hotel-branch'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Chi nhánh</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                    <Slider {...this.props.settings}>
                        <div className='section-customize'>
                            <div className='bg-image section-hotel-branch'/>
                            <div>Phòng đôi</div>
                        </div>
                        <div className='section-customize'>
                            <div className='bg-image section-hotel-branch'/>
                            <div>Phòng đôi</div>
                        </div>
                        <div className='section-customize'>
                            <div className='bg-image section-hotel-branch'/>
                            <div>Phòng đôi</div>
                        </div>
                        <div className='section-customize'>
                            <div className='bg-image section-hotel-branch'/>
                            <div>Phòng đôi</div>
                        </div>
                        <div className='section-customize'>
                            <div className='bg-image section-hotel-branch'/>
                            <div>Phòng đôi</div>
                        </div>
                        <div className='section-customize'>
                            <div className='bg-image section-hotel-branch'/>
                            <div>Phòng đôi</div>
                        </div>
                        <div className='section-customize'>
                            <div className='bg-image section-hotel-branch'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HotelBranch);
