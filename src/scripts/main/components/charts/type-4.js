document.addEventListener("DOMContentLoaded", function() {

    const chart = document.querySelectorAll('.js-chart-type4');

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
                    backgroundColor: ["rgba(245, 91, 35, 1)", "rgba(13, 83, 152, 1)"],
                    data: dataArr
                    }
                ],
                labels: labelsArr
            },
            options: {
                cutoutPercentage: 0,
                tooltips: {
                    enabled: true,
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
                        formatter: function(value, context) {
                            let format = value + "%";
                            return format;
                        }
                    }
                },
            },
        });

    });

});

