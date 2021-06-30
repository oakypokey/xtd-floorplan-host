    var a=null;
    var b=null;
    var map;
    var tempABC=0;
    
    function pinSymbol(color) {
    return {
    path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
    fillColor: color,
    fillOpacity: 1,
    strokeColor: '#000',
    strokeWeight: 2,
    scale: 1
    };
}
    function Zoom() {
    map.setZoom(15);
}
function ZoomOut() {
    map.setZoom(8);
}

document.getElementById("Back").onclick = function () {
    location.href = "https://wd3-impl.workday.com/wday/authgwy/quilter2/login.htmld";
};

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function changeIframeSrc() {
    var temp = getParameterByName("location");
    var finalloc = temp.split('|');
    var city = getParameterByName("City");
    document.getElementById("City").innerHTML = city;
    var header = getParameterByName("Header");
    document.getElementById("title").innerHTML = header;
    var header = getParameterByName("header");

    //var locationObj = document.getElementById("location");
    //ocationObj.src = "https://www.google.com/maps/embed?key=AIzaSyCsTdYvC3eE1Tyza6vD00eTCcVnkrwaWxo&q=" + location;
    // var param2 = getParameterByName("name1");
    console.log(city);
    // console.log(param2);
            
for (i = 0; i < 1 ;i++) {  
    var temp1 = finalloc[i].split(',');
    a = temp1[1];
    b = temp1[2];
}
            map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(a, b),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});
Zoom();

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < finalloc.length; i++) {  
    var temp2 = finalloc[i].split(',');
    if(temp2[0].includes("Covid")){
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(temp2[1], temp2[2]),
        map: map,
        icon: pinSymbol('#f80000')
    });}
    else if(temp2[0].includes("Office")){ 
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(temp2[1], temp2[2]),
        map: map,
        icon: pinSymbol('#9b5ab6')
    });}
    else {
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(temp2[1], temp2[2]),
        map: map,
        icon: pinSymbol('#26ae60')
    });
}      

google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
        var abc = finalloc[i].split(','); 
        if(tempABC==0){
            tempABC = tempABC+1;
            ZoomOut();
        }else
        {
            tempABC= tempABC - 1;
            Zoom();	
        }			
        infowindow.setContent(abc[0]);
        infowindow.open(map, marker);        
    }
    })(marker, i));
}
}