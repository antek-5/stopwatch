

const FormattedTime = ({ time }) => {

    const formatTime = time => {

        console.log('time', time);
    
        var milliseconds = Math.floor((time % 1000)),
        seconds = Math.floor((time / 1000) % 60),
        minutes = Math.floor((time / (1000 * 60)) % 60),
        hours = Math.floor((time / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
   };

    return (
        <div className="timer-container">
            {formatTime(time)}
        </div>
    );

};

export default FormattedTime;