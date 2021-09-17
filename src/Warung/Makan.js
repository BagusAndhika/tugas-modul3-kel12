import React, { Component } from "react";
class Makan extends Component {
    state = {
        Makan: " "
    }
    componentDidMount(){
        alert('Show Menu')
    }
    ChangeMakan = () => {
        this.setState((state) => { 
            if (state.Makan === "Es Teh Anget") {
                return {Makan : "STMJ"}   
            } else if (state.Makan === "STMJ") {
                return {Makan : "Kopi Gajah"}                 
            }
            else if (state.Makan === "Kopi Gajah") {
                return {Makan : "Es Jeruk Anget"}                 
            }
            else {
                return {Makan : "Es Teh Anget"}                 
            }
        })
    }
  componentWillUnmount(){
        alert('Hide Menu')
    }
    render() {
        return (
            <div class="menu-wrapper">  
                <h3>MAKANAN</h3>                       
                <ul class="list">
                    <li>Nasi Goreng</li>  
                    <li>Nasi Rebus</li>
                    <li>Bakmie Goreng</li>
                    <li>Bakmie Rebus</li>
                    <li>Capcay</li>
                    <li>Magelangan</li>
                </ul>
                <button class="button"  onClick={this.ChangeMakan}>MINUMAN</button>
                <br />
                <p>{this.state.Makan}</p>
            </div>
        );
    }
}
export default Makan;