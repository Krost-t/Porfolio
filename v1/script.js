// Animation des éléments au scroll avec effet de décalage
function animateOnScroll() {
    const bentoItems = document.querySelectorAll('.bento-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100); // Décalage progressif des animations
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    bentoItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        observer.observe(item);
    });
}

// Effet de particules sur le fond (subtil)
function createParticleEffect() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.5';
    
    document.body.prepend(canvas);

    let particles = [];
    const particleCount = 50;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speed = Math.random() * 0.5 + 0.2;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.y -= this.speed;
            if (this.y < 0) {
                this.reset();
                this.y = canvas.height;
            }
        }

        draw() {
            ctx.fillStyle = `rgba(147, 51, 234, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        initParticles();
    });

    resize();
    initParticles();
    animate();
}

// Effet de hover amélioré pour les cartes de projet
function addProjectHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// Effet de parallaxe amélioré pour la photo de profil
function addProfileParallax() {
    const profileImg = document.querySelector('.profile-img');
    const profile = document.querySelector('.profile');
    
    if (profileImg && profile) {
        profile.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = profile.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            const moveX = x * 30;
            const moveY = y * 30;
            const rotateX = y * 20;
            const rotateY = -x * 20;
            
            profileImg.style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        profile.addEventListener('mouseleave', () => {
            profileImg.style.transform = 'translate(0, 0) rotateX(0) rotateY(0)';
        });
    }
}

// Animation du texte du titre
function animateTitle() {
    const title = document.querySelector('h1');
    if (title) {
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            title.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, 300);
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    createParticleEffect();
    animateOnScroll();
    addProjectHoverEffects();
    addProfileParallax();
    animateTitle();
    
    // Gestion simple du bouton Voir plus
    const toggleButton = document.querySelector('.profile-toggle');
    const expandableContent = document.querySelector('.expandable-content');
    
    if (toggleButton && expandableContent) {
        // Vérifier la taille d'écran au chargement
        if (window.innerWidth > 1080) {
            // Sur desktop, masquer le bouton et toujours afficher le contenu
            toggleButton.style.display = 'none';
            expandableContent.style.display = 'block';
        } else {
            // Sur mobile/tablette, afficher le bouton et masquer le contenu
            toggleButton.style.display = 'flex';
            expandableContent.style.display = 'none';
        }
        
        // Gestion du clic sur le bouton
        toggleButton.addEventListener('click', function() {
            if (expandableContent.style.display === 'none' || !expandableContent.classList.contains('expanded')) {
                expandableContent.style.display = 'block';
                expandableContent.classList.add('expanded');
                
                // Changer le texte et l'icône
                const spanElement = toggleButton.querySelector('span');
                const iconElement = toggleButton.querySelector('i');
                
                spanElement.textContent = 'Voir moins';
                iconElement.classList.remove('fa-chevron-down');
                iconElement.classList.add('fa-chevron-up');
            } else {
                expandableContent.style.display = 'none';
                expandableContent.classList.remove('expanded');
                
                // Changer le texte et l'icône
                const spanElement = toggleButton.querySelector('span');
                const iconElement = toggleButton.querySelector('i');
                
                spanElement.textContent = 'Voir plus';
                iconElement.classList.remove('fa-chevron-up');
                iconElement.classList.add('fa-chevron-down');
            }
        });
        
        // Gestion du redimensionnement
        window.addEventListener('resize', function() {
            if (window.innerWidth > 1080) {
                // Sur desktop, masquer le bouton et toujours afficher le contenu
                toggleButton.style.display = 'none';
                expandableContent.style.display = 'block';
                expandableContent.classList.add('expanded');
            } else {
                // Sur mobile/tablette, afficher le bouton
                toggleButton.style.display = 'flex';
                
                // Si le contenu n'est pas déjà affiché (état replié)
                if (!expandableContent.classList.contains('expanded')) {
                    expandableContent.style.display = 'none';
                    
                    // Réinitialiser le texte du bouton
                    const spanElement = toggleButton.querySelector('span');
                    const iconElement = toggleButton.querySelector('i');
                    spanElement.textContent = 'Voir plus';
                    iconElement.classList.remove('fa-chevron-up');
                    iconElement.classList.add('fa-chevron-down');
                }
            }
        });
    }
}); 