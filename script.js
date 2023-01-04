var api = "https://restcountries.com/v3.1/all"



async function restCountry(){
    var dataFetch = await fetch(api)
    var result = dataFetch.json()
    var endResult = await result
    

    for(let i of endResult){
        var name = i.name.common
        var flag = i.flags.png
        var region = i.region
        var capital = i.capital
        var latlng = i.capitalInfo.latlng

        try{
            var weatherApi=`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=9c2126d64f3bc4564c875ed31c3ec21b`
            // console.log(weatherApi)
            var weatherData = await fetch(weatherApi)
            var fetchData  = weatherData.json()
            var fetchResult = await fetchData
            // console.log(fetchResult)
        }
        catch(err){
            console.log(err)
            console.log('error is occured')
        }
        
        

       
       var parent = document.createElement('div')
       parent.setAttribute('class','card row col-lg-4 col-sm-12')
 

        parent.innerHTML = `
               
            <div class="card-header">    
            <h3>${name}</h3>
            </div>
            <div class="card-body">
                <img src = ${flag}>
                <p><b>capital:</b>${capital}</p>
                <p><b>Region:</b>${region}</p>
                <p><b>latlng:</b>${latlng}</p>
                <a href = "${weatherApi}"><button class="btn btn-primary">Click for weather</button></a>
            </div>    
            `
        document.querySelector('body').append(parent)

    }
}

restCountry()

