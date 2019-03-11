import React from "react";
import { Field, reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";

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
  renderInput(props) {
    return (
      <div className="field">
        <input placeholder={props.placeholder} {...props.input} />
      </div>
    );
  }

  onSubmit(e) {
    event.preventDefault();
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

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
export default reduxForm({
  enableReinitialize: true,
  initialValues: {
    searchInput: randomParam
  },
  form: "searchForm" 
})(SearchFrom);
