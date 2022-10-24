import { useNProgress } from '@tanem/react-nprogress';
import clsx from 'clsx';
import { FC } from 'react';

export const RouteLoadingBar: FC<{ isRouteChanging: boolean }> = ({
    isRouteChanging,
}) => {
    const { animationDuration, isFinished, progress } = useNProgress({
        isAnimating: isRouteChanging,
    });

    return (
        <div
            className={clsx('pointer-events-none transition ease-linear', {
                'opacity-0': isFinished,
                'opacity-100': !isFinished,
            })}
            style={{
                transitionDuration: `${animationDuration}ms`,
            }}>
            <div
                className='fixed left-0 top-0 z-50 h-[2px] w-full bg-indigo-600 transition-all ease-linear'
                style={{
                    transitionDuration: `${animationDuration}ms`,
                    marginLeft: `${(-1 + progress) * 100}%`,
                }}>
                <div className='absolute right-0 block h-full w-full -translate-y-[4px] rotate-3 opacity-100 shadow-md' />
            </div>
        </div>
    );
};
