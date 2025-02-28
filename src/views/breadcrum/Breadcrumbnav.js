import React from 'react';
import { useState,useContext } from 'react'
import { Store } from 'src/views/forms/validation/store';
import {    
    CCard,
    CCardBody,    
    CCol,    
    CRow,    
} from '@coreui/react'

import "../../scss/panel.css"
const Breadcrumbnav = (props) => {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { objectCount , profileDetails } = state  
    // console.log(objectCount)
    const {currentStep , chageSteps }= props
    let breadcrumbs = {
        term:["term"],
        semester: ["term","semester"],
        division: ["term","semester","division"],
        batch: ["term","semester","division","batch"],
    }
    return (
        <>    
            <CRow className='mb-2'>
                <CCol xl>
                    <CCard>
                        <CCardBody style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                            <nav aria-label="breadcrumb">
                                <ol className="mb-3 breadcrumb d-flex align-items-center text-sm sm:text-lg" style={{margin:'0'}}>
                                    <li className="breadcrumb-item active" aria-current="page">
                                    <svg style={{marginTop:'-3'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                                    </svg>
                                    </li>
                                    {
                                        breadcrumbs[currentStep].map((items,keys)=>(
                                            
                                             <li className="breadcrumb-item active" aria-current="page" key={keys}><a style={{cursor:"grab"}} onClick={() => {chageSteps(items)}} className={items === currentStep?"disabled":""}>{items}</a></li>
                                        ))
                                    }
                                </ol>                                                      
                            </nav>

                            <span className='text-sm sm:text-lg'>Branch - {profileDetails.obj.branch.branch_name}</span>

                            
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    );
}

export default Breadcrumbnav;
