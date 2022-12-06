async function get_planet(planetId) {
    const res = await fetch("https://www.swapi.tech/api/planets/"+planetId)
    let data = await res.json()
    console.log(data)
    return data.result
     
      }

async function get_planets() {
    const res = await fetch("https://www.swapi.tech/api/planets/")
    let data = await res.json()
    // console.log(data)
    // console.log(data.results)
    // console.log(data.results[3])
    return data.results
      }

async function get_character(characterId) {
    const res = await fetch("https://www.swapi.tech/api/people/"+ characterId)
    let data = await res.json()
    console.log(data)
    return data.result

}

async function get_characters() {
    const res = await fetch("https://www.swapi.tech/api/people/")
    let data = await res.json()
    console.log(data)
    return data.results
}

 export {get_planet, get_planets, get_character, get_characters}