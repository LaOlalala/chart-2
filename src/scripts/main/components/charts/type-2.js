document.addEventListener("DOMContentLoaded", function() {

    const chart = document.querySelectorAll('.js-chart-type2');

    chart.forEach(function(el){

        const ctx = el.getContext('2d');
        let data = el.dataset.data,
            isColored = el.dataset.colored,
            mainColor = "rgba(245, 91, 35, 1)",
            dataArr;

        if(data) {
            dataArr = data.slice(1,-1).split(',');
        }

        if(isColored != undefined){

            let value = parseInt(dataArr[0]);

            if(value <= 50) {
                mainColor = "red";
            }else if(value > 50 && value <= 80) {
                mainColor = "yellow";
            }else {
                mainColor = "green";
            }
        }

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                    label: "",
                    backgroundColor: [mainColor, "rgba(13, 83, 152, 1)"],
                    borderWidth: 0,
                    weigth: 0,
                    data: dataArr
                    }
                ]
                },
            options: {
                cutoutPercentage: 80,
                rotation: -1.1 * Math.PI, //для полукруга 1 * Math.PI
                circumference: 1.20 * Math.PI, //для полукруга 1 * Math.PI
                tooltips: {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItems, data) {
                            let label = data.labels[tooltipItems.index],
                                item = data['datasets'][0]['data'][tooltipItems['index']];

                            return item +"%";
                        }
                    },
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
