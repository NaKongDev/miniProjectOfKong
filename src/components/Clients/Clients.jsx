import React from 'react'
import ClientsLogo01 from '../../assets/img/clients/client-01.png'
import ClientsLogo02 from '../../assets/img/clients/client-02.png'
import ClientsLogo03 from '../../assets/img/clients/client-03.png'
import ClientsLogo04 from '../../assets/img/clients/client-04.png'
import ClientsLogo05 from '../../assets/img/clients/client-05.png'
import ClientsLogo06 from '../../assets/img/clients/client-06.png'
import ClientsLogo07 from '../../assets/img/clients/client-07.png'

const ClientsLogo = [
  ClientsLogo01,
  ClientsLogo02,
  ClientsLogo03,
  ClientsLogo04,
  ClientsLogo05,
  ClientsLogo06,
  ClientsLogo07,
]

function Clients() {
  return (
    <div className='container mx-auto max-w-[1320px] py-10 text-center'>
      <h2 className='text-[2.25rem] font-semibold text-[#4D4D4D]'>Our Clients</h2>
      <p className='text-[#717171]'>We have been working with some Fortune 500+ clients</p>
      <ul className='flex flex-col items-center my-10 md:flex-row md:justify-between'>
        {ClientsLogo.map((clients,index)=>(
          <li key={index}>
            <img src={clients} ale=''/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Clients