import {Dimension} from "!src/dimension";
import {linearConversion} from "!src/conversions/linear-conversion";

describe("Dimension", () => {
  const length = Dimension(linearConversion, {
    Mm: [1E6],
    kM: [1E3],
    hm: [1E2],
    dam: [1E1],
    m: [1],
    dm: [1E-1],
    cm: [1E-2],
    mm: [1E-3],
    µm: [1E-6],
    nm: [1e-9],
    pm: [1e-12],
    tw: [(127 / 7200) / 1000],
    pt: [(127 / 360) / 1000],
    pc: [(127 / 30) / 1000],
    in: [(127 / 5) / 1000],
    ft: [0.3048],
    yd: [0.9144],
    mi: [1609.34],
    smi: [10000],
    ly: [9.461e+15],
    NM: [1852],
    ftm: [1.8288],
    fur: [201.168],
    ua: [1.496e+11],
    pc: [3.086e+16],
  });
});