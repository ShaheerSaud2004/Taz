// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.service-card, .portfolio-item, .about-feature, .contact-item, .stat'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // Initialize particle effects
    initParticleEffects();
    
    // Initialize typewriter effect
    initTypewriterEffect();
});

// Button interactions with enhanced effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 8px 25px rgba(0, 212, 170, 0.3)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '';
    });
    
    // Handle button clicks
    button.addEventListener('click', function(e) {
        const buttonText = this.textContent.trim();
        
        if (buttonText === 'Start Your Project') {
            e.preventDefault();
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else if (buttonText === 'View Portfolio') {
            e.preventDefault();
            document.querySelector('#portfolio').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else if (buttonText === 'Get Free Quote') {
            e.preventDefault();
            handleFormSubmission();
        } else if (buttonText === 'Get Quote') {
            e.preventDefault();
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced portfolio item hover effects
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const productContainer = this.querySelector('.product-image-container');
        const content = this.querySelector('.portfolio-content');
        
        if (productContainer) {
            productContainer.style.transform = 'scale(1.3) rotateY(15deg)';
            productContainer.style.transition = 'transform 0.3s ease';
            productContainer.style.filter = 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.4))';
        }
        
        if (content) {
            content.style.transform = 'translateY(-5px)';
            content.style.transition = 'transform 0.3s ease';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        const productContainer = this.querySelector('.product-image-container');
        const content = this.querySelector('.portfolio-content');
        
        if (productContainer) {
            productContainer.style.transform = 'scale(1.2) rotateY(0deg)';
            productContainer.style.filter = 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))';
        }
        
        if (content) {
            content.style.transform = 'translateY(0)';
        }
    });
});

// Enhanced hero product hover effects
document.querySelectorAll('.tree-display').forEach(display => {
    display.addEventListener('mouseenter', function() {
        const productContainer = this.querySelector('.product-image-container');
        
        if (productContainer) {
            productContainer.style.transform = 'scale(1.3)';
            productContainer.style.transition = 'transform 0.3s ease';
            productContainer.style.filter = 'drop-shadow(0 15px 30px rgba(0, 212, 170, 0.4))';
        }
    });
    
    display.addEventListener('mouseleave', function() {
        const productContainer = this.querySelector('.product-image-container');
        
        if (productContainer) {
            productContainer.style.transform = 'scale(1.2)';
            productContainer.style.filter = 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))';
        }
    });
});

// Enhanced service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.service-icon');
        const features = this.querySelectorAll('.service-features li');
        
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
        
        // Animate features list
        features.forEach((feature, index) => {
            feature.style.transform = 'translateX(5px)';
            feature.style.transition = `transform 0.3s ease ${index * 0.1}s`;
        });
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.service-icon');
        const features = this.querySelectorAll('.service-features li');
        
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
        
        features.forEach(feature => {
            feature.style.transform = 'translateX(0)';
        });
    });
});

// Enhanced about feature hover effects
document.querySelectorAll('.about-feature').forEach(feature => {
    feature.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.feature-icon');
        const title = this.querySelector('h4');
        
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(10deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
        
        if (title) {
            title.style.color = 'var(--accent-primary)';
            title.style.transition = 'color 0.3s ease';
        }
    });
    
    feature.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.feature-icon');
        const title = this.querySelector('h4');
        
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
        
        if (title) {
            title.style.color = 'var(--text-primary)';
        }
    });
});

// Form handling with enhanced validation
function handleFormSubmission() {
    const form = document.querySelector('.contact-form');
    const inputs = form.querySelectorAll('input, select, textarea');
    let isValid = true;
    
    // Enhanced validation with visual feedback
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ff4757';
            input.style.boxShadow = '0 0 0 3px rgba(255, 71, 87, 0.1)';
            
            // Add shake animation
            input.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                input.style.animation = '';
            }, 500);
        } else {
            input.style.borderColor = '';
            input.style.boxShadow = '';
        }
    });
    
    if (isValid) {
        showNotification('Thank you! We\'ll get back to you within 24 hours.', 'success');
        // Reset form with animation
        inputs.forEach(input => {
            input.style.transform = 'scale(0.95)';
            input.style.transition = 'transform 0.2s ease';
            setTimeout(() => {
                input.value = '';
                input.style.transform = 'scale(1)';
            }, 200);
        });
    } else {
        showNotification('Please fill in all required fields.', 'error');
    }
}

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    handleFormSubmission();
});

// Enhanced notification system
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add enhanced styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? 'linear-gradient(135deg, #00ff88, #00cc6a)' : 
                   type === 'error' ? 'linear-gradient(135deg, #ff4757, #ff3742)' : 
                   'linear-gradient(135deg, #00d4aa, #00b894)',
        color: type === 'success' ? '#000' : '#fff',
        padding: '16px 24px',
        borderRadius: '12px',
        fontSize: '14px',
        fontWeight: '600',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        zIndex: '10000',
        opacity: '0',
        transform: 'translateY(-20px) scale(0.9)',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0) scale(1)';
    }, 10);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px) scale(0.9)';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Enhanced particle effects for hero section
function initParticleEffects() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create more particles with different sizes and colors
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 4 + 1;
        const colors = ['#00d4aa', '#00b894', '#00ff88', '#00ffaa'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            opacity: ${0.2 + Math.random() * 0.4};
            pointer-events: none;
            animation: float-particle ${4 + Math.random() * 6}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 3}s;
            box-shadow: 0 0 ${size * 2}px ${color};
        `;
        hero.appendChild(particle);
    }
    
    // Add floating geometric shapes
    for (let i = 0; i < 8; i++) {
        const shape = document.createElement('div');
        shape.className = 'floating-shape';
        const size = Math.random() * 20 + 10;
        const rotation = Math.random() * 360;
        
        shape.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border: 1px solid rgba(0, 212, 170, 0.3);
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            opacity: 0.1;
            pointer-events: none;
            animation: float-shape ${8 + Math.random() * 4}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 4}s;
            transform: rotate(${rotation}deg);
        `;
        hero.appendChild(shape);
    }
}

// Typewriter effect for hero title
function initTypewriterEffect() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    title.style.borderRight = '2px solid var(--accent-primary)';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            title.style.borderRight = 'none';
        }
    };
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
}

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingItems = document.querySelectorAll('.floating-item');
    const particles = document.querySelectorAll('.particle');
    
    floatingItems.forEach((item, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        item.style.transform = `translateY(${yPos}px)`;
    });
    
    particles.forEach((particle, index) => {
        const speed = 0.3 + (index * 0.05);
        const yPos = -(scrolled * speed);
        particle.style.transform = `translateY(${yPos}px)`;
    });
});

// Add CSS for enhanced animations
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: scale(1.2) translateY(0px);
        }
        50% {
            transform: scale(1.2) translateY(-10px);
        }
    }
    
    @keyframes float-particle {
        0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
        }
        50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
        }
    }
    
    @keyframes float-shape {
        0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.1;
        }
        25% {
            transform: translateY(-15px) translateX(5px) rotate(90deg);
            opacity: 0.2;
        }
        50% {
            transform: translateY(-25px) translateX(-5px) rotate(180deg);
            opacity: 0.15;
        }
        75% {
            transform: translateY(-10px) translateX(10px) rotate(270deg);
            opacity: 0.25;
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .tree-freshener {
        transition: transform 0.3s ease, filter 0.3s ease;
    }
    
    .portfolio-item:hover .tree-freshener {
        filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.4));
    }
    
    .service-icon {
        transition: transform 0.3s ease;
    }
    
    .floating-item {
        animation: float 6s ease-in-out infinite;
    }
    
    .tree-display {
        animation: float 4s ease-in-out infinite;
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .service-card,
    .portfolio-item,
    .about-feature {
        animation: slideIn 0.6s ease-out;
    }
    
    .animated {
        animation: slideIn 0.6s ease-out;
    }
    
    .particle {
        z-index: 1;
    }
    
    /* Enhanced hover effects */
    .nav-link:hover {
        transform: translateY(-2px);
    }
    
    .btn:hover {
        transform: translateY(-2px);
    }
    
    /* Smooth transitions for all interactive elements */
    * {
        transition: all 0.3s ease;
    }
    
    /* Custom scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: var(--bg-secondary);
    }
    
    ::-webkit-scrollbar-thumb {
        background: var(--accent-primary);
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: var(--accent-secondary);
    }
`;
document.head.appendChild(style);

// Continuous scrolling carousel functionality
let carouselPosition = 0;
let carouselSpeed = 0.5; // pixels per frame - slower speed for smoother movement
let animationId;
let slides = document.querySelectorAll('.service-card');
let totalSlides = slides.length;

function setupInfiniteCarousel() {
    const servicesGrid = document.querySelector('.services-grid');
    if (!servicesGrid) return;
    
    // Clone the slides for infinite loop
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        servicesGrid.appendChild(clone);
    });
    
    // Update slides reference to include clones
    slides = document.querySelectorAll('.service-card');
    totalSlides = slides.length / 2; // Original number of slides
}

function startContinuousCarousel() {
    function animate() {
        carouselPosition -= carouselSpeed;
        
        // Calculate which slide should be active based on position
        const slideWidth = slides[0].offsetWidth + 32; // Include gap
        const currentSlideIndex = Math.abs(Math.round(carouselPosition / slideWidth)) % totalSlides;
        
        // Update carousel position
        const servicesGrid = document.querySelector('.services-grid');
        if (servicesGrid) {
            servicesGrid.style.transform = `translateX(${carouselPosition}px)`;
        }
        
        // Update active states
        updateActiveStates(currentSlideIndex);
        
        // Reset position when it goes too far left to create seamless infinite loop
        if (carouselPosition < -(slideWidth * totalSlides)) {
            carouselPosition = 0;
        }
        
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
}

function updateActiveStates(index) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Add active class to current slide
    if (slides[index]) slides[index].classList.add('active');
}

function stopContinuousCarousel() {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Setup infinite carousel with cloned slides
    setupInfiniteCarousel();
    
    // Start continuous carousel
    startContinuousCarousel();
    
    // Pause continuous carousel on hover
    const servicesCarousel = document.querySelector('.services-carousel');
    if (servicesCarousel) {
        servicesCarousel.addEventListener('mouseenter', stopContinuousCarousel);
        servicesCarousel.addEventListener('mouseleave', startContinuousCarousel);
    }
    
    // Enhanced portfolio interactions
    initPortfolioEnhancements();
    
    // Enhanced contact form interactions
    initContactFormEnhancements();
    
    // Enhanced hero stats interactions
    initHeroStatsEnhancements();
});

// Enhanced portfolio functionality
function initPortfolioEnhancements() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach((item, index) => {
        // Add staggered animation delay
        item.style.animationDelay = `${index * 0.2}s`;
        
        // Add click interaction
        item.addEventListener('click', () => {
            // Remove active class from all items
            portfolioItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            item.classList.add('active');
            
            // Add a subtle pulse effect
            item.style.animation = 'portfolioCardPulse 0.6s ease-in-out';
            setTimeout(() => {
                item.style.animation = 'portfolioCardFloat 6s ease-in-out infinite';
            }, 600);
        });
        
        // Add hover sound effect (optional)
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add CSS animation for pulse effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes portfolioCardPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced contact form functionality
function initContactFormEnhancements() {
    const form = document.querySelector('.contact-form');
    const inputs = form.querySelectorAll('input, select, textarea');
    const submitBtn = form.querySelector('.btn-primary');
    
    // Add floating label effect
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
        
        // Add input validation feedback
        input.addEventListener('input', () => {
            if (input.value) {
                input.classList.add('has-value');
            } else {
                input.classList.remove('has-value');
            }
        });
    });
    
    // Enhanced submit button interaction
    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add loading state
            submitBtn.innerHTML = '<span class="loading-spinner"></span> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.innerHTML = '✓ Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                
                // Reset after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = 'Get Free Quote';
                    submitBtn.style.background = 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))';
                    submitBtn.disabled = false;
                }, 3000);
            }, 2000);
        });
    }
    
    // Add form glow effect on interaction
    form.addEventListener('mouseenter', () => {
        form.style.boxShadow = '0 25px 50px rgba(0, 212, 170, 0.2)';
    });
    
    form.addEventListener('mouseleave', () => {
        form.style.boxShadow = 'var(--shadow-large)';
    });
}

// Enhanced hero stats functionality
function initHeroStatsEnhancements() {
    const stats = document.querySelectorAll('.stat');
    
    // Add staggered animation delay
    stats.forEach((stat, index) => {
        stat.style.animationDelay = `${index * 0.2}s`;
        
        // Add click interaction
        stat.addEventListener('click', () => {
            // Add a pulse effect
            stat.style.animation = 'statPulse 0.6s ease-in-out';
            setTimeout(() => {
                stat.style.animation = 'statFloat 6s ease-in-out infinite';
            }, 600);
        });
        
        // Add hover sound effect (optional)
        stat.addEventListener('mouseenter', () => {
            stat.style.transform = 'translateY(-12px) scale(1.05)';
        });
        
        stat.addEventListener('mouseleave', () => {
            stat.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add CSS animation for pulse effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes statPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced loading animation for the page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1.2s ease';
    
    // Add loading screen
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <div class="loading-logo">TreeScent Pro</div>
            <div class="loading-spinner"></div>
            <div class="loading-text">Loading your experience...</div>
        </div>
    `;
    document.body.appendChild(loadingScreen);
    
    setTimeout(() => {
        document.body.style.opacity = '1';
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 800);
});

// Add smooth reveal animation for sections
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

revealSections.forEach(section => {
    revealObserver.observe(section);
});

// Add cursor trail effect
let mouseX = 0, mouseY = 0;
let cursorTrail = [];

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Create cursor trail effect
    if (cursorTrail.length > 5) {
        cursorTrail.shift();
    }
    
    cursorTrail.push({ x: mouseX, y: mouseY });
    
    // Update existing trail elements or create new ones
    cursorTrail.forEach((pos, index) => {
        let trailElement = document.getElementById(`trail-${index}`);
        if (!trailElement) {
            trailElement = document.createElement('div');
            trailElement.id = `trail-${index}`;
            trailElement.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: var(--accent-primary);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                opacity: ${0.3 - (index * 0.05)};
                transition: all 0.1s ease;
            `;
            document.body.appendChild(trailElement);
        }
        
        trailElement.style.left = pos.x + 'px';
        trailElement.style.top = pos.y + 'px';
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add performance optimization
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const floatingItems = document.querySelectorAll('.floating-item');
    
    floatingItems.forEach((item, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        item.style.transform = `translateY(${yPos}px)`;
    });
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
}); 