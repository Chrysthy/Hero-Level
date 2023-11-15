let hero = prompt("Enter your character's name.")
let level = prompt("Enter your character's level.")

if(nivel < 1000){
  alert("The hero, named " + hero + ", is at Level " + level + ", within the hierarchy: Iron.")
}

else if(nivel <= 2000){
  alert("The hero, named " + hero + ", is at Level " + level + ", within the hierarchy: Bronze.")
}

else if(nivel <= 5000){
  alert("The hero, named " + hero + ", is at Level " + level + ", within the hierarchy: Silver.")
}

else if(nivel <= 7000){
  alert("The hero, named " + hero + ", is at Level " + level + ", within the hierarchy: Gold.")
}

else if(nivel <= 8000){
  alert("The hero, named " + hero + ", is at Level " + level + ", within the hierarchy: Platinum.")
}

else if(nivel <= 9000){
  alert("The hero, named " + hero + ", is at Level " + level + ", within the hierarchy: Ascending.")
}

else if (nivel <= 10000) {
  alert("The hero, named " + hero + ", is at Level " + level + ", within the hierarchy: Bright.")
}

else {
  alert("The hero, named " + hero + ", is at Level " + level + ", within the hierarchy: Immortal.")
}