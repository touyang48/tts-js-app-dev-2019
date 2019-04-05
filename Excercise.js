//- Find a player with the name 'Mike'
//- Get an array of all players with position 'RB'
//- Get an array of all the players lastNames
//- Get an array of the full names of all the runningbacks with more than 5 touchdowns
//- Get the number of touchdowns scored by Runningbacks

var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

var name = players.find(function(p){
    return p.firstName = 'Mike';
});

players.filter(function(p){
    return players.position === 'RB';
})

players.map(function(p){
    return.p.lastName;
})

players.filter(function(p){
    return p.touchdowns > 5 && p.position === "RB"
}).map (function(p){
    return p.firstName + " " + p.lastName;
})

players.filter(function(p){
    return player.touchdowns === 'RB';
}).reduce(function(sum, current){
    return sum + current.touchdowns;
},0)