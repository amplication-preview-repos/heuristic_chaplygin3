import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DashboardDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput
          label="GeneratedInsights"
          multiline
          source="generatedInsights"
        />
        <TextInput
          label="OptimizationRecommendations"
          multiline
          source="optimizationRecommendations"
        />
      </SimpleForm>
    </Create>
  );
};
