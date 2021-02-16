document.addEventListener("DOMContentLoaded", function() {

    const chart = document.querySelectorAll('.js-chart-type6');

    chart.forEach(function(el){

        const ctx = el.getContext('2d');

        let data = el.dataset.data,
            labels = el.dataset.labels,
            amount = el.dataset.amount,
            dataArr,
            labelsArr,
            amountArr;

        if(data) {
            dataArr = data.slice(1,-1).split(',');
        }

        if(labels) {
            labelsArr = labels.slice(1,-1).split(',');
        }

        if(amount) {
            amountArr = amount.slice(1,-1).split(',');
        }

        let additionalLabelsPercent = [];

        for(let i = 0; i < dataArr.length; i++) {
            additionalLabelsPercent.push(115);
        }

        let additionalLabelsAmount = [];

        for(let i = 0; i < dataArr.length; i++) {
            additionalLabelsAmount.push(105);
        }


        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labelsArr,
                datasets: [{
                    data: additionalLabelsPercent,
                    borderWidth: 0,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    fill: false,
                    showLine: false
                    },{
                    data: additionalLabelsAmount,
                    borderWidth: 0,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    fill: false,
                    showLine: false
                    },{
                    data: dataArr,
                    backgroundColor: function() {
                        return  'rgba(245, 91, 35, 0.1)';
                    },
                    borderColor: function() {
                        return  'rgba(245, 91, 35, 1)';
                    },
                    borderWidth: 2,
                    pointRadius: 2,
                    fill: false,
                    spanGaps : true,
                    lineTension: 0,
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            max: 130,
                            callback: function(value, index, values) {
                                return value <= 100 ? value : "";
                            }
                        },
                    }],
                    xAxes: [{
                        offset: true
                    }],
                },
                legend: {
                    display: false,
                },
                plugins: {
                    datalabels: {
                        color: function(context) {
                            let index = context.datasetIndex;
                            return index == 0 ? '#000000' : 'rgb(13,83,152)';
                        },
                        font: {
                            size: 16,
                            weight: 900
                        },
                        formatter: function(value, context) {
                            let dataSetIndex = context.datasetIndex,
                                percentsArr = context.chart.data.datasets[2].data[context.dataIndex];

                            if(dataSetIndex == 0) {

                                return percentsArr + "%";

                            }else if (dataSetIndex == 1) {

                                return amountArr[context.dataIndex];

                            }else if (dataSetIndex == 2) {

                                return "";
                            }
                        },
                        anchor: "end",
                        clamp: true,
                        align: "top",
                        clip: true,
                        textAlign: "center"
                    }
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItems, data) {
                            return tooltipItems.yLabel + '%';
                        }
                    },
                    filter: function (tooltipItem) {
                        return tooltipItem.datasetIndex === 2;
                    }
                }
            }
        });
    });

});