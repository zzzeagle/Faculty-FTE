import logo from './logo.svg';
import './App.css';


import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            activeItem:{
                netid:"",
                name:""
            },
        facultyList: []

        };
    }
     componentDidMount() {
        this.refreshList();
     }

     refreshList = () => {
        axios
          .get("http://localhost:8000/api/faculty/")
          .then(res => this.setState({ facultyList: res.data }))
          .catch(err => console.log(err));
      };
    displayInactive= status => {
        if (status) {
          return this.setState({ active: true });
        }
        return this.setState({ active: false });
    };
      toggle = () => {
        this.setState({ modal: !this.state.modal });
      };
      handleSubmit = item => {
        this.toggle();
        console.log(typeof(item));
        if (item.id) {
          axios
            .put(`http://localhost:8000/api/faculty/${item.id}/`, item)
            .then(res => this.refreshList());
          return;
        }
        axios
          .post("http://localhost:8000/api/faculty/", item)
          .then(res => this.refreshList());
      };
     handleFTESubmit = item => {
        this.toggle();
        console.log(typeof(item));
        if (item.id) {
          axios
            .put(`http://localhost:8000/api/fte/${item.id}/`, item)
            .then(res => this.refreshList());
          return;
        }
        axios
          .post("http://localhost:8000/api/fte/", item)
          .then(res => this.refreshList());
      };
      handleDelete = item => {
        axios
          .delete(`http://localhost:8000/api/faculty/${item.id}`)
          .then(res => this.refreshList());
      };
      createItem = () => {
        const item = { title: "", description: "", completed: false };
        this.setState({ activeItem: item, modal: !this.state.modal });
      };
      editItem = item => {
        this.setState({ activeItem: item, modal: !this.state.modal });
      };

renderTabList = () => {
    return (
        <div className="my-5 tab-list">
        </div>
    );
};

renderFTE = (fte) => {
    return fte.map(item => (
        <tr>
            <td>{item.effectiveFrom}</td>
            <td>{item.effectiveTo}</td>
            <td>{item.appointmentFTE}</td>
            <td>{item.clinicalFTE}</td>
            <td>
                <button
                    onClick={() => this.editItem(item)}
                    className="btn btn-secondary mr-2"
                >
                Edit
                </button>
            </td>
        </tr>
    ));

}

renderItems = () => {
    const { active } = this.state;
    const faculty = this.state.facultyList;
    return faculty.map(item => (
    <div>
    <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
     >
    <span
        className={'faculty-name mr-2'}
        title={item.netid}
        >
        {item.name}
    </span>
    <span
        className={'faculty-name mr-2'}
        >
        {item.netid}
    </span>
    <span>
          <button
            className="btn btn-secondary mr-2"
            data-toggle="collapse"
            href={"#details-"+item.id}
            role="button"
            aria-expanded="false"
            aria-controls={"details-"+item.id}
          >
            Details
          </button>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete
          </button>
    </span>
     </li>
     <span className="collapse" id={"details-"+item.id}>
        <table class="table">
            <tr>
                <th>Effective From</th>
                <th>Effective To</th>
                <th>Appointment FTE</th>
                <th>Clinical FTE</th>
            </tr>
        {this.renderFTE(item.fte)}
        </table>
        <button className="btn btn-primary">Propose FTE Change</button>
    </span>
    </div>
    ));
};
render() {
    return (
        <main className="content">
             <h1 className="text-white text-uppercase text-center my-4">Faculty FTE app</h1>
                <div className="row ">
                <div className="col-md-6 col-sm-10 mx-auto p-0">
                <div className="card p-3">
                  <div className="">
                    <button onClick={this.createItem} className="btn btn-primary">Add Faculty</button>
                  </div>
                  {this.renderTabList()}
                  <ul className="list-group list-group-flush">
                    {this.renderItems()}
                  </ul>
                </div>
              </div>
            </div>
            {this.state.modal ? (
              <Modal
                activeItem={this.state.activeItem}
                onSave={this.handleSubmit}
                onSaveFTE={this.handleFTESubmit}
              />
            ) : null}
          </main>
    );
    }
}

export default App;