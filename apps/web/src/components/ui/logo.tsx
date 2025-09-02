export function Logo({ size }: { size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' }) {
  const sizes = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl lg:text-4xl',
    lg: 'text-4xl xl:text-5xl',
    xl: 'text-5xl 2xl:text-6xl',
    '2xl': 'text-6xl 3xl:text-7xl',
    '3xl': 'text-7xl 4xl:text-8xl',
    '4xl': 'text-8xl 5xl:text-9xl',
  };
  return <span className={`font-logo ${sizes[size]}`}>Your logo</span>;
}
