<script>
//Importing Bar class from the vue-chartjs wrapper
import { Line } from 'vue-chartjs'
import axios from 'axios'
//Exporting this so it can be used in other components
export default {
  extends: Line,
  data () {
    return {
      interval: null,
      datacollection: {
        //Data to be represented on x-axis
        label:[],
        datasets: [
          {
            label: 'Temp.Piso02',
            fill: false,
            borderColor: 'red',
            borderWidth: 2,
            
            pointBackgroundColor: 'red',
            pointBorderColor: 'white',
            //Data to be represented on y-axis
            data: [{x: new Date(), y: 7}, {x: new Date(), y: 6}, {x: new Date(), y: 5}, {x: new Date(), y: 4}, {x: new Date(), y: 3}, {x: new Date(), y: 2}]
          }
        ]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        responsive: true,
        maintainAspectRatio: false,
        devicePixelRatio: 2,
        intersect: true,
        tooltips: {
          mode: 'index',
          callbacks: {
            label: (tooltipItem, data) => {
              // let color = data.datasets[tooltipItem.datasetIndex].borderColor
              // console.log(`${color}`)
              // console.log(data.datasets[tooltipItem.datasetIndex].label)
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + tooltipItem.yLabel + '°C'
            },
            // labelColor: (tooltipItem, data) => {
              // let color = data.datasets[tooltipItem.datasetIndex].borderColor
              // return {backgroundColor: data.datasets[tooltipItem.datasetIndex].borderColor}
            // },
          }
        },
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            type:"time",
            distribution:'linear',
            time:{
              unit:"minute"
            },
            scaleLabel: {
              display: true,
              labelString: 'Data/Hora',
              lineHeight: 2,
              fontColor: 'black',
              fontSize: 14,
            },
            ticks:{
              stepSize: 1,
              suggestedMin: 10,
              suggestedMax: 10,
              maxTicksLimit: 12,
            },
            gridLines: {
              display: true
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Temperatura',
              lineHeight: 2,
              fontColor: 'black',
              fontSize: 14,

            },
            ticks: {
              // beginAtZero: true,
              stepSize: 0.5,
              suggestedMin: 30,
              suggestedMax: 40,
              // maxTicksLimit: 20,
              callback: function(value) {
                return value + '°C';
              }
            },
            gridLines: {
              display: true
            }
          }]
        },
      }
    }
  },
  mounted () {
    //renderChart function renders the chart with the datacollection and options object.
    this.getSensorReadings()
    this.renderChart(this.datacollection, this.options)
    this.updateChart()
  },
  methods:{
    getSensorReadings(){
        axios
          .post(this.$baseURL + '/buscarMedicoes', {"token":this.$session.get("token")})
            .then(res=>{
              this.makeDataSets(res.data)
            })
    },
    makeDataSets(readings){
      let i = 0
      let listColors = ['green', 'red', 'blue', 'orange', 'purple', 'black']
      let dataReadings = []
      readings.forEach(element => {
        dataReadings[i]={
          fill:false,
          borderWidth: 2,
          pointHitRadius: 5,
          pointRadius: 0.5,
          label: element.nomeSensor,
          borderColor: listColors[i],
          pointBorderWidth: 0.5,
          pointHoverBackgroundColor: listColors[i],
          pointBackgroundColor : listColors[i],
          data: element.dados,
        }
        i++;
      });
      this.datacollection.datasets = dataReadings
      this.renderChart(this.datacollection, this.options)
    },
    updateChart(){
      this.interval = setInterval(() => {
        axios
            .post(this.$baseURL + '/buscarMedicoes', {"token":this.$session.get("token")})
              .then(res=>{
                this.makeDataSets(res.data)
              })
      }, 120000)
    },
    beforeDestroy(){
      clearInterval(this.interval)
    },
  },
}
</script>