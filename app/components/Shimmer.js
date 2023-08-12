import React from 'react'

const Shimmer = () => {
  return (
    <table className="w-full border-collapse border border-gray-300 mb-10 animate-pulse">
        <thead>
          <tr className="bg-[rgb(54,69,79)]">
            <th className="h-4  py-4 px-4 m-1 border"><div className='w-3/5 h-6 mx-auto bg-slate-400 xs:w-full sm:w-full'></div></th>
            <th className="h-4  py-4 px-4 m-1 border"><div className='w-3/5 h-6 mx-auto bg-slate-400 xs:w-full sm:w-full'></div></th>
            <th className="h-4  py-4 px-4 m-1 border"><div className='w-3/5 h-6 mx-auto bg-slate-400 xs:w-full sm:w-full'></div></th>
            <th className="h-4  py-4 px-4 m-1 border"><div className='w-3/5 h-6 mx-auto bg-slate-400 xs:w-full sm:w-full'></div></th>
          </tr>
        </thead>
        <tbody>
        {
        Array(5).fill("").map((e,index)=>{
            return(
            <tr key={index} className="border">
              <td className="h-4 w-2 py-5  px-4 m-1 border"><div className='w-3/5 h-6 mx-auto bg-slate-400 xs:w-full sm:w-full'></div></td>
              <td className="h-4 w-2 py-5  px-4 m-1 border"><div className='w-3/5 h-6 mx-auto bg-slate-400 xs:w-full sm:w-full'></div></td>
              <td className="h-4 w-2 py-5  px-4 m-1 border"><div className='w-3/5 h-6 mx-auto bg-slate-400 xs:w-full sm:w-full'></div></td>
              <td className="h-4 w-2 py-5  px-4 m-1 border"><div className='w-3/5 h-6 mx-auto bg-slate-400 xs:w-full sm:w-full'></div></td>
            </tr>)
        })
        }
        </tbody>
      </table>
  )
}

export default Shimmer
