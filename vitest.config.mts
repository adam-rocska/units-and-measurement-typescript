import {fileURLToPath} from "node:url";
import {defineConfig} from "vitest/config";

const root = fileURLToPath(new URL("./", import.meta.url));

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^!(.*)$/,
        replacement: `${root}$1`,
      },
      {
        find: /^@adam-rocska\/units-and-measurement$/,
        replacement: fileURLToPath(
          new URL("./src/index.ts", import.meta.url)
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/operations",
        replacement: fileURLToPath(
          new URL("./src/operations/index.ts", import.meta.url)
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/length",
        replacement: fileURLToPath(
          new URL("./src/length/index.ts", import.meta.url)
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/volume",
        replacement: fileURLToPath(
          new URL("./src/volume/index.ts", import.meta.url)
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/angle",
        replacement: fileURLToPath(
          new URL("./src/angle/index.ts", import.meta.url)
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/area",
        replacement: fileURLToPath(
          new URL("./src/area/index.ts", import.meta.url)
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/mass",
        replacement: fileURLToPath(
          new URL("./src/mass/index.ts", import.meta.url)
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/pressure",
        replacement: fileURLToPath(
          new URL("./src/pressure/index.ts", import.meta.url)
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/acceleration",
        replacement: fileURLToPath(
          new URL("./src/acceleration/index.ts", import.meta.url)
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/duration",
        replacement: fileURLToPath(
          new URL("./src/duration/index.ts", import.meta.url)
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/frequency",
        replacement: fileURLToPath(
          new URL("./src/frequency/index.ts", import.meta.url)
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/speed",
        replacement: fileURLToPath(
          new URL("./src/speed/index.ts", import.meta.url)
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/energy",
        replacement: fileURLToPath(
          new URL("./src/energy/index.ts", import.meta.url)
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/power",
        replacement: fileURLToPath(
          new URL("./src/power/index.ts", import.meta.url)
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/temperature",
        replacement: fileURLToPath(
          new URL("./src/temperature/index.ts", import.meta.url)
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/illuminance",
        replacement: fileURLToPath(
          new URL("./src/illuminance/index.ts", import.meta.url)
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/electric-charge",
        replacement: fileURLToPath(
          new URL(
            "./src/electric-charge/index.ts",
            import.meta.url
          )
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/electric-current",
        replacement: fileURLToPath(
          new URL(
            "./src/electric-current/index.ts",
            import.meta.url
          )
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/electric-potential-difference",
        replacement: fileURLToPath(
          new URL(
            "./src/electric-potential-difference/index.ts",
            import.meta.url
          )
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/electric-resistance",
        replacement: fileURLToPath(
          new URL(
            "./src/electric-resistance/index.ts",
            import.meta.url
          )
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/concentration-mass",
        replacement: fileURLToPath(
          new URL(
            "./src/concentration-mass/index.ts",
            import.meta.url
          )
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/dispersion",
        replacement: fileURLToPath(
          new URL("./src/dispersion/index.ts", import.meta.url)
        ),
      },
      {
        find: "@adam-rocska/units-and-measurement/information",
        replacement: fileURLToPath(
          new URL("./src/information/index.ts", import.meta.url)
        ),
      },
    ],
  },
  test: {
    globals: true,
    environment: "node",
    include: ["test/**/*.test.ts"],
    coverage: {
      include: ["src/**/*.ts"],
      provider: "v8",
    },
  },
});
