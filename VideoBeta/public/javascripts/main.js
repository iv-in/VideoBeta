// function initMap() {

//     const IronHackBCN = { lat: 41.3977381, lng: 2.190471916 }       // Respetar nombres propiedades

//     const myMap = new google.maps.Map(
//         document.getElementById('map'),
//         {
//             center: IronHackBCN,
//             zoom: 10
//         }
//     )

//     new google.maps.Marker({
//         map: myMap,
//         position: IronHackBCN,
//         title: 'Los Ironhackers del mar'
//     })
// }
// initMap()



const axiosMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie"
})
//establezco las variables para las llamadas a la API
const apiKey = 'a2acebdabfdb1f2e541a6ea9ab258096'
const apiLanguage = 'en-US'
const page = '1'
const apiRegion = 'ES'



const printCharts = info => {
    doughnutChart('q2', 50)
}
const doughnutChart = (id, height) => {
    height ? document.getElementById(id).height = height : null
    new Chart(id, {
        type: 'doughnut',
        data: {
            labels: ['Votos'],
            datasets: [{
                label: 'Votos',
                data: [document.getElementById('votos').value, 10 - document.getElementById('votos').value],
                borderColor: ['rgba(0, 50, 250, .7)'],
                backgroundColor: ['rgba(0, 50, 250, .2)']
            }]
        },
        options: {
            legend: { position: 'left' }
        }
    })
}

//console.log('ejecutadoo')

printCharts()