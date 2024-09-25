import Globe from "react-globe.gl";
import { useEffect, useState } from "react";

const MyGlobeWithArcs = () => {
    const [arcsData, setArcsData] = useState([]);

    useEffect(() => {
        const generateRandomArcs = () => {
            const randomArcs = Array.from({ length: 30 }).map(() => ({
                startLat: (Math.random() * 180) - 90,  
                startLng: (Math.random() * 360) - 180,  
                endLat: (Math.random() * 180) - 90,    
                endLng: (Math.random() * 360) - 180,    
                color: [
                    ['rgba(255,0,0,0.8)', 'rgba(255,165,0,0.8)'],
                    ['rgba(0,255,0,0.8)', 'rgba(0,0,255,0.8)']   
                ][Math.floor(Math.random() * 2)] 
            }));
            setArcsData(randomArcs);
        };

        generateRandomArcs();
    }, []);

    return (
        <Globe
            height={326}
            width={326}
            backgroundColor="rgba(0,0,0,0)"
            backgroundImageOpacity={0.5}
            showAtmosphere
            showGraticules
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"      //change it to night.jpg or day.jpg as per your wish - iff needed una 
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" 
            arcsData={arcsData}  
            arcStartLat="startLat"  
            arcStartLng="startLng" 
            arcEndLat="endLat"      
            arcEndLng="endLng"     
            arcColor="color"        
            arcAltitudeAutoScale={0.5}   
            arcStroke={0.5}      
            arcsTransitionDuration={0}  
            atmosphereColor="white"
            atmosphereAltitude={0.25}
        />
    );
};

export default MyGlobeWithArcs;