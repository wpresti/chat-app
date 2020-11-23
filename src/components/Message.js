import React, { Component } from 'react'

export class Message extends Component {
    componentDidMount() {
        console.log("mESSAGE MOUNTED",this.props.msg)
    }
    // render() {
    //     const {userName, msg} = this.props.msg
    //     console.log("username:", userName, "msg:", msg)
    //     return (
    //         <div>
    //             <dt style={dtStyle}>{userName}</dt>
    //             <dd style={ddStyle}>{msg}</dd>
    //         </div>
    //     )
    // }
    render() {
        const {userName, msg} = this.props.msg
        return(
            <div className="container" style={container}>
                {/* <h1>{}</h1> */}
                <p style={p}>{msg}</p>
                <span style={span}>{userName}</span>
            </div>
        )
    }
}

export default Message

const p = {
    fontSize: "large",
    whiteSpace: "wrap",
    overflow: "visible"
}

const container = {
    display: "flex",
    flexFlow: "row wrap",// row wrap
    border: "2px solid #dedede",
    backgroundColor: "#f1f1f1",
    borderRadius: "15px",
    padding: "10px",
    margin: "10px 0",
    justifyContent: "space-between"
}

const span = {
    color: "#aaa"
}


// const dtStyle = {
//     border: "2px solid #dedede",
//     backgroundColor: "#f1f1f1",
//     borderRadius: "5px",
//     padding: "10px",
//     margin: "10px 0"
// }

// const ddStyle = {
//     float: "right",
//     background: "#0084ff",
//     borderBottomRightRadius: "10px",
//     borrderTopRightRadius: "5px",
//     borderTopLeftRadius: "5px",
//     borderBottomLeftRadius: "5px",
//     marginRight: "20px"
// }