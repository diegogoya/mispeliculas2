import React from 'react';
import axios from 'axios'
import Destaque from '../componentes/Destaque';
import Estrenos from '../componentes/Estrenos';

class HomePage extends React.Component{
	state = {
		peliculas:[]
	}

	componentDidMount(){
		this.getData()
	}
	getData = async ()=>{
		try{
			const resultados = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=fbfefb7ba2de71702dd4848aabdf0737&language=es')
			this.setState({
			peliculas:resultados.data.results
		})
		} catch (error){
			console.log(error.message)
		}
		
	}

	render(){
		return(
			<div>
			<Destaque/>
			<Estrenos peliculas = {this.state.peliculas}/>
			</div>
		);
	}
}

export default HomePage