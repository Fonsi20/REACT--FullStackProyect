
// /client/App.js
import React, { Component } from "react";
import axios from "axios";

import ReactDOM from 'react-dom';
import { EnhancedTable } from './table';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {

    // Copi of the state of App
    state = {
        data: [],
        id: null,
        brand: null,
        model: null,
        color: null,
        fuel_type: null,
        engine_volume: null,
        traction: null,
        price: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
        selected: [],
        newselected: [],
    };

    a(id, brand, model, color, fuel_type, engine_volume, traction, price, data) {
        console.log("HOME: "+id);
        this.props.returnstate(id, brand, model, color, fuel_type, engine_volume, traction, price, data)
    }

    getSelectData = (selected) => {
        let newselected = selected;
        this.setState({ selected: newselected });
        if (selected.length === 1) {
            this.state.data.forEach(data => {
                if (data.id == selected) {
                    this.loadData(data.id, data.brand, data.model, data.color, data.fuel_type, data.engine_volume, data.traction, data.price);
                }
            });
        } else {
            this.clearFields();
        }
    }

    loadData(id, brand, model, color, fuel_type, engine_volume, traction, price) {
        this.state.data.forEach(data => {
            if (data.id === id) {
                document.getElementById("brand").value = brand;
                document.getElementById("model").value = model;
                document.getElementById("color").value = color;
                document.getElementById("fuel_type").value = fuel_type;
                document.getElementById("engine_volume").value = engine_volume;
                document.getElementById("traction").value = traction;
                document.getElementById("price").value = price;
                document.getElementById("id").value = id;
                this.setState({ id: id });
                this.setState({ brand: brand });
                this.setState({ model: model });
                this.setState({ color: color });
                this.setState({ fuel_type: fuel_type });
                this.setState({ engine_volume: engine_volume });
                this.setState({ traction: traction });
                this.setState({ price: price });
            }
        });
    }

    clearFields() {
        document.getElementById("brand").value = "";
        document.getElementById("model").value = "";
        document.getElementById("color").value = "";
        document.getElementById("fuel_type").value = "";
        document.getElementById("engine_volume").value = "";
        document.getElementById("traction").value = "";
        document.getElementById("price").value = "";
        document.getElementById("idToDelete").value = "";
    }

    componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({ intervalIsSet: interval });
        }
    }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    getDataFromDb = () => {
        fetch("http://localhost:3001/api/getData")
            .then(data => data.json())
            .then(res => this.setState({ data: res.data }));
        console.log(this.state.selected);
    };

    putDataToDB = (brand, model, color, fuel_type, engine_volume, traction, price) => {
        let currentIds = this.state.data.map(data => data.id);
        let idToBeAdded = 1;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        this.state.data.forEach(data => {
            if (data.id === idToBeAdded) {
                console.log("Ya existe este coche");
            }
        });

        if (idToBeAdded !== null, brand !== null, model !== null, color !== null, fuel_type !== null, engine_volume !== null, traction !== null, price !== null) {
            axios.post("http://localhost:3001/api/putData", {
                id: idToBeAdded,
                brand: brand,
                model: model,
                color: color,
                fuel_type: fuel_type,
                engine_volume: engine_volume,
                traction: traction,
                price: price
            });
            this.clearFields();
        }
    };

    deleteFromDB = idTodelete => {
        let objIdToDelete = null;

        this.state.data.forEach(data => {
            if (data.id == idTodelete) {
                objIdToDelete = data.id;
            }
        });
        if (objIdToDelete == null) {
            console.log("NULL NO HAY NADA");
        }
        console.log(idTodelete);

        idTodelete.forEach(idTodelete => {
            console.log(idTodelete);
            axios.delete("http://localhost:3001/api/deleteData", {
                data: {
                    id: idTodelete
                }
            });
            this.clearFields();
            this.setState({ selected: [] });
        });
    }

    updateDB = (idToUpdate, brand, model, color, fuel_type, engine_volume, traction, price) => {
        let objIdToUpdate = null;
        this.state.data.forEach(dat => {
            if (dat.id === idToUpdate) {
                objIdToUpdate = dat._id;
            }
        });

        axios.post("http://localhost:3001/api/updateData", {
            id: objIdToUpdate,
            update: {
                brand: brand,
                model: model,
                color: color,
                fuel_type: fuel_type,
                engine_volume: engine_volume,
                traction: traction,
                price: price
            }
        });
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    render() {
        const { classes } = this.props;
        const { data } = this.state; console.log(data)

        return (
            <div style={{ backgroundColor: "#eceff1", paddingTop: "50px" }}>
                <p style={{ color: "#000", fontFamily: "Verdana", textAlign: "center" }} ><h1><b>Pract Cars - List</b></h1>Fonsi Fernandez Alvarez</p>
                <div style={{ textAlign: "-webkit-center" }}>
                    <div style={{ padding: "10px" }}>

                        <TextField
                            id="brand"
                            type="text"
                            onChange={e => this.setState({ brand: e.target.value })}
                            placeholder="Brand"
                            style={{ width: "1030px", height: "30px", paddingLeft: "15px", border: "15px", borderRadius: "20px" }}
                        />

                    </div>
                    <div style={{ padding: "10px" }}>

                        <TextField
                            id="model"
                            type="text"
                            onChange={e => this.setState({ model: e.target.value })}
                            placeholder="Model"
                            style={{ width: "500px", paddingLeft: "15px", border: "15px", height: "30px", borderRadius: "20px" }}
                        />

                        <TextField
                            id="color"
                            type="text"
                            onChange={e => this.setState({ color: e.target.value })}
                            placeholder="Color"
                            style={{ width: "500px", paddingLeft: "15px", marginLeft: "10px", height: "30px", border: "15px", borderRadius: "20px" }}
                        />

                    </div>
                    <div style={{ padding: "10px" }}>

                        <TextField
                            id="fuel_type"
                            type="text"
                            onChange={e => this.setState({ fuel_type: e.target.value })}
                            placeholder="Fuel Type"
                            style={{ width: "500px", paddingLeft: "15px", border: "15px", height: "30px", borderRadius: "20px" }}
                        />

                        <TextField
                            id="engine_volume"
                            type="text"
                            onChange={e => this.setState({ engine_volume: e.target.value })}
                            placeholder="Engine Volume"
                            style={{ width: "500px", paddingLeft: "15px", marginLeft: "10px", height: "30px", border: "15px", borderRadius: "20px" }}
                        />


                    </div>
                    <div style={{ padding: "10px" }}>

                        <TextField
                            id="traction"
                            type="text"
                            onChange={e => this.setState({ traction: e.target.value })}
                            placeholder="Traction"
                            style={{ width: "500px", paddingLeft: "15px", border: "15px", height: "30px", borderRadius: "20px" }}
                        />

                        <TextField
                            id="price"
                            type="text"
                            onChange={e => this.setState({ price: e.target.value })}
                            placeholder="Price"
                            style={{ width: "500px", paddingLeft: "15px", marginLeft: "10px", height: "30px", border: "15px", borderRadius: "20px" }}
                        />

                        <input
                            id="id"
                            type="text"
                            onChange={e => this.setState({ id: e.target.value })}
                            placeholder="id"
                            style={{ width: "500px", paddingLeft: "15px", marginLeft: "10px", height: "30px", border: "15px", display: "none", borderRadius: "20px" }}
                        />
                    </div>

                    <div style={{ paddingTop: "10px", paddingBottom: "50px", paddingTop: "50px" }}>
                        <button onClick={() => { this.putDataToDB(this.state.brand, this.state.model, this.state.color, this.state.fuel_type, this.state.engine_volume, this.state.traction, this.state.price) }}
                            style={{ width: "150px", backgroundColor: "#53D061", color: "#fff", marginLeft: "10px", border: "15px", height: "35px", borderRadius: "35px" }}>
                            <b>ADD</b>
                        </button>

                        <button onClick={() => { this.updateDB(this.state.id, this.state.brand, this.state.model, this.state.color, this.state.fuel_type, this.state.engine_volume, this.state.traction, this.state.price) }}
                            style={{ width: "150px", backgroundColor: "#53D061", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}>
                            <b>UPDATE</b>
                        </button>

                        <button onClick={() => this.deleteFromDB(this.state.selected)}
                            style={{ width: "150px", backgroundColor: "#53D061", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}>
                            <b> DELETE</b>
                        </button>

                        <Link to="/viewDetail">
                            <button
                                style={{ width: "150px", backgroundColor: "#7BDB86", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}
                                onClick={e => { this.a(this.state.id, this.state.brand, this.state.model, this.state.color, this.state.fuel_type, this.state.engine_volume, this.state.traction, this.state.price, this.state.date) }}>
                                <b> DETAILS</b>
                            </button>
                        </Link>
                    </div>



                    <div style={{ padding: "50px", display: "none" }}>
                        <input
                            id="idToDelete"
                            style={{ width: "500px", paddingLeft: "15px", border: "15px", height: "25px" }}
                            type="text"
                            onChange={e => this.setState({ idToDelete: e.target.value })}
                            placeholder="Put id of item to delete here"
                        />
                        <button onClick={() => this.deleteFromDB(this.state.idToDelete)}
                            style={{ width: "150px", backgroundColor: "#ab47bc", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}>
                            <b> DELETE</b>
                        </button>
                    </div>
                </div >

                <React.Fragment>
                    <EnhancedTable info={data} selected={this.getSelectData.bind(this)} numselect={this.state.selected} />
                </React.Fragment>

                <ul style={{ color: "#fff", backgroundColor: "#7b1fa2", padding: "50px", marginBottom: "0px", marginLeft: "0px", marginRight: "0px", marginTop: "50px", display: "none" }}>
                    <div style={{ color: "#fff", fontFamily: "Verdana" }} ><h1><b>LIST OF CARS -</b> {data.length}</h1></div>
                    {data.length <= 0
                        ? "NO DB ENTRIES YET"
                        : data.map(dat => (

                            <ul id={dat.id}
                                onClick={() => this.loadData(dat.id, dat.brand, dat.model, dat.color, dat.fuel_type, dat.engine_volume, dat.traction, dat.price)}
                                style={{ textAlign: "center", backgroundColor: "#4a148c", borderRadius: "15px", padding: "40px", marginBottom: "15px" }}
                                key={data.price}>
                                <font size="20"><span style={{ color: "#f8bbd0" }}><b>ID: </b></span> {dat.id}</font> <br />
                                <span style={{ color: "#f8bbd0", fontFamily: "Verdana" }}><b> Brand: </b></span> {dat.brand}
                                <span style={{ color: "#f8bbd0", paddingLeft: "40px", fontFamily: "Verdana" }}> <b>Model: </b></span> {dat.model}
                                <span style={{ color: "#f8bbd0", paddingLeft: "40px", fontFamily: "Verdana" }}><b> Color: </b></span> {dat.color}
                                <span style={{ color: "#f8bbd0", paddingLeft: "40px", fontFamily: "Verdana" }}><b> Fuel Type: </b></span> {dat.fuel_type} <br />
                                <span style={{ color: "#f8bbd0", fontFamily: "Verdana" }}><b> Engine Volume: </b></span> {dat.engine_volume}
                                <span style={{ color: "#f8bbd0", paddingLeft: "40px", fontFamily: "Verdana" }}><b> Traction: </b></span> {dat.traction}
                                <span style={{ color: "#f8bbd0", paddingLeft: "40px", fontFamily: "Verdana" }}><b> Price: </b></span> {dat.price} <br />
                            </ul>
                        ))}
                </ul>
            </div >
        );
    }
}

export default Home;