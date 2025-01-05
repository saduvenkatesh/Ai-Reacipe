export default function Main(){

   const ingredients= ["Tomatoes", "Chicken", "Garlic"]

    const ingredientsList=ingredients.map(ingredient =>(
        <li key={ingredient}>{ingredient}</li>
    ))

   function handleSubmit(event){
    event.preventDefault()
    alert("form submitted")

    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    ingredients.push(newIngredient)
    console.log(ingredients)
   }

    return(
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input type="text"
                       placeholder="e.g. Tomato"
                       aria-label="Add ingredient"
                       name="ingredient"
                />
                <button >Add ingredient</button>

            </form>

            <ul>
                    {ingredientsList}
            </ul>
        </main>
    )
}