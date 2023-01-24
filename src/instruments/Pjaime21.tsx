// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List } from 'immutable';
import React from 'react';
import '../drumStyle.css'; 


// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Drum PAD.
 ** ------------------------------------------------------------------------ */

interface DrumKeyProps {
    note: string; 
    duration?: string;
    synth?: Tone.Synth; // Contains library code for making sound
    index: number; 
    pitchDecay: number;
}

const drumColors = ['#FF3131','#ba53c2', '#46C2FF', '#744caf', 'green', 'blue']
export function DrumPadKey({
    note,
    synth,
    index,
}: DrumKeyProps): JSX.Element {
   
 
    return (
      
        
        <div
        onMouseDown={() => synth?.triggerAttackRelease(`${note}`, '8n')}// does not keep playing when you hold note
            className={classNames('  pointer  relative  drumPad ')}
            style={{
                padding: 10,
                margin:20,
                display: "inline-block",
                backgroundColor: "#171717",
                borderRadius:10,
                borderColor: drumColors[index],               
                }}
                
        ></div >
    );
}
//oscillator 
function DrumPadType({ title, onClick, active }: any): JSX.Element {
    return (
        <div
            onClick={onClick}
            className={classNames(' dim pointer ph3 pv2 ba mr2 ml3 br1 fw7 bw1 drumPad_oscillator', {
                'black oscillatorClicked': active,
                'black ba': !active, //border
            
              })}
        >
            {title}
        </div>
    );
}

function DrumPad({ synth, setSynth }: InstrumentProps): JSX.Element {
    const keys = List([
        { note: 'A1', idx: 0 },
        { note: 'C2', idx: 1 },
        { note: 'D2', idx: 2 },
        { note: 'E2', idx: 3 },
        { note: 'F2', idx: 4 },
        { note: 'A2', idx: 5 },
        
    ]);

    const setOscillator = (newType: Tone.ToneOscillatorType) => {
        setSynth(oldSynth => {
            oldSynth.disconnect();
           // https://github.com/Tonejs/Tone.js/blob/c313bc6/Tone/instrument/MembraneSynth.ts#L9
            return new Tone.MembraneSynth({ //used for drums and kicks
                oscillator: { type: newType } as Tone.OmniOscillatorOptions,
                "volume": 7,
                
                "envelope": {
                    "attack": 0.001,
                    "attackCurve": "exponential",
                    "decay": 0.4,
                    "sustain": 0.01,
                    "release": 1.4,
                    
                },
               
                "octaves": 10,
                "pitchDecay": 0.0005,
            }).toDestination();
        });
    };


    const oscillators: List<OscillatorType> = List([
        'sine',
        'sine2',
        'triangle5',
        'triangle20',
        
        

    ]) as List<OscillatorType>;

    return (
        //change the height of the OscillatorType buttons
        <div className={classNames("pv4  background ")}>
            <div className="  h4.1 w-30 upper "> 
                {keys.map(key => {
                    const note = `${key.note}`;
                    return (
                        <DrumPadKey
                            key={note} 
                            note={note}
                            synth={synth}
                            index={key.idx}
                            pitchDecay={0.00005}
                        />
                    );
                },
                )}
            </div>
            <div className={'pl2 pt4 flex '}>
                {oscillators.map(o => (
                    <DrumPadType
                        key={o}
                        title={o}
                        onClick={() => setOscillator(o)}
                        active={synth?.oscillator.type === o}
                    />
                ))}
            </div>
        </div>
    );
}

export const DrumsInstrument = new Instrument('Drum Pad', DrumPad);