import { ContainerModule } from "inversify";
import { GLSPLaunchOptions } from "./glsp-server-launcher";
export declare class EcoreGlspLaunchOptions implements GLSPLaunchOptions {
    isRunning: boolean;
    hostname: string;
    jarPath: string;
    serverPort: number;
}
declare const _default: ContainerModule;
export default _default;
//# sourceMappingURL=backend-extension.d.ts.map