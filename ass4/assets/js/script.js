$( document ).ready(function() {
    $('#nav-head').scrollToFixed();
})



$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {

            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

const interactiveButton = {
    element: document.getElementById('appointmentButton'),
    text: 'Book an Appointment',
    sound: new Audio('mouse-click-153941.mp3'), 
    backgroundColors: ['#be994b', '#7e5b10', '#987936'],

    changeText: function(newText) {
        this.text = newText;
        this.element.innerText = newText;
    },

    onClick: function() {
        this.sound.play();
        this.changeText('Clicked!');
    },

    onMouseOver: function() {
        const randomColor = this.backgroundColors[Math.floor(Math.random() * this.backgroundColors.length)];
        this.element.style.backgroundColor = randomColor;
    },

    onKeyPress: function(event) {
        if (event.key === 'Enter') {
            this.onClick();
        }
    },

    animate: function() {
        const originalColor = this.backgroundColors[0];
        const animationDuration = 1000;

        this.element.style.transition = `background-color ${animationDuration}ms ease-in-out`;

        setTimeout(() => {
            this.element.style.backgroundColor = originalColor;
        }, animationDuration);
    }
};

interactiveButton.element.addEventListener('click', () => interactiveButton.onClick());
interactiveButton.element.addEventListener('mouseover', () => interactiveButton.onMouseOver());
document.addEventListener('keypress', (event) => interactiveButton.onKeyPress(event));
interactiveButton.element.addEventListener('click', () => interactiveButton.animate());

function redirectToAppointment() {
    window.location.href = "bookanappointment.html";
};

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointmentForm');
    const submitButton = document.getElementById('submitAppointment');
    const confirmationMessage = document.getElementById('confirmationMessage');

    submitButton.addEventListener('click', function () {
       
        form.style.display = 'none';
        confirmationMessage.style.display = 'block';
    });
});
