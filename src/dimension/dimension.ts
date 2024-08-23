import {type Measurement} from "./measurement-type";

export type Dimension<Unit extends string> = {[unit in Unit]: Measurement<Unit, unit>};