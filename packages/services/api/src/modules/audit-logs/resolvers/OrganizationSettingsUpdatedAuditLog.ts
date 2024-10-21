import { AuditLogManager } from '../providers/audit-logs-manager';
import type { OrganizationSettingsUpdatedAuditLogResolvers } from './../../../__generated__/types.next';

/*
 * Note: This object type is generated because "OrganizationSettingsUpdatedAuditLogMapper" is declared. This is to ensure runtime safety.
 *
 * When a mapper is used, it is possible to hit runtime errors in some scenarios:
 * - given a field name, the schema type's field type does not match mapper's field type
 * - or a schema type's field does not exist in the mapper's fields
 *
 * If you want to skip this file generation, remove the mapper or update the pattern in the `resolverGeneration.object` config.
 */
export const OrganizationSettingsUpdatedAuditLog: OrganizationSettingsUpdatedAuditLogResolvers = {
  __isTypeOf: e => e.event_action === 'ORGANIZATION_SETTINGS_UPDATED',
  eventTime: e => new Date(e.event_time).toISOString(),
  updatedFields: e => e.metadata.organizationSettingsUpdatedAuditLogSchema.updatedFields,
  record: (e, _, { injector }) => injector.get(AuditLogManager).resolveRecordAuditLog(e, injector),
};
