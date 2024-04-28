$(document).ready(function(){

    // Home page gallery Preview Function 
    const galleryImages = document.querySelectorAll('.gallery-image-box img');
    const previewContainer = document.getElementById('image-preview');
    const previewImage = previewContainer.querySelector('img');
    
    galleryImages.forEach(image => {
      image.addEventListener('click', function() {
        let imgSrc = this.src;
        previewImage.setAttribute('src',imgSrc);
        previewContainer.classList.add('active');
      });
    });
    
    previewContainer.addEventListener('click', function(event) {
        if (!previewImage.contains(event.target) && previewContainer.classList.contains('active')) {
          previewImage.src = ""; // Clear preview image source (optional)
          previewContainer.classList.remove('active');
        }
      });

      document.addEventListener('keydown', function(event) {
        if (event.which === 27 && previewContainer.classList.contains('active')) {
          previewImage.src = ""; // Clear preview image source (optional)
          previewContainer.classList.remove('active');
        }
      });

    


    // Banner Slider
    $('.banner-slides').slick({
        slidesToShow:1,
        slidesToScroll:1,
        dots:false,
        fade:true,
        arrows:true,
        prevArrow:$('.left-arrow'),
        nextArrow:$('.right-arrow'),
    });

    $('.banner-slides').on('afterChange', function(event, slick, currentSlide){
        var currentSlideNumber = currentSlide + 1;
        var totalSlides = slick.slideCount;
        $('.current-slick').text(currentSlideNumber);
        $('.total-slick').text(totalSlides);
    });


    // Testimonials Slider 
    $('.testimonial-slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        dots:false,
        arrows:true,
        prevArrow:$('.left-testimonials'),
        nextArrow:$('.right-testimonials'),
    });

    $('.image-slide-control').slick({
        slidesToShow:1,
        slidesToScroll:1,
        variableWidth: true,
        dots:false,
        arrows:false,
        infinite:true,
    });

});
