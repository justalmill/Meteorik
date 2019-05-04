#pragma strict
var Destruction = 1;
var endScreen :GameObject;
var enemyMaker :GameObject;
var TitleButton2 :GameObject;
var TitleButton :GameObject;
var chicken = 1;
var pie = 1;
var scoreText : GUIText;
var highScoreText : GUIText;
var titleText : GUIText;
var PlayAgainText :GUIText;
var Score = 0; //current score
var totalScore = 0; //combined total of players score
var highscore = 0; //highest score player has gotten
var Boom : AudioClip;
var boxforplaybutton :GameObject;

function Start () {
	endScreen.SetActive (false);
	TitleButton2.SetActive (false);
	TitleButton.SetActive (false);
	boxforplaybutton.SetActive(false);
	highscore = PlayerPrefs.GetInt("High Score");
}



/*function OnCollisionEnter(col: Collision){
	//Destroy (gameObject.Find("enemy"));
	Debug.Log("hit");
	//Application.LoadLevel ("start");
	endScreen.SetActive (true);
	TitleButton.SetActive (true);
	//enemyMaker = GetComponent(enemyMaker); 
  	enemyMaker.SetActive (false);
  	Destruction = 2;
  	if (1 == pie){
  		scoreText.text = Score.ToString();
  		highScoreText.text = "High Score:" + " " + highscore.ToString();    	
  		titleText.text = "Title Screen?"; 
  	    if(Score > highscore){
        	highscore = Score;
        	PlayerPrefs.SetInt("High Score", highscore);
        	Debug.Log("High Score is " + highscore );
    	}  
  		pie = 2;
  	}
  	while (Destruction == 2){
		Destroy(col.gameObject);
		Destruction = 1;
	}
}*/
function OnCollisionEnter(col: Collision){
	var contact : String = col.transform.name;

   	if (contact == "Enemy(Clone)") {
   		//Destroy (gameObject.Find("enemy"));
		Debug.Log("hit");
		//Application.LoadLevel ("start");
		endScreen.SetActive (true);
		TitleButton.SetActive (true);
		boxforplaybutton.SetActive(true);
		//enemyMaker = GetComponent(enemyMaker); 
  		enemyMaker.SetActive (false);
  		TitleButton2.SetActive (true);
  		Destruction = 2;
  		//highscore = 0;
  		if (1 == pie){
  			scoreText.text = Score.ToString();
  			highScoreText.text = "High Score:" + " " + highscore.ToString();    	
  			titleText.text = "Title Screen?"; 
  			PlayAgainText.text = "Retry?";
			GetComponent.<AudioSource>().PlayOneShot(Boom);
 	       	if(Score > highscore){
        		highscore = Score;
        		//highscore = 0;
        		highScoreText.text = "High Score:" + " " + highscore.ToString();
        		PlayerPrefs.SetInt("High Score", highscore);
        		Debug.Log("High Score is " + highscore );
    		}  
  		pie = 2;
  		}
  		while (Destruction == 2){
			Destroy(col.gameObject);
			Destruction = 1;
		}
	}
} 


while (chicken == 1){
	Score = Score + 1;
	Debug.Log("Score =" + Score);
	yield WaitForSeconds (1);
}

 
function Update(){

}