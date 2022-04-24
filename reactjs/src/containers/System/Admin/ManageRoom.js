import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils/constant";
import * as actions from "../../../store/actions/index";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import "./ManageRoom.scss";
import Select from "react-select";

const mdParser = new MarkdownIt();

class ManageRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentMarkdown: "",
      contentHTML: "",
      selectedOption: "",
      description: "",
      listRooms: [],
    };
  }

  componentDidMount() {
    this.props.fetchAllRooms();
  }

  buildDataInputSelect = (inputData) => {
    let result = [];
    let { language } = this.props;
    if (inputData && inputData.length > 0) {
      inputData.map((item, index) => {
        let object = {};
        let labelVi = `${item.lastName} ${item.firstName}`;
        let labelEn = `${item.firstName} ${item.lastName}`;
        object.label = language === LANGUAGES.VI ? labelVi : labelEn;
        object.value = item.id;
        result.push(object);
      });
    }
    return result;
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allRooms !== this.props.allRooms) {
      let dataSelect = this.buildDataInputSelect(this.props.allRooms);
      this.setState({
        listRooms: dataSelect,
      });
    }
    if (prevProps.language !== this.props.language) {
      let dataSelect = this.buildDataInputSelect(this.props.allRooms);
      this.setState({
        listRooms: dataSelect,
      });
    }
  }

  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentHTML: html,
      contentMarkdown: text,
    });
  };

  handleSaveContentMarkdown = () => {
    console.log("check state", this.state);
    this.props.saveDetailRoom({
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      roomId: this.state.selectedOption.value,
    });
  };

  handleOnChangeDesc = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  render() {
    console.log("check state", this.state);
    return (
      <div className="manage-room-container">
        <div className="manage-room-title ">Tạo thêm thông tin phòng</div>
        <div className="more-info">
          <div className="content-left form-group">
            <label>Chọn phòng </label>
            <Select
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={this.state.listRooms}
            />
          </div>
          <div className="content-right">
            <label>Thông tin giới thiệu: </label>
            <textarea
              className="form-control"
              rows="4"
              onChange={(event) => this.handleOnChangeDesc(event)}
              value={this.state.description}
            >
              Text here!
            </textarea>
          </div>
        </div>
        <div className="manage-room-editor">
          <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
          />
        </div>
        <button
          onClick={() => this.handleSaveContentMarkdown()}
          className="save-content-room"
        >
          Lưu thông tin
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    allRooms: state.admin.allRooms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //fire event
    fetchAllRooms: (id) => dispatch(actions.fetchAllRooms()),
    saveDetailRoom: (data) => dispatch(actions.saveDetailRoom(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageRoom);
