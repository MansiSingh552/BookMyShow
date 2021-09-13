import React from "react";

import {BiCameraMovie}from "react-icons/bi"

import { Cast , Crew} from "../config/CastCrew";

import MovieHero from "../Components/MovieHero/MovieHero.component";

const Movie = (props) => {
   return (
    <>
     <MovieHero />
     <div className="my-12 container lg:w-2/3 lg:ml-32">
        <div className="flex flex-col items-start gap-3">
           <h2 className="text-gray-900 font-bold text-2xl">About the movie</h2>
           <p>Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
        </div>
        <div className="my-8"><hr /></div>
        
        <div>
        <h2 className="text-gray-900 font-bold text-2xl">Applicable Offers</h2>
        <div className="flex items-start gap-2 my-3 bg-yellow-100 w-96 border-dashed border-2 border-yellow-500 rounded px-4 py-2">
           <div className="h-12 w-12">< img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhX5WjSUyTf9-k2yh6Ryumrx0V-uW3NtiX0qkqopSbqSlfbmB9KkGhSJUWYyJicZumyHI&usqp=CAU"/></div>
        
        <div className="flex flex-col items-start">
           <h3>Filmy Pass</h3>
           <p>Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
        </div>
        </div>
        
        </div>
        <div className="my-8"><hr /></div>
        <div className="my-8">
           <h1 className="text-2xl font-bold text-gray-900 my-4">Cast</h1>
           <div className="flex gap-6">
              {
                 Cast.map((cast) => (
                    <div className="flex flex-col h-auto w-32 gap-2">
                       <img src={cast.src} className="rounded-full h-28 w-28"></img>
                       <h3 className="text-lg font-bold text-gray-900">{cast.title}</h3>
                       <p className="text-gray-900">{cast.subtitle}</p>
                    </div>
                 ))
              }
           </div>
        </div>

        <div className="my-8"><hr /></div>
        
        <div className="my-8">
           <h1 className="text-2xl font-bold text-gray-900 my-4">Crew</h1>
           <div className="flex gap-6">
              {
                 Crew.map((cast) => (
                    <div className="flex flex-col h-auto w-32 gap-2">
                       <img src={cast.src} className="rounded-full h-28 w-28"></img>
                       <h3 className="text-lg font-bold text-gray-900">{cast.title}</h3>
                       <p className="text-gray-900">{cast.subtitle}</p>
                    </div>
                 ))
              }
           </div>
        </div>
        
     </div>
    </>
   ) 
}

export default Movie;