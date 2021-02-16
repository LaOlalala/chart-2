document.addEventListener("DOMContentLoaded", function() {

    const chart = document.querySelectorAll('.js-chart-type5');

    chart.forEach(function(el){

        const ctx = el.getContext('2d');
        let data = el.dataset.data,
            labels = el.dataset.labels,
            dataArr,
            labelsArr;

        if(data) {
            dataArr = data.slice(1,-1).split(',');
        }

        if(labels) {
            labelsArr = labels.slice(1,-1).split(',');
        }

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                    backgroundColor: ["green", "red"],
                    data: dataArr
                    }
                ],
                labels: labelsArr,
            },
            options: {
                cutoutPercentage: 70,
                tooltips: {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItems, data) {
                            let label = data.labels[tooltipItems.index],
                                item = data['datasets'][0]['data'][tooltipItems['index']];

                            return `${label} : ${item} ед.`;
                        }
                    },
                },
                legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                        filter: function(label) {
                            if (label.text) return true;
                        }
                    }
                },
                plugins: {
                    datalabels: {
                        color: '#ffffff',
                        font: {
                            size: 28,
                            weight: 900
                        },
                        textShadowBlur: 3,
                        textShadowColor: "#000000"
                    }
                }
            },
        });

    });

});
