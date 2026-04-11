document.addEventListener('DOMContentLoaded', () => {

    // ─── State ────────────────────────────────────────────────────────────────
    let currentSearch = '';

    // ─── DOM refs ─────────────────────────────────────────────────────────────
    const productItems = document.querySelectorAll('.product-item');
    const searchInput  = document.getElementById('productSearch');
    const resultsText  = document.getElementById('resultsCount');
    const btnGrid      = document.getElementById('btnGrid');
    const btnList      = document.getElementById('btnList');
    const productsGrid = document.getElementById('productsGrid');
    const filterPills  = document.querySelectorAll('.filter-pill');

    let currentFilter  = 'all';

    // ─── Core filter ──────────────────────────────────────────────────────────
    function filterProducts() {
        let visible = 0;

        productItems.forEach(item => {
            const name = (item.getAttribute('data-name') || '').toLowerCase();
            const category = item.getAttribute('data-category') || '';
            const subcategory = item.getAttribute('data-subcategory') || '';
            
            const matchesSearch = name.includes(currentSearch);
            let matchesFilter = (currentFilter === 'all' || category === currentFilter || subcategory === currentFilter);

            const show = matchesSearch && matchesFilter;
            
            item.style.display = show ? '' : 'none';
            if (show) {
                setTimeout(() => item.classList.add('visible'), 50);
                visible++;
            } else {
                item.classList.remove('visible');
            }
        });

        // Sync section headers if they exist
        const sectionHeaders = document.querySelectorAll('.section-header-row');
        sectionHeaders.forEach(header => {
            const headerCat = header.getAttribute('data-category') || '';
            const hasVisibleProducts = Array.from(productItems).some(item => {
                return item.style.display !== 'none' && 
                       (item.getAttribute('data-category') === headerCat || item.getAttribute('data-subcategory') === headerCat);
            });
            header.style.display = (currentFilter === 'all' && hasVisibleProducts) || (currentFilter === headerCat && hasVisibleProducts) ? 'block' : 'none';
        });

        // Results count
        if (resultsText) {
            resultsText.textContent = `Showing ${visible} products`;
        }
    }

    // ─── Search ───────────────────────────────────────────────────────────────
    if (searchInput) {
        searchInput.addEventListener('input', e => {
            currentSearch = e.target.value.toLowerCase().trim();
            filterProducts();
        });
    }

    // ─── Filter Pills ───────────────────────────────────────────────────────
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            // Update active state
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            // Set filter
            currentFilter = pill.getAttribute('data-filter');
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

    // ─── Boot ─────────────────────────────────────────────────────────────────
    filterProducts();
});
