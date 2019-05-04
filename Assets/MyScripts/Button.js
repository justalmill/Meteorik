/*var hit : RaycastHit;

var object : GameObject;

 

function Update () {

    

    // Use Raycast to pick objects that have mesh colliders attached.

    var ray = Camera.main.ScreenPointToRay (Input.mousePosition);

    

    //if the user touches the button

    if (Input.GetMouseButtonUp (0))  //Returns true during the frame the user deselects the object

    {

        if (Physics.Raycast (ray, hit, 100) && hit.transform.name == object.name) 

        {

            Debug.Log("YAY!");

        }

    }
}*/
var prefabBullet:Transform;
var shootForce:float;
var shootPosition:Transform;

function OnMouseDown () {
	if(shoot.mana > 1){
		var instanceBullet = Instantiate(prefabBullet, shootPosition.position, shootPosition.rotation);
		instanceBullet.GetComponent.<Rigidbody>().AddForce(shootPosition.up * shootForce);
		Destroy(instanceBullet.gameObject, 6);
		shoot.mana = shoot.mana - 1;
	}
}
