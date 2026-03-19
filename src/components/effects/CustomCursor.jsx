import { useCursor } from '../../hooks/useCursor';

const CustomCursor = () => {
  const { cursorRef, cursorDotRef, isHovering, isClicking, cursorText } = useCursor();

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
        style={{
          width: isHovering ? 56 : 40,
          height: isHovering ? 56 : 40,
          border: `1.5px solid ${isHovering ? 'rgba(242,104,24,0.9)' : 'rgba(242,104,24,0.6)'}`,
          borderRadius: '50%',
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background 0.3s ease',
          background: isHovering ? 'rgba(242,104,24,0.08)' : 'transparent',
          transform: isClicking ? 'scale(0.85)' : 'scale(1)',
          backdropFilter: isHovering ? 'blur(1px)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mixBlendMode: 'normal',
        }}
      >
        {cursorText && (
          <span style={{
            fontSize: '8px',
            fontFamily: 'Orbitron, sans-serif',
            color: '#F26818',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
            {cursorText}
          </span>
        )}
      </div>

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: isHovering ? '#FF8A3D' : '#F26818',
          transform: isClicking ? 'scale(0.5)' : 'scale(1)',
          transition: 'background 0.2s ease, transform 0.1s ease',
          boxShadow: `0 0 ${isHovering ? 12 : 6}px ${isHovering ? '#FF8A3D' : '#F26818'}`,
        }}
      />
    </>
  );
};

export default CustomCursor;
