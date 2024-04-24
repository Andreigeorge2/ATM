const CORRECT_PIN = '1234';

const enterButton = document.getElementById('enter-button');
console.log('enterButton: ', enterButton);

enterButton?.addEventListener('click', () => {
    console.log('You clicked the enter button!');

    const input = document.getElementById('pin-input');
    console.log('input: ', input);

    if (input instanceof HTMLInputElement) {
        const pin = input?.value;

        if (pin === CORRECT_PIN) {
            console.log('Correct PIN entered!');
        } else {
            alert('Incorrect PIN entered!');
        }
    } else {
        // Handle the case where input is not an HTMLInputElement
        console.error('Input element is not found or is not an HTMLInputElement');
    }
});


    
    
    
   
    
            
      
        
    

















        
    

    




    
    
