import React from 'react';

//stateless function
function VacationPackagesList(props) {
        return (
            <div>
                {props.vacationPackages.map((vacation, index) => {
                    return (
                        <div key={index}>
                             <img src={vacation.image_url}/>
                             <button onClick={()=> {props.removeVacation(vacation.id)}}>Delete</button>
                            <h3>{vacation.location}</h3>
                            <h5>{vacation.type}</h5>
                            <h5>{vacation.activities}</h5>
                            <h5>Length: {vacation.days} days</h5>
                            <p>{vacation.description}</p>
                        </div>
                    )
                })}
                
            </div>
        )
    }

export default VacationPackagesList;