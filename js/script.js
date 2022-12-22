function open_dropdown(element_id) {
    close_all_dropdowns();
    close_all_dropdowns2();
    document.getElementById(element_id).style.display = 'block';

}

// Close the dropdown if the user clicks outside of it
function close_dropdown(element) {
    element.style.display = 'none';
}

// Close all dropdowns.
function close_all_dropdowns() {
    let dropdowns = document.getElementsByClassName('display-none');
    for (let i = 0; i < dropdowns.length; i++) {
        close_dropdown(dropdowns[i]);
    }
}

function close_all_dropdowns2() {
    let dropdowns = document.getElementsByClassName('mogo-area-1');
    for (let i = 0; i < dropdowns.length; i++) {
        close_dropdown(dropdowns[i]);
    }
}

// Close the dropdown menu if the user clicks outside of it
// Close all dropdowns when clicking outside.
// window.onclick = function (e) {
//     if (!e.target.matches('.dropbtn')) {
//         close_all_dropdowns();
//         close_all_dropdowns2();
//     }
// };




$(".dropbtn-1").click(function () {
    if (document.getElementById('dd_file').style.display === 'block') {
        $(".dropbtn-1").addClass("disabled");
        $(".dropbtn-2").removeClass("disabled");
        $(".dropbtn-3").removeClass("disabled");
    }
});

$(".dropbtn-2").click(function () {
    if (document.getElementById('dd_edit').style.display === 'block') {
        $(".dropbtn-2").addClass("disabled");
        $(".dropbtn-1").removeClass("disabled");
        $(".dropbtn-3").removeClass("disabled");
    }
});
$(".dropbtn-3").click(function () {
    if (document.getElementById('dd_view').style.display === 'block') {
        $(".dropbtn-3").addClass("disabled");
        $(".dropbtn-1").removeClass("disabled");
        $(".dropbtn-2").removeClass("disabled");
    }
});



