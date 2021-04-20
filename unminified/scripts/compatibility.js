function checkCompat(){
    let safariAgent = navigator.userAgent.indexOf("Safari") > 0; 
    let chromeAgent = navigator.userAgent.indexOf("Chrome") > 0;
    if ((chromeAgent) && (safariAgent)) safariAgent = false;
    if (localStorage.getItem("stylesheet") == "/css/darkmode.css") {
        BTColor = "#742981";
        BGColor = "black";
        IconColor = "#f6cffd";
    } else {
        BTColor = "#f6cffd";
        BGColor = "white";
        IconColor = "#742981";
    }
    if (safariAgent == true) {
        Swal.fire({
            titleText: 'Warning!',
            text: 'You seem to be using Safari! Safari is not officially supported on this site. Some things may work but they may not, and there will not be any compatibility updates in the foreseeable future. Please use Chrome for best results.',
            icon: 'warning',
            confirmButtonText: 'Continue Anyway',
            confirmButtonColor: BTColor,
            allowOutsideClick: false,
            background: BGColor,
            iconColor: IconColor
        })
    }
}