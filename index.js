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
      var customers = Array.prototype.slice.call(arguments);
      last = customers.pop();
      console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
  } else {
      console.log(this.name + ". Order up!");
  }
}


serve.call(gc);
serve.apply(pbj, ["Terry", "Tom", "Tabitha"]);

function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
  }
}

var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");

pbj.describe();

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}

pbj.describe.bind(salad);
