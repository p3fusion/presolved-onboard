// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tenant } = initSchema(schema);

export {
  Tenant
};