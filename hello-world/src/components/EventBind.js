import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }

        this.clickHandler3=this.clickHandler3.bind(this)
    }

    clickHandler1(){
        console.log(this)
        this.setState({
            message:'Good Bye'
        })
    }

    clickHandler2(){
        console.log(this)
        this.setState({
            message:'Good Bye'
        })
    }

    clickHandler3(){
        console.log(this)
        this.setState({
            message:'Good Bye'
        })
    }

    clickHandler4 = () => {
        console.log(this)
        this.setState({
            message:'Good Bye'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler1.bind(this)}>Click 1</button>
                <button onClick={() => this.clickHandler2()}>Click 2</button>
                <button onClick={this.clickHandler3}>Click 3</button>
                <button onClick={this.clickHandler4}>Click 4</button>
            </div>
        )
    }
}

export default EventBind
