import React from 'react'
import DentistCard from '../Components/Card'
import { useGlobalContext } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useGlobalContext()
  console.log(state)
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.list?.map(dentist =>(
          <DentistCard key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
            />
          ))}
      </div>
    </main>
  )
}

export default Home