import React, { Component } from 'react';

class ConditionalRenderingInClassCompo extends Component {
    constructor(props) {
        super(props);
        this.state={
            status:true
        }
    }

    loginChange=()=>{
        this.setState({status:!this.state.status})
    }

    render() {
        // let status = true
        let loginbtn = ""
        // if (this.state.status) {
        //     loginbtn = <button onClick={this.loginChange}>Logout</button>
        // }else{
        //     loginbtn = <button onClick={this.loginChange}>Login</button>
        // }
        const count = 1;    

            return (
                <>
                    {count && <h1>Message: {count}</h1>}

                    <br />
                    {loginbtn}   
                    <br />
                    <button className='btn btn-primary' onClick={this.loginChange}>
                    { (this.state.status)? "Logout":"Login"}</button>
                    <br />
                    <br />
                    <button className='btn btn-info' onClick={()=>{this.setState
                    ({status:!this.state.status})}}> { (this.state.status)? "Logout":"Login"}</button>
                </>
            );
            // return (
            //     <>

            //         False
            //     </>
            // );
    }
}

// class ConditionalRenderingInClassCompo extends Component {
//     render() {
//         let status = true
//         if (status) {
//             return (
//                 <>
//                     True   
//                 </>
//             );
//         }else{
//             return (
//                 <>
//                     False
//                 </>
//             );
//         }
//     }
// }

export default ConditionalRenderingInClassCompo;