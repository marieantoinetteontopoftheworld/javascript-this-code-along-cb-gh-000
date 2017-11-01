const app = "I don't do much."

function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
}

var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");

function serve() {
  if(arguments.length > 0) {
      var customers = arguments.slice();
      last = customers.pop();
      console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
  } else {
      console.log(this.name + ". Order up!");
  }
}


serve.call(gc);
serve.apply(pbj, ["Terry", "Tom", "Tabitha"]);
