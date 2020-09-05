// import React,{ Component } from "react";
// class Ninjas extends Component{
    // render(){const {ninjas} = this.props;}

import React from "react";
import './ninja.css';
// const Ninjas = (props)=>{
        // const {ninjas} = props;
// destructuring
// const {{ninjas, deleteNinja}} => this.props
const Ninjas = ({ninjas, deleteNinja})=>{
        // console.log(this.props)
        // const ninjaList = ninjas.map(ninja =>{
        //     if(ninja.age > 20){
        //     return(
        //         <div className="ninja" key={ninja}>
        //             <div>Name: {ninja.name}</div>
        //             <div>Age: {ninja.age}</div>
        //             <div>Belt: {ninja.belt}</div>
        //         </div>
        //     ) }
        //     else{return null}
        // })
        const ninjaList = ninjas.map(ninja =>{
            return ninja.age > 20? (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={() => {deleteNinja(ninja.id)} }>Delete Ninja</button>
                </div>
                ) : null
                
        })
        return(
            <div className="ninja-list">
            {ninjaList}
            </div>
        )
    }
export default Ninjas;
    // const Ninjas = ({ninjas})=>{
    //     return(
    //         <div className="ninja-list">
    //         {
    //             ninjas.map(ninja =>{
    //             return ninja.age > 20? (
    //                 <div className="ninja" key={ninja}>
    //                     <div>Name: {ninja.name}</div>
    //                     <div>Age: {ninja.age}</div>
    //                     <div>Belt: {ninja.belt}</div>
    //                 </div>
    //                 ) : null
    //             })
    //         }
    //         </div>
    //     )
    // }