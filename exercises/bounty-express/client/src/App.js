import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllBounties, postOneBounty } from "./action";
import OneBounty from "./components/oneBounty";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: " ",
      lName: " ",
      living: true,
      age: " ",
      bountyAmount: " ",
      type: " "
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getAllBounties();
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault;
    const { fName, lName, living, age, bountyAmount, type } = this.state;
    this.props.postOneBounty({ fName, lName, living, age, bountyAmount, type });
  }

  render() {
    if (!this.props.data.bounty) {
      return <p>Loading...</p>;
    }

    console.log(this.props.data.bounty);
    const bounty = this.props.data.bounty.map(eachBounty => {
      const { fName, lName, living, age, bountyAmount, type, _id } = eachBounty;
      return (
        <OneBounty
          fName={fName}
          lName={lName}
          living={living}
          age={age}
          bountyAmount={bountyAmount}
          type={type}
          key={_id}
        />
      );
    });

    const { fName, lName, living, age, bountyAmount, type } = this.state;
    const { onChange } = this;
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">{bounty}</div>
          <div className="col-6">
            <form onSubmit={this.onSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">first Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name="fName"
                    onChange={onChange}
                    value={fName}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="lName"
                    onChange={onChange}
                    value={lName}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="inputAddress">Living</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Are they living? "
                  name="living"
                  onChange={onChange}
                  value={living}
                />
              </div>
              <div className="form-group">
                <label for="inputAddress2">Age</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="How old is the bounty?"
                  name="age"
                  onChange={onChange}
                  value={age}
                />
              </div>
              <div className="form-group">
                <label for="inputAddress2">bountyAmount</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="bounty Amount?"
                  name="bountyAmount"
                  onChange={onChange}
                  value={bountyAmount}
                />
              </div>
              <div className="form-group">
                <label for="inputAddress2">type</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="what tpye of bounty?"
                  name="type"
                  onChange={onChange}
                  value={type}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.oneBountyReducer.allBounties
  };
};

export default connect(
  mapStateToProps,
  {
    getAllBounties,
    postOneBounty
  }
)(App);