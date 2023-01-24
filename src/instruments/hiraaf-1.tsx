import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';
// project imports
import { Instrument, InstrumentProps } from '../Instruments';

const C1 = 'xylophoneSounds/c.wav';
const D1 = 'xylophoneSounds/d1.wav';
const E1 = 'xylophoneSounds/e1.wav';
const F = 'xylophoneSounds/f.wav';
const G = 'xylophoneSounds/g.wav';
const A = 'xylophoneSounds/a.wav';
const B = 'xylophoneSounds/b.wav';
const C2 = 'xylophoneSounds/c2.wav';



const player = [C1, D1, E1, F, G, A, B, C2];

interface XylophoneProps {
    note: string; // c1, d, e, f, g, a, b, c2, d2, e2
    synth?: Tone.Synth;
    index: number;
}

export function XylophoneKey({
    note,
    synth,
    index
}: XylophoneProps): JSX.Element {
    return (
    <div>
    </div>
);
}

function Xylophone( {synth, setSynth }: InstrumentProps): JSX.Element {
    const keys = List([
        { note: 'C', idx: 0 },
        { note: 'D1', idx: 1 },
        { note: 'E1', idx: 2 },
        { note: 'F', idx: 3 },
        { note: 'G', idx: 4 },
        { note: 'A', idx: 5 },
        { note: 'B', idx: 6 },
        { note: 'C2', idx: 7 },
      ]);
    return(
        <div className="pv4" 
        style={{
            alignItems: 'center',
            display: 'flex'
        }}>
        <div className='soundbox'
                style={{
                    position: 'relative',
                    display: 'flex',
                    width: '650px',
                    height: '112px',
                    backgroundColor: '#574632',
                    transform: 'translateY(50%)',
                    borderRadius: '5px',
                    boxShadow: '8px 8px 8px -4px black'
                }}>
        {keys.map((notes) => {
            console.log(notes);
            return(
            <div 
            style={{
                display: 'flex',
                alignItems: 'center',
            }}>  
            <button 
            style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                height: ( 235 - (15 * notes.idx )) + 'px',
                border: 'darkred',
                padding: '22px',
                backgroundColor: 'darkRed',
                borderRadius: '5px',
                marginRight: '25px',
                transform: 'translateX(35%)',
                boxShadow: '2px 3px 3px red', 
                
            }} 
           onClick={()=>{ const tonePlayer = new Tone.Player(player[notes.idx]).toDestination();
                            Tone.loaded().then(() => {tonePlayer.start();});
                    }}>
            <div className='screws' 
                style={{
                   backgroundColor: 'white',
                   width: '10px',
                   height: '10px' ,
                   borderRadius: '50%',
                   transform: 'translateY(565%)',
                   WebkitBoxReflect: 'above 90px'
            }}>
            </div>
            </button>
            </div>
            )})}
        </div>
     </div>
    )
}

export const XylophoneInstrument = new Instrument('Xylophone', Xylophone);

