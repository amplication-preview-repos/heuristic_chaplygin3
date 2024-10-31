import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AiAgentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AIType" source="aiType" />
        <div />
        <TextInput label="Role" source="role" />
      </SimpleForm>
    </Create>
  );
};
