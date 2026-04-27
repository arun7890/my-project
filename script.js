document.addEventListener('DOMContentLoaded', () => {

    // ─── State ────────────────────────────────────────────────────────────────
    let currentSearch = '';
    let currentFilter  = 'all';
    let currentSubFilter = 'all';

    const subcatMap = {
        'washroom': [
            { id: 'toilet', label: 'Toilet Cleaning' },
            { id: 'urinal', label: 'Urinal Care' },
            { id: 'airfreshener', label: 'Air Freshners' }
        ],
        'pantry': [
            { id: 'vessel', label: 'Vessel Cleaners' },
            { id: 'tissue', label: 'Tissue Products' }
        ],
        'scent': [
            { id: 'scent-machines', label: 'Scent Machines' }
        ],
        'floor': [
            { id: 'floor-tools', label: 'Floor Cleaning' },
            { id: 'liquid-cleaners', label: 'General Care' },
            { id: 'waste', label: 'Waste Management' }
        ]
    };

    // ─── DOM refs ─────────────────────────────────────────────────────────────
    const productItems = document.querySelectorAll('.product-item');
    const searchInput  = document.getElementById('productSearch');
    const resultsText  = document.getElementById('resultsCount');
    const btnGrid      = document.getElementById('btnGrid');
    const btnList      = document.getElementById('btnList');
    const productsGrid = document.getElementById('productsGrid');
    const filterPills  = document.querySelectorAll('#subCategoryContainer .sub-nav-pill');
    const secondarySubNav = document.getElementById('secondarySubNav');

    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const navbarCenter = document.getElementById('navbarCenter');

    const toggleMobileMenu = (isOpen) => {
        if (navbarCenter) navbarCenter.classList.toggle('active', isOpen);
        if (mobileNavOverlay) mobileNavOverlay.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    };

    if (mobileNavToggle) mobileNavToggle.addEventListener('click', () => toggleMobileMenu(true));
    if (mobileNavClose) mobileNavClose.addEventListener('click', () => toggleMobileMenu(false));
    if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', () => toggleMobileMenu(false));

    if (navbarCenter) {
        const navLinks = navbarCenter.querySelectorAll('.nav-item:not(.has-dropdown)');
        navLinks.forEach(link => {
            link.addEventListener('click', () => toggleMobileMenu(false));
        });

        const dropdowns = navbarCenter.querySelectorAll('.nav-item.has-dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', (e) => {
                // Prevent click from propagating if they click a link inside
                if(e.target.tagName.toLowerCase() === 'a') return;
                dropdown.classList.toggle('active');
            });
        });
    }

    // ─── Magnetic Button Effect ───────────────────────────────────────────────
    const magneticButtons = document.querySelectorAll('.btn-magnetic');
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const position = btn.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2 - window.scrollY;

            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            btn.style.transition = 'none';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    // ─── Core filter ──────────────────────────────────────────────────────────
    function filterProducts() {
        let visible = 0;

        productItems.forEach(item => {
            const name = (item.getAttribute('data-name') || '').toLowerCase();
            const category = item.getAttribute('data-category') || '';
            const subcategory = item.getAttribute('data-subcategory') || '';
            
            const matchesSearch = name.includes(currentSearch);
            // Main filter can match either Category or Subcategory
            let matchesMain = (currentFilter === 'all' || category === currentFilter || subcategory === currentFilter);
            // Sub-filter only matches Subcategory (used in All Products heirarchy)
            let matchesSub = (currentSubFilter === 'all' || subcategory === currentSubFilter);

            const show = matchesSearch && matchesMain && matchesSub;
            
            item.style.display = show ? '' : 'none';
            if (show) {
                setTimeout(() => item.classList.add('visible'), 50);
                visible++;
            } else {
                item.classList.remove('visible');
            }
        });

        // Results count
        if (resultsText) {
            let filterName = 'all products';
            const activeSubPill = document.querySelector('.secondary-pills .sub-nav-pill.active');
            const activeMainPill = document.querySelector('#subCategoryContainer .sub-nav-pill.active');
            
            if (currentSubFilter !== 'all' && activeSubPill) {
                filterName = activeSubPill.textContent;
            } else if (currentFilter !== 'all' && activeMainPill) {
                filterName = activeMainPill.textContent;
            }
            resultsText.textContent = `Showing ${visible} ${filterName}`;
        }
    }

    // ─── Secondary Nav Creation ────────────────────────────────────────────────
    function updateSecondaryNav(category) {
        if (!secondarySubNav) return;

        secondarySubNav.innerHTML = '';
        if (category === 'all' || !subcatMap[category]) {
            secondarySubNav.style.display = 'none';
            return;
        }

        secondarySubNav.style.display = 'flex';
        
        // Add "All [Category]" button
        const allBtn = document.createElement('button');
        allBtn.className = 'sub-nav-pill active';
        allBtn.setAttribute('data-filter', 'all');
        const catLabel = category.charAt(0).toUpperCase() + category.slice(1);
        allBtn.textContent = 'All ' + (catLabel === 'Floor' ? 'Floor & General' : catLabel);
        secondarySubNav.appendChild(allBtn);

        subcatMap[category].forEach(sub => {
            const btn = document.createElement('button');
            btn.className = 'sub-nav-pill';
            btn.setAttribute('data-filter', sub.id);
            btn.textContent = sub.label;
            secondarySubNav.appendChild(btn);
        });

        // Add listeners to new pills
        secondarySubNav.querySelectorAll('.sub-nav-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                secondarySubNav.querySelectorAll('.sub-nav-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                currentSubFilter = pill.getAttribute('data-filter');
                filterProducts();
            });
        });
    }

    // ─── Main Category Pills ───────────────────────────────────────────────────
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            currentFilter = pill.getAttribute('data-filter');
            currentSubFilter = 'all'; 
            
            updateSecondaryNav(currentFilter);
            filterProducts();
        });
    });


    // ─── View toggle (grid / list) ────────────────────────────────────────────
    if (btnGrid && btnList && productsGrid) {
        btnGrid.addEventListener('click', () => {
            btnGrid.classList.add('active');
            btnList.classList.remove('active');
            productsGrid.classList.remove('list-view');
        });
        btnList.addEventListener('click', () => {
            btnList.classList.add('active');
            btnGrid.classList.remove('active');
            productsGrid.classList.add('list-view');
        });
    }

    // ─── Learn More Button Redirects ─────────────────────────────────────────
    const quoteBtns = document.querySelectorAll('.btn-quote');
    quoteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productItem = btn.closest('.product-item');
            if (productItem) {
                const name = productItem.getAttribute('data-name');
                if (name) {
                    // Redirect to detail page with product name as query param
                    window.location.href = `product-detail.html?name=${encodeURIComponent(name)}`;
                }
            }
        });
    });

    // ─── Intersection Observer (fade-in) ──────────────────────────────────────
    const fadeEls = document.querySelectorAll('.fade-in-up');
    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries, ob) => {
            entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('visible'); ob.unobserve(e.target); }
            });
        }, { threshold: 0.12 });
        fadeEls.forEach(el => obs.observe(el));
    } else {
        fadeEls.forEach(el => el.classList.add('visible'));
    }

    // Initial in-viewport trigger
    setTimeout(() => {
        fadeEls.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible');
        });
    }, 100);

    // ─── Search input ─────────────────────────────────────────────────────────
    if (searchInput) {
        searchInput.addEventListener('input', e => {
            currentSearch = e.target.value.toLowerCase().trim();
            filterProducts();
        });
    }

    // ─── Mobile Bottom Nav Drawer Logic ──────────────────────────────────────
    const bottomNavCategory = document.getElementById('bottomNavCategory');
    const bottomNavMore = document.getElementById('bottomNavMore');
    
    const categoryDrawer = document.getElementById('categoryDrawer');
    const categoryOverlay = document.getElementById('categoryOverlay');
    const categoryClose = document.getElementById('categoryClose');
    
    const moreDrawer = document.getElementById('moreDrawer');
    const moreOverlay = document.getElementById('moreOverlay');
    const moreClose = document.getElementById('moreClose');

    if (bottomNavCategory && categoryDrawer && categoryOverlay) {
        const openCategory = () => {
            categoryOverlay.classList.add('active');
            categoryDrawer.classList.add('active');
            document.body.style.overflow = 'hidden';
        };
        const closeCategory = () => {
            categoryOverlay.classList.remove('active');
            categoryDrawer.classList.remove('active');
            document.body.style.overflow = '';
        };
        bottomNavCategory.addEventListener('click', openCategory);
        if (categoryClose) categoryClose.addEventListener('click', closeCategory);
        if (categoryOverlay) categoryOverlay.addEventListener('click', closeCategory);
    }

    if (bottomNavMore && moreDrawer && moreOverlay) {
        const openMore = () => {
            moreOverlay.classList.add('active');
            moreDrawer.classList.add('active');
            document.body.style.overflow = 'hidden';
        };
        const closeMore = () => {
            moreOverlay.classList.remove('active');
            moreDrawer.classList.remove('active');
            document.body.style.overflow = '';
        };
        bottomNavMore.addEventListener('click', openMore);
        if (moreClose) moreClose.addEventListener('click', closeMore);
        if (moreOverlay) moreOverlay.addEventListener('click', closeMore);
    }

    // Active state based on current URL
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop() || 'index.html';
    const navItems = {
        'index.html': 'navHome',
        'allproducts.html': 'bottomNavCategory',
        'washroom-care.html': 'bottomNavCategory',
        'pantry-care.html': 'bottomNavCategory',
        'floorgeneral.html': 'bottomNavCategory',
        'scent-machines.html': 'bottomNavCategory'
    };
    const activeId = navItems[fileName];
    if (activeId) {
        const element = document.getElementById(activeId);
        if (element) element.classList.add('active');
    }

    // ─── Boot ─────────────────────────────────────────────────────────────────
    filterProducts();
});

// --- FINAL CLEAN CATEGORY ACCORDION LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category-item');
    categories.forEach(item => {
        const header = item.querySelector('.category-header');
        if (!header) return;
        
        header.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const wasActive = item.classList.contains('active');
            
            // Close all
            categories.forEach(c => c.classList.remove('active'));
            
            // Toggle current
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });
});
