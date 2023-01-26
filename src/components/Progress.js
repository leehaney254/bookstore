import './Progress.css';

const Progress = () => (
  <div className="progress-container">
    <div className="circular-progress-container">
      <div className="circular-progress" />
    </div>
    <div className="progress-stat">
      <p className="percent-complete">64%</p>
      <p className="completed">Completed</p>
    </div>
    <div className="progress-divider" />
    <div className="current-chapter-container">
      <div>
        <p className="current-chapter-label">CURRENT CHAPTER</p>
        <p className="current-chapter">Chapter 7</p>
      </div>
      <div>
        <button className="primary-button" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  </div>
);

export default Progress;
