<script>
        // Add scroll animation
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.card');
            const testimonials = document.querySelectorAll('.testimonial');
            
            // Animate elements on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            // Set initial state for animation
            cards.forEach(card => {
                card.style.opacity = 0;
                card.style.transform = 'translateY(50px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(card);
            });
            
            testimonials.forEach(testimonial => {
                testimonial.style.opacity = 0;
                testimonial.style.transform = 'translateY(50px)';
                testimonial.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(testimonial);
            });
        });
    </script>