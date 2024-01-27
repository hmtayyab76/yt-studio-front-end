import moment from "moment";

export const fetchFileData = async () => {
    return new Promise(async (resolve) => {
        try {
            const response = await fetch('./Book2.csv');
            const text = await response.text();
            const rows = text.split('\n').map(row => row.split(','));

            const data = rows.slice(1).map(row => {
                const numericValue = parseInt((`${row[1]}`).replace(/\s+$/, ''), 10);
                return { cat: row[0], val: numericValue };
            });

            // const filterData = data.filter(name => name.cat.includes('5'))
            const graphData = data.map(item => {
                return [Number(item.cat), item.val]
            })
            resolve(graphData)
        } finally {
        }
    })
}

export const options = {
    chart: {
        toolbar: {
            show: false
        },
        id: 'area-datetime',
        type: 'area',
        height: 380,
        zoom: {
            autoScaleYaxis: true
        }
    },

    subtitle: {
        text: "$1756.00 less than usual",
        align: 'center',
        margin: 60,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
            fontSize: '12px',
            fontWeight: '500',
            fontFamily: undefined,
            color: '#9699a2'
        },
    },
    colors: ["#6fbbab"],
    stroke: {
        width: 3,
        curve: 'straight',
    },

    dataLabels: {
        enabled: false
    },

    yaxis: {
        opposite: true,
        axisTicks: {
            show: false,
        },
        labels: {
            style: {
                colors: ['#494949'],
                fontWeight: 600,
                fontSize: '13px'
            },
        },
    },

    grid: {
        borderColor: "#9090901a",

    },

    fill: {
        type: 'gradient',
    },
    xaxis: {
        tooltip: {
            enabled: false,
            intersect: false,
        },

        labels: {
            show: true,
            style: {
                colors: ['#494949'],
                fontWeight: 600,
                fontSize: '10px'
            },
        },
        type: 'datetime',
        min: new Date('01 Mar 2012').getTime(),
        tickAmount: 6,

    },

    tooltip: {
        enabled: true,
        followCursor: true,
        x: {
            format: 'dd MMM yyyy'
        },
        custom: function (value) {
            return `
                <div class='px-4 py-3 scale-110 bg-white= z-50 dark:border-[#000] dark:bg-[#282828] border-[1px] outline-none shadow-none text-center !dark:border-[rgba(255,255,255,0.1)]'>
                    <div class='dark:text-white font-[700] '>${moment(new Date(value.w.globals?.initialSeries[0].data[value?.dataPointIndex][0])).format('ddd DD MMM, YYYY')}</div>
                    <div class=' text-[#6fbbab] text-xl font-medium'>$ ${value?.series[0][value?.dataPointIndex]}</div>
                </div>`;
        },
        fixed: {
            enabled: false,

        },
    },

    markers: {
        size: 0,
        style: 'hollow',
    },
};
