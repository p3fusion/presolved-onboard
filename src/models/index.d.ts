import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type TenantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tenant {
  readonly id: string;
  readonly adminname: string;
  readonly description?: string | null;
  readonly email: string;
  readonly mobile: string;
  readonly company: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tenant, TenantMetaData>);
  static copyOf(source: Tenant, mutator: (draft: MutableModel<Tenant, TenantMetaData>) => MutableModel<Tenant, TenantMetaData> | void): Tenant;
}