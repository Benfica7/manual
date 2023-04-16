document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("[id^='to-c']")
    const logo = document.getElementById('logo')

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            const buttonId = button.id.slice(-2)
            scrollToZone(buttonId)
        })
    })
    
    function scrollToZone(button) {
        document.getElementById(button).scrollIntoView({behavior: "smooth"})
    }

    logo.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })
})
