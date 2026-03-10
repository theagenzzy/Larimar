export default function Card({ children, className = '', style = {}, ...props }) {
  return (
    <div
      className={className}
      style={{
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        background: 'var(--color-white)',
        boxShadow: 'var(--shadow-md)',
        transition: 'all var(--transition-normal)',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
