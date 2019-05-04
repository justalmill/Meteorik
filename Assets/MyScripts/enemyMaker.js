#pragma strict
var prefab : GameObject;
var nextUsage = 0.0;
var delay = 2.0;
function Start(){
    nextUsage = Time.time + delay;
}

function Update(){
	if (Time.time > nextUsage){
		nextUsage = Time.time + delay;
		var position: Vector3 = Vector3(Random.Range(2028.608, 2043.259), 12, Random.Range(-235.873, -235.873));
		Instantiate(prefab, position, Quaternion.identity);
		delay = delay - .1;
	}
	if (delay < .75){
		delay = .75;
	} 
	Debug.Log("Delay = "+ delay);
	Debug.Log("nextUsage = "+ nextUsage);
	
}
