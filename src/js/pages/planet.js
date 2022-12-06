import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { get_planet } from "../swapi"

export default function Planet() {
    let [info, setInfo] = useState()
    let {planetId} = useParams()
    useEffect(()=>{
        async function settingInfo(){
            let planetInfo = await get_planet(planetId)
        setInfo(planetInfo)
        }
        settingInfo()
    },[])

    console.log(info)
    return(
    <h1>{info?.properties?.name}</h1>
    )
}