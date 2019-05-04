#pragma strict

function Start () {

}

function OnMouseDown () {
	//Destroy (gameObject.Find("enemy"));
	Debug.Log("hit");
	Application.LoadLevel ("Game");
}
