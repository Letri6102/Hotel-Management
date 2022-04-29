import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Modal } from "reactstrap";
import "./BookingModal.scss";
class BookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    let { isOpenModal, closeBookingClose, dataTime } = this.props;

    return (
      <Modal
        isOpen={isOpenModal}
        className={"booking-modal-container"}
        size="lg"
        centered
      >
        <div className="booking-modal-content">
          <div className="booking-modal-header">
            <span className="left">Thông tin đặt phòng</span>
            <span className="right" onClick={closeBookingClose}>
              <i className="fas fa-times"></i>
            </span>
          </div>
          <div className="booking-modal-body">
            <div className="room-infor"></div>
            <div className="price">Giá phòng 500.000</div>
            <div className="row">
              <div className="col-6 form-group">
                <label>Họ tên</label>
                <input className="form-control"></input>
              </div>
              <div className="col-6 form-group">
                <label>Số điện thoại</label>
                <input className="form-control"></input>
              </div>
              <div className="col-6 form-group">
                <label>CMND</label>
                <input className="form-control"></input>
              </div>
              <div className="col-6 form-group">
                <label>Tuổi</label>
                <input className="form-control"></input>
              </div>
              <div className="col-6 form-group">
                <label>Số người đặt phòng</label>
                <input className="form-control"></input>
              </div>
              <div className="col-6 form-group">
                <label>Ghi chú</label>
                <input className="form-control"></input>
              </div>
            </div>
          </div>
          <div className="booking-modal-footer">
            <button className="btn-booking-confirm" onClick={closeBookingClose}>
              Xác nhận
            </button>
            <button className="btn-booking-cancel" onClick={closeBookingClose}>
              Hủy
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //fire event
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
