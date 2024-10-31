import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AiAgentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AIType" source="aiType" />
        <div />
        <TextInput label="Role" source="role" />
      </SimpleForm>
    </Edit>
  );
};
