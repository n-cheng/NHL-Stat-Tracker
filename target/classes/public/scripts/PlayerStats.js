var reg = new RegExp(/[^=]*$/g);
var playerNum = parseInt(reg.exec(window.location.href));
$.when(
    $.getJSON("https://statsapi.web.nhl.com/api/v1/people/"+playerNum+"/stats?stats=statsSingleSeason&season=20202021"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/people/"+playerNum)
).done(function(data2, data1) {
    if(typeof data1[0].people[0].fullName!==undefined){
        $(".fullName").append(data1[0].people[0].fullName);
    }
    else{
        $(".fullName").append("N/A");
    }
    if(typeof data1[0].people[0].birthDate!==undefined)
        $(".birthDate").append(data1[0].people[0].birthDate);
    else
        $(".birthDate").append("N/A");
    if(typeof data1[0].people[0].currentAge!==undefined)
        $(".currentAge").append(data1[0].people[0].currentAge);
    else
        $(".currentAge").append("N/A");
    if(typeof data1[0].people[0].birthCity)
        $(".birthCity").append(data1[0].people[0].birthCity);
    else
        $(".birthCity").append("N/A");
    if(typeof data1[0].people[0].nationality!==undefined)
        $(".nationality").append(data1[0].people[0].nationality);
    else
        $(".nationality").append("N/A");
    if(typeof data1[0].people[0].height!==undefined)
        $(".height").append(data1[0].people[0].height);
    else
        $(".height").append("N/A");
    if(typeof data1[0].people[0].weight!==undefined)
        $(".weight").append(data1[0].people[0].weight);
    else
        $(".weight").append("N/A");
    if(typeof data1[0].people[0].shootsCatches!==undefined)
        $(".shootsCatches").append(data1[0].people[0].shootsCatches);
    else
        $(".shootsCatches").append("N/A");
    if(data2[0].stats[0].splits[0]!==undefined)
        $(".timeOnIcePerGame").append(data2[0].stats[0].splits[0].stat.timeOnIcePerGame);
    else
        $(".timeOnIcePerGame").append("0");
    if(data2[0].stats[0].splits[0]!==undefined)
        $(".assists").append(data2[0].stats[0].splits[0].stat.assists);
    else
        $(".assists").append("0");
    if(data2[0].stats[0].splits[0]!==undefined)
        $(".goals").append(data2[0].stats[0].splits[0].stat.goals);
    else
        $(".goals").append("0");
    if(data2[0].stats[0].splits[0]!==undefined)
        $(".shots").append(data2[0].stats[0].splits[0].stat.shots);
    else
        $(".shots").append("0");
    if(data2[0].stats[0].splits[0]!==undefined)
        $(".games").append(data2[0].stats[0].splits[0].stat.games);
    else
        $(".games").append("0");
    if(data2[0].stats[0].splits[0]!==undefined)
        $(".hits").append(data2[0].stats[0].splits[0].stat.hits);
    else
        $(".hits").append("0");
    if(data2[0].stats[0].splits[0]!==undefined)
        $(".faceOffPct").append(data2[0].stats[0].splits[0].stat.faceOffPct);
    else
        $(".faceOffPct").append("0");
    if(data2[0].stats[0].splits[0]!==undefined)
        $(".gameWinningGoals").append(data2[0].stats[0].splits[0].stat.gameWinningGoals);
    else
        $(".gameWinningGoals").append("0");
    if(data2[0].stats[0].splits[0]!==undefined)
        $(".blocked").append(data2[0].stats[0].splits[0].stat.blocked);
    else
        $(".blocked").append("0");
    if(data2[0].stats[0].splits[0]!==undefined)
        $(".plusMinus").append(data2[0].stats[0].splits[0].stat.plusMinus);
    else
        $(".plusMinus").append("0");
    if(data2[0].stats[0].splits[0]!==undefined)
        $(".points").append(data2[0].stats[0].splits[0].stat.points);
    else
        $(".points").append("0");

    document.getElementById("playerImg").src = "http://nhl.bamcontent.com/images/headshots/current/168x168/"+playerNum+".jpg";

    document.getElementById("favouritePlayer").onclick = function() {
        document.getElementById("favouritePlayer").href="/favouritethisplayer?id="+playerNum;
    }
});