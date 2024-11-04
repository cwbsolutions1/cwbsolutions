import './Intelligent Car Parking System Management.css'

const IntelligentCarParkingSystemManagement =() =>{

    return(
        <div className='intelligent-car-parking-system-management-container'>
            <h1>Intelligent Car Parking System Management</h1>

            <p>This Intelligent Car Parking System Management realizes unattended operation at the entrance, charge at the exit or central PC. It support different cards, such as free card,   month card, prepaid card and temporary card, automatic identification and date recording. The LED  display can display 'welcome', charging status, valid period of month card, charge free card and the balance   of pre-paid card.</p>

            <p><b>Application: </b> car parks, condominiums, bus stations, shopping malls, etc. </p>

            <div>
                <div>{/*Use this to add image and use flex to display side by side */}</div>
                <div>
                    <p>Features</p>
                    <ul type='square'>
                        <li> Image comparison </li>
                        <li> Credentials capture </li>
                        <li> IC/ID user card compatible</li>
                        <li>Blue-tooth long distance card reading (option) </li>
                        <li>Extending valid period without card </li>
                        <li>Barrier status monitor </li>
                        <li>Multi charging modes </li>
                        <li>Preset plate number </li>
                        <li>Anti-bumping and automatic closing</li>
                        <li>Offline /online operation</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default IntelligentCarParkingSystemManagement;