export default function EnquireButton({ className = '' }) {
  return (
    <button 
      className={`text-white font-semibold flex-shrink-0 text-sm sm:text-base ${className}`}
      style={{
        backgroundColor: '#FFB606',
        minWidth: '100px',
        width: 'auto',
        height: '44px',
        borderRadius: '29px',
        paddingTop: '10px',
        paddingRight: '24px',
        paddingBottom: '10px',
        paddingLeft: '24px',
        gap: '10px',
        transition: 'all 300ms ease-out',
      }}
    >
      Enquire
    </button>
  )
}

