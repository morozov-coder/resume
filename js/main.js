$(document).ready(() => {
    const slider = new ChiefSlider('.about__slider', {
        loop: true,
        autoplay: true,
        interval: 7000,
    });

    // const portfolio = new ChiefSlider('.portfolio__slider', {
    //     loop: true,
    //     autoplay: false,
    // })

    $(window).on('scroll', () => {
        if (window.pageYOffset === 0) {
            document.querySelector(".navbar").classList.remove("scroll");
        } else {
            document.querySelector(".navbar").classList.add("scroll");
        }
    })

    const $bars = $(".bars").on("click", (evt) => {
        evt.preventDefault();
        $(".bars").toggleClass("open");
    })

    $('.navbar__link').on('click', (evt) => {
        evt.preventDefault();
        $('html, body').animate({ scrollTop: $("." + evt.target.id).offset().top - 100}, 500);
    })

    // $('.skills__item').on('mouseenter', (evt) => {
    //     const $item = $(evt.target);
    //     $item.addClass("skills__item--entered");
    // });

    // $('.skills__item').on('mouseleave', (evt) => {
    //     const $item = $(evt.target);
    //     $item.removeClass("skills__item--entered");
    // })
})