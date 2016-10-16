var OTHER_THRESHOLD = 1;

var list = [
    {
        "value": 120,
        "percentage": 14.634146341463415,
        "description": "Sector 1"
    },
    {
        "value": 100,
        "percentage": 12.195121951219512,
        "description": "Sector 2"
    },
    {
        "value": 70,
        "percentage": 8.536585365853659,
        "description": "Sector 3"
    },
    {
        "value": 20,
        "percentage": 2.4390243902439024,
        "description": "Sector 4"
    },
    {
        "value": 10,
        "percentage": 1.2195121951219512,
        "description": "Sector 5"
    },
    {
        "value": 500,
        "percentage": 60.97560975609756,
        "description": "Other"
    }
];

/* Above you can see fake (hardcoded) array 'list'. Kill it and change with calculated one. */

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