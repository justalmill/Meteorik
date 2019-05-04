#pragma strict
var mana = shoot.mana;
var manaGUI : GUIText;
function Start () {

}

function Update () {
	mana = shoot.mana;
	manaGUI.text = ("Mana:" + " " + mana);
}
