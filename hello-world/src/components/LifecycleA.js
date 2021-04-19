import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

/**
 * Mounting: When an instance of a component is being created and inserted into the DOM
 *      constructor(props)
 *          A special function that will get called whenever a new component id created
 *          Initializing state、Binding the event handlers
 *          Do not cause side effects.Ex: Http requests
 *          super(props)、Directly overwrite this.state
 *      static getDerivedStateFromProps(props,state)
 *          When the state of the component depends on changes in props over time
 *          Set the state
 *          Do not cause side effects.Ex: Http requests
 *      render()
 *          Only required method
 *          Read props & state and return JSX
 *          Do not change state or interact with DOM or make ajax calls.
 *          Children compoents lifecycle methods are also executed
 *      componentDidMount()
 *          Invoked immediately after a component and all its children compoents have been rendered to the DOM
 *          Cause side effects. Ex: Interact with the DOM or perform any ajax calls to laod  data
 * Unpdating: When a component is being re-rendered as a result of changes to either its props or state
 *      static getDerivedStateFromProps(props,state)
 *          Method id called every time a component is re-rendered
 *          Set the state
 *          Do not cause side effect.Ex: HTTP requests
 *      shouldComponentUpdate(nextProps,nextStates)
 *          Dictates if the component should re-render or not
 *          Performance optimization
 *          Do not cause side effects. Ex: HTTP requests Calling the setState method
 *      render()
 *          Only required method
 *          Read props & state and return JSX
 *          Do not change state or interact with DOM or make ajax calls.
 *      getSnapshotBeforeUpdate(prevProps,prevState)
 *          Called right before the changes from the virtual DOM are to be reflected in the DOM
 *          Capture some information from the DOM
 *          Method will either return null or return a value. Returned value will be passed as the third parameter to the next method.
 *      componentDidUpdate(prevProps,prevState,snapshot)
 *          Called after the render is finished in the re-render cycles
 *          Cause side effects
 * Unmounting: When a component is beding removed from the DOM
 *      componentWillUnmout()
 *          Method is invoked immediately before a component is unmounted and destroyed
 *          Cancelling any network requests,removing event handlers,cancelling any subscriptions and also invalidating timers.
 *          Do not call the setState method
 * Error Handeling: When there is an erroe during rendering, in a lifecycle method, or in the constructor of any child component
 *      static getDerivedStateFromError(error)
 *      componentDidCatch(error,info)
 */
class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "xingyu"
        }

        console.log("LifecycleA constructor")
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedStateFromProps")
        return null
    }
    
    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("LifecycleA componentDidUpdate")
    }


    changeState = () => {
        this.setState({
            name:"Codevolution"
        })
    }

    render() {
        console.log("LifecycleA render")
        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
