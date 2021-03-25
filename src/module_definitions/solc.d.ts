declare module "solc" {
  type CompiledContract = {
    interface: string;
    metadata: string;
    assembly: {
      '.code': Object[],
      '.data': Object,
    },
    bytecode: string;
  };

  type CompiledContracts = {
    contracts: Record<string, CompiledContract>;
  };

  //type Compi = (source: string, n: number) => CompiledContracts;
  const compile: (source: string, n: number) => CompiledContracts

  export { compile };
}