import Link from 'next/link';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md',
  onClick,
  className = '',
  ...props 
}) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: '600',
    borderRadius: 'var(--radius-md)',
    transition: 'all var(--transition-normal)',
    cursor: 'pointer',
    textDecoration: 'none',
    border: '2px solid transparent',
    fontFamily: 'var(--font-body)',
    letterSpacing: '0.5px',
  };

  const sizeStyles = {
    sm: { padding: '8px 20px', fontSize: '0.85rem' },
    md: { padding: '12px 32px', fontSize: '0.95rem' },
    lg: { padding: '16px 40px', fontSize: '1.05rem' },
  };

  const variantStyles = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-white)',
      borderColor: 'var(--color-primary)',
    },
    gold: {
      background: 'var(--color-gold)',
      color: 'var(--color-white)',
      borderColor: 'var(--color-gold)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-white)',
      borderColor: 'var(--color-white)',
    },
    outlineDark: {
      background: 'transparent',
      color: 'var(--color-secondary)',
      borderColor: 'var(--color-secondary)',
    },
    secondary: {
      background: 'var(--color-secondary)',
      color: 'var(--color-white)',
      borderColor: 'var(--color-secondary)',
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  if (href) {
    return (
      <Link href={href} style={combinedStyles} className={className} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button style={combinedStyles} onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
}
