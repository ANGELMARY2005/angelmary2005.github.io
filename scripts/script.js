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
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

// ======================
// PROJECTS CAROUSEL - MANUAL ONLY
// ======================

let currentProjectIndex = 0;
const totalProjects = 6;
const cardWidth = 280; // Width of each card
const gap = 32; // Gap between cards (2rem = 32px)

function scrollProjects(direction) {
    const container = document.querySelector('.projects-scroll-container');

    // Update current index
    currentProjectIndex += direction;

    // Loop around if needed
    if (currentProjectIndex < 0) {
        currentProjectIndex = totalProjects - 1;
    } else if (currentProjectIndex >= totalProjects) {
        currentProjectIndex = 0;
    }

    // Calculate scroll position
    const scrollPosition = currentProjectIndex * (cardWidth + gap);

    // Smooth scroll to position
    container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
}

// Initialize scroll position
function initializeProjectsScroll() {
    const container = document.querySelector('.projects-scroll-container');
    container.scrollTo({
        left: 0,
        behavior: 'instant'
    });
}

// ======================
// PROJECT MODAL FUNCTION
// ======================

function showProjectDetails(projectId) {
    const projectsData = {
        'credit-card-fraud': {
            title: 'Credit Card Fraud Detection System',
            date: '2024',
            description: 'This advanced machine learning system is designed to detect fraudulent credit card transactions in real-time with exceptional accuracy. Using European cardholder transaction data, the system implements multiple sophisticated algorithms including Random Forest, Logistic Regression, and Gradient Boosting to identify suspicious patterns. It successfully handles the critical challenge of highly imbalanced data where only 0.172% of transactions are fraudulent. The implementation incorporates robust preprocessing techniques like RandomUnderSampler for class balancing and RobustScaler for feature scaling. With an impressive ROC-AUC score of 0.9980, this production-ready model demonstrates excellent discrimination power and comprehensive business impact analysis.',
            features: [
                'Achieved ROC-AUC Score: 0.9980 - Excellent discrimination power',
                'Handled highly imbalanced data (0.172% fraud cases) effectively',
                'Compared and implemented multiple ML algorithms including Random Forest and Gradient Boosting',
                'Implemented comprehensive preprocessing with RandomUnderSampler and RobustScaler',
                'Conducted thorough business impact analysis for production deployment',
                'Utilized 5-fold cross-validation for robust model evaluation'
            ],
            github: 'https://github.com/ANGELMARY2005/credit-card-fraud-detection'
        },
        'customer-behavior': {
            title: 'Customer Shopping Behavior Analysis',
            date: '2024',
            description: 'This comprehensive data analytics project simulates a complete industry-standard workflow for understanding retail customer behavior patterns. It represents a professional end-to-end solution covering data preparation, modeling, exploratory analysis, and strategic business intelligence generation. The project addresses critical business questions about customer engagement, sales optimization, and marketing strategy improvements across multiple channels. It incorporates Python for data cleaning and transformation, SQL for simulating business transactions and extracting insights, and Power BI for creating interactive dashboards. This project serves as an excellent portfolio piece demonstrating the ability to translate complex customer data into actionable business recommendations.',
            features: [
                'End-to-end analytics workflow: from data preparation to business recommendations',
                'Data preparation and modeling using Python with comprehensive cleaning techniques',
                'SQL-based analysis simulating real business transactions and customer segmentation',
                'Interactive Power BI dashboards for stakeholder visualization and decision-making',
                'Professional report and presentation materials for business stakeholders',
                'Focus on identifying trends in customer engagement and purchase drivers'
            ],
            github: 'https://github.com/ANGELMARY2005/customer_shopping_behaviour_analysis'
        },
        'doubt-resolution': {
            title: 'Automated Doubt Resolution System',
            date: 'Research 2025 - Present',
            description: 'This innovative AI-powered system revolutionizes academic support by providing accurate, timely resolution to student queries using advanced natural language processing techniques. Leveraging state-of-the-art models like BERT and distilledBERT, the system performs sophisticated semantic search and classification across educational materials including textbooks, lecture notes, and online forums. The implementation includes a continuous feedback loop where students can rate responses, enabling ongoing improvement of accuracy and relevance. The project represents a significant advancement from traditional tutoring systems by combining semantic retrieval with active learning mechanisms and generative model capabilities. This scalable, autonomous solution enhances student engagement and learning outcomes in virtual education environments through intelligent, context-aware assistance.',
            features: [
                'Advanced NLP implementation using BERT and distilledBERT models',
                'Semantic search and classification across diverse educational materials',
                'Continuous feedback loop for ongoing system improvement and accuracy enhancement',
                'Context-aware answer generation with intent recognition capabilities',
                'Scalable architecture suitable for both laptop prototypes and server deployment',
                'Evaluation against standard machine learning and information retrieval metrics'
            ],
            image: 'assets/output.png'
        },
        'puzzle-paradox': {
            title: 'Puzzle Paradox - Logic Master',
            date: 'Website Development - 2025',
            description: 'Logic Master is an engaging web-based puzzle game that challenges players with 100 unique logical puzzles across 10 progressively difficult levels, creating an immersive cognitive experience. The game features sophisticated mechanics including a health point system with 150 HP per level, strategic hint systems with varying costs, and an interactive letter-slot input interface. Players must carefully manage resources while solving increasingly complex puzzles that never repeat questions or answers throughout the entire game. The implementation includes an automatic progress saving system, sequential level unlocking, and comprehensive scoring mechanisms with +10 points per correct answer. This project demonstrates advanced game design principles combined with clean, intuitive user interface development.',
            features: [
                '100 unique puzzles across 10 progressively difficult levels with no repetition',
                'Sophisticated health point system (150 HP per level) with strategic resource management',
                'Interactive letter-slot input system alongside traditional input methods',
                'Comprehensive hint system with two hints per puzzle and varying HP costs',
                'Automatic progress saving and sequential level unlocking mechanisms',
                'Professional scoring system with penalties for wrong answers and strategic choices'
            ],
            website: 'https://angelmary2005.github.io/logic-master/'
        },
        'gesture-website': {
            title: 'GestureFlow - Hand Gesture Video Controller',
            date: 'Website Development - 2025',
            description: 'GestureFlow represents a revolutionary web application that enables completely touchless video control through intuitive hand gestures, eliminating the need for traditional input devices. The system implements sophisticated computer vision techniques to recognize 10 distinct hand gestures including thumbs up/down for scrolling, victory signs for zooming, and open palms for play/pause functionality. This innovative solution provides seamless media playback control, scrolling, and zooming capabilities through natural hand movements captured via webcam. The project demonstrates advanced real-time gesture recognition with high accuracy and minimal latency, creating an accessible and futuristic user interaction paradigm. This technology has significant applications in accessibility, presentation systems, and hands-free computing environments.',
            features: [
                '10 distinct hand gesture recognitions with high accuracy and real-time processing',
                'Complete media control functionality including play/pause, scrolling, and zooming',
                'Accessibility-focused design enabling touchless interaction for diverse users',
                'Webcam-based implementation requiring no specialized hardware or equipment',
                'Intuitive gesture mapping with immediate visual feedback and response',
                'Cross-browser compatibility with optimized performance across devices'
            ],
            website: 'https://angelmary2005.github.io/hand-gesture/'
        },
        'data-explorer': {
            title: 'Data Explorer - CSV Analyzer',
            date: 'Website Development - 2025',
            description: 'Data Explorer is a comprehensive web-based data analysis tool that provides intuitive exploration and visualization capabilities for CSV datasets through an elegant, user-friendly interface. The application features sophisticated data profiling with automatic column type detection, statistical summaries, and comprehensive missing value analysis to understand dataset characteristics. It offers multiple interactive visualization options including scatter plots for correlation analysis, line charts for trend identification, bar charts for categorical comparisons, and heatmaps for correlation matrices. The system incorporates advanced analytics features like outlier detection using IQR methods, correlation analysis, and automated data quality assessment. This project demonstrates professional-grade data analysis capabilities with an automated insights generator that provides natural language summaries without external API dependencies.',
            features: [
                'Comprehensive data profiling with automatic column type detection and statistical summaries',
                'Multiple interactive visualizations including scatter plots, line charts, and heatmaps',
                'Advanced analytics with outlier detection, correlation analysis, and data quality assessment',
                'Automated insights generator with natural language summaries and pattern recognition',
                'Drag-and-drop CSV upload with real-time validation and sample dataset inclusion',
                'Professional reporting capabilities with formatted analysis results for sharing'
            ],
            website: 'https://angelmary2005.github.io/csv-analyzer/'
        }
    };

    const project = projectsData[projectId];
    if (project) {
        const modalBody = document.getElementById('modal-body');

        // Create buttons based on project type
        let actionButton = '';
        if (project.github) {
            actionButton = `
                <div class="project-action">
                    <a href="${project.github}" target="_blank" class="btn btn-primary">
                        <i class="fab fa-github"></i> View on GitHub
                    </a>
                </div>
            `;
        } else if (project.website) {
            actionButton = `
                <div class="project-action">
                    <a href="${project.website}" target="_blank" class="btn btn-primary">
                        <i class="fas fa-external-link-alt"></i> Visit Website
                    </a>
                </div>
            `;
        }

        // Create image section if exists
        const imageSection = project.image ? `
            <div class="project-image-section">
                <img src="${project.image}" alt="${project.title}" class="project-modal-image">
            </div>
        ` : '';

        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${project.title}</h2>
                <p class="modal-date">${project.date}</p>
            </div>
            <div class="project-modal-body">
                <div class="project-description-section">
                    <h3>Project Description</h3>
                    <p>${project.description}</p>
                </div>
                
                <div class="project-features-section">
                    <h3>Key Features & Achievements</h3>
                    <ul class="features-list">
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                ${imageSection}
                
                ${actionButton}
            </div>
        `;

        modal.style.display = 'block';
        modal.querySelector('.modal-content').scrollTop = 0;
    }
}
// ======================
// CERTIFICATIONS MODAL
// ======================

function openCertPage(certType) {
    const worksData = {
        'conference': {
            title: 'ICAECT Conference',
            date: '2023',
            description: 'Attended the International Conference on Advances in Emerging Computing Technologies to expand my knowledge of cutting-edge computing innovations. Through this conference, I gained exposure to groundbreaking research in areas like distributed systems, cloud computing architectures, and AI optimization techniques. The sessions provided deep insights into how emerging technologies are shaping the future of computing. I learned about practical challenges researchers face and the innovative solutions being developed. This experience broadened my perspective on computing trends and their real-world applications.',
            details: [
                'Received constructive feedback from academic panel and industry experts',
                'Networked with researchers and professionals in computing technology',
                'Demonstrated practical implementation of advanced computing concepts',
                'Participated in technical workshops and knowledge sharing sessions'
            ],
            tech: ['Artificial Intelligence', 'Advanced concepts', 'Technical Workshop', 'Networking'],
            certificate: 'assets/conference.pdf'
        },
        'project-disha': {
            title: 'Project Disha - Social Work Internship',
            date: 'September 1, 2023 to February 29, 2024',
            description: 'Successfully completed a six-month social work internship with the National Service Scheme State Cell and Insight for Innovation as part of Project Disha. This internship was undertaken through Sacred Heart College, Thevara, where I served on the Teaching team. The program focused on community service, educational initiatives, and social innovation projects. I developed practical skills in project coordination, community engagement, and educational support activities. The experience enhanced my understanding of social work principles and their application in real-world community settings.',
            details: [
                'Served as part of the Teaching team throughout the six-month internship',
                'Participated in educational and community service initiatives',
                'Collaborated with National Service Scheme State Cell on social projects',
                'Worked with Insight for Innovation on community development programs',
                'Demonstrated dedication, hard work, and commitment to social causes',
                'Completed internship requirements from September 2023 to February 2024'
            ],
            tech: ['Community Service', 'Teaching', 'Social Work', 'Project Coordination', 'Educational Initiatives', 'NSS'],
            certificate: 'assets/project-disha.pdf'
        },
        'cyber-threat': {
            title: 'Cyber Threat Analysis and Defence - Value Added Program',
            date: 'March 4, 2024',
            description: 'Successfully completed a 30-hour Value-Added Program on Cyber Threat Analysis and Defence conducted by Techbyheart at Sacred Heart College (Autonomous), Thevara. This comprehensive program provided in-depth knowledge of cybersecurity threats, defense mechanisms, and analysis techniques. I gained practical insights into identifying various cyber threats, understanding attack vectors, and implementing effective defense strategies. The program enhanced my understanding of cybersecurity fundamentals and their application in real-world scenarios.',
            details: [
                'Completed 30 hours of intensive training on cyber threat analysis',
                'Learned various cyber threat identification and classification techniques',
                'Studied defense mechanisms and security protocols',
                'Understood different attack vectors and vulnerability assessment methods',
                'Gained practical knowledge of cybersecurity tools and techniques',
                'Participated in hands-on sessions conducted by Techbyheart experts'
            ],
            tech: ['Cyber Threat Analysis', 'Cybersecurity Defense', 'Threat Identification', 'Security Protocols', 'Vulnerability Assessment'],
            certificate: 'assets/cyber-threat.pdf'
        },
        'ethical-hacking': {
            title: 'Cyber Security and Ethical Hacking Workshop',
            date: 'July 26, 2023',
            description: 'Participated in the Workshop on Cyber Security and Ethical Hacking organized by the Department of Computer Science at Sacred Heart College (Autonomous), Thevara, in association with TechByHeart Pvt. India Ltd. This workshop provided foundational knowledge in cybersecurity principles and ethical hacking methodologies. I gained insights into security vulnerabilities, penetration testing basics, and ethical considerations in security testing. The session helped me understand the importance of cybersecurity in protecting digital assets and maintaining system integrity.',
            details: [
                'Participated in workshop organized by Department of Computer Science, Sacred Heart College',
                'Learned foundational concepts of cybersecurity and ethical hacking',
                'Understood various security vulnerabilities and attack vectors',
                'Gained knowledge of basic penetration testing methodologies',
                'Studied ethical considerations in security testing',
                'Received training in association with TechByHeart Pvt. India Ltd'
            ],
            tech: ['Cybersecurity Fundamentals', 'Ethical Hacking', 'Penetration Testing', 'Security Vulnerabilities', 'Workshop Participation'],
            certificate: 'assets/ethical-hacking.pdf'
        },
        'gen-ai-analytics': {
            title: 'GenAI Powered Data Analytics Job Simulation',
            date: 'December 12th, 2025',
            description: 'This job simulation focused on applying Generative AI to data analytics workflows. During December 2025, I completed practical tasks including exploratory data analysis and risk profiling, predicting delinquency with AI, creating business reports and data storytelling for collections strategy, and implementing AI-driven collections strategies. The simulation was issued by Forage.Successfully simulated real-world GenAI applications in data analytics, demonstrating how AI can enhance traditional analytics workflows.',
            details: [
                'Exploratory data analysis and risk profiling',
                'Predicting delinquency with AI models',
                'Business report and data storytelling for collections strategy',
                'Implementing an AI-driven collections strategy',
                'Practical application of GenAI in analytics workflows'
            ],
            tech: ['Generative AI', 'Data Analytics', 'Machine Learning', 'Predictive Modeling', 'Business Intelligence'],
            certificate: 'assets/GenAI Powered Data Analytics Job Simulation.pdf'
        },
        'data-visualization': {
            title: 'Data Visualisation: Empowering Business with Effective Insights',
            date: 'December 12th, 2025',
            description: 'Focused on practical data visualization techniques for business applications. Over the period of December 2025, I completed practical tasks including framing business scenarios, choosing the right visuals, creating effective visualizations, and communicating insights and analysis. The certification was issued by Forage and signed by Torn Brunskill, CEO and Co-Founder of Forage.Acquired practical skills in creating effective business visualizations that communicate insights clearly and drive data-informed decision making.',
            details: [
                'Framing the Business Scenario - Understanding business context for visualization',
                'Choosing the Right Visuals - Selecting appropriate chart types for different data',
                'Creating Effective Visuals - Implementing best practices in data visualization',
                'Communicating Insights and Analysis - Presenting findings effectively to stakeholders',
                'Practical application of visualization principles in business contexts'
            ],
            tech: ['Data Visualization', 'Business Intelligence', 'Dashboard Design', 'Analytics', 'Storytelling'],
            certificate: 'assets/Data Visualisation.pdf'
        },
        'azure-cognitive': {
            title: 'Build a computer vision app with Azure Cognitive Services',
            date: 'December 13, 2025',
            description: 'This project involved building a computer vision application using Microsoft Azure Cognitive Services. I successfully completed this online non-credit project authorized by Microsoft and offered through Coursera. The project was certified by Catalin Popa, Microsoft Azure MVP and Microsoft MCT.Developed practical skills in building computer vision applications using Microsoft Azure cloud services and AI capabilities.',
            details: [
                'Building computer vision applications with Azure services',
                'Implementing Azure Cognitive Services for image analysis',
                'Developing AI-powered applications in the cloud',
                'Integration of computer vision capabilities into applications',
                'Practical implementation of Azure AI services'
            ],
            tech: ['Azure Cognitive Services', 'Computer Vision', 'Cloud Computing', 'Microsoft Azure', 'AI Integration'],
            certificate: 'assets/Build a computer vision app with Azure Cognitive.pdf'
        },
        'ai-conference': {
            title: 'International Conference on Recent Trends in Artificial Intelligence',
            date: 'December 2025',
            description: 'Participated in and presented a research paper at the International Conference on Recent Trends in Artificial Intelligence organized by the Department of Computer Science at Bharata Mata College, Thrikkakara (Autonomous). I presented my research paper titled "Automated Doubt Resolution System for Students," which focuses on using AI to create an automated system for resolving student academic queries. The conference provided valuable opportunities to share research findings with academic and industry professionals, receive feedback on my work, and learn about the latest advancements in artificial intelligence from other presenters.',
            details: [
                'Presented research paper titled "Automated Doubt Resolution System for Students"',
                'Participated in the International Conference on Recent Trends in AI',
                'Received feedback from academic and industry professionals',
                'Engaged with other researchers and AI practitioners',
                'Learned about recent advancements in artificial intelligence',
                'Networked with professionals in the field of AI and computer science'
            ],
            tech: ['Artificial Intelligence', 'Research Presentation', 'Academic Paper', 'Conference Participation', 'AI Research'],
            certificate: 'assets/conf1.jpg',
            additionalCertificate: 'assets/conf2.jpg'
        },
        'wordpress-website': {
            title: 'Build a free website with WordPress',
            date: 'December 15, 2025',
            description: 'Completed an online non-credit project focused on building a free website using WordPress. This project was authorized by Coursera and offered through their platform. The certificate was issued with verification from Delphine Sangeichun, MPH Ph.D., Public Health specialist.Acquired practical skills in building and managing websites using WordPress, one of the most popular content management systems.',
            details: [
                'Building websites with WordPress CMS',
                'Website development and customization',
                'Content management system implementation',
                'Web design and development principles',
                'Practical website building skills'
            ],
            tech: ['WordPress', 'Web Development', 'CMS', 'Website Design', 'Content Management'],
            certificate: 'assets/Build a free website with WordPress.pdf'
        },
    };

    const work = worksData[certType];
    if (work) {
        const modalBody = document.getElementById('modal-body');

        // Certificate section
        // Certificate section - AI Conference shows images, others show PDF
        let certificateSection;
        if (certType === 'ai-conference') {
            certificateSection = `
        <div class="certificate-section">
            <h3>Certificates</h3>
            <div class="certificate-preview">
                <div class="certificates-row">
                    <div class="certificate-item">
                        <h4>Participation Certificate</h4>
                        <div class="certificate-image-container">
                            <img src="${work.certificate}" alt="Participation Certificate" class="certificate-image">
                        </div>
                        <div class="certificate-actions">
                            <a href="${work.certificate}" target="_blank" class="certificate-link">
                                <i class="fas fa-external-link-alt"></i>
                                View Full Image
                            </a>
                        </div>
                    </div>
                    <div class="certificate-item">
                        <h4>Paper Presentation Certificate</h4>
                        <div class="certificate-image-container">
                            <img src="${work.additionalCertificate}" alt="Paper Presentation Certificate" class="certificate-image">
                        </div>
                        <div class="certificate-actions">
                            <a href="${work.additionalCertificate}" target="_blank" class="certificate-link">
                                <i class="fas fa-external-link-alt"></i>
                                View Full Image
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
        } else if (work.certificate) {
            certificateSection = `
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
                    <a href="${work.certificate}" download class="certificate-link secondary">
                        <i class="fas fa-download"></i>
                        Download Certificate
                    </a>
                </div>
            </div>
        </div>
    `;
        }
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
                
             
                
                ${certificateSection}
            </div>
        `;

        modal.style.display = 'block';
        modal.querySelector('.modal-content').scrollTop = 0;
    }
}

// ======================
// CONTACT FORM
// ======================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        try {
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Get form data
            const formData = new FormData(contactForm);

            // Submit to Formspree using fetch
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Form submission failed');
            }

        } catch (error) {
            console.error('Error:', error);
            showNotification('Failed to send message. Please email me directly at angelmary3505@gmail.com', 'error');
        } finally {
            // Reset button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
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

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeProjectsScroll();
});
