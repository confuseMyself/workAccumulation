/**
 *Created by  on 19/11/01.
 */
import React, { Component } from 'react';
import wait from "./asyncCom/asyncCom"
export default class element extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    async componentDidMount() {
        let res = await wait({
            msg: "弹窗",
            ok: () => {
                console.log(12232)
            },
            cancel: () => {
                console.log("asfasdfasdfas")
            }
        })
    }
    componentWillUnmount() {
    }
    render() {
        return (
            <div className="page">
                <button onClick={() => {
                    wait({
                        msg: "弹窗",
                        ok: () => {
                            console.log(122323233434)
                        },
                        cancel: () => {
                            console.log("000909")
                        }
                    })
                }}>点击弹出弹框</button>
            </div>
        );
    }
}