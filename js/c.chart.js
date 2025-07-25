console.log('chart-test.jsを読み込みました');

//サイトからコピーしてきたサンプルコード

const ctx = document.getElementById('myChart1');

new Chart(ctx, {
    //棒グラフ
    type: 'bar',
    data: {
        labels: ['北京', '上海', '大連', '武漢', '南京',
        ],
        datasets: [{
            label: '去年',
            data: [2918015, 1658363, 1283262, 267699, 154638, 121715],
            borderWidth: 1
        },
        {
            label: '今年',
            data: [3665015, 0, 0, 0, 0, 0, 0],
            borderWidth: 1
        }


        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const data2 = {
    labels: ['北京','上海', '大連'],
    datasets: [{
        label: '私のおすすめ',
        data: [2918015, 1658363, 1283262],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const config2 = {
    type: 'doughnut',
    data: data2,
  };

  const ctx2 = document.getElementById('myChart2');
  const myChart2 = new Chart(
    ctx2,
    config2,
  )