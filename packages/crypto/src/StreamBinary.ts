/* eslint-disable @typescript-eslint/no-explicit-any */
class StreamBinary {
  private readonly bases: any;

  constructor(sequence: Buffer, bits: number = sequence instanceof Buffer ? 8 : 1) {
    const n = sequence.length;

    let binary: any = '';
    let b: any;
    let i: any;

    for (i = 0; i < n; i++) {
      b = StreamBinary.get(sequence, i).toString(2);
      while (b.length < bits) b = `0${b}`;
      binary = String(binary) + String(b);
    }

    binary = binary.split('').map((bin: string) => parseInt(bin, 2));

    this.bases = { '2': binary };
  }

  private static get(sequence: Buffer, offset: number) {
    return sequence.readUInt8 ? sequence.readUInt8(offset) : sequence[offset];
  }

  private static evaluate(chunk: number[], base: number) {
    let sum = 0;
    let i = chunk.length;

    while (i--) sum += chunk[i] * Math.pow(base, chunk.length - (i + 1));

    return sum;
  }

  public generate(radix: number, base = 2, inner = false): number | any {
    const k: number = Math.ceil(Math.log(radix) / Math.log(base));
    const powed: number = Math.pow(base, k) - radix;

    let value: any = radix;
    let chunk: number[];

    while (value >= radix) {
      chunk = this.shift(base, k);
      if (!chunk) return inner ? radix : null;

      value = StreamBinary.evaluate(chunk, base);

      if (value >= radix) {
        if (powed === 1) continue;
        this.push(powed, value - radix);
        value = this.generate(radix, powed, true);
      }
    }

    return value;
  }

  private push(base: number, value: number) {
    this.bases[base] = this.bases[base] || [];
    this.bases[base].push(value);
  }

  private shift(base: number, k: number) {
    const list = this.bases[base];
    if (!list || list.length < k) return null;

    return list.splice(0, k);
  }
}

export default StreamBinary;
