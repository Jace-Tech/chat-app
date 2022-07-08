import {createSignal} from 'solid-js'
import "./container.css"

const Container = ({ size, children, style }) => { 
    const [defaultSize, setDefaultSize] = createSignal(size || 'md')

    return (
        <div className={`container container-${defaultSize()}`} style={style && style}>
            { children }
        </div>
    )
}

export default Container