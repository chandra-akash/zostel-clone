import React from 'react'
import './search.css'
// import cities from './cities.json'


const visible = {
    hide: {
        display: 'none',
    },
    show: {
        display: 'block',
    }
}

const Search = () => {
    const [display, setDisplay] = React.useState(visible.hide || visible.show)

    const [cities, setCities] = React.useState("")

    return (
        <>
            <div className="background ">
                <div className="option1">
                    <p>Zostel</p>
                </div>
                <div className="option2">
                    <p>Zostel Homes</p>

                </div>


                <div className="row container text-center">
                    <div className="col">

                        {/* <div
                            className="row bg-secondary w-25"
                            onClick={() => {
                                setDisplay(prev => !prev)
                            }}
                            // onClick={ }
                            type="text"
                            placeholder="" >
                            Select Destination
                        </div>
                        <div style={{ ...display }}

                        >

                            <div onClick={() => {
                                setDisplay(prev => !prev)
                            }}>agfae</div>
                            <div>agfae</div>
                            <div>agfae</div>
                            <div>agfae</div>
                            <div>agfae</div>
                        </div> */}



                        <select
                            className="bg-warning"
                            onChange={(e) => setCities(e.target.value)}
                            value="Select Destionation">
                            {cities}

                            {/* 
                            {locations.map((e) => (

                                < option key={e.id} >
                                    <option>{(e.name)}</option>
                                </option>
 */}
                            {/* ))} */}


                            <option value="Select Destination">{cities}</option>

                            <option value="ALLEPPEY">ALLEPPEY</option>
                            <option value="AURANGABAD">AURANGABAD</option>
                            <option value="BANGALORE">BANGALORE</option>
                            <option value="BAROT (RAJGUNDHA)">BAROT (RAJGUNDHA)</option>
                            <option value="BIR 2.0">BIR 2.0</option>
                            <option value="CHENNAI">CHENNAI</option>
                            <option value="CHITKUL">CHITKUL</option>
                            <option value="COORG">COORG</option>
                            <option value="DALHOUSIE">DALHOUSIE</option>
                            <option value="DELHI">DELHI</option>
                            <option value="GANGTOK">GANGTOK</option>
                            <option value="GOKARNA">GOKARNA</option>
                            <option value="JAIPUR">JAIPUR</option>
                            <option value="JAISALMER">JAISALMER</option>
                            <option value="JODHPUR">JODHPUR</option>
                            <option value="KATHMANDU">KATHMANDU</option>
                            <option value="KOCHI">KOCHI</option>
                            <option value="KODAIKANAL">KODAIKANAL</option>
                            <option value="KOLAD">KOLAD</option>
                            <option value="LEH">LEH</option>
                            <option value="MANALI">MANALI</option>
                            <option value="MCLEODGANJ">MCLEODGANJ</option>
                            <option value="MUKTESHWAR">MUKTESHWAR</option>
                            <option value="MUMBAI">MUMBAI</option>
                            <option value="MUNNAR">MUNNAR</option>
                            <option value="MUSSOORIE">MUSSOORIE</option>
                            <option value="MYSORE">MYSORE</option>
                            <option value="OOTY">OOTY</option>
                            <option value="PANCHGANI">PANCHGANI</option>
                            <option value="POKHARA">POKHARA</option>
                            <option value="PUSHKAR">PUSHKAR</option>
                            <option value="RISHIKESH 2.0">RISHIKESH 2.0</option>
                            <option value="SHANGARH">SHANGARH</option>
                            <option value="SISSU">SISSU</option>
                            <option value="SPITI">SPITI</option>
                            <option value="UDAIPUR">UDAIPUR</option>
                            <option value="VAGAMON">VAGAMON</option>
                            <option value="VARKALA">VARKALA</option>
                            <option value="WAYANAD">WAYANAD</option>
                        </select>


                        <input type="date" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                    </div>
                </div>

                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><button className="dropdown-item" type="button">Action</button></li>
                        <li><button className="dropdown-item" type="button">Another action</button></li>
                        <li><button className="dropdown-item" type="button">Something else here</button></li>
                    </ul>
                </div>

            </div >
        </>
    )
}

export { Search }