import PlayKey from "./PlayKey";

function ButtonMatrix() {


    return (
        <>
            <div className="row">
                <div className="col">
                    <PlayKey text="Q" source="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
                </div>
                <div className="col">
                    <PlayKey text="W" source="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
                </div>
                <div className="col">
                    <PlayKey text="E" source="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"/>
                </div>
            </div>

            <div className="row mt-3 mb-3">
                <div className="col">
                    <PlayKey text="A" source="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"/>
                </div>
                <div className="col">
                    <PlayKey text="S" source="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"/>
                </div>
                <div className="col">
                    <PlayKey text="D" source="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"/>
                </div>
            </div>

            <div className="row">
                <div className="col">                                                   
                    <PlayKey text="Z" source="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"/>
                </div>
                <div className="col">
                    <PlayKey text="X" source="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
                </div>
                <div className="col">
                    <PlayKey text="C" source="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"/>
                </div>
            </div>
        </>
    );
}

export default ButtonMatrix;