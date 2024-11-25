import React from 'react';

interface HighlightsCardProps {
  highlights: { day: string; videoUrl: string; thumbnail: string }[];
  currentIndex: number;
  onArrowClick: (direction: 'left' | 'right') => void;
}

const HighlightsCard: React.FC<HighlightsCardProps> = ({ highlights, currentIndex, onArrowClick }) => {
  return (
    <div style={styles.card}>
      <h2>Test 1 Highlights</h2>
      
      {/* Slider Section */}
      <div style={styles.sliderContainer}>
        <div
          style={styles.testDayThumbnail}
          onClick={() => window.open(highlights[currentIndex].videoUrl, '_blank')}
        >
          <img
            src={highlights[currentIndex].thumbnail}
            alt={`${highlights[currentIndex].day} Highlights`}
            style={styles.thumbnail}
          />
          <p>{highlights[currentIndex].day}</p>
          <a
            href={highlights[currentIndex].videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.watchButton}
          >
            Watch Now
          </a>
        </div>
      </div>

      <div style={styles.arrowContainer}>
        <button style={styles.arrowButton} onClick={() => onArrowClick('left')}>
          ←
        </button>
        <button style={styles.arrowButton} onClick={() => onArrowClick('right')}>
          →
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '90%',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    position: 'relative',
    background: 'linear-gradient(to right,  #8BC6EC, #9599E2)', 
  },
  sliderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflowX: 'hidden',
    width: '100%',
    paddingBottom: '20px',
  },
  testDayThumbnail: {
    flexShrink: 0,
    textAlign: 'center',
    margin: '0 10px',
    cursor: 'pointer',
    width: '250px',
  },
  thumbnail: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  watchButton: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '10px 15px',
    backgroundColor: '#000000',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
  },
  arrowContainer: {
    position: 'absolute',
    top: '50%',
    left: '10px',
    right: '10px',
    width: 'calc(100% - 20px)',
    display: 'flex',
    justifyContent: 'space-between',
    transform: 'translateY(-50%)',
  },
  arrowButton: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    padding: '10px',
  },
};

export default HighlightsCard;