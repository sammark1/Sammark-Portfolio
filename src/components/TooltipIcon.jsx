import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

function TooltipIcon(props){
    return(
        <OverlayTrigger
            delay={{ hide: 450, show: 300 }}
            overlay={(props1) => (
                <Tooltip {...props1}>
                    {props.tooltip}
                </Tooltip>
            )}
            placement="bottom"
        >
        
        <i class={props.isrc +" "+props.classPass}></i>
        </OverlayTrigger>
    )
}

export default TooltipIcon;