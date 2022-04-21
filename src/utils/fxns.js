const find = selector => document.querySelector(selector);

const isVisible = el => {
    const deviceHeight = window.innerHeight || 0;
    return deviceHeight  - el.getBoundingClientRect().top > deviceHeight/2.5
}

const scrollHandler = () => {
    try{
        const sec1 = find('section.section-1');
        const vid3 = find('section.section-3 video');
        const sec4 = find('section.section-4');
        const header = find('header');

        if(window.scrollY >= sec1.clientHeight)
            header.classList.add('shadow');
        else
            header.classList.remove('shadow');

        if(isVisible(sec4))
            sec4.classList.add('visible');

        if(isVisible(vid3))
            vid3.play().catch(()=>{});
        else 
            vid3.pause();
    }catch(e){}
}

export const monitorScroll = () => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler)
}