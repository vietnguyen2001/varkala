function Dong_ho() {
    var ngay = document.getElementById("ngay")
    var gio = document.getElementById("gio");
    var phut = document.getElementById("phut");
    var giay = document.getElementById("giay");
    var Ngay_hien_tai = new Date().getDate();
    var Gio_hien_tai = new Date().getHours();
    var Phut_hien_tai = new Date().getMinutes();
    var Giay_hien_tai = new Date().getSeconds();
    ngay.innerHTML = Ngay_hien_tai;
    gio.innerHTML = Gio_hien_tai;
    phut.innerHTML = Phut_hien_tai;
    giay.innerHTML = Giay_hien_tai;
}
var Dem_gio = setInterval(Dong_ho, 1000);

// Brands
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 80,
        nav: false,
        autoWidth: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});

// click menu
// JavaScript
// const menuItems = document.querySelectorAll('.menu1 li');

// menuItems.forEach(item => {
//     item.addEventListener('click', function(e) {
//         const submenu = this.querySelector('.submenu1');
//         if (submenu) {
//             submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
//         }
//         e.stopPropagation();
//     });
// });

// document.addEventListener('click', function() {
//     const submenus = document.querySelectorAll('.submenu1');
//     submenus.forEach(submenu => {
//         submenu.style.display = 'none';
//     });
// });
// JavaScript with jQuery
$(document).ready(function() {
    $('.menu1 li').click(function(e) {
        e.stopPropagation();
        $(this).children('.submenu1').slideToggle();
    });

    $(document).click(function() {
        $('.submenu1').slideUp();
    });
});
$(document).ready(function() {
    $('.menu1 li').click(function(e) {
        e.stopPropagation();
        $(this).children('.submenu2').slideToggle();
    });

    $(document).click(function() {
        $('.submenu2').slideUp();
    });
});
$(document).ready(function() {
    $('.menu1 li').click(function(e) {
        e.stopPropagation();
        $(this).children('.submenu3').slideToggle();
    });

    $(document).click(function() {
        $('.submenu3').slideUp();
    });
});



//Hover product
$('.product').hover(function() {
    // khi thẻ bị hover thì (drop up) thẻ đó sẽ trượt lên(hiện)
    $('.add_to_cart', this).slideDown();
    $('.danhgia', this).slideDown();
}, function() {
    $('.add_to_cart', this).slideUp();
    $('.danhgia', this).slideUp();
});

//drop down menu
function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
    if (dropdown.classList.contains('show')) {
        document.addEventListener('click', closeDropdown);
    } else {
        document.removeEventListener('click', closeDropdown);
    }
}

function toggleDropdown1() {
    var dropdown = document.querySelector('.dropdown1');
    dropdown.classList.toggle('show');
    if (dropdown.classList.contains('show')) {
        document.addEventListener('click', closeDropdown);
    } else {
        document.removeEventListener('click', closeDropdown);
    }
}

function toggleDropdown2() {
    var dropdown = document.querySelector('.dropdown2');
    dropdown.classList.toggle('show');
    if (dropdown.classList.contains('show')) {
        document.addEventListener('click', closeDropdown);
    } else {
        document.removeEventListener('click', closeDropdown);
    }
}

function closeDropdown(event) {
    var dropdown = document.querySelector('.dropdown');
    var target = event.target;

    if (!dropdown.contains(target)) {
        dropdown.classList.remove('show');
        document.removeEventListener('click', closeDropdown);
    }
}