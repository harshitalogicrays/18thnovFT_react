import React, { Component } from 'react'
import PropsDemo1 from './PropsDemo1'
import FirstFunComp from '../functionalcomp/FirstFunComp'

export default class Propsinclass extends Component {
  render() {
    return (
    <>
      <PropsDemo1 username="Atul" isActive={true} mobile={9876543210}>
        <h2>children</h2>
        <FirstFunComp/>
      </PropsDemo1>
      <hr/>
      <PropsDemo1  isActive={true}></PropsDemo1>
    </>
    )
  }
}
