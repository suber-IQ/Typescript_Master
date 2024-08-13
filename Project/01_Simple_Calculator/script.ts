let output = document.getElementById("output") as HTMLInputElement | null;
let buttons = document.getElementsByTagName("button") as HTMLCollectionOf<HTMLButtonElement>;

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default button behavior

        if (output) {
            if (button.value === "AC") {
                // Clear the output if "AC" button is clicked
                output.value = "";
            } else if (button.value === "=") {
                // Evaluate the expression if "=" button is clicked
                try {
                    // Use Function constructor to evaluate expression safely
                    const result:number = new Function('return ' + output.value)();
                    output.value =  String(result.toFixed(2));
                } catch (error) {
                    // Handle any errors that occur during evaluation
                    console.error('Invalid expression:', error);
                    output.value = "Error";
                }
            } else {
                // Append the button value to the output if it's a number or operator
                output.value += button.value;
            }
        }
    });
});
