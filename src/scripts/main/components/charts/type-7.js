import "./spidometer";

document.addEventListener("DOMContentLoaded", function() {

    const chart = document.querySelectorAll('.js-chart-type7');

    chart.forEach(function(el){

        const ctx = el.getContext('2d');
        let data = el.dataset.data,
            mainColor = "rgba(245, 91, 35, 1)",
            dataArr;

        if(data) {
            dataArr = data.slice(1,-1).split(',');
        }

        let value = parseInt(dataArr[0]);

        if(value < 50) {
            mainColor = "red";
        }else if(value >= 50 && value <= 80) {
            mainColor = "yellow";
        }else {
            mainColor = "green";
        }

        new Chart(ctx, {
            type: "gauge",
            data: {
                datasets: [
                    {
                        data: [],
                        backgroundColor: [],
                        borderWidth: 0,
                        hoverBackgroundColor: [],
                        hoverBorderWidth: 0,
                        weigth: 0
                    },{
                        type: "doughnut",
                        data: dataArr,
                        backgroundColor: [mainColor, "rgba(255, 255, 255, 1)"],
                        hoverBackgroundColor: [mainColor, "rgba(255, 255, 255, 1)"],
                        borderWidth: 0,
                        weigth: 1
                    }
                ],
                current: dataArr[0],
            },
            options: {
                panel: {
                    min: 0,
                    max: 100,
                    tickInterval: 1,
                    tickColor: "rgb(0, 0, 0)",
                    tickOuterRadius: 99,
                    tickInnerRadius: 95,
                    scales: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                    scaleColor: "rgb(0, 0, 0)",
                    scaleBackgroundColor: "rgba(105, 125, 151, 0.2)",
                    scaleTextRadius: 80,
                    scaleTextSize: 12,
                    scaleTextColor: "rgba(0, 0, 0, 1)",
                    scaleOuterRadius: 99,
                    scaleInnerRadius: 93,
                },
                needle: {
                    lengthRadius: 70,
                    circleColor: "rgba(188, 188, 188, 1)",
                    color: "rgba(0, 0, 0, 1)",
                    circleRadius: 5,
                    width: 5,
                },
                cutoutPercentage: 85,
                rotation: (1/2+1/3)*Math.PI,
                circumference: 2*Math.PI*2/3,
                legend: {
                    display: false,
                    text: "legend"
                },
                tooltips: {
                    enabled: false
                },
                animation: {
                    animateRotate: false,
                    animateScale: false
                },
                hover: {
                    mode: "point"
                },
                plugins: {
                    datalabels: {
                        display: false
                    }
                }
            }
        });

    });

});

