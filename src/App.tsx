import { ChangeEvent, useEffect, useState} from 'react';
import { Movie } from './types/Movie';

function app(){    

  const [movies, setMovies] = useState<Movie[]>([]);  

  /*const loadMovies = () => {   
      fetch('https://api.b7web.com.br/cinema/').then((res) =>{
        return res.json();
    })
    .then((json)=>{
      setMovies(json);
    })  
}*/ 
const loadMovies = async () => {   
  let respose = await  fetch('https://api.b7web.com.br/cinema/'); //Armazenando o retorno da req no let
  let json = await respose.json(); //Armazenando a resposta em json  e transforma e json
  setMovies(json);  
}

  return (    
   <div>  
     <div className="h-24 flex flex-col items-center justify-center">  
     <button className="w-40 bg-cyan-100 p-2 flex justify-center my-3 drop-shadow-xl rounded" onClick={loadMovies}>Carregar filmes</button>
      Total de filmes:{movies.length}
     </div>     
     <div className="grid grid-cols-6 mt-4">
       {movies.map((item, index) => (
         <div className="mx-3 m-4 text-center drop-shadow-2xl"> 
           <img src={item.avatar} className="w-50 block"/>
           {item.titulo}
         </div>
       ))}
     </div>
   </div>
  );
}
export default app;