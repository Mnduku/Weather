import './style.css'
import './format.css'
const rootlink = "https://api.weatherapi.com/v1/current.json?key=d58383b3c9dd4c2da05185443241101&q="

function fetchcity(){
  let x = document.querySelector('#bar').value
  document.querySelector('#bar').value = ""
  let linkstring = rootlink + x
  getdata(linkstring)
}

async function getdata(link){
  try{
    const response = await fetch(link, {mode: 'cors'})
    const data = await response.json()
    editinfo(data)
  }
  catch{
    console.log("API retreival failed")
  }
}

function editinfo(data){
   console.log(data)
   let a = data.location.name
   let aa = data.location.region
   let aaa = data.location.country
   let b = data.current.temp_c
   let c = data.current.temp_f
   let d = data.current.condition
   let e = data.current.wind_mph
   let f = data.current.wind_kph
   let g = data.current.last_updated
   let h = data.current.humidity

   let temp = document.querySelector('.curtemp')
   let city = document.querySelector('.city')
   let hum = document.querySelector('.chumidity')
   let cond = document.querySelector('.ccondition')
   let wind = document.querySelector('.cwind')

   hum.textContent = h + "%"
   wind.textContent = e + " mph"
   cond.textContent = d.text
   console.log(d)


   if(a == aa){
     city.textContent = a + ", " + aaa
   }
   else{
    city.textContent = a + " " + aa + ", " + aaa
   }

   temp.textContent = c + "°"
  }


let b = document.querySelector('.searchbutton')
b.addEventListener('click', function(e){fetchcity()})
document.querySelector('#bar').addEventListener('keypress', function(e){
  if (e.keyCode == 13) {
    e.preventDefault();
    fetchcity()
}
})
fetchcity()
