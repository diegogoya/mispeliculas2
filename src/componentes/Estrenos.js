import React from 'react';
import styled from 'styled-components'

const Contenedor = styled.div`
	>ul{
		background:rga(66,165,245,1);
		padding-left:0;
	}	
`
const ItemPelicula = styled.li`
	list-style:none;
`

export default ({peliculas})=>(
	<Contenedor>
		<ul>
		{
			peliculas.map(peliculas=>(
				<ItemPelicula key = {peliculas.id}>{peliculas.title}</ItemPelicula>	
			))
		}
		</ul>
	</Contenedor>	
)