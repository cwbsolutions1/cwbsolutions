import React, { useState } from 'react';
import './CableTray.css';

import headerImage from './cs.jpg'
import cableTrayImage1 from './cable_cable_try.jpg'

import LadderTrayImage1 from './Cable Tray Images/cable_ladder_section_01.jpg'
import LadderTrayImage2 from './Cable Tray Images/cable_ladder_section_01.jpg'
import LadderTrayImage3 from './Cable Tray Images/cable_ladder_02.jpg'

const CableTray = () => {
    const [selectedType, setSelectedType] = useState('Cable Tray');

    return (
        <div>
            
            <div className='header-image-container'>
                <img className='header-image-ssc-products' src={headerImage} alt="" />
                
                <div className='header-image-heading'>
                    <p>Organize & Secure your Cables Effortlessly with Cable Trays! It's Your Ultimate Solution for a Tangle-free Workspace!</p>
                </div>
            </div>

            <div className='cable-tray-container'>

                <div className='cable-tray-types-container'>
                    <div className='cable-tray-types-heading'>
                        <span
                            className={`cable-tray-type ${selectedType === 'Cable Tray' ? 'active' : ''}`}
                            onClick={() => setSelectedType('Cable Tray')}
                        >
                            Cable Tray
                        </span>
                        <span
                            className={`cable-tray-type ${selectedType === 'Ladder Tray' ? 'active' : ''}`}
                            onClick={() => setSelectedType('Ladder Tray')}
                        >
                            Ladder Tray
                        </span>
                        <span
                            className={`cable-tray-type ${selectedType === 'Ladder Cable Tray' ? 'active' : ''}`}
                            onClick={() => setSelectedType('Ladder Cable Tray')}
                        >
                            Ladder Cable Tray
                        </span>
                        <span
                            className={`cable-tray-type ${selectedType === 'Solid Cable Tray' ? 'active' : ''}`}
                            onClick={() => setSelectedType('Solid Cable Tray')}
                        >
                            Solid Cable Tray
                        </span>
                        <span
                            className={`cable-tray-type ${selectedType === 'Perforated Cable Tray' ? 'active' : ''}`}
                            onClick={() => setSelectedType('Perforated Cable Tray')}
                        >
                            Perforated Cable Tray
                        </span>
                        <span
                            className={`cable-tray-type ${selectedType === 'Mesh Cable Tray' ? 'active' : ''}`}
                            onClick={() => setSelectedType('Mesh Cable Tray')}
                        >
                            Mesh Cable Tray
                        </span>
                    </div>

                    <div className='cable-tray-details'>
                        {selectedType === 'Cable Tray' && (
                            <div>
                                <h2>Cable Tray</h2>
                                <img src={cableTrayImage1} alt='Cable Tray' />
                                <p>Details about Cable Tray: Perfect for routing cables with efficiency.</p>
                            </div>
                        )}
                        {selectedType === 'Ladder Tray' && (
                            <div>
                                <h2>Ladder Tray (Floor Type)</h2>
                                <img src={LadderTrayImage1} alt='Ladder Tray' />

                                <h4>Ladder Tray Section</h4>
                                <div >
                                    <img src={LadderTrayImage2} alt='Ladder Tray' />
                                    <div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th colspan="4">Dimensions of each part (Unit: mm)</th>
                                                </tr>
                                                <tr>
                                                    <th>W (width)</th>
                                                    <th>L (length)</th>
                                                    <th>H (height)</th>
                                                    <th>Rung Spacing</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>120</td>
                                                    <td rowspan="10">2,400</td>
                                                    <td rowspan="10">100,150</td>
                                                    <td rowspan="10">200,300</td>
                                                </tr>
                                                <tr><td>200</td></tr>
                                                <tr><td>300</td></tr>
                                                <tr><td>400</td></tr>
                                                <tr><td>500</td></tr>
                                                <tr><td>600</td></tr>
                                                <tr><td>700</td></tr>
                                                <tr><td>800</td></tr>
                                                <tr><td>900</td></tr>
                                                <tr><td>1000</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <img src={LadderTrayImage3} alt='Ladder Tray' />
                                </div>


                            </div>
                        )}
                        {selectedType === 'Ladder Cable Tray' && (
                            <div>
                                <h2>Ladder Cable Tray</h2>
                                <img src={cableTrayImage1} alt='Ladder Cable Tray' />
                                <p>Details about Ladder Cable Tray: Combines strength and flexibility.</p>
                            </div>
                        )}
                        {selectedType === 'Solid Cable Tray' && (
                            <div>
                                <h2>Solid Cable Tray</h2>
                                <img src={cableTrayImage1} alt='Solid Cable Tray' />
                                <p>Details about Solid Cable Tray: Fully enclosed to protect sensitive cables.</p>
                            </div>
                        )}
                        {selectedType === 'Perforated Cable Tray' && (
                            <div>
                                <h2>Perforated Cable Tray</h2>
                                <img src={cableTrayImage1} alt='Perforated Cable Tray' />
                                <p>Details about Perforated Cable Tray: Lightweight yet durable.</p>
                            </div>
                        )}
                        {selectedType === 'Mesh Cable Tray' && (
                            <div>
                                <h2>Mesh Cable Tray</h2>
                                <img src={cableTrayImage1} alt='Mesh Cable Tray' />
                                <p>Details about Mesh Cable Tray: Offers great flexibility in routing cables.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CableTray;
