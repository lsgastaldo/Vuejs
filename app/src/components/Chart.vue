<script>
  //Importing Bar class from the vue-chartjs wrapper
import { Line } from 'vue-chartjs'
import axios from 'axios'
  //Exporting this so it can be used in other components
  export default {
    extends: Line, 
    data () {
      return {
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
              data: [{x: new Date(),y: 7}, {x: new Date(),y: 6}, {x: new Date(),y: 5}, {x: new Date(),y: 4}, {x: new Date(),y: 3}, {x: new Date(),y: 2}]
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Temperatura',
                lineHeight: 2,
                fontColor: 'black',
                fontSize: 14,

              },
              ticks: {
                beginAtZero: true,
                callback: function(value, index, values) {
                        return value + ' °C';
                }
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Data/Hora',
                lineHeight: 2,
                fontColor: 'black',
                fontSize: 14,
              },
              type:"time",
              // // distribution:'linear',
              time:{
                unit:"hour"
              },
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false,
        }
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.getSensorReadings()
      this.renderChart(this.datacollection, this.options)
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
          console.log(readings)
          // console.log(this.datacollection.da)
          let i = 0
          let listColors = ['green', 'red', 'blue', 'orange', 'purple', 'black']
          let dataReadings = []
          readings.forEach(element => {
            dataReadings[i]={
              fill:false,
              borderWidth: 2,
              label : element.nomeSensor,
              borderColor : listColors[i],
              pointBackgroundColor : listColors[i],
              data : element.dados,
            }
            i++;
          });
          this.datacollection.datasets = dataReadings
          this.renderChart(this.datacollection, this.options)
        }
    },
  }
</script>