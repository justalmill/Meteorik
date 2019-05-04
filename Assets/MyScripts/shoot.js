#pragma strict
/*var fireballbullet : Transform;
var speed = 20;

function Update () {
	var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
  	if (keyCode == 32) {
		clone = Instantiate(projectile, transform.position, transform.rotation);
		clone.velocity = transform.TransformDirection( Vector3 (0, 0, speed));
		Destroy (clone.gameObject, 3);

	}
}
*/
/*function Update () {
var fireballbullet : Rigidbody: ;

if (Input.GetKeyUp("e"))
{
var bulletfire = Instantiate (fireballbullet, gameObject.Find("bullet_SpawnPoint").transform.position, Quaternion.identity);
bulletfire.rigidbody.AddForce(transform.forward * 3);
}
}*/
#pragma strict
var prefabBullet:Transform;
var shootForce:float;
var shootPosition:Transform;
static var mana: int=8;
var clockRun = 1;
 

function Update(){
	if(mana > 1){
		if(Input.GetButtonDown("Jump")) {
			var instanceBullet = Instantiate(prefabBullet, transform.position, shootPosition.rotation);
			instanceBullet.GetComponent.<Rigidbody>().AddForce(shootPosition.up * shootForce);
			Destroy(instanceBullet.gameObject, 6);
			mana = mana - 1;
			Debug.Log(mana);
		}
	}
}
while (clockRun == 1){
	if (mana < 8){
		mana = mana + 1;
	}
	yield WaitForSeconds (1);
}