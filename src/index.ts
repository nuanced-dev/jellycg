// Core analysis functionality
export { analyzeFiles } from "./analysis/analyzer";
export { default as Solver } from "./analysis/solver";
export { FragmentState } from "./analysis/fragmentstate";
export { GlobalState } from "./analysis/globalstate";

// Options management
export {
    options,
    setOptions,
    resolveBaseDir,
    setDefaultTrackedModules,
    setPatternProperties
} from "./options";

// Essential types
export { ConstraintVar, ObjectPropertyVar } from "./analysis/constraintvars";
export { AllocationSiteToken, Token, FunctionToken, NativeObjectToken, ObjectToken } from "./analysis/tokens";
export { AccessPath } from "./analysis/accesspaths";
export { FunctionInfo, ModuleInfo } from "./analysis/infos";
export {
    FilePath,
    Location,
    SimpleLocation,
    locationToString,
    locationToStringWithFile,
    locationToStringWithFileAndEnd,
    locationContains,
    locationIn,
    longestCommonPrefix
} from "./misc/util";

// Result processing
export { AnalysisStateReporter } from "./output/analysisstatereporter";
export { compareCallGraphs } from "./output/compare";
export { TokenListener } from "./analysis/listeners";
export { exportCallGraphHtml, exportDataFlowGraphHtml } from "./output/visualizer";

// File utilities
export {
    expand,
    isShebang,
    isLocalRequire,
    requireResolve,
    autoDetectBaseDir,
    codeFromLocation,
    writeStreamedStringify
} from "./misc/files";
