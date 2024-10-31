import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DashboardDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
