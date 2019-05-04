#pragma strict
var speed = 10.0;
function Start () {

}

function Update () {
    // Only if there are touches
	if (Input.touches.Length > 0){
    	if (Input.touches[0].phase == TouchPhase.Moved){
        	var x = Input.touches[0].deltaPosition.x * speed * Time.deltaTime;
            transform.Translate(new Vector3(x, 0, 0));
            Debug.Log("Clicked!");
        }
    }
}