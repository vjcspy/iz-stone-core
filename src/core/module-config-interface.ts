export interface ModuleConfig {
  name: string;
  boot: () => void;
  services: any[];
}
