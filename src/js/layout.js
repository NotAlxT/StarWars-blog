import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import Character from "./pages/character";
import Planet from "./pages/planet";
// import{get_planet} from "./swapi"
// import { get_planets } from "./swapi";
// import {get_character} from "./swapi";
// import {get_characters} from "./swapi";
// import injectContext from "./store/appContext";

// import { Navbar } from "./component/navbar";
// import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	// const basename = process.env.BASENAME || "";
	// get_planet()
	// get_planets()
	// console.log(get_planets())
	// get_character()
	return (
		<div>
			<BrowserRouter>
	
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/character/:characterId" element={<Character />} />
						<Route path="/planet/:planetId" element={<Planet />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
		
			</BrowserRouter>
		</div>
	);
};

export default Layout;
