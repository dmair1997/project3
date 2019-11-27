var map;

function jamaicaMap() {
    var myMap = {
		zoom: 12,
		center: new google.maps.LatLng(18.017111, -76.810418),
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	
	var map = new google.maps.Map(document.getElementById('googleMaps'), myMap);
	console.log("Map loaded");
	
	var marker = new google.maps.Marker({
		draggable: true,
		animation: google.maps.Animation.DROP,
		icon: 'media/jamaicamarker.png',
		position: {lat: 18.017111, lng: -76.810418},
		map: map
	});
	marker.addListener('click', function() {
		map.setZoom(14);
		if(marker.getAnimation() !== null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	});
}

window.addEventListener('load', jamaicaMap);