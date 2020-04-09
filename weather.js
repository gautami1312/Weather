const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const dataput = document.querySelector('#inpudata')

//console.log(dataput)

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ location +'&appid=edb97e5a90f87466b9a87a7b283fb98b ').then((response) => {
    response.json().then((data)=>{
        if (data.error) {
            
            console.log(data.error)
        } else {
            
            // dataput.textContent=data.weather[0].description+data.name
            // console.log(data.weather[0].description + data.name)
            dataput.textContent=data.name + " is having " + data.weather[0].description + "\n Temperature : "+(data.main.temp-273) + 
            "   Humidity : "+data.main.humidity
            console.log(data.name + " is having " + data.weather[0].description + ", Temperature is "+ (data.main.temp-273) + "\n and Humidity is : "+data.main.humidity)

            
        }
    })
})
    

})
    