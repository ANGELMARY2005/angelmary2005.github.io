// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar background on scroll with parallax effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    if (scrolled > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.1)';
        navbar.style.transform = `translateY(${rate}px)`;
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.transform = 'translateY(0)';
    }

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (scrolled > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Back to top functionality
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Modal functionality
const modal = document.getElementById('worksModal');
const closeBtn = document.querySelector('.close-btn');

// Close modal when clicking X
closeBtn.addEventListener('click', () => {
    modal.style.animation = 'modalSlideOut 0.3s ease';
    setTimeout(() => {
        modal.style.display = 'none';
        modal.style.animation = '';
    }, 300);
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.animation = 'modalSlideOut 0.3s ease';
        setTimeout(() => {
            modal.style.display = 'none';
            modal.style.animation = '';
        }, 300);
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.animation = 'modalSlideOut 0.3s ease';
        setTimeout(() => {
            modal.style.display = 'none';
            modal.style.animation = '';
        }, 300);
    }
});

// Open works modal with details
// Simplified Open works modal with details
// Updated Open works modal with details (removed download option)
// Open works modal with details - NO DOWNLOAD OPTION
function openCertPage(certType) {
    const worksData = {
        'conference': {
            title: 'ICAECT Conference',
            date: '2023',
            description: 'International Conference on Advances in Emerging Computing Technologies - Presented research on innovative computing solutions and networked with industry professionals.',
            details: [
                'Presented research paper on emerging computing technologies',
                'Received constructive feedback from academic panel and industry experts',
                'Networked with researchers and professionals in computing technology',
                'Demonstrated practical implementation of advanced computing concepts',
                'Participated in technical workshops and knowledge sharing sessions'
            ],
            tech: ['Research Presentation', 'Academic Paper', 'Technical Workshop', 'Networking'],
            outcomes: 'The conference provided valuable insights into emerging computing trends and opened opportunities for collaboration with technology institutions interested in implementing advanced computing solutions.',
            certificate: 'assets/conference.pdf'
        },
        'project-disha': {
            title: 'Project Disha - Career Guidance Program',
            date: '2023',
            description: 'Participated in comprehensive career guidance and professional development program focused on IT industry readiness, skill assessment, and career path planning.',
            details: [
                'Completed career assessment and counseling sessions',
                'Participated in technical skill development workshops',
                'Attended industry interaction and networking events',
                'Completed professional communication and soft skills training',
                'Developed personalized career development plan',
                'Gained industry insights from experienced professionals'
            ],
            tech: ['Career Counseling', 'Skill Assessment', 'Professional Development', 'Industry Networking'],
            outcomes: 'Project Disha provided valuable insights into IT career paths and helped develop essential professional skills needed for success in the technology industry.',
            certificate: 'assets/project-disha.pdf'
        },
        'cyber-threat': {
            title: 'Cyber Threat Analysis Certification',
            date: '2023',
            description: 'Completed intensive training in cybersecurity threat assessment, vulnerability analysis, security protocols, and risk mitigation strategies.',
            details: [
                'Mastered threat identification and classification techniques',
                'Learned vulnerability assessment and penetration testing methodologies',
                'Developed security incident response planning skills',
                'Implemented risk mitigation and security enhancement strategies',
                'Practiced security tools and monitoring techniques',
                'Understood cybersecurity frameworks and compliance requirements'
            ],
            tech: ['Threat Analysis', 'Vulnerability Assessment', 'Security Protocols', 'Risk Mitigation', 'Incident Response'],
            outcomes: 'This certification provided comprehensive knowledge in cybersecurity threat analysis, enabling the ability to identify and mitigate security risks in various systems and networks.',
            certificate: 'assets/cyber-threat.pdf'
        },
        'ethical-hacking': {
            title: 'Ethical Hacking Certification',
            date: '2023',
            description: 'Advanced training in ethical hacking methodologies, penetration testing, network security assessment, and security vulnerability identification.',
            details: [
                'Learned penetration testing methodologies and frameworks',
                'Practiced network security assessment techniques',
                'Mastered web application security testing approaches',
                'Gained expertise in various security tools and techniques',
                'Understood legal and ethical aspects of security testing',
                'Performed vulnerability assessment and remediation'
            ],
            tech: ['Penetration Testing', 'Network Security', 'Web Application Security', 'Security Tools', 'Vulnerability Assessment'],
            outcomes: 'The ethical hacking certification equipped with practical skills to identify security vulnerabilities and strengthen system defenses through authorized testing methodologies.',
            certificate: 'assets/ethical-hacking.pdf'
        },
        'data-science': {
            title: 'Data Science Internship',
            date: '2025',
            description: 'Successfully completed data science internship at Infopark, Koratty focusing on real-world business problems, predictive modeling, and data-driven decision making.',
            details: [
                'Developed predictive models using Python and machine learning algorithms',
                'Cleaned and processed large datasets using SQL and data preprocessing techniques',
                'Created interactive dashboards and visualizations in Tableau/Power BI',
                'Applied NLP for customer sentiment analysis and text mining',
                'Collaborated on marketing optimization and business intelligence projects',
                'Implemented data pipelines and ETL processes'
            ],
            tech: ['Python', 'SQL', 'Tableau', 'Machine Learning', 'NLP', 'Data Visualization'],
            outcomes: 'The internship provided hands-on experience in solving real business problems using data science, enhancing practical skills in data analysis, visualization, and machine learning implementation.'
        },
        'personal-tutor': {
            title: 'Personal Tutor & Mentor',
            date: '2022 - Present',
            description: 'Provided individualized academic mentoring and personalized educational guidance to students, helping them achieve academic excellence through customized learning approaches.',
            details: [
                'Provided personalized academic mentoring for 15+ students across various subjects',
                'Improved student academic performance by an average of 40% through targeted instruction',
                'Developed customized learning materials and adaptive study plans',
                'Conducted regular progress assessments and feedback sessions',
                'Specialized in mathematics, computer science, and English language tutoring',
                'Implemented innovative teaching methodologies for better student engagement',
                'Maintained 95% student satisfaction rate through quality instruction'
            ],
            tech: ['Academic Mentoring', 'Personalized Learning', 'Progress Assessment', 'Teaching Methodologies', 'Curriculum Development'],
            outcomes: 'As a personal tutor, helped numerous students achieve their academic goals while developing strong communication, teaching, and mentoring skills that complement technical expertise.'
        }
    };

    const work = worksData[certType];
    if (work) {
        const modalBody = document.getElementById('modal-body');

        // Certificate section - ONLY OPEN IN NEW TAB, NO DOWNLOAD
        const certificateSection = work.certificate ? `
            <div class="certificate-section">
                <h3>Certificate</h3>
                <div class="certificate-preview">
                    <div class="pdf-embed-container">
                        <embed src="${work.certificate}#toolbar=0&navpanes=0&scrollbar=0" 
                               type="application/pdf" 
                               class="pdf-embed">
                    </div>
                    <div class="certificate-actions">
                        <a href="${work.certificate}" target="_blank" class="certificate-link">
                            <i class="fas fa-external-link-alt"></i>
                            View Full Certificate
                        </a>
                    </div>
                </div>
            </div>
        ` : '';

        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${work.title}</h2>
                <p class="modal-date">${work.date}</p>
            </div>
            <div class="modal-body">
                <div class="works-description">
                    <p>${work.description}</p>
                </div>
                
                <div class="works-details">
                    <h3>Key Activities & Responsibilities</h3>
                    <ul>
                        ${work.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="works-tech">
                    ${work.tech.map(tech => `<span class="works-tech-tag">${tech}</span>`).join('')}
                </div>
                
                <div class="works-outcomes">
                    <h4>Outcomes & Impact</h4>
                    <p>${work.outcomes}</p>
                </div>
                
                ${certificateSection}
            </div>
        `;

        modal.style.display = 'block';
        modal.querySelector('.modal-content').scrollTop = 0;
    }
}
// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (name && email && subject && message) {
            try {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;

                // For now, we'll use a simple success message
                // In production, integrate with EmailJS or backend service
                setTimeout(() => {
                    showNotification('Thank you for your message! I will get back to you soon.', 'success');
                    contactForm.reset();

                    // Reset button state
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 1000);

            } catch (error) {
                console.error('Error sending message:', error);
                showNotification('Sorry, there was an error sending your message. Please try again or email me directly.', 'error');

                // Reset button state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        } else {
            showNotification('Please fill in all fields.', 'error');
        }
    });
}

// Notification function
function showNotification(message, type) {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(notification => {
        notification.remove();
    });

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;

    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .bounce-in').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.animationPlayState = 'paused';
    fadeInObserver.observe(element);
});

// Add CSS for modal slide out
const style = document.createElement('style');
style.textContent = `
    @keyframes modalSlideOut {
        from {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        to {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
        }
    }
`;
document.head.appendChild(style);

// Initialize all animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
});

