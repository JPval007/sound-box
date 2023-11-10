import ButtonMatrix from "./ButtonMatrix";

function DrumMachine() {

    return (
        <>
            <div className="card text-center" id="display">
                <div className="card-header">
                    <h5 className="card-title">Drum Machine</h5>
                </div>
                <div className="card-body">
                    {/* This is the button matrix */}
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col">
                            <ButtonMatrix />
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
                <div className="card-footer text-body-secondary">
                    By Blitz
                </div>
            </div>
        </>
    );
}

export default DrumMachine;