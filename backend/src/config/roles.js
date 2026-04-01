const roles = ['admin', 'manager', 'employee', 'superadmin'];

const roleRights = new Map();

roleRights.set('employee', [
  'read-own-profile',
  'update-own-profile',
]);

roleRights.set('manager', [
  'read-own-profile',
  'update-own-profile',
  'read-employees',
  'read-orders',
  'update-orders',
]);

roleRights.set('admin', [
  'read-own-profile',
  'update-own-profile',
  'create-employees',
  'read-employees',
  'update-employees',
  'delete-employees',
  'read-orders',
  'update-orders',
  'delete-orders',
]);

roleRights.set('superadmin', [
  'read-own-profile',
  'update-own-profile',
  'create-employees',
  'read-employees',
  'update-employees',
  'delete-employees',
  'read-orders',
  'update-orders',
  'delete-orders',
  'manage-settings',
  'manage-roles',
]);

module.exports = {
  roles,
  roleRights,
};
