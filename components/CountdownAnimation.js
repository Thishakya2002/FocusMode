import { useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { SettingsContext } from '../context/SettingsContext';

const CountdownAnimation = ({ key, timer, animate, children }) => {
    const { stopAimate } = useContext(SettingsContext);

    return (
        <CountdownCircleTimer
            key={key}
            isPlaying={animate}
            duration={timer * 60}
            colors={[
                ['#FE6F6B', 0.33],
                ['#FE6F6B', 0.33],
                ['#FE6F6B', 0.33],
            ]}
            strokeWidth={6}
            size={220}
            trailColor="#151932"
            onComplete={() => {
                stopAimate();
            }}
        >
            {children}
        </CountdownCircleTimer>
    );
};

// Add PropTypes validation
CountdownAnimation.propTypes = {
    key: PropTypes.string.isRequired,      // `key` is expected to be a string and required
    timer: PropTypes.number.isRequired,   // `timer` is expected to be a number and required
    animate: PropTypes.bool.isRequired,   // `animate` is expected to be a boolean and required
    children: PropTypes.node.isRequired,  // `children` can be any renderable node (JSX, string, etc.) and is required
};

export default CountdownAnimation;
