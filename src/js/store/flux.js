const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		characters: [],
		planets: [],
		urlBase: "https://www.swapi.tech/api",
		favorites: [],
	  },
	  actions: {
		getCharacters: () => {
		  // con then
		  let store = getStore();
  
		  fetch(`${store.urlBase}/people`)
			.then((response) => response.json())
			.then((data) => {
			  for (let person of data.results) {
				fetch(`${store.urlBase}/people/${person.uid}`)
				  .then((response) => response.json())
				  .then((data) => {
					setStore({ characters: [...store.characters, data.result] });
				  });
			  }
			})
			.catch((error) => console.log(error));
		},
		getPlanets: () => {
		  let store = getStore();
  
		  fetch(`${store.urlBase}/planets`)
			.then((response) => response.json())
			.then((data) => {
			  for (let planet of data.results) {
				fetch(`${store.urlBase}/planets/${planet.uid}`)
				  .then((response) => response.json())
				  .then((planetData) => {
					
					planet.name = planetData.result.name;
					planet.climate = planetData.result.climate;
					planet.population = planetData.result.population;
  
					setStore({ planets: [...store.planets, planet] });
				  });
			  }
			})
			.catch((error) => console.log(error));
		},
		addFavorite: (favToSave) => {
		  let store = getStore();
  
		  let exists = store.favorites.some((item) => item._id === favToSave._id);
  
		  if (exists) {
			let newList = store.favorites.filter((item) => item._id !== favToSave._id);
  
			setStore({
			  favorites: newList,
			});
		  } else {
			setStore({
			  favorites: [...store.favorites, favToSave],
			});
		  }
		},
	  },
	};
  };
  
  export default getState;
  