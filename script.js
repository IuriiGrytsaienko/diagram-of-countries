var OTHER_THRESHOLD = 1;

var list = [];

var sum = data.reduce((prev, curr) => prev + curr['population'], 0);
var percent = 100 / sum;
var other = 0;
data.map((item) => {
    var elem = {
        description: item['country'],
        percentage: item['population'] * percent,
        value: item['population']
    };
    if (elem.percentage > OTHER_THRESHOLD) {
        list.push(elem);
    } else {other += elem.value}
})

list.push(
    {
        description: 'other',
        percentage: other * percent,
        value: other
    }
)

list.sort((a,b) => b.percentage - a.percentage)

// visualisation
var canvas = document.getElementById('canvas');
canvas.width = 750;
canvas.height = 500;

var ctx = canvas.getContext('2d');

var startAngle = 0, colors = CSS_COLOR_NAMES.slice(0);
list.forEach(function (item, index, list) {
    // sector
    ctx.beginPath();
    ctx.fillStyle = colors.splice(Math.round(Math.random() * (colors.length - 1)), 1)[0];
    ctx.moveTo(250, 250);
    ctx.arc(250, 250, 200, startAngle, startAngle -= item.percentage * Math.PI / 50, true);
    ctx.lineTo(250, 250);
    ctx.fill();

    // legend
    var lHeight = 500 / list.length;
    ctx.fillRect(500, lHeight * index + (lHeight - 15) / 2, 15, 15);
    ctx.fillStyle = '#000';
    ctx.fillText(item.description + ' (' + item.percentage.toFixed(2) + '%)', 520, lHeight * index + (lHeight - 15) / 2 + 10);
});