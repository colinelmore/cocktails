const getCocktails = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showCocktails = async () => {
    let cocktails = await getCocktails();
    let cocktailsSection = document.getElementById("cocktails-section");
  

    console.log(cocktails.drinks);
    
    cocktails.drinks.forEach((cocktail) =>
    cocktailsSection.append(getCocktailItem(cocktail))
    );
  };
  
  const getCocktailItem = (cocktail) => {
    const cocktailSection = document.createElement("section");
    cocktailSection.classList.add("cocktail");
  
    console.log(cocktail);
  
    const h3 = document.createElement("h3");
    h3.innerText = cocktail.strDrink;
    cocktailSection.append(h3);
    return cocktailSection;
   
  };
  
  window.onload = () => showCocktails();