export async function gateData() {
    const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=XYW5WCBK6FR4ZPTTUP7UXUT93";
    try{
        const response = await fetch(url);
        const result = await response.json();

        console.log(result)
        console.log(result.currentConditions.temp)

        return result;
    }catch(err){
        console.log(err);
    }
}

