import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DashboardDataShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
