import {cn} from "../../lib/utils";

const AnimatedShinyText = ({
  children,
  className,
  shimmerWidth = 500,
}) => {
  return (
    (<p
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`
        }
      }
      className={cn(
        "mx-auto max-w-md text-neutral-900/50 dark:text-neutral-200/45",
        // Shimmer effect
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        // Shimmer gradient
        "bg-gradient-to-r from-transparent via-yellow-500 via-50% to-transparent  dark:via-white/80",
        className
      )}>
      {children}
    </p>)
  );
};

export default AnimatedShinyText;
