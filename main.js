// display btn content in input box
function display(content) {
  result.value+=content
}

function resetResult() {
    result.value=""
}

function calculate() {
   
    try{
    result.value=eval(result.value) //eval is used to evaluate string expressions.
    }catch{
        result.value="invalid expression!"
    }

  
}
function removeLast() {
     result.value  = result.value.slice(0,-1)
}