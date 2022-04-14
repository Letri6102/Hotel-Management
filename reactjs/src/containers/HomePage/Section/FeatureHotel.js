import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormattedMessage} from 'react-intl';

import Slider from "react-slick";


class FeatureHotel extends Component {

    render() {
        return (
           <div className='section-share section-feature-hotel'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Khách sạn nổi bật tuần qua</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-feature-hotel'/>
                                    </div>
                                        <div className='position text-center'>
                                            <div>Hệ thống nhà hàng khách sạn </div>
                                            <div>Nha Trang</div>
                                        </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-feature-hotel'/>
                                    </div>
                                        <div className='position text-center'>
                                            <div>Hệ thống nhà hàng khách sạn </div>
                                            <div>Nha Trang</div>
                                        </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-feature-hotel'/>
                                    </div>
                                        <div className='position text-center'>
                                            <div>Hệ thống nhà hàng khách sạn </div>
                                            <div>Nha Trang</div>
                                        </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-feature-hotel'/>
                                    </div>
                                        <div className='position text-center'>
                                            <div>Hệ thống nhà hàng khách sạn </div>
                                            <div>Nha Trang</div>
                                        </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-feature-hotel'/>
                                    </div>
                                        <div className='position text-center'>
                                            <div>Hệ thống nhà hàng khách sạn </div>
                                            <div>Nha Trang</div>
                                        </div>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FeatureHotel);
