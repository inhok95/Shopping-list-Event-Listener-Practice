

function main(){
    // Creating a new item to the list  
    $('#js-shopping-list-form').submit(event =>{
        event.preventDefault()

        // Creating a variable for the item entered
        const groceryItem = $('#shopping-list-entry').val()
        
        //Adding the item to the list
        $("ul").append(
            "<li>" + 
            `
            <span class="shopping-item">${groceryItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class=$("button-label")>delete</span>
              </button>
            </div>
            `
            +  "</li>"
        )
    })

    
//checking button
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        //console.log("hello")
        $(this).parents('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked')
        
    })


//delete button
    $('ul').on('click', '.shopping-item-delete', function(event){
        //console.log("bye")
        $(this).parents('li').remove()
    })
}

main()