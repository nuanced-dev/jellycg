// Core analysis functionality
export { analyzeFiles } from "./analysis/analyzer";
export { default as Solver } from "./analysis/solver";
export { FragmentState } from "./analysis/fragmentstate";

// Options management
export { options } from "./options";

export { NativeObjectToken } from "./analysis/tokens";
export { FunctionInfo, ModuleInfo, PackageInfo } from "./analysis/infos";

// File utilities
export { expand } from "./misc/files";
