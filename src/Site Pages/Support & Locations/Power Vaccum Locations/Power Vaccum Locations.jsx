import './Power Vaccum Locations.css'

const PowerVaccumLocations = () =>{

    return(
        <div className='power-vacuum-locations-container'>

            <h1>Power Vaccum Locations</h1>

            <h3>Self Service Power Vacuum in Singapore</h3>

            <div class="video-container">
                <iframe 
                    id="i-vac-video-in-support-locations"
                    src="https://www.youtube.com/embed/GCpK6EWx47c" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>

            <h5>For your convenience we installed the most powerful self-service vacuums in the following locations</h5>
            <p>NOTICE AS OF 30/3/17:- PLEASE KINDLY TAKE NOTE THAT ALL VACUUM MAY BE UPGRADING AND IS CURRENTLY UNAVAILABLE. </p>

        </div>
    )
}
export default PowerVaccumLocations