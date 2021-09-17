import { Component } from "react";
import React from "react";
import Jajan from "./Tempat";
import Makan from "./Makan";

class Home extends Component {
    state = {
        komponen1: false,
        komponen2: false,
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Jangan lupa bayar ya`)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('SELAMAT DATANG :)');
    }
    ubahkomponen1 = () => {
        this.setState((state) => {
            return { komponen1: !this.state.komponen1 }
        })
    }
    ubahkomponen2 = () => {
        this.setState((state) => {
            return { komponen2: !this.state.komponen2 }
        })
    }
    render() {
        return (
            <div>
                {this.state.komponen2 ? <Makan /> : ''}
                <button class="button" onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'HIDE' : 'SHOW'} Menu Makan</button>
                <br/>
                {this.state.komponen1 ? <Jajan /> : ''}
                <button class="button"  onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'HIDE' : 'SHOW'} Jumlah orang </button>
            </div>
        );
    }
}
export default Home;