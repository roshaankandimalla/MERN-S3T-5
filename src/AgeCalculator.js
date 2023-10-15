import React, { useState } from 'react';


const AgeCalculator = () => {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(0);

    const calculateAge = () => {
        const today = new Date();
        const birthdateDate = new Date(birthdate);

        let age = today.getFullYear() - birthdateDate.getFullYear();
        const monthDiff = today.getMonth() - birthdateDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
            age--;
        }

        setAge(age);
    };

    
    return (
        <>
            <div className='Container'>
             <h2 className='heading container_title'>Age Calculator</h2>
             <p className=' para container_title'>Enter your date of birth</p>
             <div className='Container_middle'>
                    <div className='center'>
                    
                        <input className='date' type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
                        <div className='button_div'>
                            <center></center>
                        <button className='button-65' onClick={calculateAge}>Calculate Age</button>
                        
        
                        <h3> Your are {age > 0 ? ` ${age}` : ''}  years old</h3>
                    

                        </div>
                    </div>
                    
          
             </div>
            </div>
            
        </>
    );
};


export default AgeCalculator;