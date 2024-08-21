export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        show: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                type:'tween',
                duration: 0.5,
                delay: delay,
                ease:[0.25,0.25,0.25,0.75]
            },
        },
    };
}
