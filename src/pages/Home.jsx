import React from 'react'
import Hero from '../components/Hero'
import Howitwork from '../components/Howitwork'
import Restaurant from '../components/restaurant/Restaurant';
import FavouriteFood from '../components/FavouriteFood';

function Home() {
  return (
    <>
    <Hero></Hero>
    <Howitwork></Howitwork>
    <Restaurant></Restaurant>
    <FavouriteFood></FavouriteFood>
    </>
  )
}

export default Home