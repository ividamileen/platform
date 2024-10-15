import { resolveRecordAuditLog } from '../helpers';
import type { SubscriptionCanceledAuditLogResolvers } from './../../../__generated__/types.next';

/*
 * Note: This object type is generated because "SubscriptionCanceledAuditLogMapper" is declared. This is to ensure runtime safety.
 *
 * When a mapper is used, it is possible to hit runtime errors in some scenarios:
 * - given a field name, the schema type's field type does not match mapper's field type
 * - or a schema type's field does not exist in the mapper's fields
 *
 * If you want to skip this file generation, remove the mapper or update the pattern in the `resolverGeneration.object` config.
 */
export const SubscriptionCanceledAuditLog: SubscriptionCanceledAuditLogResolvers = {
  __isTypeOf: e => e.event_action === 'SUBSCRIPTION_CANCELED',
  eventTime: e => new Date(e.event_time).toISOString(),
  newPlan: e => e.metadata.subscriptionCanceledAuditLogSchema.newPlan,
  previousPlan: e => e.metadata.subscriptionCanceledAuditLogSchema.previousPlan,
  record: (e, _, { injector }) => resolveRecordAuditLog(e, injector),
};