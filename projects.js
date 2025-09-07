// Projects page specific JavaScript

// Simplified project display functionality
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card-full');

    // Initialize cards with staggered animation
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Modal functionality for project details
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close');

// Project data for modal content
const projectData = {
    project1: {
        title: 'Sumilion Industry - North America',
        category: 'Industrial',
        year: '2024',
        description: 'A large-scale industrial facility project in North America showcasing modern industrial architecture and operational efficiency design. This project demonstrates Maz Infratech Pvt. Ltd.\'s capability in international industrial construction, featuring state-of-the-art manufacturing infrastructure and sustainable industrial design principles.',
        features: [
            'Large-scale industrial facility',
            'Modern manufacturing infrastructure',
            'Operational efficiency design',
            'International project execution',
            'Sustainable industrial architecture',
            'Advanced structural engineering',
            'Industrial safety compliance',
            'Scalable facility design',
            'North American construction standards'
        ],
        stats: {
            area: '75,000 Sq Ft',
            duration: '24 Months'
        },
        images: [
            'projects/sumilion/WhatsApp Image 2025-09-07 at 1.01.48 PM.jpeg',
            'projects/sumilion/WhatsApp Image 2025-09-07 at 1.04.05 PM.jpeg',
            'projects/sumilion/WhatsApp Image 2025-09-07 at 1.04.06 PM.jpeg'
        ]
    },
    project2: {
        title: 'Bulanseher College Elevation',
        category: 'Educational',
        year: '2025',
        description: 'A comprehensive educational institution project featuring modern architectural design that balances functionality with aesthetic appeal. The design incorporates contemporary elements while creating an inspiring learning environment for students and faculty.',
        features: [
            'Modern educational facility design',
            'Student-centric architectural planning',
            'Multi-purpose learning spaces',
            'Contemporary facade treatment',
            'Sustainable building practices',
            'Accessible design compliance',
            'Natural lighting optimization'
        ],
        stats: {
            area: '25,000 Sq Ft',
            duration: '8 Months'
        },
        images: [
            'projects/Bulanseher collage/WhatsApp Image 2025-09-07 at 12.51.10 PM.jpeg',
            'projects/Bulanseher collage/WhatsApp Image 2025-09-07 at 12.51.10 PM (1).jpeg',
            'projects/Bulanseher collage/WhatsApp Image 2025-09-07 at 12.51.11 PM.jpeg',
            'projects/Bulanseher collage/WhatsApp Image 2025-09-07 at 12.53.14 PM.jpeg',
            'projects/Bulanseher collage/WhatsApp Image 2025-09-07 at 12.53.15 PM.jpeg',
            'projects/Bulanseher collage/WhatsApp Image 2025-09-07 at 12.53.15 PM (1).jpeg',
            'projects/Bulanseher collage/WhatsApp Image 2025-09-07 at 12.53.17 PM (1).jpeg'
        ]
    },
    project3: {
        title: 'G2 Residential Complex',
        category: 'Residential',
        year: '2024',
        description: 'A contemporary residential complex featuring modern architectural design with elegant facade treatment and functional living spaces. This project showcases innovative residential planning with attention to both aesthetic appeal and practical functionality for modern families.',
        features: [
            'Contemporary residential design',
            'Modern facade architecture',
            'Functional living space planning',
            'Premium building materials',
            'Energy-efficient design elements',
            'Landscaped common areas',
            'Secure residential environment',
            'Parking and utility integration'
        ],
        stats: {
            area: '15,000 Sq Ft',
            duration: '10 Months'
        },
        images: [
            'projects/g2/WhatsApp Image 2025-09-07 at 12.53.33 PM.jpeg',
            'projects/g2/WhatsApp Image 2025-09-07 at 12.53.33 PM (1).jpeg',
            'projects/g2/WhatsApp Image 2025-09-07 at 12.53.33 PM (2).jpeg',
            'projects/g2/WhatsApp Image 2025-09-07 at 12.53.34 PM.jpeg',
            'projects/g2/WhatsApp Image 2025-09-07 at 12.53.34 PM (1).jpeg',
            'projects/g2/WhatsApp Image 2025-09-07 at 12.53.34 PM (2).jpeg',
            'projects/g2/WhatsApp Image 2025-09-07 at 12.53.35 PM.jpeg',
            'projects/g2/WhatsApp Image 2025-09-07 at 12.53.35 PM (1).jpeg'
        ]
    },
    project4: {
        title: 'Lakhimpur Medical College',
        category: 'Educational',
        year: '2024',
        description: 'A comprehensive medical education facility featuring state-of-the-art architectural design tailored for healthcare education. This project showcases specialized planning for medical training environments, including modern laboratories, lecture halls, and clinical practice areas designed to meet the highest standards of medical education infrastructure.',
        features: [
            'Specialized medical education facility',
            'Modern laboratory infrastructure',
            'Advanced lecture hall design',
            'Clinical practice environments',
            'Healthcare-compliant architecture',
            'Student accommodation planning',
            'Medical equipment integration',
            'Sustainable building design',
            'Accessibility compliance standards'
        ],
        stats: {
            area: '35,000 Sq Ft',
            duration: '14 Months'
        },
        images: [
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.05.23 PM.jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.05.23 PM (1).jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.41 PM.jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.42 PM.jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.43 PM.jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.44 PM.jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.44 PM (1).jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.44 PM (2).jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.45 PM.jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.45 PM (1).jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.45 PM (2).jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.46 PM.jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.46 PM (1).jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.47 PM.jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.47 PM (1).jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.47 PM (2).jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.48 PM.jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.48 PM (1).jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.49 PM.jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.49 PM (1).jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.50 PM.jpeg',
            'projects/lakhimpur/WhatsApp Image 2025-09-07 at 1.11.50 PM (1).jpeg'
        ]
    },
    project5: {
        title: 'Multilevel Parking Structure',
        category: 'Infrastructure',
        year: '2024',
        description: 'An innovative multilevel parking facility designed by Maz Infratech Pvt. Ltd., showcasing modern infrastructure planning with efficient space utilization and contemporary architectural elements. This project demonstrates our expertise in creating functional yet aesthetically pleasing parking solutions that address urban mobility challenges while maintaining architectural excellence.',
        features: [
            'Multilevel parking infrastructure',
            'Efficient space optimization',
            'Modern structural design',
            'Vehicle circulation planning',
            'Safety and security integration',
            'Ventilation system design',
            'Sustainable construction materials',
            'Urban mobility solution',
            'Accessibility compliance'
        ],
        stats: {
            area: '45,000 Sq Ft',
            duration: '18 Months'
        },
        images: [
            'projects/multilevel parking/WhatsApp Image 2025-09-07 at 12.51.11 PM (1).jpeg',
            'projects/multilevel parking/WhatsApp Image 2025-09-07 at 12.51.11 PM (2).jpeg',
            'projects/multilevel parking/WhatsApp Image 2025-09-07 at 12.51.12 PM.jpeg',
            'projects/multilevel parking/WhatsApp Image 2025-09-07 at 12.53.36 PM.jpeg',
            'projects/multilevel parking/WhatsApp Image 2025-09-07 at 12.53.36 PM (1).jpeg',
            'projects/multilevel parking/WhatsApp Image 2025-09-07 at 12.53.36 PM (2).jpeg',
            'projects/multilevel parking/WhatsApp Image 2025-09-07 at 12.53.37 PM.jpeg'
        ]
    },
    project6: {
        title: 'Gajra Raja Chikitsha Mahavidhyala',
        category: 'Educational',
        year: '2024',
        description: 'A specialized project for Gajra Raja Chikitsha Mahavidhyala where Maz Infratech Pvt. Ltd. provided comprehensive signage solutions and PM room front elevation design. This project showcases our expertise in medical education facility enhancement, combining functional design with institutional branding to create a professional and welcoming environment for medical education.',
        features: [
            'Professional signage design',
            'PM room front elevation',
            'Medical facility branding',
            'Institutional identity enhancement',
            'Educational facility upgrade',
            'Modern design elements',
            'Professional wayfinding systems',
            'Quality material selection',
            'Compliance with medical standards'
        ],
        stats: {
            area: '2,500 Sq Ft',
            duration: '6 Months'
        },
        images: [
            'projects/pm room/WhatsApp Image 2025-09-07 at 12.53.24 PM.jpeg',
            'projects/pm room/WhatsApp Image 2025-09-07 at 12.53.24 PM (1).jpeg',
            'projects/pm room/WhatsApp Image 2025-09-07 at 12.53.24 PM (2).jpeg',
            'projects/pm room/WhatsApp Image 2025-09-07 at 12.53.25 PM.jpeg',
            'projects/pm room/WhatsApp Image 2025-09-07 at 12.53.26 PM (1).jpeg',
            'projects/pm room/WhatsApp Image 2025-09-07 at 12.53.27 PM.jpeg'
        ]
    },
    project7: {
        title: 'Maz Infratech Pvt. Ltd. Signage Solutions',
        category: 'Signage',
        year: '2024',
        description: 'A comprehensive showcase of professional signage solutions provided by Maz Infratech Pvt. Ltd. across various projects. This collection demonstrates our expertise in creating high-quality signage systems, including institutional branding, wayfinding solutions, and professional identification systems that enhance the visual identity and functionality of diverse facilities.',
        features: [
            'Professional signage design',
            'Institutional branding solutions',
            'Wayfinding and directional systems',
            'Custom identification signage',
            'Quality material selection',
            'Weather-resistant construction',
            'Brand identity integration',
            'Multi-project portfolio',
            'Comprehensive signage services'
        ],
        stats: {
            area: 'Multiple Projects',
            duration: 'Ongoing Services'
        },
        images: [
            'projects/signage/WhatsApp Image 2025-09-07 at 12.53.18 PM (1).jpeg',
            'projects/signage/WhatsApp Image 2025-09-07 at 12.53.18 PM (2).jpeg',
            'projects/signage/WhatsApp Image 2025-09-07 at 12.53.19 PM.jpeg',
            'projects/signage/WhatsApp Image 2025-09-07 at 12.53.19 PM (1).jpeg',
            'projects/signage/WhatsApp Image 2025-09-07 at 12.53.20 PM.jpeg',
            'projects/signage/WhatsApp Image 2025-09-07 at 12.53.20 PM (1).jpeg',
            'projects/signage/WhatsApp Image 2025-09-07 at 12.53.21 PM.jpeg',
            'projects/signage/WhatsApp Image 2025-09-07 at 12.53.21 PM (1).jpeg',
            'projects/signage/WhatsApp Image 2025-09-07 at 12.53.22 PM.jpeg',
            'projects/signage/WhatsApp Image 2025-09-07 at 12.53.23 PM.jpeg',
            'projects/signage/WhatsApp Image 2025-09-07 at 12.53.23 PM (1).jpeg',
            'projects/signage/WhatsApp Image 2025-09-07 at 12.53.27 PM (1).jpeg',
            'projects/signage/WhatsApp Image 2025-09-07 at 12.53.28 PM (1).jpeg',
            'projects/signage/WhatsApp Image 2025-09-07 at 12.53.29 PM.jpeg'
        ]
    }
};

// Function to open modal with project details
function openModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="modal-project">
            <div class="modal-project-gallery">
                <div class="modal-main-image">
                    <img id="modalMainImage" src="${project.images[0]}" alt="${project.title}">
                </div>
                ${project.images.length > 1 ? `
                <div class="modal-image-thumbnails">
                    ${project.images.map((image, index) => `
                        <img src="${image}" alt="${project.title} ${index + 1}" 
                             class="modal-thumbnail ${index === 0 ? 'active' : ''}" 
                             onclick="changeModalImage('${image}', ${index})">
                    `).join('')}
                </div>
                ` : ''}
            </div>
            <div class="modal-project-content">
                <div class="modal-project-header">
                    <span class="modal-category">${project.category}</span>
                    <h2>${project.title}</h2>
                    <p class="modal-year">${project.year}</p>
                </div>
                
                <div class="modal-description">
                    <p>${project.description}</p>
                </div>
                
                <div class="modal-features">
                    <h3>Key Features</h3>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="modal-stats">
                    <h3>Project Details</h3>
                    <div class="modal-stats-grid">
                        <div class="modal-stat">
                            <span class="modal-stat-label">Area:</span>
                            <span class="modal-stat-value">${project.stats.area}</span>
                        </div>
                        <div class="modal-stat">
                            <span class="modal-stat-label">Duration:</span>
                            <span class="modal-stat-value">${project.stats.duration}</span>
                        </div>
                    </div>
                </div>
                
                <div class="modal-cta">
                    <a href="contact.html" class="btn btn-primary">Start Your Project</a>
                </div>
            </div>
        </div>
    `;

    // Add modal styles if not exists
    if (!document.querySelector('#modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .modal-project {
                display: grid;
                grid-template-columns: 1.2fr 1fr;
                gap: 2rem;
                align-items: start;
            }
            
            .modal-project-gallery {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            
            .modal-main-image img {
                width: 100%;
                height: 400px;
                object-fit: cover;
                border-radius: 10px;
                border: 3px solid var(--primary-brown);
                transition: all 0.3s ease;
            }
            
            .modal-image-thumbnails {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
                gap: 0.5rem;
                max-height: 120px;
                overflow-y: auto;
            }
            
            .modal-thumbnail {
                width: 100%;
                height: 80px;
                object-fit: cover;
                border-radius: 8px;
                cursor: pointer;
                border: 2px solid transparent;
                transition: all 0.3s ease;
                opacity: 0.7;
            }
            
            .modal-thumbnail:hover {
                opacity: 1;
                border-color: var(--primary-brown);
                transform: scale(1.05);
            }
            
            .modal-thumbnail.active {
                opacity: 1;
                border-color: var(--primary-brown);
                box-shadow: 0 2px 8px rgba(139, 69, 19, 0.3);
            }
            
            .modal-category {
                background-color: var(--primary-brown);
                color: var(--white);
                padding: 0.3rem 1rem;
                border-radius: 20px;
                font-size: 0.9rem;
                font-weight: 500;
            }
            
            .modal-project-content h2 {
                margin: 1rem 0 0.5rem 0;
                color: var(--dark-gray);
                font-size: 1.8rem;
            }
            
            .modal-year {
                color: var(--primary-brown);
                font-weight: 600;
                margin-bottom: 1.5rem;
            }
            
            .modal-description p {
                line-height: 1.6;
                margin-bottom: 1.5rem;
                color: var(--dark-gray);
                opacity: 0.8;
            }
            
            .modal-features h3,
            .modal-stats h3 {
                color: var(--dark-gray);
                margin-bottom: 1rem;
                font-size: 1.2rem;
            }
            
            .modal-features ul {
                list-style: none;
                padding: 0;
                margin-bottom: 1.5rem;
            }
            
            .modal-features li {
                padding: 0.5rem 0;
                border-bottom: 1px solid #eee;
                color: var(--dark-gray);
            }
            
            .modal-features li:before {
                content: "✓";
                color: var(--primary-brown);
                font-weight: bold;
                margin-right: 0.5rem;
            }
            
            .modal-stats-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 0.8rem;
                margin-bottom: 2rem;
            }
            
            .modal-stat {
                display: flex;
                justify-content: space-between;
                padding: 0.8rem;
                background-color: var(--light-gray);
                border-radius: 5px;
            }
            
            .modal-stat-label {
                color: var(--dark-gray);
                font-weight: 500;
            }
            
            .modal-stat-value {
                color: var(--primary-brown);
                font-weight: 600;
            }
            
            .modal-cta {
                text-align: center;
            }
            
            @media (max-width: 768px) {
                .modal-project {
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                }
                
                .modal-main-image img {
                    height: 250px;
                }
                
                .modal-image-thumbnails {
                    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
                }
                
                .modal-thumbnail {
                    height: 60px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Function to change modal image
function changeModalImage(imageSrc, index) {
    const mainImage = document.getElementById('modalMainImage');
    const thumbnails = document.querySelectorAll('.modal-thumbnail');
    
    if (mainImage) {
        mainImage.src = imageSrc;
        
        // Update thumbnail active state
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }
}

// Close modal functionality
if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Close modal when clicking outside
if (modal) {
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60 FPS
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current) + (counter.textContent.includes('%') ? '%' : counter.textContent.includes('+') ? '+' : '');
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + (counter.textContent.includes('%') ? '%' : counter.textContent.includes('+') ? '+' : '');
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Initialize counter animation
document.addEventListener('DOMContentLoaded', animateCounters);

console.log('mazinfratech projects page loaded successfully!');