/*eslint-env browser*/

// TABLE OF CONTENTS
// 
// Instructions: Search sections using the following legend.
// 
// Section1 - INITIALIZATIONS
// Section2 - INPUT COLLECTION
// Section3 - REFERENCE OBJECTS 
// Section4 - CSS MODEL FUNCTIONS
// Section5 - HTML DOM FUNCTIONS

$(window).on('load',function(){
    
    $('#btn-clip-path').click(()=>{
        // shows the clip-path inputs
        $('#clip-path-inputs').toggleClass('show');
        //TODO hides the inputs of the other tools
    })

    $('#btn-clip-source').click(()=>{
        // shows the clip-source inputs
        $('#clip-source-inputs').toggleClass('show');
        //TODO hides the inputs of the other tools
    })

    $('#unsplash').click(()=>{
        $('#unsplash-prev').toggleClass('show');
    })

})