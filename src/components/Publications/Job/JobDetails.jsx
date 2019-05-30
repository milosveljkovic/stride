
import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
 
const JobDetails = (props) => {
    const { job } = props; 
    if (job) {
        return (
            <div className="container" style={{textAlign:'center', marginRight: 250, marginTop:"250px",
                borderRadius:"10px",borderStyle:"solid",borderColor:"#dee2e8",borderWidth:"1px"}}>
                <div className="nekiDiv">
                    <div className="content">
                        <h1 style={{fontSize: 40}}>{ job.title }</h1>
                        <p style={{fontSize: 20}}> Job description: <br/> { job.description }</p>
                        <p style={{fontSize: 20}}>Job position: <br/> { job.position }</p>
                        <p style={{fontSize: 20}}>Available positions: <br/> { job.availablePositions }</p>
                        <p>Published:  {moment(job.createdAt).format('MMMM Do YYYY h:mm:ss a')}</p>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container2" style={{textAlign: 'center', marginRight: 250}}>
                <p>Loading job...</p>
            </div>
            )
    }
}

const mapStateToProps = (state, ovdeProps) => {
    const id = ovdeProps.match.params.id;
    const jobs = state.firestore.data.jobs;
    const job = jobs ? jobs[id] : null
    return {
         job: job
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'jobs' }
    ])
)(JobDetails)