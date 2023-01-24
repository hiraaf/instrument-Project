// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import {XylophoneInstrument } from './instruments/hiraaf-1'
import {FluteInstrument } from './instruments/sfong30'
import { WaveformVisualizer } from './visualizers/Waveform';
import { FlowerWaveformVisualizer } from './visualizers/hiraaf-1';
import { RingVisualizer } from './visualizers/sfong30';
import { PjaimeVisualizer } from './visualizers/Pjaime21';
import { DrumsInstrument } from './instruments/Pjaime21';
import { SawInstrument2 } from './instruments/BeeSeeWhy_Saw';
import { BeeSeeWhyVisualizer } from './visualizers/BeeSeeWhy';


/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */
export type AppState = Map<string, any>;           // similar to { [id: string]: any }

/**
 * Start with the default piano instrument.
 * Add your instruments to this list.
 */
const instruments = List([PianoInstrument, XylophoneInstrument, FluteInstrument,DrumsInstrument, SawInstrument2]);       // similar to Instrument[]

/**
 * Start with the default waveform visualizer.
 * Add your visualizers to this list.
 */
const visualizers = List([WaveformVisualizer, FlowerWaveformVisualizer, RingVisualizer,PjaimeVisualizer, BeeSeeWhyVisualizer]);    // similar to Visualizer[]


/**
 * The default application state contains a list of instruments and a list of visualizers.
 *
 * 'instrument': List<Instrument>
 * 'visualizer': List<Visualizer>
 */
export const defaultState: AppState = Map<string, any>({
  'instruments': instruments,
  'visualizers': visualizers,
});