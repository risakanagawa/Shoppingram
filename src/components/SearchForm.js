import React from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { fetchAllNews } from "../actions";

const randomParams = () => {
  let randomParams = [
    "beauty",
    "programming",
    "health",
    "design",
    "fashion",
    "art",
    "travel",
    "tech"
  ];
  return randomParams[Math.floor(Math.random() * randomParams.length)];
};

const randomParam = randomParams();

class SearchFrom extends React.Component {
  componentDidMount() {
    this.props.fetchAllNews({ q: randomParam});
  }

  renderInput(props) {
    return (
      <div className="field">
        <input placeholder={props.placeholder} {...props.input} />
      </div>
    );
  }

  onSubmit = e => {
    event.preventDefault();
    this.props.fetchAllNews({ q: this.props.searchInput });
  }

  render() {
    
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field
          name="searchInput"
          type="text"
          component={this.renderInput}
          label="search"
          placeholder={randomParam}
        />
        {/* <button className="ui button primary">search</button> */}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchInput: formValueSelector("searchForm")(state, "searchInput")
  }
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
const preparedSearchForm = reduxForm({
  enableReinitialize: true,
  initialValues: {
    searchInput: randomParam
  },
  form: "searchForm" 
})(SearchFrom);

export default connect(
  mapStateToProps,
  { fetchAllNews }
)(preparedSearchForm);