gsap.to("#rect1", {
    top: "0%",
    duration: 1.5,
    delay: 0.3, ease: "power4.in"
})
gsap.to("#rect2", {
    top: "0%",
    duration: 1.5, ease: "power4.in"
})
gsap.to("#rect1", {
    height: 0,
    delay: 1.7,
    duration: 1.5, ease: "power4.out"
})
gsap.to("#rect2", {
    height: 0,
    delay: 1.4,
    duration: 1.5, ease: "power4.out"
})
// iske niche wala bhaiya ne nahi padhaya hai ye youtube ka hai
gsap.from("#center",{
    onstart:function(){
        $('#center').textillate({ in: {
             effect: 'bounce',
             delayScale:4,
            callback:function(){
                $('#center').textillate('out')
            }
        },
        out: { effect: 'hinge' } 
    });
    }
})