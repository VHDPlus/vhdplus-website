import React, { useState } from 'react'

import classnames from "classnames";
import fc from "../css/fpga.module.css";
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function FPGA({
}) {

    return (
        <>
            <div className={fc.wrap}>

            <div className={fc.innerwrap}>
            <div className={classnames(fc.ios, "scaleMobile")}>
                <div className={classnames(fc.labelIO, fc.label)}>I/O Blocks</div>
                <div className={classnames(fc.pointerIO, fc.pointer)}></div>

                <div className={classnames(fc.labelIC, fc.label)}>Connections</div>
                <div className={classnames(fc.pointerIC, fc.pointer)}></div>

                <div className={fc.iov} style={{left: "43px", top: "25px"}}></div>
                <div className={fc.iov} style={{left: "80px", top: "25px"}}></div>
                <div className={fc.iov} style={{left: "117px", top: "25px"}}></div>
                <div className={fc.iov} style={{left: "154px", top: "25px"}}></div>
                <div className={fc.iov} style={{left: "191px", top: "25px"}}></div>
                <div className={fc.iov} style={{left: "228px", top: "25px"}}></div>

                <div className={fc.iov} style={{left: "43px", bottom: "25px"}}></div>
                <div className={fc.iov} style={{left: "80px", bottom: "25px"}}></div>
                <div className={fc.iov} style={{left: "117px", bottom: "25px"}}></div>
                <div className={fc.iov} style={{left: "154px", bottom: "25px"}}></div>
                <div className={fc.iov} style={{left: "191px", bottom: "25px"}}></div>
                <div className={fc.iov} style={{left: "228px", bottom: "25px"}}></div>

                <div className={fc.ioh} style={{left: "25px", top: "43px"}}></div>
                <div className={fc.ioh} style={{left: "25px", top: "80px"}}></div>
                <div className={fc.ioh} style={{left: "25px", top: "117px"}}></div>
                <div className={fc.ioh} style={{left: "25px", top: "154px"}}></div>
                <div className={fc.ioh} style={{left: "25px", top: "191px"}}></div>
                <div className={fc.ioh} style={{left: "25px", top: "228px"}}></div>

                <div className={fc.ioh} style={{right: "25px", top: "43px"}}></div>
                <div className={fc.ioh} style={{right: "25px", top: "80px"}}></div>
                <div className={fc.ioh} style={{right: "25px", top: "117px"}}></div>
                <div className={fc.ioh} style={{right: "25px", top: "154px"}}></div>
                <div className={fc.ioh} style={{right: "25px", top: "191px"}}></div>
                <div className={fc.ioh} style={{right: "25px", top: "228px"}}></div>

                <div className={fc.logikElements}>
                    <div className={classnames(fc.labelLE, fc.label)}>Logik Blocks</div>
                    <div className={classnames(fc.pointerLE, fc.pointer)}></div>
                    <table className={fc.table}>
                        <tr className={fc.tr}>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                        </tr>
                        <tr className={fc.tr}>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                        </tr>
                        <tr className={fc.tr}>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                        </tr>
                        <tr className={fc.tr}>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                        </tr>
                        <tr className={fc.tr}>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                        </tr>
                        <tr className={fc.tr}>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                            <td className={fc.td}></td>
                        </tr>

                    </table>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}