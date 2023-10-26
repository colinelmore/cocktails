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
  
    cocktails.forEach((brewery) =>
    cocktailsSection.append(getCocktailItem(cocktail))
    );
  };
  
  const getCocktailItem = (cocktail) => {
    const cocktailSection = document.createElement("section");
    cocktailSection.classList.add("cocktail");
  
    const a = document.createElement("a");
    a.href = cocktail.website_url;
    cocktailSection.append(a);
  
    const h3 = document.createElement("h3");
    h3.innerText = cocktail.name;
    a.append(h3);
  
    const p = document.createElement("p");
    p.textContent = `${cocktail.cocktail_strDrink} Brewery`;
    a.append(p);
  
   const p2 = document.createElement("p");
   p2.textContent = `${cocktail.cocktail_strCategory}`
a.append(p2);
  
    
  };
  
  window.onload = () => showCocktails();