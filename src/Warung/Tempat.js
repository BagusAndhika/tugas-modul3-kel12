import React, { Component } from "react";
class Tempat extends Component {
    state = {
        isi: 0
    }
    componentDidMount(){
        alert('Silakan tentukan berapa orang yang makan')
    }
    tambahisi = () => {
        this.setState((state) => { return { isi: state.isi + 1 } })
    }
    kurangiisi = () => {
        this.setState((state) => { return { isi: state.isi - 1 } })
    }
    componentWillUnmount(){
        alert('Datang Lagi ya')
    }
    render() {
        return (
            <div class="tempat-wrapper">
                <h3>Jumlah orang yang makan</h3>
                <ul class="list">
                    <li>1 - 2 orang : Meja 2 Orang</li>  
                    <li>3 - 4 orang : Meja 4 orang</li>
                    <li>5 - 8 orang : Meja Panjang / Lesehan</li>
                </ul>
                <h4>Jumlah orang : {this.state.isi} orang</h4>
                
                <button class="button" onClick={this.tambahisi}>Tambah</button>
                <button class="button" onClick={this.kurangiisi}>Kurang</button>
                <br/>
                <p>{this.state.isi}</p>
            </div>
        );
    }
}
export default Tempat;