export default function Progress() {
    return (
        <div className="progress mt-3 mb-4">
            <div 
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar" 
                aria-label="Animated striped example" 
                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
            </div>
        </div>
    )
}