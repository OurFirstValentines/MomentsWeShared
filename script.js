// ===================================
// PHOTO GALLERY DATA - 10 IMAGES PER GROUP
// ===================================

const photoGroups = {
    sd: [
        { description: "Summer memories together", date: "June 15, 2024", image: "sd/sd-1.jpg" },  // Changed
        { description: "Beach day fun", date: "July 2, 2024", image: "sd/sd-2.jpg" },              // Changed
        { description: "Sunset watching", date: "July 10, 2024", image: "sd/sd-3.jpg" },           // Changed
        { description: "Ice cream date", date: "July 18, 2024", image: "sd/sd-4.jpg" },            // Changed
        { description: "Park picnic", date: "July 25, 2024", image: "sd/sd-5.jpg" },               // Changed
        { description: "Road trip vibes", date: "August 1, 2024", image: "sd/sd-6.jpg" },          // Changed
        { description: "Downtown adventures", date: "August 3, 2024", image: "sd/sd-7.jpg" },      // Changed
        { description: "Coffee shop mornings", date: "August 12, 2024", image: "sd/sd-8.jpg" },    // Changed
        { description: "Movie night", date: "August 20, 2024", image: "sd/sd-9.jpg" },             // Changed
        { description: "Hiking together", date: "August 28, 2024", image: "sd/sd-10.jpg" },        // Changed
        { description: "Hiking together", date: "August 28, 2024", image: "sd/sd-11.jpg" },        // Changed
        { description: "Hiking together", date: "August 28, 2024", image: "sd/sd-12.jpg" }         // Changed
    ],
    us: [
        { description: "Our favorite spot", date: "January 8, 2025", image: "us/us-1.jpg" },       // Changed
        { description: "Brunch date", date: "January 16, 2025", image: "us/us-2.jpg" },            // Changed
        { description: "Museum visit", date: "January 24, 2025", image: "us/us-3.jpg" },           // Changed
        { description: "Concert night", date: "February 1, 2025", image: "us/us-4.jpg" },          // Changed
        { description: "Valentine's planning", date: "February 8, 2025", image: "us/us-5.jpg" },   // Changed
        { description: "Gym buddies", date: "February 15, 2025", image: "us/us-6.jpg" },           // Changed
        { description: "Bookstore browse", date: "February 22, 2025", image: "us/us-7.jpg" },      // Changed
        { description: "Spa day", date: "March 2, 2025", image: "us/us-8.jpg" },                   // Changed
        { description: "Spring blossoms", date: "March 12, 2025", image: "us/us-9.jpg" },          // Changed
        { description: "Art gallery", date: "March 20, 2025", image: "us/us-10.jpg" },             // Changed
        { description: "Art gallery", date: "March 20, 2025", image: "us/us-11.jpg" },             // Changed
        { description: "Art gallery", date: "March 20, 2025", image: "us/us-12.jpg" }              // Changed
    ],
    bt: [
        { description: "Best moments", date: "June 16, 2025", image: "bt/bt-1.jpg" },              // Changed
        { description: "Celebration day", date: "June 24, 2025", image: "bt/bt-2.jpg" },           // Changed
        { description: "Adventure awaits", date: "July 2, 2025", image: "bt/bt-3.jpg" },           // Changed
        { description: "Perfect afternoon", date: "July 10, 2025", image: "bt/bt-4.jpg" },         // Changed
        { description: "Making memories", date: "July 18, 2025", image: "bt/bt-5.jpg" },           // Changed
        { description: "Just us two", date: "July 26, 2025", image: "bt/bt-6.jpg" },               // Changed
        { description: "Sweet surprise", date: "August 3, 2025", image: "bt/bt-7.webp" },          // Changed
        { description: "Spontaneous fun", date: "August 11, 2025", image: "bt/bt-8.jpg" },         // Changed
        { description: "Late night talks", date: "August 19, 2025", image: "bt/bt-9.jpg" },        // Changed
        { description: "Lazy Sunday", date: "August 27, 2025", image: "bt/bt-10.jpg" },            // Changed
        { description: "Lazy Sunday", date: "August 27, 2025", image: "bt/bt-11.jpg" },            // Changed
        { description: "Lazy Sunday", date: "August 27, 2025", image: "bt/bt-12.jpg" }             // Changed
    ]
};
// Timeline milestone data
const timelineMilestones = {
    'first-love': {
        title: 'First Fell in Love',
        description: 'The moment I looked into your eyes and knew you were the one. Everything changed in that instant.',
        date: 'March 15, 2024',
        image: 'timeline/first-love.jpg'  // Changed
    },
    'first-date': {
        title: 'First Date',
        description: 'Our first official date where we talked for hours and I never wanted the night to end.',
        date: 'April 3, 2024',
        image: 'timeline/first-date.jpg'  // Changed
    },
    'first-trip': {
        title: 'First Trip',
        description: 'Our adventure together exploring new places and creating unforgettable memories.',
        date: 'August 12, 2024',
        image: 'timeline/first-trip.jpg'  // Changed
    },
    'new-beginning': {
        title: 'The Beginning After The End',
        description: 'After challenges, we emerged stronger, more committed, and ready for our future together.',
        date: 'January 10, 2025',
        image: 'timeline/new-beginning.jpg'  // Changed
    }
};
// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    generatePhotoGallery('sd'); // Start with SD group
    setupGalleryGroupButtons();
    setupPhotoModal();
    setupTimelineModal();
    setupScrollAnimations();
    setupSmoothScroll();
    createFloatingHearts();
    typewriterEffect();
});

// ===================================
// TYPEWRITER EFFECT FOR QUOTE
// ===================================

function typewriterEffect() {
    const quote = "In you, I've found the love of my life and my closest, truest friend. Every moment with you is a gift I cherish deeply.";
    const quoteElement = document.querySelector('.quote-text');
    let index = 0;
    
    function type() {
        if (index < quote.length) {
            quoteElement.textContent = quote.substring(0, index + 1);
            index++;
            setTimeout(type, 50);
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 1000);
}

// ===================================
// PHOTO GALLERY GENERATION
// ===================================

function generatePhotoGallery(group) {
    const photoGrid = document.getElementById('photoGrid');
    const photos = photoGroups[group];
    
    // Update group count display
    updateGroupCounts();
    
    // Clear existing photos with fade out
    const existingPhotos = photoGrid.querySelectorAll('.photo-item');
    existingPhotos.forEach(photo => {
        photo.style.animation = 'fadeOutScale 0.3s ease forwards';
    });
    
    setTimeout(() => {
        photoGrid.innerHTML = '';
        
        // Fallback gradient colors if image doesn't load
        const colors = [
            ['#FFE5E5', '#FFC1CC'],
            ['#FFD4E5', '#FFA6C1'],
            ['#FFB6C1', '#FF69B4'],
            ['#FFC0CB', '#FF1493'],
            ['#F4D1D1', '#BE3455'],
            ['#FFE4E1', '#FFA07A'],
            ['#FFE5B4', '#FFD700'],
            ['#FFDAB9', '#FFA500'],
            ['#FFE4C4', '#CD853F'],
            ['#F5DEB3', '#D2691E']
        ];
        
        photos.forEach((photo, i) => {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            photoItem.style.animationDelay = `${i * 0.03}s`;
            photoItem.dataset.description = photo.description;
            photoItem.dataset.date = photo.date;
            photoItem.dataset.image = photo.image;
            photoItem.dataset.index = i;
            
            const colorPalette = colors[i % colors.length];
            
            // Create image container
            const imgContainer = document.createElement('div');
            imgContainer.className = 'photo-placeholder';
            imgContainer.style.width = '100%';
            imgContainer.style.height = '100%';
            imgContainer.style.background = `linear-gradient(135deg, ${colorPalette[0]} 0%, ${colorPalette[1]} 100%)`;
            imgContainer.style.display = 'flex';
            imgContainer.style.alignItems = 'center';
            imgContainer.style.justifyContent = 'center';
            
            // Create actual image element
            const img = document.createElement('img');
            img.src = photo.image;
            img.alt = photo.description;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.display = 'block';
            
            // If image fails to load, show heart gradient
            img.onerror = function() {
                this.style.display = 'none';
                const heart = document.createElement('div');
                heart.style.fontSize = '48px';
                heart.style.color = 'rgba(255, 255, 255, 0.3)';
                heart.style.fontFamily = "'Cormorant Garamond', serif";
                heart.innerHTML = '❤';
                imgContainer.appendChild(heart);
            };
            
            imgContainer.appendChild(img);
            
            const overlay = document.createElement('div');
            overlay.className = 'photo-overlay';
            
            const heartIcon = document.createElement('div');
            heartIcon.className = 'heart-icon-overlay';
            heartIcon.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            `;
            
            photoItem.appendChild(imgContainer);
            photoItem.appendChild(overlay);
            photoItem.appendChild(heartIcon);
            
            photoItem.addEventListener('click', function() {
                openPhotoModal(this);
            });
            
            photoGrid.appendChild(photoItem);
        });
    }, 300);
}

// Update group count badges
function updateGroupCounts() {
    document.querySelector('[data-group="sd"] .group-count').textContent = photoGroups.sd.length;
    document.querySelector('[data-group="us"] .group-count').textContent = photoGroups.us.length;
    document.querySelector('[data-group="bt"] .group-count').textContent = photoGroups.bt.length;
}

// Add fadeOutScale animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOutScale {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.9);
        }
    }
`;
document.head.appendChild(style);

// ===================================
// GALLERY GROUP BUTTONS
// ===================================

function setupGalleryGroupButtons() {
    const buttons = document.querySelectorAll('.gallery-group-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const group = this.dataset.group;
            generatePhotoGallery(group);
        });
    });
}

// ===================================
// PHOTO MODAL
// ===================================

function setupPhotoModal() {
    const modal = document.getElementById('photoModal');
    const closeBtn = modal.querySelector('.photo-modal-close');
    const overlay = modal.querySelector('.photo-modal-overlay');
    
    closeBtn.addEventListener('click', closePhotoModal);
    overlay.addEventListener('click', closePhotoModal);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closePhotoModal();
        }
    });
}

function openPhotoModal(photoItem) {
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalDate = document.getElementById('modalDate');
    
    const description = photoItem.dataset.description;
    const date = photoItem.dataset.date;
    const imageSrc = photoItem.dataset.image;
    
    modalImage.innerHTML = '';
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = description;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '5px';
    
    img.onerror = function() {
        const photoPlaceholder = photoItem.querySelector('.photo-placeholder');
        modalImage.innerHTML = '❤';
        modalImage.style.background = photoPlaceholder.style.background;
        modalImage.style.fontSize = '72px';
        modalImage.style.color = 'rgba(255, 255, 255, 0.3)';
        modalImage.style.fontFamily = "'Cormorant Garamond', serif";
        modalImage.style.display = 'flex';
        modalImage.style.alignItems = 'center';
        modalImage.style.justifyContent = 'center';
    };
    
    modalImage.appendChild(img);
    modalDescription.textContent = description;
    modalDate.textContent = date;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePhotoModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===================================
// TIMELINE MODAL
// ===================================

function setupTimelineModal() {
    const modal = document.getElementById('timelineModal');
    const closeBtn = modal.querySelector('.timeline-modal-close');
    const overlay = modal.querySelector('.timeline-modal-overlay');
    const timelineCards = document.querySelectorAll('.timeline-card');
    
    timelineCards.forEach(card => {
        card.addEventListener('click', function() {
            const milestone = this.closest('.timeline-item').dataset.milestone;
            openTimelineModal(milestone);
        });
    });
    
    closeBtn.addEventListener('click', closeTimelineModal);
    overlay.addEventListener('click', closeTimelineModal);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeTimelineModal();
        }
    });
}

function openTimelineModal(milestone) {
    const modal = document.getElementById('timelineModal');
    const modalImage = document.getElementById('timelineModalImage');
    const modalTitle = document.getElementById('timelineModalTitle');
    const modalDescription = document.getElementById('timelineModalDescription');
    const modalDate = document.getElementById('timelineModalDate');
    
    const data = timelineMilestones[milestone];
    
    modalImage.innerHTML = '';
    const img = document.createElement('img');
    img.src = data.image;
    img.alt = data.title;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '5px';
    
    const gradients = {
        'first-love': ['#FFB6C1', '#FF69B4'],
        'first-date': ['#FFD4E5', '#FFA6C1'],
        'first-trip': ['#FFE5B4', '#FFD700'],
        'new-beginning': ['#F4D1D1', '#BE3455']
    };
    
    img.onerror = function() {
        const colors = gradients[milestone];
        modalImage.style.background = `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`;
        modalImage.style.fontSize = '72px';
        modalImage.style.color = 'rgba(255, 255, 255, 0.4)';
        modalImage.style.fontFamily = "'Cormorant Garamond', serif";
        modalImage.style.display = 'flex';
        modalImage.style.alignItems = 'center';
        modalImage.style.justifyContent = 'center';
        modalImage.innerHTML = '❤';
    };
    
    modalImage.appendChild(img);
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalDate.textContent = data.date;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTimelineModal() {
    const modal = document.getElementById('timelineModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===================================
// SCROLL ANIMATIONS
// ===================================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(40px)';
        item.style.transition = `all 0.8s ease ${index * 0.15}s`;
        observer.observe(item);
    });
}

// ===================================
// SMOOTH SCROLL
// ===================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            document.querySelector('#story').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

// ===================================
// FLOATING HEARTS
// ===================================

function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts-background');
    
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 10}s`;
        heart.style.animationDuration = `${15 + Math.random() * 10}s`;
        heart.style.fontSize = `${20 + Math.random() * 20}px`;
        heart.style.opacity = `${0.1 + Math.random() * 0.2}`;
        heartsContainer.appendChild(heart);
    }
}

const heartStyle = document.createElement('style');
heartStyle.textContent = `
    .floating-heart {
        position: absolute;
        bottom: -50px;
        color: #BE3455;
        animation: floatHeart linear infinite;
        pointer-events: none;
    }
    
    @keyframes floatHeart {
        0% {
            transform: translateY(0) rotate(0deg);
            bottom: -50px;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            bottom: 100vh;
        }
    }
`;
document.head.appendChild(heartStyle);

// ===================================
// PAGE LOAD ANIMATIONS
// ===================================

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';