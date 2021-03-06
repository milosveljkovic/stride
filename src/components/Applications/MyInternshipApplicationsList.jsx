import { Button, Container } from 'semantic-ui-react';
import {NavLink } from 'react-router-dom'
import Spinner from '../../Spinner'

import React from 'react';

class MyInternshipApplicationsList extends React.Component{
    render(){

        const {listOfMyInternshipApplications} =this.props;

        if(listOfMyInternshipApplications===undefined || listOfMyInternshipApplications===null){ // undefine je sasvim malo dok se ne ucitaju podaciizroditelja
            return  <Spinner/>;
        }else{ 
            return(
                <div>
                    {
                        this.props.listOfMyInternshipApplications.map((myApplication)=>{
                            return (
                            <div key={myApplication.internshipId} style={{borderLeft:"10px solid #03254c",background:"white", textAlign:"center",verticalAlign:"middle", margin:"20px 0px", padding:"20px 5px"}}>
                                <h3 >{myApplication.internshipTitle}</h3>
                                    <Button as={NavLink} to={`internship-detail/${myApplication.internshipId}`} style={{textAlign:"center", background:"#d0efff"}}>
                                        Internship Details
                                    </Button>
                            </div>
                            )
                        })
                    }
                </div>
                )
            }
        }
    }

export default MyInternshipApplicationsList;