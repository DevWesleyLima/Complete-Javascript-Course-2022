//IIFE - Immediately Invoked Function Expression

//Example:
(
    function()
    {
        console.log(`it will be executed on time`);
        console.log(`this ends up escaping the broader scope`);
    }
)();

console.log(`Testing`);