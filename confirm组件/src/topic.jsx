/**
 *Created by  on 19/10/31.
 */
import React, { useState, useEffect } from 'react';
// 受控组件
const ControlledInputNumber = (props) => {
    const [value, setValue] = useState(props.value);

    let change = (data) => {
        setValue(data);
        props.onChange(data)
    }
    return (
        <input type="text"
            value={value}
            onChange={(e) => { change(e.target.value) }} />
    )
}
// 非受控组件
const UncontrolledInputNumber = (props) => {
    let iptRef = React.createRef();
    let change = () => {
        console.log(iptRef.current.value)
    }
    return (
            <input
            type="text"
            ref={iptRef}
            defaultValue={props.defaultValue}
            onChange={(e) => { props.onChange(e.target.value) }} />
    )
}
function App() {
    const [value, setValue] = useState('aaa');
    useEffect(() => {
        // componentDidMount
        // 直接使用return返回一个函数，这个函数在componentWillUnmount时执行
        return () => {
            console.log('will unmount');
        }
    }, []);
    return (
        <div>
            <div>受控组件</div>
            <ControlledInputNumber value="asdfasd" onChange={e => { console.log(e) }} />
            <div>非受控组价</div>
            <UncontrolledInputNumber defaultValue={value} onChange={e => { console.log(e)}} />
        </div>
    )
}
export default App
