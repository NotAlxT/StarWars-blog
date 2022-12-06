import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { get_characters, get_planets } from "../swapi"
import Character from "./character"

export const Home() => {
    let [characters, setCharacters] = useState()
    
    useEffect(()=>{
        async function set(){
            let charactersInfo = await get_characters()
        setCharacters(charactersInfo)
        }
        set()
    },[])

    return( 
    <div> {characters?.map((character) => {
        return<h1>{characters.name}</h1>
     }
    )}
    </div>
    )
    
}