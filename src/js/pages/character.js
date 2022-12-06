import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { get_character } from "../swapi"

export default function Character() {
    let [info, setInfo] = useState()
    let {characterId} = useParams()
    useEffect(()=>{
        async function settingInfo(){
            let characterInfo = await get_character(characterId)
        setInfo(characterInfo)
        }
        settingInfo()
    },[])

    console.log(info)
    return(
    <h1>{info?.properties?.name}</h1>
    )
}