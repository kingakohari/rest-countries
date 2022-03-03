
const loadEvent = _ => {

    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend",`
    
    <form>	  
        <input id="input1" placeholder="Enter some text" name="input1"/></input>
        <input id="input2" placeholder="Enter some text" name="input2"/></input>
        <input id="input3" placeholder="Enter some text" name="input3"/></input>
        <select name="animals" id="animals">
            <option value="both2">Both</option>
            <option value="cats9">Cats</option>
            <option value="dogs1">Dogs</option>
        </select>
        <button>Submit</button>  
    </form>
    `)    

    const form = rootElement.querySelector("form")

    const inputList = document.querySelectorAll("input")

    console.log(Array.isArray(inputList))
    console.log(typeof inputList);

    Array.from(inputList).map(function(input) {
        input.addEventListener("input", function(event) {
            console.log(event.target.value);
        })
    })

    form.querySelector("select").addEventListener("input", function(event){
        console.log(event.target.value);
    })

    form.addEventListener("submit",function(event) {
        event.preventDefault()
        console.log(event.target);
    })

    /* for (const input of inputList) {
        input.addEventListener("input", function(event) {
            console.log(event.target.value);
        })
    } */
}

window.addEventListener("load", loadEvent) 
