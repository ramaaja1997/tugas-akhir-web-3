import React, {Component} from 'react';
import Card from "./Card";

class Portofolio extends Component {
    render() {
        return (
            <div style={{textAlign:"left",   marginLeft: 100,
  marginRight: 100}}>
                <h2>Halaman Portofolio</h2>
                <table>
                    <tr>
                        <th><Card/></th>
                        <th><Card/></th>
                        <th><Card/></th>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Portofolio;
