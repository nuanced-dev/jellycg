// Core analysis functionality
export { analyzeFiles } from "./analysis/analyzer";
export { default as Solver } from "./analysis/solver";
export { FragmentState } from "./analysis/fragmentstate";
export { GlobalState } from "./analysis/globalstate";
export { getAPIUsage } from "./patternmatching/apiusage";
export { findReachingFunctions } from "./patternmatching/apiexported";

// Options management
export {
    options,
    setOptions,
    resolveBaseDir,
    setDefaultTrackedModules,
    setPatternProperties
} from "./options";

// Essential types
export { NodeVar, ConstraintVar, ObjectPropertyVar, isObjectPropertyVarObj } from "./analysis/constraintvars";
export { AccessPathToken, PackageObjectToken, AllocationSiteToken, Token, FunctionToken, NativeObjectToken, ObjectToken } from "./analysis/tokens";
export { PropertyAccessPath, AccessPath, ModuleAccessPath, UnknownAccessPath, IgnoredAccessPath, ComponentAccessPath, CallResultAccessPath } from "./analysis/accesspaths";
export { FunctionInfo, ModuleInfo, PackageInfo } from "./analysis/infos";
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
