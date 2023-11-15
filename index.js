let hero = prompt("Enter your character's name.")
let level = prompt("Enter your character's level.")

if(level < 1000){
  alert("The hero, named " + hero + ", is at Level " + level + ", within the hierarchy: Iron.")
}

else if(level <= 2000){
  alert("The hero, named " + hero + ", is at Level " + level + ", within the hierarchy: Bronze.")
}

else if(level <= 5000){
  alert("The hero, named " + hero + ", is at Level " + level + ", within the hierarchy: Silver.")
}

else if(level <= 7000){
  alert("The hero, named " + hero + ", is at Level " + level + ", within the hierarchy: Gold.")
}

else if(level <= 8000){
  alert("The hero, named " + hero + ", is at Level " + level + ", within the hierarchy: Platinum.")
}

else if(level <= 9000){
  alert("The hero, named " + hero + ", is at Level " + level + ", within the hierarchy: Ascending.")
}

else if (level <= 10000) {
  alert("The hero, named " + hero + ", is at Level " + level + ", within the hierarchy: Bright.")
}

else {
  alert("The hero, named " + hero + ", is at Level " + level + ", within the hierarchy: Immortal.")
}