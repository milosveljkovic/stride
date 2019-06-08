import {Button, Container,Form,Checkbox,TextArea,Select, Confirm } from 'semantic-ui-react';

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux' 
import React from 'react';
import {connect} from 'react-redux';
import Spinner from '../../../Spinner'


class UsersProjectApplication extends React.Component{

    render(){
        const {userApplications} = this.props;
        
        if(userApplications!==null) {
            return(
                <Container style={{width:"100%",height:"100%"}}>
                    <h1 style={{textAlign:"center",marginRight:"250px"}}> Users Applications Project</h1>   
                        <Container>
                            {
                                userApplications===undefined?
                                <Spinner/>
                                :
                                userApplications.length===0?
                                <h3>0 prijavljenih zza ovaj projekat</h3>
                                :
                                userApplications.map((userProfile)=>{
                                return(
                                    <div key={userProfile.userId} style={{textAlign:"center",marginRight:"250px",height:"150px",     marginTop:"5px",borderRadius:"10px",borderStyle:"solid",borderColor:"#dee2e8",borderWidth:"1px"}}>
                                        <h3>{userProfile.userName}</h3>
                                        <h3>{userProfile.userEmail}</h3>
                                        <h3>avatar</h3>
                                        <h3>link Za cv</h3>
                                    </div>
                                    )
                                })
                            }
                        </Container>
                </Container>
            )
        }
        else {
            return <Spinner />;
        }
    }
}


const mapStateToProps = (state, ownProps) => {

    const thisProjectId = ownProps.match.params.id;
    return {
        projectId:thisProjectId,
        userApplications:state.firestore.ordered.userApplications
    }
}

export default compose(
    connect(mapStateToProps,null),
    firestoreConnect((props)=>[
        {
            collection:'projects',
            doc:props.projectId,
            subcollections:[{collection:'userApplications'}],
            storeAs: 'userApplications'
        }
    ])
)(UsersProjectApplication)
