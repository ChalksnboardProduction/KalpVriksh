export default function EnquireButton({ className = '' }) {
  return (
    <button 
      className={`text-white font-semibold flex-shrink-0 ${className}`}
      style={{
        backgroundColor: '#FFB606',
        width: '122px',
        height: '44px',
        borderRadius: '29px',
        paddingTop: '10px',
        paddingRight: '30px',
        paddingBottom: '10px',
        paddingLeft: '30px',
        gap: '10px',
        transition: 'all 300ms ease-out',
      }}
    >
      Enquire
    </button>
  )
}

