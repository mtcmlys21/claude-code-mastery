/**
 * 개발자 웹 이력서 메인 스크립트
 * 네비게이션, 다크모드, 인터랙션 기능을 담당합니다.
 */

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initDarkMode();
    initMobileMenu();
    initSmoothScroll();
});

/**
 * 네비게이션 스크롤 감지
 * 스크롤 위치에 따라 네비게이션 메뉴 활성화 상태 업데이트
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('text-blue-600');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('text-blue-600');
            }
        });
    });
}

/**
 * 다크모드 토글 기능
 * localStorage에 사용자 선호도 저장
 */
function initDarkMode() {
    // 저장된 설정 또는 시스템 설정 확인
    const isDarkMode = localStorage.getItem('darkMode') === 'true' ||
        (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
    }
}

/**
 * 모바일 메뉴 토글
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('nav > div > div:last-child');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // 모바일 메뉴 토글 로직
            navMenu?.classList.toggle('hidden');
        });
    }
}

/**
 * 부드러운 스크롤 이동
 * CSS scroll-behavior로 처리되지만, 추가 처리 필요 시 활용
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // 네비게이션 링크만 처리
            if (href !== '#') {
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

/**
 * 유틸리티: 요소가 뷰포트에 보이는지 확인
 * 스크롤 애니메이션에 활용 가능
 */
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * 유틸리티: 지정된 시간 후에 콜백 함수 실행
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}
