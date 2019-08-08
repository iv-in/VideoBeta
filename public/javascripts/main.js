
const axiosMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie"
})
//establezco las variables para las llamadas a la API
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










// const zoom = () => {
//     const thumb = document.getElementById("thumb");
//     if (thumb.className == "thumb") {
//         thumb.className = "thumb grande";
//     } else {
//         thumb.className = "thumb";
//     }
// }



// zoom()