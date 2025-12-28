// DOMMatrix polyfill for Node.js/SSR environments
// This is a minimal implementation to prevent errors during SSR

// Make sure it's available globally before any module evaluation
if (typeof global !== 'undefined' && typeof global.DOMMatrix === 'undefined') {
  global.DOMMatrix = class DOMMatrix {
    constructor(init) {
      if (typeof init === 'string') {
        // Parse matrix string (simplified)
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.e = 0;
        this.f = 0;
      } else if (init) {
        this.a = init.a ?? 1;
        this.b = init.b ?? 0;
        this.c = init.c ?? 0;
        this.d = init.d ?? 1;
        this.e = init.e ?? 0;
        this.f = init.f ?? 0;
      } else {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.e = 0;
        this.f = 0;
      }
    }

    multiply(other) {
      return new DOMMatrix({
        a: this.a * other.a + this.c * other.b,
        b: this.b * other.a + this.d * other.b,
        c: this.a * other.c + this.c * other.d,
        d: this.b * other.c + this.d * other.d,
        e: this.a * other.e + this.c * other.f + this.e,
        f: this.b * other.e + this.d * other.f + this.f,
      });
    }

    translate(x, y) {
      return this.multiply(new DOMMatrix({ a: 1, b: 0, c: 0, d: 1, e: x, f: y }));
    }

    scale(x, y) {
      return this.multiply(new DOMMatrix({ a: x, b: 0, c: 0, d: y || x, e: 0, f: 0 }));
    }

    rotate(angle) {
      const rad = (angle * Math.PI) / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      return this.multiply(new DOMMatrix({ a: cos, b: sin, c: -sin, d: cos, e: 0, f: 0 }));
    }

    toString() {
      return `matrix(${this.a}, ${this.b}, ${this.c}, ${this.d}, ${this.e}, ${this.f})`;
    }
  };
}

// Export for module system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DOMMatrix: global.DOMMatrix };
}

// Also make it available as a side effect
if (typeof global !== 'undefined') {
  global.DOMMatrix = global.DOMMatrix || class DOMMatrix {
    constructor(init) {
      if (typeof init === 'string') {
        this.a = 1; this.b = 0; this.c = 0; this.d = 1; this.e = 0; this.f = 0;
      } else if (init) {
        this.a = init.a ?? 1; this.b = init.b ?? 0; this.c = init.c ?? 0;
        this.d = init.d ?? 1; this.e = init.e ?? 0; this.f = init.f ?? 0;
      } else {
        this.a = 1; this.b = 0; this.c = 0; this.d = 1; this.e = 0; this.f = 0;
      }
    }
    multiply(other) {
      return new global.DOMMatrix({
        a: this.a * other.a + this.c * other.b,
        b: this.b * other.a + this.d * other.b,
        c: this.a * other.c + this.c * other.d,
        d: this.b * other.c + this.d * other.d,
        e: this.a * other.e + this.c * other.f + this.e,
        f: this.b * other.e + this.d * other.f + this.f,
      });
    }
    translate(x, y) {
      return this.multiply(new global.DOMMatrix({ a: 1, b: 0, c: 0, d: 1, e: x, f: y }));
    }
    scale(x, y) {
      return this.multiply(new global.DOMMatrix({ a: x, b: 0, c: 0, d: y || x, e: 0, f: 0 }));
    }
    rotate(angle) {
      const rad = (angle * Math.PI) / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      return this.multiply(new global.DOMMatrix({ a: cos, b: sin, c: -sin, d: cos, e: 0, f: 0 }));
    }
    toString() {
      return `matrix(${this.a}, ${this.b}, ${this.c}, ${this.d}, ${this.e}, ${this.f})`;
    }
  };
}

