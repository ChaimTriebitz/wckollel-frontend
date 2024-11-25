import React from 'react'

export const Table = ({ headers, rows }) => {

   return (
      <div className="table-container">
         <table>
            <thead>
               <tr>
                  {
                     headers.map(header => <th key={header.name}>{header.name}</th>)
                  }
               </tr>
            </thead>
            <tbody>
               {
                  rows.map((row) => (
                     <tr key={row._id || Math.random()}>
                        {
                           headers.map((header) =>
                              <td key={header.name}>
                                 <span className='mobile-header'>{header.name}</span>
                                 <h6>{row[header.internal_name]}</h6>
                              </td>
                           )
                        }

                     </tr>
                  ))
               }
               {
                  !rows.length &&
                  <tr>
                     <td
                        className='no-match'
                        colSpan={100}
                     >
                        No matches found
                     </td>
                  </tr>
               }
            </tbody>
         </table>
      </div>
   )
}
