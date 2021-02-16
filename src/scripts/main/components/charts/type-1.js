document.addEventListener("DOMContentLoaded", function() {

    const chart = document.querySelectorAll(".js-chart-type1");

    chart.forEach(function(el){

        const ctx = el.getContext("2d");

        let dataPrevious = el.dataset.previous,
            dataPresent = el.dataset.present,
            labels = el.dataset.labels,
            years = el.dataset.years,
            dataPreviousArr,
            dataPresentArr,
            labelsArr,
            yearsArr;


        if(dataPrevious) {

            dataPreviousArr = dataPrevious.slice(1,-1).split(",");

            for(let i = 0; i < dataPreviousArr.length; i++) {
                dataPreviousArr[i] = parseInt(dataPreviousArr[i]);
            }
        }

        if(dataPresent) {
            dataPresentArr =dataPresent.slice(1,-1).split(",");

            for(let i = 0; i < dataPresentArr.length; i++) {
                dataPresentArr[i] = parseInt(dataPresentArr[i]);
            }
        }

        if(labels) {
            labelsArr = labels.slice(1,-1).split(",");
        }

        if(years) {
            yearsArr = years.slice(1,-1).split(",");
        }

        new Chart(ctx, {
            type: "bar",
            data: {
                labels: labelsArr,
                datasets: [
                    {
                        data: dataPreviousArr,
                        type: "line",
                        backgroundColor: function() {
                            return  "rgba(13, 83, 152, 0.1)";
                        },
                        borderColor: function() {
                            return  "rgba(13, 83, 152, 1)";
                        },
                        borderWidth: 2,
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        fill: false,
                        spanGaps : true,
                        lineTension: 0,
                    },{
                        data: dataPresentArr,
                        type: "line",
                        backgroundColor: function() {
                            return  "rgba(245, 91, 35, 0.1)";
                        },
                        borderColor: function() {
                            return  "rgba(245, 91, 35, 1)";
                        },
                        borderWidth: 2,
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        fill: false,
                        spanGaps : true,
                        lineTension: 0,
                    },{
                        label: yearsArr[0],
                        data: dataPreviousArr,
                        backgroundColor: function() {
                            return  "rgba(13, 83, 152, 0.5)";
                        },
                        borderColor: function() {
                            return  "rgba(13, 83, 152, 1)";
                        },
                        borderWidth: 1,
                    },{
                        label: yearsArr[1],
                        data: dataPresentArr,
                        backgroundColor: function() {
                            return  "rgba(245, 91, 35, 0.5)";
                        },
                        borderColor: function() {
                            return  "rgba(245, 91, 35, 1)";
                        },
                        borderWidth: 1,

                    }
                ],
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "тыс.руб."
                        }
                    }],
                },
                legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                        filter: function(label) {
                            if (label.text) return true;
                        }
                    },
                },
                tooltips: {
                    callbacks: {
                        title: function(tooltipItems, data) {
                            return tooltipItems[0].label + " " + data.datasets[tooltipItems[0].datasetIndex].label;
                        },
                        label: function(tooltipItems, data) {
                            return tooltipItems.yLabel + " тыс.руб.";
                        }
                    },
                    filter: function (tooltipItem) {
                        return tooltipItem.datasetIndex >= 2;
                    }
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