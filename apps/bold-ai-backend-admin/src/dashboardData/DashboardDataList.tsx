import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DashboardDataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Dashboard DataItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField
          label="CampaignPerformanceData"
          source="campaignPerformanceData"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="GeneratedInsights" source="generatedInsights" />
        <TextField label="ID" source="id" />
        <TextField
          label="OptimizationRecommendations"
          source="optimizationRecommendations"
        />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
