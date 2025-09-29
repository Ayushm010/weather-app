export async function gateData(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?key=XYW5WCBK6FR4ZPTTUP7UXUT93`;
    try{
        const response = await fetch(url);
         return await response.json();
    }catch(err){
        alert("location not found");
        console.log(err);
        return err;
    }
}

