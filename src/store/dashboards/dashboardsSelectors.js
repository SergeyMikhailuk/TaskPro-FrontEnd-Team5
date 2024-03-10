export const selectAllDashboards = state => state.dashboards.dashboards;
export const selectColumns = state => state.dashboards.currentDashboard.columns;
export const selectColumnsLength = state => state.dashboards.columnsLength;
export const selectCurrentDashboard = state =>
  state.dashboards.currentDashboard.dashboard;
