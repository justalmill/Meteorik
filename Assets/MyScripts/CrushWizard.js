#pragma strict

function Start () {

}

function Update () {

}
function OnCollisionEnter(other : Collision) {    

	var contact : String = other.transform.name;

   		if (contact == "First Person Controller") {            
   		      		Application.LoadLevel ("start");
   } 

}