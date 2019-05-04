#pragma strict
/*
function Start () {

}

function Update () {
	function OnCollisionEnter(collision : Collision) {
		Destroy(gameObject); 
	}
}*/
/*var certainGameObjectName : String = "Bullet(Clone)";
 
function OnCollisionStart(collision : Collision)
{
    if (collision.gameObject.tag = certainGameObjectName)
    {
        Destroy(collision.gameObject); // destroys the thing this script bumped into
    }
} */
/*var certainGameObjectName : String = "Bullet(Clone)";
function OnControllerColliderHit (hit : ControllerColliderHit) {
    if(hit.collider.gameObject.name == certainGameObjectName){
		Destroy(hit.gameObject);
    }
}*/


function OnCollisionEnter(other : Collision) {    

	var contact : String = other.transform.name;

   		if (contact == "Enemy(Clone)") {            
   		      		Destroy(other.gameObject);
   } 

}