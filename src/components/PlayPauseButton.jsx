import { useDispatch } from "react-redux";
import { playPause } from './../redux/actions';

export function PlayPauseButton() {
    const dispatch = useDispatch();
    return (
        <button className="button" onClick={() => { playPause(dispatch); }}>
            Pause / Reprendre
        </button>
    );
}
