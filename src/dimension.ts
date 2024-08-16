export type Dimension<Unit extends string> = {
  [unit in Unit]: number;
};
