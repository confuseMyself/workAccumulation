/**
 *Created by  on 19/11/01.
 */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "./asyncCom.css"
const App = (props) => {
    const [data, setData] = useState(1);
    
    useEffect(() => {
        // componentDidMount

        // 直接使用return返回一个函数，这个函数在componentWillUnmount时执行
        return () => {
            console.log('will unmount');
        }
    }, []);
    let { children,resolve,msg,ok,cancel } = props;
    let modelWrap = document.getElementsByClassName("myModel__wrap")[0];
    let onOk = ()=>{
        ReactDOM.unmountComponentAtNode(modelWrap);
        resolve("ok");
        ok && ok()
        
    }
    let onCancel = ()=>{
        ReactDOM.unmountComponentAtNode(modelWrap); 
        resolve("cancel");
        cancel && cancel()
    }
    return (
        <div className="model">
            <div className="model__content">
                <div className="model__title">{msg || "提示信息"}</div>
                {children}
                <div className="model__foot">
                    <button className="btn-sure" onClick={onOk}>确定</button>
                    <button className="btn-cancel" onClick={onCancel}>取消</button>
                </div>
            </div>


        </div>
    );
}
// react 高阶组件
const wait = (obj = {msg:"",ok:()=>{},cancel:()=>{}})=>{
    let {msg,ok,cancel} = obj;
    return new Promise((resolve, reject)=>{
        let modelWrap = document.getElementsByClassName("myModel__wrap")[0] || document.createElement('div');
        let bodyDom = document.getElementsByTagName("body")[0];
        bodyDom.appendChild(modelWrap); 
        modelWrap.classList.add("myModel__wrap");
        ReactDOM.render(<App ok={ok} cancel={cancel} resolve={resolve} msg={msg}/>, modelWrap);
    })
}
export default wait