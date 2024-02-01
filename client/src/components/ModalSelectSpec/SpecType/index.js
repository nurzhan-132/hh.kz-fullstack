import { useEffect, useState } from "react"
import Spec from "./Spec"

export default function SpecType({specType, onChange, value}) {
    const [active, setActive] = useState(false)
    useEffect(() => {
        specType.specializations.map(spec => spec.id === value ? setActive(true) : null)
    }, [])
    return(
        <div>
            <div className={`collapse${active?" active":""}`} onClick={() => setActive(!active)}>
                <img src="/images/arrow-right-icon.svg" alt=">" />
                { specType.name }
            </div>
            {active && specType.specializations.map((spec, index) => <Spec key={index} spec={spec} onChange={onChange} value={value}/>)}
        </div>
    )
}