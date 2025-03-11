import { cn } from '@/lib/utils';
import PropTypes from 'prop-types';

export function AnimatedGradientText({
    children,
    className,
    speed = 1,
    colorFrom = '#ffaa40',
    colorTo = '#9c40ff',
    ...props
}) {
    return (
        <span
            style={{
                '--bg-size': `${speed * 300}%`,
                '--color-from': colorFrom,
                '--color-to': colorTo,
                '--animation-duration': `${speed + 5}s`,
            }}
            className={cn(
                'inline animate-gradient bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent',
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}

AnimatedGradientText.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    speed: PropTypes.number,
    colorFrom: PropTypes.string,
    colorTo: PropTypes.string,
};
