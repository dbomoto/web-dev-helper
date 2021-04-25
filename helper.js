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
    // shows or hided the clip-path inputs
    $('#btn-clip-path').click(()=>{
        $('#clip-path-inputs').toggleClass('show');
    })

    // shows or hided the clip-source inputs
    $('#btn-clip-source').click(()=>{
        $('#clip-source-inputs').toggleClass('show');
    })

})