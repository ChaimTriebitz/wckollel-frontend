import React from 'react'
import { Cells } from './Cells'
import { useGlobalState } from '../../hooks'

export const Table = ({ headers = [], rows = [] }) => {

   const { isDataLoading } = useGlobalState()

   return (
      <div className={`table-container ${isDataLoading ? 'loading' : ''}`}>
         {isDataLoading && < div className='loader' id='sandwatchloader' />}
         <table>
            <thead>
               <tr>
                  {
                     rows.length > 0 && headers.map(header => <th data-internal_name={header.internal_name} key={header.name}>{header.name}</th>)
                  }
               </tr>
            </thead>
            <tbody>
               {
                  rows.map((row) => (
                     <tr key={row._id || Math.random()}>
                        {
                           headers.map((header) =>
                              <td
                                 data-internal_name={header.internal_name}
                                 key={header.name}
                                 data-cell_type={header.cell_type}>
                                 <span className='mobile-header'>{header.name}</span>
                                 <Cells header={header} row={row} />
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
